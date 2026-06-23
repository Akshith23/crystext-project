import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import { CONTACT } from '../../data/content'

const ICONS = { FiGithub, FiLinkedin, FiMail }

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative bg-[#FFF7ED]">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading eyebrow={CONTACT.eyebrow} heading={CONTACT.heading} description={CONTACT.description} />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {CONTACT.socials.map(({ label, icon, href }) => {
            const Icon = ICONS[icon]
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Icon />
                {label}
                <FiArrowUpRight className="text-xs opacity-60" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
