import { motion } from 'framer-motion'
import { FiBox, FiCpu, FiDownload, FiEye, FiFileText, FiZap } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import { HOW_IT_WORKS } from '../../data/content'

const ICONS = [FiFileText, FiCpu, FiBox, FiEye, FiZap, FiDownload]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden bg-[#1F2937] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_10%,rgba(255,122,0,0.22),transparent_30rem),radial-gradient(circle_at_86%_20%,rgba(139,92,246,0.22),transparent_28rem)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Workflow"
          heading="How CrysText Works"
          description="From text prompts to scientific crystal generation."
          tone="dark"
        />

        <div className="relative mt-20">
          <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-[#FF7A00] via-[#FFD6A5] to-[#8B5CF6] lg:left-0 lg:right-0 lg:top-[3.65rem] lg:mx-auto lg:h-px lg:w-[84%]" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-6 lg:gap-5">
            {HOW_IT_WORKS.map((item, index) => {
              const Icon = ICONS[index] || FiBox
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex gap-5 pl-20 lg:flex-col lg:items-center lg:pl-0 lg:text-center"
                >
                  <div className="absolute left-0 top-0 z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#FFD6A5]/70 bg-[#FFFBF5] text-[#1F2937] shadow-[0_18px_46px_rgba(0,0,0,0.24)] lg:relative">
                    <span className="font-mono text-sm font-bold text-[#FF7A00]">{item.step}</span>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm lg:min-h-[13rem]">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#8B5CF6] text-xl text-white lg:mx-auto">
                      <Icon />
                    </div>
                    <h3 className="font-display text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#F7E7D5]">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
