import Link from "next/link";

export interface Props {
  emoji: string
  name: string;
  description: string;
}

export const Tag: React.FC<Props> = (props) => {
  const { emoji, name, description } = props;
  return <div className="whitespace-nowrap bg-white rounded-full pl-4 pr-6 py-2 flex items-center hover:shadow mx-1.5 relative">
    <div className="text-3xl">{emoji}</div>
    <div className="ml-3 flex flex-col">
      <div className="text-gray-900">{name}</div>
      <div className="text-gray-500 text-xs">{description}</div>
    </div>
  </div>
}