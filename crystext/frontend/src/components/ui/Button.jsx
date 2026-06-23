import { motion } from 'framer-motion'

/**
 * Shared CTA button. `variant` selects the primary (filled) or secondary
 * (outlined glass) treatment defined in index.css.
 */
export default function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
  icon: Icon
}) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-secondary'

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${className}`}
    >
      {children}
      {Icon && <Icon className="text-base" />}
    </motion.button>
  )
}
