"use client"

import { PropsWithChildren, useEffect, useState } from "react";
import 'devtools-detect'
import devTools from "devtools-detect";

declare global {
  interface Navigator {
    userAgentData: {
      readonly brands: {
        brand: string;
        version: string
      }[];
      readonly mobile: boolean;
      readonly platform: string;
    }
  }
}

const useIsChrome = () => {
  const [value, setValue] = useState(false)
  useEffect(() => {
    if (!('userAgentData' in window.navigator)) return setValue(false)
    const newValue = !!(window.navigator.userAgentData.brands.find(brand => brand.brand === "Google Chrome"))
    setValue(newValue)
  }, [])
  return value
}

export const OnlyDevtools: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const isChrome = useIsChrome()
  useEffect(() => {
    const handleDevtoolsChange = (e: any) => {
      isChrome && e.detail.isOpen && setIsOpen(true)
    }
    // NOTE: Mobile SafariでDevTools判定がtrueになるため、Chromeのみとした
    // おそらく、フッターの出し入れがDevTools判定されている模様
    isChrome && devTools.isOpen && setIsOpen(true)
    window.addEventListener('devtoolschange', handleDevtoolsChange)
    return () => window.removeEventListener('devtoolsChange', handleDevtoolsChange);
  }, [isChrome])

  return <>
    {isOpen && children}
  </>
}