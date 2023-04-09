"use client"

import { useEffect, useRef } from "react";
import styles from './Markquee.module.css'

interface Props {
  velocity: number;
  children: React.ReactNode;
}

export const Markquee: React.FC<Props> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = ref.current?.clientWidth;
    if (!width) return;
    const speed = width / props.velocity;
    containerRef.current?.style.setProperty('--speed', `${speed}s`);
  })

  return <div ref={containerRef} className={`${styles.container} flex gap-y-2`}>
    <div ref={ref} className={`${styles.item} flex`}>
      {props.children}
    </div>
    <div className={`${styles.item} flex`}>
      {props.children}
    </div>
    <div className={`${styles.item} flex`}>
      {props.children}
    </div>
    <div className={`${styles.item} flex`}>
      {props.children}
    </div>
  </div>
}