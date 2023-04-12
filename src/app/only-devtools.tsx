"use client"

import { PropsWithChildren, useEffect, useState } from "react";
import 'devtools-detect'
import devTools from "devtools-detect";

export const OnlyDevtools: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const handleDevtoolsChange = (e: any) => {
      e.detail.isOpen && setIsOpen(true)
    }
    devTools.isOpen && setIsOpen(true)
    window.addEventListener('devtoolschange', handleDevtoolsChange)
    return () => window.removeEventListener('devtoolsChange', handleDevtoolsChange);
  }, [])

  return <>
    {isOpen && children}
  </>
}