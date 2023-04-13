import React from "react"
import { Tag } from "@/app/Tag"
import type { TagProps } from "@/app/Tag"

export const Card: React.FC<TagProps & {
  content?: string
}> = (tag) => {
  return <div className="bg-white rounded-lg shadow max-w-xl overflow-hidden" >
    <div className="flex justify-center bg-gray-100 px-8 py-6">
      <Tag emoji={tag.emoji} name={tag.name} description={tag.description} />
    </div>
    <div className='text-gray-700 leading-relaxed px-4 sm:px-8 pt-6 py-8'>
      {tag.content?.split('\n').map((paragraph, num) => {
        return <p key={num} className=''>{paragraph}</p>
      })}
    </div>
  </div>
}