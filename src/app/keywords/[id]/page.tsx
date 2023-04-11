import { Tag } from '@/app/Tag'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import data from '../../data'
import { Card } from './card'

export default function Page({ params }: any) {
  const name = decodeURI(params.id)
  const tag = data.find((tag) => tag.name === name)
  const hasContent = !!(tag?.content)

  if (!tag || !hasContent) {
    redirect('/')
  }

  return <div className='flex flex-col gap-y-4 my-4 items-center justify-center min-h-full'>
    <Card {...tag} />
    <Link href='/'>
      <Tag emoji={'🏠'} name={'ホームに戻る'} description='' hasLink />
    </Link>
  </div>
}