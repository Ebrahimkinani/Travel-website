import ContactForm from '@/components/ContactForm'
import ContactMap from '@/components/ContactMap'

export default function Contact() {
  return (
    <div className="padding-container py-16 bg-white">
      <div className="max-container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <ContactForm />
          </div>
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  )
}
