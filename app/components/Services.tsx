import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Team & Season Analysis",
    titleKo: "팀·시즌 분석",
    desc: "운으로 보였던 승패의 차이를 데이터로 설명합니다. 한 시즌의 결과를 만든 진짜 원인이 무엇이었는지 — 우리는 그 답을 숫자로 풀어드립니다.",
    accent: "blue",
  },
  {
    num: "02",
    title: "Game Forecasting",
    titleKo: "경기 예측",
    desc: "수만 번의 가상 경기를 돌려 가능한 결과의 분포를 그립니다. 단순히 누가 이길지가 아니라, 얼마나 자주 어떻게 이길지까지 그려 보여드립니다.",
    accent: "red",
  },
  {
    num: "03",
    title: "Motion Analytics",
    titleKo: "투구·타격 동작 분석",
    desc: "선수의 한 동작을 영상에서 잘게 쪼개 봅니다. 어디서 부상의 신호가 켜지고, 어떤 자세가 구속을 만드는지 — 움직임 안의 답을 찾아드립니다.",
    accent: "blue",
  },
  {
    num: "04",
    title: "Insight Dashboard",
    titleKo: "맞춤 대시보드",
    desc: "분석 결과는 결국 누군가의 결정을 도와야 합니다. 코칭 스태프부터 팬까지, 누가 봐도 이해할 수 있는 인터랙티브 대시보드로 정리해 드립니다.",
    accent: "red",
  },
];

export default function Services() {
  return (
    <section className="relative py-32 border-t border-white/5 bg-gradient-to-b from-rangers-ink to-rangers-blue-deep/30">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 lg:col-span-2">
            <div className="font-mono text-xs text-rangers-red mb-2">§ 02</div>
            <div className="label-mono text-rangers-bone/40">Services</div>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h2 className="display-lg text-5xl lg:text-7xl">
              네 가지 방식으로
              <br />
              <span className="text-rangers-bone/60">
                질문에 답합니다.
              </span>
            </h2>
            <p className="mt-8 text-rangers-bone/85 max-w-2xl text-lg leading-relaxed">
              팀의 시즌 진단부터, 다음 경기 예측, 선수의 동작 분석, 그리고 누구나
              볼 수 있는 대시보드까지. 야구를 둘러싼 질문에 데이터로 답합니다.
            </p>
          </div>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {services.map((s) => (
            <div
              key={s.num}
              className="group relative bg-rangers-ink p-8 lg:p-10 hover:bg-rangers-graphite transition-colors duration-500"
            >
              {/* Number */}
              <div className="flex items-start justify-between mb-8">
                <div
                  className={`font-mono text-xs ${
                    s.accent === "red" ? "text-rangers-red" : "text-rangers-blue-bright"
                  }`}
                >
                  /{s.num}
                </div>
                <div
                  className={`w-12 h-12 ${
                    s.accent === "red" ? "bg-rangers-red" : "bg-rangers-blue-bright"
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center`}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="white" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <div className="mb-2">
                <div className="font-display text-3xl lg:text-4xl tracking-tight">
                  {s.title}
                </div>
                <div className="text-sm text-rangers-bone/50 mt-1">{s.titleKo}</div>
              </div>

              {/* Description */}
              <p className="mt-6 text-rangers-bone/85 leading-relaxed text-[15px]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 group"
          >
            <span className="w-12 h-px bg-rangers-bone/40 group-hover:w-20 group-hover:bg-rangers-red transition-all duration-500" />
            <span className="label-mono text-rangers-bone/60 group-hover:text-rangers-red">
              Detailed services
            </span>
            <span className="w-12 h-px bg-rangers-bone/40 group-hover:w-20 group-hover:bg-rangers-red transition-all duration-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
