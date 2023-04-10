'use client'
import Link from 'next/link'
import data from '../../../data'
import { useRouter } from 'next/navigation'

export default function Page({ params }: any) {
  const name = decodeURI(params.id)
  const tag = data.find((tag) => tag.name === name)
  const router = useRouter();

  console.log('===', name)

  if (!tag) {
    return <div>Not found</div>
  }

  return <div className="fixed top-0" >
    <Link href="/" onClick={() => router.back()
    }>Close</Link>
    {name}
  </div>
}