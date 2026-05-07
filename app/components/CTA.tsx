export default function CTA() {
  return (
    <section className="relative py-32 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 stripes opacity-50" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-rangers-red" />
          <span className="label-mono text-rangers-red">END OF THE NINTH</span>
          <div className="w-8 h-px bg-rangers-red" />
        </div>

        <h2 className="display-xl text-6xl lg:text-9xl text-white">
          Numbers
          <br />
          <span className="text-rangers-bone/40">don&apos;t lie.</span>
          <br />
          <span className="text-rangers-red">But</span>{" "}
          <span className="font-display font-light">they whisper.</span>
        </h2>

        <p className="mt-12 max-w-2xl mx-auto text-rangers-bone/85 text-lg">
          더 깊이 있는 분석이 필요하다면, 또는 단순히 야구 이야기를 나누고 싶다면.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:lch092420@gmail.com"
            className="px-8 py-4 bg-rangers-red text-white font-medium hover:bg-rangers-red-bright transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="/dashboard"
            className="px-8 py-4 border border-white/30 hover:border-white hover:bg-white/5 transition-all"
          >
            Launch Dashboard →
          </a>
        </div>
      </div>
    </section>
  );
}
