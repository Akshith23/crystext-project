import { motion } from 'framer-motion'

export default function GlassCard({
  children,
  className = '',
  as: Component = motion.div,
  delay = 0,
  hover = true,
  ...rest
}) {
  const hoverProps = hover ? { whileHover: { y: -4 } } : {}

  return (
    <Component
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-panel ${hover ? 'glass-panel-hover' : ''} ${className}`}
      {...hoverProps}
      {...rest}
    >
      {children}
    </Component>
  )
}
