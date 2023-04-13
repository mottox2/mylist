import { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import './globals.css'

const title = 'もっとのマイリスト'
const description = 'もっと（@mottox2）のハマったもの・影響を受けたものリストです。気が合いそうな人は友達になりましょう！。'

export const metadata: Metadata = {
  metadataBase: new URL('https://mylist.mottox2.com/'),
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/',
    type: 'website',
    siteName: 'mottox2',
    images: '/og-image.png',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@mottox2',
    images: '/og-image.png',
  }
}

type LayoutProps = PropsWithChildren & {
  modal: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <html lang="ja">
      <body>
        {props.children}
        {props.modal}
      </body>
    </html>
  )
}
