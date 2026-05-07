export const metadata = {
  title: "Team — Monday Likes Baseball",
  description: "야구를 좋아하는 네 사람이 한자리에 모여 만든 분석 그룹.",
};

const members = [
  {
    name: "이찬혁",
    nameEn: "Lee Chan-hyeok",
    initial: "Channy",
    accent: "red",
    role: "CEO · Sabermetrics Specialist",
    bio: "데이터에서 최선의 선택을 제시하는 데이터 애널리스트입니다. 16년에 걸친 KBO 관전·분석과 4년의 사회인 야구 선수 경력 위에, 데이터 사이언스 역량을 더해 야구를 다시 봅니다.",
    works: [
      "NBA 시즌 트렌드 데이터 분석",
      "Airbnb 운영 지표 분석 및 의사결정 프레임 설계",
      "Starbucks 프로모션 퍼널·전환율 분석",
    ],
  },
  {
    name: "지소윤",
    nameEn: "Ji So-yun",
    initial: "Sonny",
    accent: "blue",
    role: "Biomechanist · Data Engineer",
    bio: "과학과 데이터를 기반으로 움직임을 연구합니다. Kinesiology 기반의 생체역학 도메인과 KBO 협력 프로젝트 경험 위에, 데이터 사이언스를 결합해 조직의 의사결정에 직접 닿는 인사이트를 도출합니다.",
    works: [
      "모션캡처 트래킹 시스템 운용 · 정밀 데이터 캡처 실무",
      "KBO 협력 프로젝트 · 데이터 품질 관리",
      "마케팅 대시보드 구축 · 제조 공정 불량 탐지 모델링",
    ],
  },
  {
    name: "김희선",
    nameEn: "Kim Hee-seon",
    initial: "Jenny",
    accent: "blue",
    role: "Designer · Data Analyst",
    bio: "분석 결과를 가장 직관적인 화면으로 옮기는 데이터 애널리스트입니다. 데이터 분석부터 시각화 설계까지, 인사이트가 사용자에게 닿는 마지막 한 단계를 책임집니다.",
    works: [
      "세이버메트릭스 기반 야구 데이터 분석",
      "대시보드 UI/UX 기획 및 시각화 설계",
      "분석 리포트 작성 · 인사이트 커뮤니케이션",
    ],
  },
  {
    name: "김효준",
    nameEn: "Kim Hyo-jun",
    initial: "Joony",
    accent: "red",
    role: "Designer · Data Analyst",
    bio: "야구를 더 깊이 분석해, 더 좋은 의사결정으로 연결하는 데이터 애널리스트입니다. 공공·금융·교육 도메인의 분석 경험을 야구로 확장하며 성장하고 있습니다.",
    works: [
      "서울시 부동산 시세 분석 · 데이터 정합성 검증, 시계열 변동성",
      "P2P 대출 플랫폼 적자 구조 진단 · 통계 검증 기반 예측 모델 구축",
      "온라인 교육 플랫폼 4단계 퍼널 분석 · 이탈률·전환율 인사이트",
    ],
  },
];

export default function TeamPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 lg:col-span-2">
            <div className="font-mono text-xs text-rangers-red mb-2">§ TEAM</div>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h1 className="display-xl text-5xl lg:text-[6.5rem] tracking-ultra mb-8">
              야구를 좋아하는
              <br />
              <span className="text-rangers-red">네 사람.</span>
            </h1>
            <p className="text-rangers-bone/85 max-w-2xl text-lg leading-relaxed">
              네 사람, 네 가지 시선.
            </p>
          </div>
        </div>

        {/* Member grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-rangers-blue-deep/5 border border-rangers-blue-deep/10">
          {members.map((m) => {
            const isRed = m.accent === "red";
            return (
              <article
                key={m.name}
                className="bg-rangers-ink p-10 lg:p-12 flex flex-col"
              >
                {/* Top: avatar + name */}
                <div className="flex items-start gap-6 mb-8">
                  {/* Nickname plate */}
                  <div
                    className={`h-20 lg:h-24 px-6 lg:px-8 flex-shrink-0 flex items-center justify-center ${
                      isRed ? "bg-rangers-red" : "bg-rangers-blue-bright"
                    }`}
                  >
                    <span className="font-display text-2xl lg:text-3xl font-extrabold text-white tracking-tight whitespace-nowrap">
                      {m.initial}
                    </span>
                  </div>
                  {/* Name + role */}
                  <div className="flex-1 pt-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                      <h2 className="font-display text-3xl lg:text-4xl tracking-tight">
                        {m.name}
                      </h2>
                      <span className="text-rangers-bone/40 text-sm tracking-wide">
                        {m.nameEn}
                      </span>
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        isRed ? "text-rangers-red" : "text-rangers-blue-bright"
                      }`}
                    >
                      {m.role}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-rangers-bone/85 leading-relaxed text-[15px] mb-10">
                  {m.bio}
                </p>

                {/* Works */}
                <div className="mt-auto pt-6 border-t border-rangers-blue-deep/15">
                  <div className="label-mono text-rangers-bone/50 mb-4">
                    Selected Works
                  </div>
                  <ul className="space-y-2.5">
                    {m.works.map((w) => (
                      <li
                        key={w}
                        className="flex items-start gap-3 text-rangers-bone/85 text-[14px] leading-relaxed"
                      >
                        <span
                          className={`mt-1.5 flex-shrink-0 ${
                            isRed ? "text-rangers-red" : "text-rangers-blue-bright"
                          }`}
                        >
                          ▸
                        </span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-20 text-center">
          <p className="text-sm text-rangers-bone/50">
            네 사람 모두 데이터 분석 부트캠프에서 만나, Monday Likes Baseball을 함께
            만들었습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
