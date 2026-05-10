export default function BrandSection() {
  return (
    <section className="relative py-32 border-t border-rangers-blue-deep/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Section number */}
          <div className="col-span-12 lg:col-span-2">
            <div className="sticky top-32">
              <div className="font-mono text-xs text-rangers-red mb-2">§ 01</div>
              <div className="label-mono text-rangers-bone/40">Story</div>
            </div>
          </div>

          {/* Main content */}
          <div className="col-span-12 lg:col-span-7">
            <h2 className="display-lg text-5xl lg:text-7xl mb-12">
              우리는 야구를
              <br />
              <span className="text-rangers-red">데이터로</span> 읽고,
              <br />
              <span className="font-display font-light text-rangers-bone/60">
                움직임으로
              </span>{" "}
              해석합니다.
            </h2>

            <p className="text-[#1B2435] text-xl lg:text-2xl leading-relaxed font-display font-medium mb-12">
              월요일은 보통 야구가 쉬는 날입니다. 그 비어 있는 하루,
              지난 주의 경기를 다시 펴 보고 다음 주의 경기를 예측해 보는 시간.
              그 시간이 우리를 만들었습니다.
            </p>

            <div className="space-y-6 text-rangers-bone leading-relaxed text-lg">
              <p>
                Monday Likes Baseball은 데이터 분석 부트캠프 최종 프로젝트에서 출발한
                분석 그룹입니다. 야구를 좋아하는 사람들이 한자리에 모여, &lsquo;우리가
                좋아하는 이 경기를 데이터로도 풀어보자&rsquo;는 단순한 호기심에서
                시작됐죠. 그 호기심이 한 시즌의 결과부터 한 동작의 디테일까지 — 야구를
                여러 각도로 들여다보는 작업으로 이어졌습니다.
              </p>
              <p>
                우리는 야구라는 게임을 가능한 한 여러 각도에서 봅니다. 한 시즌의 성적표
                뒤에는 한 경기가 있고, 그 안에는 한 타석, 한 투구, 그리고 한 동작이
                있습니다. 위에서 아래로 한 겹씩 풀어내는 — 그게 우리가 야구를 읽는
                방식입니다.
              </p>
            </div>
          </div>

          {/* Right column - data card */}
          <div className="col-span-12 lg:col-span-3">
            <div className="border border-rangers-blue-deep/15 p-6 bg-rangers-graphite/40 backdrop-blur-sm">
              <div className="label-mono text-rangers-red mb-4">우리가 하는 일</div>
              <ul className="space-y-4">
                {[
                  { num: "01", label: "팀·시즌 분석", sub: "운과 실력의 경계를 가르는 일" },
                  { num: "02", label: "경기 예측", sub: "다음 한 경기를 미리 그려보는 일" },
                  { num: "03", label: "동작 분석", sub: "한 동작 안의 위험 신호를 읽는 일" },
                ].map((item) => (
                  <li key={item.num} className="flex items-start gap-3 pb-3 border-b border-rangers-blue-deep/10 last:border-0">
                    <span className="font-mono text-xs text-rangers-bone/40 mt-0.5 tabular">
                      {item.num}
                    </span>
                    <div>
                      <div className="font-display text-base">{item.label}</div>
                      <div className="text-xs text-rangers-bone/50 mt-0.5">{item.sub}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
