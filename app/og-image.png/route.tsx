import { ImageResponse } from 'next/server';
import data from '../data'

function splitArray<T>(arr: T[], chunkSize: number) {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

const tags = splitArray(data, 4)

// FIXME: duplicated code
export interface Props {
  emoji: string
  name: string;
  description: string;
}

const Tag: React.FC<Props> = (props) => {
  const { emoji, name, description } = props;
  return <div tw="whitespace-nowrap bg-white rounded-full pl-5 pr-6 py-2 flex items-center hover:shadow mx-1 relative">
    <div tw="text-3xl">{emoji}</div>
    <div tw="ml-2.5 flex flex-col">
      <div tw="text-gray-900">{name}</div>
      <div tw="text-gray-500 text-xs">{description}</div>
    </div>
  </div>
}

const ProfileTag: React.FC<{}> = () => {
  const name = '@mottox2'
  const description = '友達募集中'
  return <div tw="whitespace-nowrap bg-white rounded-full pl-3 pr-6 py-2 flex items-center hover:shadow mx-1 relative">
    <img width={40} height={40} tw='rounded-full overflow-hidden' src="https://img.esa.io/uploads/production/attachments/6967/2023/04/11/4651/4207095c-7e73-4dea-9898-7ba25e077c84.jpg" />
    <div tw="ml-3 flex flex-col">
      <div tw="text-gray-900 -ml-px">{name}</div>
      <div tw="text-gray-500 text-xs">{description}</div>
    </div>
  </div>
}

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(215deg, rgba(77, 155, 193, 0.2) 15%, rgba(88, 199, 183, 0.3) 45%, rgba(79, 165, 190, 0.2) 85%)',
          height: '100%',
          gap: '.5rem',
          transform: 'scale(1.5) rotate(-10deg) translateY(40px)',
          transformOrigin: '20rem center',
        }}
        tw="flex flex-col items-center justify-center"
      >
        {tags.map((row, i) => (
          <div key={i} tw="flex">
            {row.map((tag, j) => i === 4 && j === 1 ? (
              <ProfileTag key='profile' />
            ) : (
              <Tag key={tag.name} {...tag} />
            ))}
          </div>
        ))}
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
