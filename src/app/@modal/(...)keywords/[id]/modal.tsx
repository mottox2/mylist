'use client'
import { PropsWithChildren, useEffect, useRef } from "react";

export const Modal: React.FC<PropsWithChildren & {
  onClose: () => void;
}> = (props) => {
  const overlay = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        props.onClose();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown)

  }, [])

  return <div
    ref={overlay}
    onClick={(e) => {
      e.target === overlay.current && props.onClose();
    }}
    className="fixed top-0 right-0 bottom-0 left-0 mx-auto flex items-center justify-center bg-black bg-opacity-30"
  >
    {props.children}
  </div>
}