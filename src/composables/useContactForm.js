import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

export function useContactForm() {
  const isSubmitting = ref(false)
  const submitStatus = ref(null) // 'success' | 'error' | null

  const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const errors = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  function validate() {
    let valid = true
    errors.name = ''
    errors.email = ''
    errors.subject = ''
    errors.message = ''

    if (!form.name.trim() || form.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long'
      valid = false
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = 'Please enter a valid email address'
      valid = false
    }
    if (!form.subject.trim() || form.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters long'
      valid = false
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long'
      valid = false
    }
    return valid
  }

  async function submit() {
    if (!validate()) return

    isSubmitting.value = true
    submitStatus.value = null

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Fallback to simulation if environment variables are not configured
      if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id') {
        console.warn('EmailJS environment variables not configured. Running in simulation mode.')
        // Simulate API call for demo
        await new Promise((resolve) => setTimeout(resolve, 1500))
      } else {
        // Send real email via EmailJS
        await emailjs.send(
          serviceId,
          templateId,
          {
            // Standard template keys
            from_name: form.name,
            from_email: form.email,
            subject: form.subject,
            message: form.message,
            reply_to: form.email,

            // Keys matching your EmailJS template screenshot
            name: form.name,
            email: form.email,
            title: form.subject,
          },
          publicKey
        )
      }

      submitStatus.value = 'success'
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
    } catch (err) {
      console.error('Email send error:', err)
      submitStatus.value = 'error'
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    form,
    errors,
    isSubmitting,
    submitStatus,
    submit,
    validate,
  }
}
