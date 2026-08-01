export default function HomeLoadingSkeleton() {
  return (
    <div className="animate-pulse">

      {/* Hero */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20">

          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <div className="mx-auto h-10 w-2/3 rounded-xl bg-muted" />

            <div className="mx-auto h-5 w-full rounded bg-muted" />
            <div className="mx-auto h-5 w-5/6 rounded bg-muted" />

            <div className="mx-auto mt-8 flex justify-center gap-4">
              <div className="h-12 w-36 rounded-xl bg-muted" />
              <div className="h-12 w-36 rounded-xl bg-muted" />
            </div>
          </div>

        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 h-8 w-56 rounded bg-muted" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-default bg-card p-6 shadow-sm"
            >
              <div className="mb-4 h-6 w-3/4 rounded bg-muted" />

              <div className="mb-2 h-4 w-full rounded bg-muted" />
              <div className="mb-6 h-4 w-2/3 rounded bg-muted" />

              <div className="h-10 w-28 rounded-xl bg-muted" />
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 h-8 w-48 rounded bg-muted" />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-default bg-card p-6 shadow-sm"
            >
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-muted" />

              <div className="mx-auto h-4 w-2/3 rounded bg-muted" />
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-default bg-card p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 h-10 w-20 rounded bg-muted" />

              <div className="mx-auto h-4 w-24 rounded bg-muted" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="rounded-3xl border border-default bg-card p-10 shadow-sm">

          <div className="mx-auto mb-6 h-8 w-1/2 rounded bg-muted" />

          <div className="mx-auto mb-8 h-5 w-2/3 rounded bg-muted" />

          <div className="mx-auto h-12 w-40 rounded-xl bg-muted" />

        </div>
      </section>

    </div>
  );
}