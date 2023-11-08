import { ButtonLinkVariantProps } from './components/button-link'
import IconGithub from './components/icons/github'
import IconInstagram from './components/icons/instagram'
import IconYoutube from './components/icons/youtube'

export interface Link {
  label?: string
  href: string
  bg: ButtonLinkVariantProps['bg']
  icon?: JSX.Element
}

export const mainLinks: Link[] = [
  {
    label: 'My Personal Website (rahmat.dev)',
    href: 'https://www.rahmat.dev',
    bg: 'slate',
  },
  {
    label: 'Rahmat Store (Source Code Aplikasi)',
    href: 'https://store.rahmat.dev',
    bg: 'blue',
  },
  {
    label: 'Kode Lebah (Online Course)',
    href: 'https://www.kodelebah.com',
    bg: 'orange',
  },
]

export const socialLinks: Link[] = [
  {
    icon: <IconYoutube className="h-5 w-5" />,
    href: 'https://www.youtube.com/@rahmatsulistio',
    bg: 'red',
  },
  {
    icon: <IconInstagram className="h-5 w-5" />,
    href: 'https://www.instagram.com/rahmatdev',
    bg: 'instagram',
  },
  {
    icon: <IconGithub className="h-5 w-5" />,
    href: 'https://github.com/rahmat-dev',
    bg: 'slate',
  },
]
