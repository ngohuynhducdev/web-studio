import { client } from "@/sanity/lib/client";
import { zaloUrlQuery } from "@/lib/queries";

export default async function ZaloBubble() {
  const zaloUrl = await client.fetch<string>(
    zaloUrlQuery,
    {},
    { next: { revalidate: 60 } }
  );
  const href = zaloUrl ?? "https://zalo.me/0901234567";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="zalo-bubble"
      aria-label="Nhắn Zalo"
    >
      {/* Pulse ring */}
      <span className="zalo-bubble-ring" aria-hidden="true" />

      {/* Zalo icon */}
      <svg
        width={26}
        height={26}
        viewBox="0 0 50 50"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M25 2C12.3 2 2 11.2 2 22.5c0 6.2 3.1 11.8 8 15.6L8 38l-4 10 11-4.5c3 1.2 6.4 1.9 10 1.9C37.7 45.4 48 36.2 48 24.9 48 11.2 37.7 2 25 2zm-8.5 17h3v9h-3v-9zm5.5 0h3v1.4c.8-1 1.8-1.6 3-1.6 2.5 0 4 1.8 4 4.8V28h-3v-4.5c0-1.7-.6-2.5-1.8-2.5s-2.2.9-2.2 2.8V28h-3v-9zm-8 0h3v1h-3v-1z" />
      </svg>

      {/* Tooltip */}
      <span className="zalo-bubble-tooltip">Nhắn Zalo</span>
    </a>
  );
}
