export const metadata = {
  title: "About — Monday Likes Baseball",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 lg:col-span-2">
            <div className="font-mono text-xs text-rangers-red mb-2">§ ABOUT</div>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h1 className="display-xl text-6xl lg:text-[9rem] tracking-ultra mb-12">
              Why
              <br />
              <span className="text-rangers-red">Monday?</span>
            </h1>
            <p className="text-rangers-bone/80 text-xl lg:text-2xl leading-relaxed max-w-3xl font-display font-light">
              월요일은 보통 야구가 쉬는 날입니다. 그 비어 있는 하루,
              지난 주의 경기를 다시 펴 보고 다음 주의 경기를 예측해 보는 시간.
              그 시간이 우리를 만들었습니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-32">
          <div className="col-span-12 lg:col-span-4">
            <div className="label-mono text-rangers-red mb-6">Origin</div>
            <h2 className="font-display text-4xl mb-6">
              부트캠프에서<br />시작했습니다.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-6 text-rangers-bone/80 leading-relaxed text-lg">
              <p>
                Monday Likes Baseball은 데이터 분석 부트캠프 최종 프로젝트에서 출발한
                분석 그룹입니다. 야구를 좋아하는 사람들이 한자리에 모여, &lsquo;우리가
                좋아하는 이 경기를 데이터로도 풀어보자&rsquo;는 단순한 호기심에서
                시작됐죠. 그 호기심이 한 시즌의 결과부터 한 동작의 디테일까지 — 야구를
                여러 각도로 들여다보는 작업으로 이어졌습니다.
              </p>
              <p>
                우리는 야구라는 게임을 가능한 한 여러 각도에서 봅니다. 한 시즌의 성적표
                뒤에는 한 경기가 있고, 그 안에는 한 타석, 한 투구, 그리고 한 동작이 있습니다.
                위에서 아래로 한 겹씩 풀어내는 — 그게 우리가 야구를 읽는 방식입니다.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-32">
          <div className="col-span-12 lg:col-span-4">
            <div className="label-mono text-rangers-red mb-6">Method</div>
            <h2 className="font-display text-4xl mb-6">
              세 개의<br />렌즈.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-12">
            {[
              {
                num: "01",
                title: "숫자로 읽기",
                body: "기대 승수와 실제 성적의 차이는 어디에서 왔는가. 한 시즌의 결과를 운과 실력으로 나누고, 진짜 신호만 남도록 노이즈를 걷어냅니다.",
              },
              {
                num: "02",
                title: "미래 그리기",
                body: "다음 한 경기, 한 시즌은 어떻게 흘러갈까. 수만 번의 가상 시뮬레이션을 통해 단순한 승패가 아닌 가능한 결과의 분포 전체를 그립니다.",
              },
              {
                num: "03",
                title: "움직임 보기",
                body: "기록 너머에 있는 한 동작. 영상에서 선수의 자세를 분해하고, 부상 위험과 퍼포먼스를 좌우하는 미세한 움직임을 정량화합니다.",
              },
            ].map((m) => (
              <div key={m.num} className="border-t border-white/10 pt-8">
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-rangers-red text-sm tabular">{m.num}</span>
                  <div>
                    <h3 className="font-display text-3xl mb-3">{m.title}</h3>
                    <p className="text-rangers-bone/70 leading-relaxed max-w-2xl">{m.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
