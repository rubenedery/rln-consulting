"use client"

import { useState, useCallback, useRef } from "react"
import { Send, Loader2, CheckCircle, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { track_contact_form, track_meta_lead } from "@/components/analytics"

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

interface TouchedFields {
  name: boolean
  email: boolean
  message: boolean
}

const MIN_MESSAGE_LENGTH = 10
const MAX_MESSAGE_LENGTH = 2000

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<TouchedFields>({
    name: false,
    email: false,
    message: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Anti-spam: honeypot + timer
  const [honeypot, setHoneypot] = useState("")
  const loadedAtRef = useRef(Date.now())

  // Validation helpers
  const isNameValid = (name: string) => name.trim().length >= 2
  const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const isMessageValid = (message: string) =>
    message.trim().length >= MIN_MESSAGE_LENGTH && message.length <= MAX_MESSAGE_LENGTH

  // Get field validation status
  const getFieldStatus = useCallback(
    (field: keyof TouchedFields): "idle" | "valid" | "error" => {
      if (!touched[field]) return "idle"

      switch (field) {
        case "name":
          return isNameValid(formData.name) ? "valid" : "error"
        case "email":
          return isEmailValid(formData.email) ? "valid" : "error"
        case "message":
          return isMessageValid(formData.message) ? "valid" : "error"
        default:
          return "idle"
      }
    },
    [formData, touched]
  )

  // Get input className based on validation status
  const getInputClassName = (field: keyof TouchedFields) => {
    const status = getFieldStatus(field)
    return cn(
      "transition-colors",
      status === "error" && "border-destructive focus-visible:ring-destructive",
      status === "valid" && "border-success focus-visible:ring-success"
    )
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis"
    } else if (!isNameValid(formData.name)) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères"
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!isEmailValid(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse email valide"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis"
    } else if (formData.message.trim().length < MIN_MESSAGE_LENGTH) {
      newErrors.message = `Le message doit contenir au moins ${MIN_MESSAGE_LENGTH} caractères`
    } else if (formData.message.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = `Le message ne peut pas dépasser ${MAX_MESSAGE_LENGTH} caractères`
    }

    setErrors(newErrors)
    // Mark all required fields as touched
    setTouched({ name: true, email: true, message: true })
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast({
        title: "Formulaire incomplet",
        description: "Veuillez corriger les erreurs avant de soumettre.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _gotcha: honeypot,
          _loadedAt: loadedAtRef.current,
        }),
      })

      if (response.ok) {
        track_contact_form()
        track_meta_lead()
        toast({
          title: "Message envoyé !",
          description: "Nous vous répondrons sous 24 heures.",
          variant: "success",
        })
        setIsSuccess(true)
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        })
        setTouched({ name: false, email: false, message: false })
      } else {
        throw new Error("Erreur lors de l'envoi")
      }
    } catch {
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleBlur = (field: keyof TouchedFields) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-success" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Message envoyé !
        </h3>
        <p className="text-muted-foreground mb-6">
          Merci pour votre message. Nous vous répondrons sous 24 heures.
        </p>
        <Button variant="outline" onClick={() => setIsSuccess(false)}>
          Envoyer un autre message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot - invisible to users, bots fill this */}
      <div className="absolute opacity-0 top-0 left-0 h-0 w-0 -z-10" aria-hidden="true">
        <label htmlFor="_gotcha">Ne pas remplir</label>
        <input
          id="_gotcha"
          name="_gotcha"
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center gap-2">
            Nom complet <span className="text-destructive">*</span>
            {getFieldStatus("name") === "valid" && (
              <Check className="h-3 w-3 text-success" />
            )}
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Jean Dupont"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => handleBlur("name")}
            className={getInputClassName("name")}
            aria-invalid={getFieldStatus("name") === "error"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-destructive" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            Email <span className="text-destructive">*</span>
            {getFieldStatus("email") === "valid" && (
              <Check className="h-3 w-3 text-success" />
            )}
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jean@exemple.com"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => handleBlur("email")}
            className={getInputClassName("email")}
            aria-invalid={getFieldStatus("email") === "error"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-destructive" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company" className="flex items-center gap-2">
            Entreprise
            <span className="text-xs text-muted-foreground font-normal">(Optionnel)</span>
          </Label>
          <Input
            id="company"
            name="company"
            type="text"
            placeholder="Nom de votre entreprise"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="flex items-center gap-2">
            Téléphone
            <span className="text-xs text-muted-foreground font-normal">(Optionnel)</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+33 6 00 00 00 00"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Service */}
      <div className="space-y-2">
        <Label htmlFor="service" className="flex items-center gap-2">
          Service souhaité
          <span className="text-xs text-muted-foreground font-normal">(Optionnel)</span>
        </Label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <option value="">Sélectionnez un service</option>
          <option value="developpement">Développement Web</option>
          <option value="ads">Gestion Publicités</option>
          <option value="both">Les deux</option>
          <option value="other">Autre</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="flex items-center gap-2">
          Message <span className="text-destructive">*</span>
          {getFieldStatus("message") === "valid" && (
            <Check className="h-3 w-3 text-success" />
          )}
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Décrivez votre projet, vos objectifs et vos délais..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur("message")}
          className={getInputClassName("message")}
          aria-invalid={getFieldStatus("message") === "error"}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
        />
        <div className="flex items-center justify-between">
          {errors.message ? (
            <p id="message-error" className="text-sm text-destructive" role="alert">
              {errors.message}
            </p>
          ) : (
            <p id="message-hint" className="text-xs text-muted-foreground">
              Minimum {MIN_MESSAGE_LENGTH} caractères
            </p>
          )}
          <span
            className={cn(
              "text-xs",
              formData.message.length > MAX_MESSAGE_LENGTH
                ? "text-destructive"
                : "text-muted-foreground"
            )}
          >
            {formData.message.length}/{MAX_MESSAGE_LENGTH}
          </span>
        </div>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="w-full bg-accent hover:bg-accent/90 disabled:opacity-70"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Envoyer le message
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        En soumettant ce formulaire, vous acceptez notre{" "}
        <a href="/confidentialite" className="underline hover:text-primary">
          politique de confidentialité
        </a>.
      </p>
    </form>
  )
}
