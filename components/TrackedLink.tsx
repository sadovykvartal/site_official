"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { gtmEvent } from "@/lib/gtm";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  eventParams?: Record<string, unknown>;
  children: ReactNode;
};

/* Посилання, що пушить подію у GTM dataLayer при кліку.
   Працює і всередині серверних компонентів (це клієнтський компонент). */
export default function TrackedLink({ event, eventParams, onClick, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        gtmEvent(event, eventParams);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
