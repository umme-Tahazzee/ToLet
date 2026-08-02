// app/loading.tsx
export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-background px-4">
      {/* Bouncing house icon */}
      <div className="relative">
        <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
        <div className="relative flex h-16 w-16 animate-bounce items-center justify-center rounded-2xl bg-primary shadow-sm">
          <svg
            className="h-8 w-8 text-primary-foreground"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <path d="M9 22V12h6v10" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-sm font-semibold text-foreground">
          Finding your next home
        </p>
        <p className="text-xs text-muted-foreground">
          Just a moment, ToLet is loading...
        </p>
      </div>

      {/* Skeleton listing cards */}
      <div className="mt-4 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
        {[0, 150, 300].map((delay) => (
          <div
            key={delay}
            className="animate-pulse overflow-hidden rounded-2xl border border-border bg-card"
            style={{ animationDelay: `${delay}ms` }}
          >
            <div className="h-24 w-full bg-muted" />
            <div className="space-y-2 p-3">
              <div className="h-3 w-3/4 rounded bg-muted" />
              <div className="h-3 w-1/2 rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}