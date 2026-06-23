import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently most visible in the viewport so the
 * navbar can highlight the matching link as the user scrolls.
 * @param {string[]} sectionIds - element ids without the leading '#'
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
