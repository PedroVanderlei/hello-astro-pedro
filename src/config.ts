import { getCollection, type CollectionEntry } from 'astro:content'

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'Notas de Rodapé',
  description: 'Um projeto',
  author: {
    name: 'Pedro H P Vanderlei',
    twitter: '@chris1tham',
    url: 'https://christham.net',
    email: 'pedrohpvanderlei@hotmail.com',
    summary: 'O unico autor por enquanto.'
  },
  org: {
    name: 'NOtas de Rodapé',
    twitter: '@hellothamcom',
    url: 'https://hellotham.com',
    email: 'notasderodapeofc@gmail.com',
    summary:
      'Notas de Rodapé é quase um repositório público que se preucupa um pouco se alguém vai ler'
  },
  location: 'Rivendell, Middle Earth',
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: 'https://github.com/PedroVanderlei/hello-astro-pedro/tree/home-experimento-1',
  buildTime: new Date()
}

export { default as Logo } from './assets/astro/logo_minima.png'
export { default as LogoImage } from './assets/astro/logo_minima.png'
export { default as FeaturedSVG } from './assets/svg/undraw/undraw_design_inspiration.svg'
export { default as DefaultSVG } from './assets/svg/undraw/undraw_my_feed.svg'
export { default as DefaultImage } from './assets/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'Sobre', href: 'about' },
  { name: 'Contato', href: 'contact' },
  { name: 'Arquivo', href: 'blog' },
  { name: 'Docs', href: 'doc/introduction' }
]

export const PAGE_SIZE = 8

export const GITHUB_EDIT_URL = `https://github.com/PedroVanderlei/hello-astro-pedro/tree/home-experimento-1`

export const COMMUNITY_INVITE_URL = `https://discord.gg/pWDZWyapQ3`

export type Sidebar = Record<string, { text: string; link: string }[]>

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => {
    return data.draft !== true
  })
  return posts.sort((a, b) =>
    a.data.pubDate && b.data.pubDate ? +b.data.pubDate - +a.data.pubDate : 0
  )
}
