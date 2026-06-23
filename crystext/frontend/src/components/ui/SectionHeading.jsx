import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, heading, title, description, subtitle, align = 'center', tone = 'light' }) {
  const headingText = heading ?? title
  const bodyText = description ?? subtitle
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'
  const headingColor = tone === 'dark' ? 'text-white' : 'text-[#1F2937]'
  const bodyColor = tone === 'dark' ? 'text-[#F7E7D5]' : 'text-[#5F5147]'

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mx-auto flex max-w-2xl flex-col gap-3 ${alignment}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {headingText && <h2 className={`font-display text-3xl font-bold md:text-4xl ${headingColor}`}>{headingText}</h2>}
      {bodyText && <p className={`text-base leading-relaxed ${bodyColor}`}>{bodyText}</p>}
    </motion.div>
  )
}
