"use client"

export function BrandSpinner({
  size = 20,
  "aria-label": ariaLabel = "Loading",
}: {
  size?: number
  "aria-label"?: string
}) {
  const dim = `${size}px`
  return (
    <div role="status" aria-label={ariaLabel} className="inline-block align-middle" style={{ width: dim, height: dim }}>
      <span
        aria-hidden="true"
        className="block h-full w-full rounded-full border-2 border-(--color-foreground)/20 border-t-(--color-accent) motion-safe:animate-spin-slow"
      />
    </div>
  )
}
