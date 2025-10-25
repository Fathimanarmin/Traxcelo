export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="fixed inset-0 z-[60] grid place-items-center bg-(--color-brand)/95 text-(--color-brand-contrast)"
    >
      <div className="flex flex-col items-center gap-6 p-8">
        <img
          src="/images/traxelo-logo.png"
          width={180}
          height={60}
          alt="TRAXELO Wayanad logo"
          className="drop-shadow-xl motion-safe:animate-pulse-soft"
        />
        <div className="motion-safe:animate-rise text-center text-balance -mt-6" style={{ color: "var(--color-accent)" }}>
          Crafting your travel experience…
        </div>
        {/* Inline spinner to avoid extra deps */}
        <div
          className="h-10 w-10 rounded-full border-2 border-(--color-brand-contrast)/30 border-t-(--color-accent) motion-safe:animate-spin-slow"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
