import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { NAV_LINKS, CONTACT } from '../../data/content'

const ICONS = { FiGithub, FiLinkedin, FiMail }

function FooterLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-8 w-8">
      <path
        d="M24 5 40.5 14.5v19L24 43 7.5 33.5v-19L24 5Z"
        fill="#FFF7ED"
        stroke="#FF7A00"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M12.8 17.5 24 34l11.2-16.5M24 5v16" fill="none" stroke="#8B5CF6" strokeWidth="2.2" />
      <circle cx="24" cy="21" r="3" fill="#4D7C59" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  const handleNavClick = (event, href) => {
    event.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[#E7D7C9] bg-[#FFFBF5] px-6 py-12 md:px-12 lg:px-20">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 font-display text-base font-bold text-[#1F2937]">
          <FooterLogo />
          CrysText
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[#6F6257]">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="transition-colors hover:text-[#1F2937]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {CONTACT.socials.map(({ label, icon, href }) => {
            const Icon = ICONS[icon]
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7D7C9] bg-white text-[#6F6257] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF7A00] hover:text-[#FF7A00]"
              >
                <Icon className="text-base" />
              </a>
            )
          })}
        </div>
      </div>

      <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-[#E7D7C9] pt-6 font-mono text-xs text-[#8A7664] md:flex-row">
        <p>&copy; {year} CrysText. Built for materials science research and education.</p>
        <p>Generative AI for crystal structure generation</p>
      </div>
    </footer>
  )
}
