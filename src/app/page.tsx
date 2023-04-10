import { Inter } from 'next/font/google'
import { Markquee } from './Markquee'
import { Tag } from './Tag'
import data from './data'
import Link from 'next/link';
import Script from 'next/script';

// const inter = Inter({ subsets: ['latin'] })

function splitArray<T>(arr: T[], chunkSize: number) {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

const tags = splitArray(data, 5)

export default function Home() {
  return (
    <div className="flex flex-col h-[100vh] justify-center">
      <div className="mt-4 mb-8 flex flex-col gap-2 max-w-full overflow-x-hidden">
        {
          tags.map((row, i) => (
            <Markquee key={i} velocity={20}>
              {row.map((tag) => (
                <Link href={`/keywords/${tag.name}`} key={tag.name}>
                  <Tag key={tag.name} emoji={tag.emoji} name={tag.name} description={tag.description} />
                </Link>
              ))}
            </Markquee>
          ))}
      </div>
      <main className="container mx-auto px-4">
        <div className="flex flex-col gap-y-6 text-gray-900">
          <div>
            <h1 className="text-2xl"><strong>もっと<span className="text-gray-600 font-normal">@mottox2</span></strong>といいます。</h1>
            <p className="text-2xl mt-0.5">趣味でワイワイできそうな友達を探しています。</p>
            <p className="text-sm text-gray-600 mt-2">ハマったものや影響を受けたものを並べてみました。ぴんときた方とは仲良くなれそうな気がします。</p>
          </div>
          <div className="hidden flex">
            <div className="w-1/2">
              Left
            </div>
            <div className="w-1/2">
              Right
            </div>
          </div>
          <div className="flex">
            <Tag emoji="📨" name="Twitter" description="ダイレクトメッセージでどうぞ" />
          </div>
        </div>
      </main>
      <script dangerouslySetInnerHTML={{
        __html: `
          console.log('script loaded')
        `
      }}>
      </script>
    </div>
  )
}
