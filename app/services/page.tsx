export const metadata = {
  title: "Services — Monday Likes Baseball",
};

const services = [
  {
    num: "01",
    title: "Team & Season Analysis",
    titleKo: "팀·시즌 분석",
    desc: "한 시즌의 결과를 운과 실력으로 분리해 봅니다. 팀이 기대보다 부진했다면 그 원인이 어디에 있는지, 다음 시즌 어디를 손봐야 하는지 — 막연한 인상이 아니라 구체적인 수치로 답을 드립니다.",
    bullets: [
      "기대 승수 대비 실제 성적의 격차 분석",
      "득점 분포·접전 경기 패턴 진단",
      "선수단·포지션별 기여도 분해",
      "강·약점 진단 리포트",
    ],
  },
  {
    num: "02",
    title: "Game Forecasting",
    titleKo: "경기 예측",
    desc: "다음 한 경기, 한 시리즈, 한 시즌의 결과를 미리 그려 봅니다. 단순한 승패 예측이 아니라, 어떤 시나리오가 얼마나 자주 일어날지 — 가능한 결과의 분포 전체를 보여드립니다.",
    bullets: [
      "경기·시리즈·시즌 단위 결과 분포 시뮬레이션",
      "이닝별 득점 시나리오 모델링",
      "라인업·로테이션 변경에 따른 영향 추정",
      "기대 승률 대비 실제 흐름 비교",
    ],
  },
  {
    num: "03",
    title: "Motion Analytics",
    titleKo: "투구·타격 동작 분석",
    desc: "한 대의 카메라 영상만으로 선수의 동작을 분해합니다. 부상 위험과 직결되는 관절 움직임을 정량화하고, 좋은 동작과 그렇지 않은 동작의 차이를 시각적으로 보여드립니다.",
    bullets: [
      "투구·타격 동작의 단계별 분해",
      "관절 각도·회전 타이밍 정량화",
      "부상 위험 지표 모니터링",
      "선수별·시기별 동작 변화 추적",
    ],
  },
  {
    num: "04",
    title: "Insight Dashboard",
    titleKo: "맞춤 대시보드",
    desc: "분석은 누군가가 보고 결정을 내려야 비로소 가치가 됩니다. 코칭 스태프, 프런트, 그리고 팬까지 — 보는 사람의 눈높이에 맞춘 인터랙티브 대시보드를 만들어 드립니다.",
    bullets: [
      "용도별·역할별 맞춤 화면 구성",
      "시나리오 비교·민감도 슬라이더 등 인터랙션",
      "브랜드 톤에 맞춘 시각화 디자인",
      "배포·운영까지 원스톱 지원",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 lg:col-span-2">
            <div className="font-mono text-xs text-rangers-red mb-2">§ SERVICES</div>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h1 className="display-xl text-6xl lg:text-[8rem] mb-8">
              What we
              <br />
              <span className="text-rangers-red">build.</span>
            </h1>
            <p className="text-rangers-bone max-w-2xl text-lg leading-relaxed">
              구단·코칭 스태프·미디어·팬 — 누구의 질문이든, 야구 데이터로 답할 수 있는
              네 가지 방식이 있습니다. 모든 프로젝트는 이 네 가지의 조합으로 진행됩니다.
            </p>
          </div>
        </div>

        <div className="space-y-px bg-rangers-blue-deep/8">
          {services.map((s) => (
            <div
              key={s.num}
              className="bg-rangers-ink p-10 lg:p-16 grid grid-cols-12 gap-8"
            >
              <div className="col-span-12 lg:col-span-3">
                <div className="font-mono text-rangers-red text-sm mb-4">/{s.num}</div>
                <h2 className="font-display text-4xl tracking-tight">{s.title}</h2>
                <div className="text-rangers-bone/50 text-sm mt-2">{s.titleKo}</div>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <p className="text-rangers-bone text-lg leading-relaxed mb-8">
                  {s.desc}
                </p>
                <ul className="space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-rangers-bone">
                      <span className="text-rangers-red mt-1.5">▸</span>
                      <span className="text-[15px]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
