import Link from 'next/link'
import data from '../../data'

export default function Page({ params }: any) {
  const name = decodeURI(params.id)
  const tag = data.find((tag) => tag.name === name)

  console.log('===', name, tag)

  if (!tag) {
    return <div>Not found</div>
  }

  return <div>
    <Link href="/">Back</Link>
    {name}
  </div>
}