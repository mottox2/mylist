'use client'
import data from '../../../data'
import { useRouter } from 'next/navigation'
import { Modal } from './modal'
import { Card } from '@/app/keywords/[id]/card'

export default function Page({ params }: any) {
  const name = decodeURI(params.id)
  // FIXME: ClientComponentでデータへの参照を行うべきではない
  const tag = data.find((tag) => tag.name === name)
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