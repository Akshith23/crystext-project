import { motion } from 'framer-motion'
import { FiArrowRight, FiChevronDown } from 'react-icons/fi'
import CrystalScene from '../three/CrystalScene'
import { HERO } from '../../data/content'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#FFF7ED]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(231,215,201,0.58) 1px, transparent 1px), linear-gradient(to bottom, rgba(231,215,201,0.58) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_22%,rgba(139,92,246,0.16),transparent_30rem),radial-gradient(circle_at_12%_18%,rgba(255,122,0,0.18),transparent_28rem),linear-gradient(180deg,rgba(255,247,237,0.35),#FFF7ED)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-28 md:px-12 lg:grid-cols-2 lg:gap-8 lg:px-20 lg:pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-7"
        >
          <motion.span
            variants={itemVariants}
            className="eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-[#E7D7C9] bg-[#FFFBF5]/90 px-4 py-1.5 shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#8B5CF6]" />
            {HERO.eyebrow}
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl font-bold leading-[1.08] text-[#1F2937] md:text-5xl lg:text-[3.65rem]"
          >
            {HERO.heading[0]} <span className="gradient-text">{HERO.heading[1]}</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-xl text-base leading-relaxed text-[#5F5147] md:text-lg">
            {HERO.subheading}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
            <button type="button" onClick={() => scrollTo('#demo')} className="btn-primary">
              {HERO.primaryCta}
              <FiArrowRight />
            </button>
            <button type="button" onClick={() => scrollTo('#how-it-works')} className="btn-secondary">
              {HERO.secondaryCta}
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs font-semibold text-[#7C6A5B]">
            <span>GPT-2 fine-tuned</span>
            <span className="h-1 w-1 rounded-full bg-[#FF7A00]" />
            <span>Materials Project data</span>
            <span className="h-1 w-1 rounded-full bg-[#4D7C59]" />
            <span>CIF-native</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative h-[360px] overflow-hidden rounded-[2rem] border border-[#E7D7C9] bg-[#FFFBF5] shadow-[0_30px_90px_rgba(109,71,33,0.18)] md:h-[460px] lg:h-[560px]"
        >
          <CrystalScene className="h-full w-full" />
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollTo('#about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-[#8A7664] transition-colors hover:text-[#1F2937]"
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <FiChevronDown />
      </motion.button>
    </section>
  )
}
