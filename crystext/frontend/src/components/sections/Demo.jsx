import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiLoader } from 'react-icons/fi'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import CrystalScene from '../three/CrystalScene'
import { generateCrystal } from '../../services/api'

const PROPERTY_FIELDS = [
  { keys: ['chemicalFormula', 'chemical_formula', 'formula'], label: 'Chemical Formula' },
  { keys: ['crystalSystem', 'crystal_system'], label: 'Crystal System' },
  { keys: ['density'], label: 'Density', unit: 'g/cm3' },
  { keys: ['bandGap', 'band_gap'], label: 'Band Gap', unit: 'eV' },
  { keys: ['formationEnergy', 'formation_energy'], label: 'Formation Energy', unit: 'eV/atom' },
  { keys: ['thermalStability', 'thermal_stability'], label: 'Thermal Stability' },
  { keys: ['electricalConductivity', 'electrical_conductivity'], label: 'Electrical Conductivity', unit: 'S/m' },
  { keys: ['thermalConductivity', 'thermal_conductivity'], label: 'Thermal Conductivity', unit: 'W/m K' },
]

const getPropertyValue = (properties, keys) => {
  if (!properties) return null
  return keys.map((key) => properties[key]).find((value) => value !== undefined && value !== null && value !== '')
}

export default function Demo() {
  const [prompt, setPrompt] = useState('')
  const [cifContent, setCifContent] = useState('')
  const [properties, setProperties] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Enter a material description before generating.')
      return
    }

    setIsGenerating(true)
    setError(null)
    setCifContent('')
    setProperties(null)

    try {
      const response = await generateCrystal(prompt)
      console.log(
  "API RESPONSE:",
  JSON.stringify(response, null, 2)
)

      if (response.success) {
  const data = response.data || response

  console.log("FULL DATA:", data)

  setCifContent(
    data.generated_cif ||
    data.cif_content ||
    data.cifContent ||
    "NO CIF RECEIVED"
  )

  setProperties(data.properties || null)
} else {
        setError(response.message || 'Generation failed. Check the API connection and try again.')
      }
    } catch (err) {
      console.error('Crystal generation failed:', err)
      setError('Generation failed. Check the API connection and try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (!cifContent) return

    const blob = new Blob([cifContent], { type: 'chemical/x-cif' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'generated_structure.cif'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <section id="demo" className="section-padding relative overflow-hidden bg-[#FFF7ED]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#1F2937]/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          title="Generate Crystal Structure from Text"
          subtitle="Enter a material description, generate CIF content, and review predicted material properties."
        />

        <div className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-3 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="flex h-full min-h-[34rem] flex-col gap-5 p-7">
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-[#4D7C59]">
                Material Description
              </h3>

              <textarea
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                placeholder="Generate a lithium iron phosphate crystal structure for battery applications"
                rows={8}
                className="w-full flex-1 resize-none rounded-2xl border border-[#E7D7C9] bg-white p-5 text-sm leading-relaxed text-[#1F2937] placeholder-[#9A8776] outline-none transition-colors duration-200 focus:border-[#FF7A00] focus:ring-4 focus:ring-[#FFD6A5]/50"
              />

              {error && <p className="text-sm text-rose-500">{error}</p>}

              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGenerate}
                disabled={isGenerating}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isGenerating ? (
                  <>
                    <FiLoader className="animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Crystal'
                )}
              </motion.button>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <GlassCard className="flex h-full min-h-[34rem] flex-col gap-4 p-7">
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-[#4D7C59]">
                Generated CIF Output
              </h3>

              <div className="flex-1 overflow-hidden rounded-2xl border border-[#E7D7C9] bg-[#1F2937] shadow-inner">
                {cifContent ? (
                  <pre className="h-full max-h-[390px] overflow-auto p-5 text-xs leading-relaxed text-[#FFD6A5]">
                    <code className="font-mono">{cifContent}</code>
                  </pre>
                ) : (
                  <div className="flex h-full min-h-[280px] items-center justify-center px-6 text-center text-sm font-medium text-[#F7E7D5]/70">
                    {isGenerating ? 'Generating your crystal structure...' : 'Generated CIF Content'}
                  </div>
                )}
              </div>

              <motion.button
                type="button"
                whileHover={{ scale: cifContent ? 1.02 : 1 }}
                whileTap={{ scale: cifContent ? 0.98 : 1 }}
                onClick={handleDownload}
                disabled={!cifContent}
                className="btn-secondary w-full disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FiDownload />
                Download CIF
              </motion.button>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <GlassCard className="flex h-full min-h-[34rem] flex-col gap-4 p-7">
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-[#4D7C59]">
                Material Properties
              </h3>

              <div className="flex flex-1 flex-col divide-y divide-[#E7D7C9]">
                {PROPERTY_FIELDS.map((field) => {
                  const value = getPropertyValue(properties, field.keys)
                  return (
                    <div key={field.label} className="flex items-center justify-between gap-3 py-3.5 first:pt-0">
                      <span className="text-sm font-medium text-[#6F6257]">{field.label}</span>
                      <span className="rounded-full bg-[#FFF7ED] px-3 py-1 text-right text-sm font-bold text-[#1F2937]">
                        {value ? `${value}${field.unit ? ` ${field.unit}` : ''}` : '-'}
                      </span>
                    </div>
                  )
                })}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <GlassCard className="mt-7 overflow-hidden p-0" hover={false}>
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center gap-3 p-7">
              <p className="eyebrow">Crystal Visualization</p>
              <h3 className="font-display text-2xl font-bold text-[#1F2937]">Rotating crystal lattice preview</h3>
              <p className="text-sm leading-relaxed text-[#5F5147]">
                Placeholder visualization for the generated structure. Advanced CIF parsing can be connected here later.
              </p>
            </div>
            <div className="h-[320px] border-t border-[#E7D7C9] bg-[#FFFBF5] lg:border-l lg:border-t-0">
              <CrystalScene className="h-full w-full" />
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
