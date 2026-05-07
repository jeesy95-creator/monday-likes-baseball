import Link from "next/link";

export default function FeaturedProject() {
  return (
    <section className="relative py-32 border-t border-white/5 overflow-hidden">
      {/* Decorative diagonal stripes */}
      <div className="absolute top-0 left-0 w-full h-2 bg-rangers-red" />
      <div className="absolute top-2 left-0 w-full h-px bg-rangers-blue-bright" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-2">
            <div className="font-mono text-xs text-rangers-red mb-2">§ 03</div>
            <div className="label-mono text-rangers-bone/40">Feature Project</div>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs px-2 py-1 bg-rangers-red text-white">
                프로젝트
              </span>
              <span className="label-mono text-rangers-bone/50">2026 BOOTCAMP COHORT</span>
            </div>
            <h2 className="display-lg text-5xl lg:text-7xl tracking-ultra">
              TEX 2025
              <br />
              <span className="text-rangers-red">Residual</span>{" "}
              <span className="font-light text-rangers-bone/60">Analysis</span>
              <br />
              <span className="text-rangers-bone">Dashboard.</span>
            </h2>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-12">
          {[
            { label: "기대 대비 실제", value: "−9승", sub: "기댓값보다 부족한 승수" },
            { label: "분석 기간", value: "2015–2024", sub: "10시즌 누적 데이터" },
            { label: "핵심 원인", value: "ERA", sub: "잔차의 가장 큰 변수" },
            { label: "결과물", value: "Dashboard", sub: "팬·구단 모두를 위한" },
          ].map((s) => (
            <div key={s.label} className="bg-rangers-graphite/50 p-6 lg:p-8">
              <div className="label-mono text-rangers-red text-[10px] mb-3">
                {s.label}
              </div>
              <div className="font-display text-3xl lg:text-4xl tabular text-white">
                {s.value}
              </div>
              <div className="text-xs text-rangers-bone/50 mt-2 font-mono">
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Project body */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-6 text-rangers-bone/85 leading-relaxed text-lg">
              <p>
                2025년 텍사스 레인저스는 득점·실점만 놓고 기대했던 승수보다{" "}
                <span className="text-rangers-red font-medium">9승이나 모자랐습니다</span>.
                같은 점수를 내고도 더 자주 졌다는 뜻이죠. 우리는 그 9승이 어디로 사라졌는지,
                10년치 데이터를 다시 펼쳐 따라가 보았습니다.
              </p>
              <p>
                답은 세 가지 자리에 있었습니다. 5년 동안 조금씩 쌓여온 불펜의 약점,
                유난히 1점차에서 무너지는 경기, 그리고 결국 모든 것의 출발점이 되는 ERA.
                대시보드 한 화면 위에 이 흐름을 모두 펼쳐 두면, 다음 시즌 어디를 손봐야
                하는지가 자연스럽게 드러납니다.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "팀 시즌 진단",
                "투수진 분석",
                "득점 분포",
                "10시즌 누적",
                "시나리오 비교",
                "인터랙티브 대시보드",
              ].map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-3 py-1.5 border border-white/15 text-rangers-bone/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/dashboard"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-rangers-red text-white overflow-hidden"
              >
                <span className="relative z-10 font-medium tracking-wide">
                  Launch Dashboard
                </span>
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 14 12"
                  fill="none"
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                >
                  <path d="M1 6h11M7 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="absolute inset-0 bg-rangers-blue-bright transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </Link>

              <Link
                href="/projects/tex-2025"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white text-rangers-bone hover:text-white transition-colors"
              >
                Read Case Study
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right - chart sketch */}
          <div className="col-span-12 lg:col-span-5">
            <div className="border border-white/10 bg-rangers-graphite/40 p-6 lg:p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="label-mono text-rangers-red">FIG. 01</div>
                <div className="label-mono text-rangers-bone/40">PYTH RESIDUAL · TEX</div>
              </div>

              {/* Simple ASCII-style data viz */}
              <svg viewBox="0 0 400 240" className="w-full">
                {/* Axis */}
                <line x1="40" y1="200" x2="380" y2="200" stroke="rgba(255,255,255,0.2)" />
                <line x1="40" y1="20" x2="40" y2="200" stroke="rgba(255,255,255,0.2)" />
                {/* Zero line */}
                <line x1="40" y1="110" x2="380" y2="110" stroke="rgba(192,17,31,0.4)" strokeDasharray="2 4" />

                {/* Bars - residuals 2015-2025 */}
                {[
                  { x: 60, h: -8, year: "15" },
                  { x: 90, h: 12, year: "16" },
                  { x: 120, h: -3, year: "17" },
                  { x: 150, h: 5, year: "18" },
                  { x: 180, h: -2, year: "19" },
                  { x: 210, h: -4, year: "20" },
                  { x: 240, h: -6, year: "21" },
                  { x: 270, h: 7, year: "22" },
                  { x: 300, h: 11, year: "23" },
                  { x: 330, h: -3, year: "24" },
                  { x: 360, h: -9, year: "25", highlight: true },
                ].map((b) => (
                  <g key={b.year}>
                    <rect
                      x={b.x - 8}
                      y={b.h < 0 ? 110 : 110 - Math.abs(b.h) * 6}
                      width="16"
                      height={Math.abs(b.h) * 6}
                      fill={b.highlight ? "#E31837" : b.h < 0 ? "rgba(255,255,255,0.4)" : "#0F4FA8"}
                    />
                    <text
                      x={b.x}
                      y="220"
                      fill="rgba(255,255,255,0.4)"
                      fontSize="9"
                      fontFamily="monospace"
                      textAnchor="middle"
                    >
                      '{b.year}
                    </text>
                  </g>
                ))}

                {/* Labels */}
                <text x="48" y="20" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="monospace">
                  +15
                </text>
                <text x="48" y="115" fill="rgba(192,17,31,0.6)" fontSize="9" fontFamily="monospace">
                  0
                </text>
                <text x="48" y="200" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="monospace">
                  −15
                </text>

                {/* Highlight callout */}
                <line x1="360" y1="110" x2="360" y2="50" stroke="#E31837" strokeWidth="1" />
                <circle cx="360" cy="50" r="3" fill="#E31837" />
                <text x="350" y="42" fill="#E31837" fontSize="11" fontFamily="Pretendard Variable, Pretendard, sans-serif" fontWeight="700" textAnchor="end">
                  −9.0
                </text>
              </svg>

              <div className="mt-4 pt-4 border-t border-white/10 text-xs font-mono text-rangers-bone/50">
                ACTUAL WINS − PYTH EXPECTED · TEX RANGERS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
