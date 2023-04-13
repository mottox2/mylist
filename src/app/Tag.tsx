import clsx from "clsx";

export interface TagProps {
  emoji: string
  name: string;
  description: string;
  hasLink?: boolean;
}

export const Tag: React.FC<TagProps> = (props) => {
  const { emoji, name, description, hasLink } = props;
  return <div className={clsx({
    "whitespace-nowrap bg-white rounded-full pl-5 pr-6 py-2 flex items-center mx-1 relative": true,
    "pr-8 hover:shadow cursor-hover": hasLink,
  })}>
    <div className="text-3xl">{emoji}</div>
    <div className={clsx({
      "ml-2.5 flex flex-col": true,
      "after:absolute after:top-1/2 after:w-[8px] after:h-[8px] after:translate-y-[-4px] after:border-t after:border-r after:right-[16px] after:border-gray-900 after:rotate-[45deg]": hasLink,
    })}>
      <div className="text-gray-900">{name}</div>
      <div className="text-gray-500 text-xs">{description}</div>
    </div>
  </div>
}