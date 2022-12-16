import { memo } from 'react'

function FooterContent() {
  return <footer className="border-t border-gray-300 py-4 text-center">footer</footer>
}

export const Footer = memo(FooterContent)
