'use client'
import data, { creatorTags } from '@/data'
import { useRouter } from 'next/navigation'
import { Modal } from './Modal'
import { Card } from '@/keywords/[id]/Card'

export default function Page({ params }: any) {
  const name = decodeURI(params.id)
  // FIXME: ClientComponentでデータへの参照を行うべきではない
  const tag = [...data, ...creatorTags].find((tag) => tag.name === name)
  const router = useRouter();
  const hasContent = tag?.content

  if (!tag || !hasContent) {
    router.back();
    return
  }

  return <Modal onClose={() => {
    router.back();
  }}>
    <Card {...tag} />
  </Modal>
}