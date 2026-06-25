declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Пуш події у GTM dataLayer. Безпечно на сервері (ігнорується). */
export function gtmEvent(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
