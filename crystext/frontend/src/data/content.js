export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#demo', label: 'Demo' },
  { href: '#contact', label: 'Contact' },
]

export const HERO = {
  eyebrow: 'AI-Powered Crystal Structure Generation',
  heading: ['From Text to', 'Crystal Structure'],
  subheading:
    'Generate crystal structures, CIF files, and material properties using Generative AI.',
  primaryCta: 'Generate Crystal',
  secondaryCta: 'Learn More',
}

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Describe Material',
    description: 'Enter a natural language description of the material you want to generate.',
  },
  {
    step: '02',
    title: 'AI Understanding',
    description: 'GPT-2 analyzes the prompt and understands material characteristics.',
  },
  {
    step: '03',
    title: 'Generate CIF Structure',
    description: 'Generate a valid CIF crystal structure with lattice and atomic information.',
  },
  {
    step: '04',
    title: 'Visualize Crystal',
    description: 'Render the generated crystal structure in an interactive 3D viewer.',
  },
  {
    step: '05',
    title: 'Predict Properties',
    description: 'Estimate band gap, density, conductivity, formation energy, and thermal stability.',
  },
  {
    step: '06',
    title: 'Download Results',
    description: 'Download the generated CIF file and explore it in VESTA or Materials Studio.',
  },
]

export const ABOUT = {
  eyebrow: 'About CrysText',
  heading: 'A modern materials science platform for AI crystal generation',
  paragraphs: [
    'CrysText turns natural language material descriptions into CIF-ready crystal structure outputs for research, education, and rapid materials exploration.',
    'The workflow combines language understanding, structure generation, interactive visualization, and property prediction in a single AI-powered interface.',
  ],
}

export const FEATURES = [
  {
    id: 'text-to-cif',
    icon: 'FiFileText',
    title: 'Text-to-CIF Generation',
    description: 'Describe a target material and generate structured CIF content with lattice and atomic details.',
  },
  {
    id: 'ai-understanding',
    icon: 'FiCpu',
    title: 'AI Understanding',
    description: 'Interpret chemistry, application context, and structural hints from natural language prompts.',
  },
  {
    id: 'visualization',
    icon: 'FiBox',
    title: 'Crystal Visualization',
    description: 'Inspect generated crystal structures with an interactive 3D visual experience.',
  },
  {
    id: 'materials-data',
    icon: 'FiDatabase',
    title: 'Materials-Informed Outputs',
    description: 'Ground generation patterns in crystal structure conventions and materials datasets.',
  },
  {
    id: 'property-prediction',
    icon: 'FiZap',
    title: 'Property Prediction',
    description: 'Estimate density, band gap, formation energy, stability, and conductivity metrics.',
  },
  {
    id: 'research-workflow',
    icon: 'FiUsers',
    title: 'Research-Ready Workflow',
    description: 'Download generated CIF files and continue analysis in standard materials science tools.',
  },
]

export const STATISTICS = [
  { value: 6, suffix: '', label: 'Workflow Steps' },
  { value: 8, suffix: '', label: 'Property Fields' },
  { value: 3, suffix: 'D', label: 'Visualization' },
  { value: 1, suffix: ' CIF', label: 'Downloadable Result' },
]

export const CONTACT = {
  eyebrow: 'Connect',
  heading: 'Build crystal structures from ideas',
  description:
    'Explore CrysText as a premium AI workflow for generating, visualizing, predicting, and downloading crystal structure results.',
  socials: [
    { label: 'GitHub', icon: 'FiGithub', href: 'https://github.com' },
    { label: 'LinkedIn', icon: 'FiLinkedin', href: 'https://linkedin.com' },
    { label: 'Email', icon: 'FiMail', href: 'mailto:hello@crystext.ai' },
  ],
}
