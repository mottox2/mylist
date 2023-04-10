import { PropsWithChildren } from 'react'
import './globals.css'

const title = '@mottox2のハマったもの・影響を受けたものリスト'
const description = '@mottox2のハマったもの・影響を受けたものリストです。気が合いそうな人は友達になりましょう！。'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/',
    type: 'website',
    siteName: 'mottox2',
    images: '/og-image',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@mottox2',
    images: '/og-image',
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
