export const metadata = {
  title: "Dashboards — Monday Likes Baseball",
  description: "Tableau 리포트와 Streamlit 시뮬레이션 — 두 개의 대시보드를 선택해 들어갈 수 있습니다.",
};

const dashboards = [
  {
    key: "tableau",
    badge: "REPORT",
    title: "Team & Player Report",
    titleKo: "팀·선수 리포트",
    desc: "한 시즌의 결과를 팀과 선수 단위로 들여다보는 정적 리포트. 누가 어떤 영역에서 잘했고, 어디에 약점이 있었는지를 시각적으로 정리해 둔 대시보드입니다.",
    bullets: [
      "팀 단위 시즌 종합 리포트",
      "타자·투수 개인 성적 카드",
      "해당 시즌에서 위치 파악",
    ],
    href: process.env.NEXT_PUBLIC_TABLEAU_URL,
    accent: "blue",
  },
  {
    key: "streamlit",
    badge: "INTERACTIVE",
    title: "Scenario Simulation",
    titleKo: "시뮬레이션 + 챗봇",
    desc: "변수를 직접 조정해 가며 시나리오를 비교하고, 분석 결과에 대해 챗봇에게 자유롭게 질문할 수 있는 인터랙티브 대시보드입니다.",
    bullets: [
      "시나리오 시뮬레이션",
      "TEX 2025 분석 챗봇 Q&A",
      "변수를 조정해 결과 비교",
    ],
    href: process.env.NEXT_PUBLIC_STREAMLIT_URL,
    accent: "red",
  },
];

export default function DashboardSelectPage() {
  return (
    <div className="pt-32 pb-32 min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 lg:col-span-2">
            <div className="font-mono text-xs text-rangers-red mb-2">§ DASHBOARDS</div>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h1 className="display-xl text-5xl lg:text-[5.5rem] tracking-ultra mb-8 leading-[1.15]">
              두 개의 대시보드
              <br />
              <span className="text-rangers-red">같은 분석,</span>{" "}
              <span className="text-rangers-bone/60 font-light">다른 사용법</span>
            </h1>
            <p className="text-rangers-bone max-w-2xl text-lg leading-relaxed">
              같은 분석을 두 가지 시선으로 풀어내기 위해,{" "}
              <span className="text-rangers-blue-deep font-bold">Tableau</span>와{" "}
              <span className="text-rangers-blue-deep font-bold">Streamlit</span>{" "}
              두 도구를 함께 씁니다. Tableau는 한 시즌의 결과를 정제된{" "}
              <span className="text-rangers-blue-deep font-medium whitespace-nowrap">팀·선수 리포트</span>로
              한눈에 보여주는 정적 대시보드이고, Streamlit은 변수를 조정해 가며{" "}
              <span className="text-rangers-blue-deep font-medium whitespace-nowrap">시나리오를 시뮬레이션</span>하고
              챗봇과 대화하는 인터랙티브 대시보드입니다. 각자의 강점에 맞게 역할을 나눴습니다.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-rangers-blue-deep/5 border border-rangers-blue-deep/10">
          {dashboards.map((d) => {
            const isRed = d.accent === "red";
            return (
              <a
                key={d.key}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-rangers-ink p-10 lg:p-16 hover:bg-rangers-graphite/60 transition-colors duration-500 flex flex-col"
              >
                {/* Badge */}
                <div className="mb-12">
                  <span
                    className={`font-mono text-[10px] tracking-[0.2em] px-2.5 py-1 ${
                      isRed
                        ? "bg-rangers-red text-white"
                        : "bg-rangers-blue-bright text-white"
                    }`}
                  >
                    {d.badge}
                  </span>
                </div>

                {/* Title */}
                <div className="mb-8">
                  <h2 className="font-display text-4xl lg:text-5xl tracking-tight mb-2">
                    {d.title}
                  </h2>
                  <div className={`text-sm ${isRed ? "text-rangers-red" : "text-rangers-blue-bright"}`}>
                    {d.titleKo}
                  </div>
                </div>

                {/* Description */}
                <p className="text-rangers-bone leading-relaxed text-[15px] mb-8">
                  {d.desc}
                </p>

                {/* Bullets */}
                <ul className="space-y-3">
                  {d.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-rangers-bone text-[14px] leading-relaxed"
                    >
                      <span
                        className={`flex-shrink-0 ${
                          isRed ? "text-rangers-red" : "text-rangers-blue-bright"
                        }`}
                      >
                        ▸
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

              </a>
            );
          })}
        </div>

        {/* Footer hint */}
        <div className="mt-16 text-center">
          <p className="text-sm text-rangers-bone/40">
            새 탭에서 열립니다 · 두 대시보드는 같은 분석을 서로 다른 방식으로 보여줍니다
          </p>
        </div>
      </div>
    </div>
  );
}
