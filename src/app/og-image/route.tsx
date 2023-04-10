import { ImageResponse } from 'next/server';
import data from '../data'

function splitArray<T>(arr: T[], chunkSize: number) {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

const tags = splitArray(data, 5)

// FIXME: duplicated code
export interface Props {
  emoji: string
  name: string;
  description: string;
}

const Tag: React.FC<Props> = (props) => {
  const { emoji, name, description } = props;
  return <div tw="whitespace-nowrap bg-white rounded-full pl-4 pr-6 py-2 flex items-center hover:shadow mx-1 relative">
    <div tw="text-3xl">{emoji}</div>
    <div tw="ml-3 flex flex-col">
      <div tw="text-gray-900">{name}</div>
      <div tw="text-gray-500 text-xs">{description}</div>
    </div>
  </div>
}

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#f5f5f5',
          height: '100%',
          gap: '.5rem',
          transform: 'scale(1.5)',
          transformOrigin: '15rem center',
        }}
        tw="flex flex-col items-center justify-center"
      >
        {tags.map((row, i) => (
          <div key={i} tw="flex">
            {row.map((tag) => (
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
