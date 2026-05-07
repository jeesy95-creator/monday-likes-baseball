export const metadata = {
  title: "TEX 2025 Residual Analysis — Monday Likes Baseball",
};

export default function TEX2025Page() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 mb-12 text-xs font-mono">
          <a href="/" className="text-rangers-bone/40 hover:text-white">HOME</a>
          <span className="text-rangers-bone/20">/</span>
          <span className="text-rangers-bone/40">PROJECTS</span>
          <span className="text-rangers-bone/20">/</span>
          <span className="text-rangers-red">TEX 2025</span>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs px-2 py-1 bg-rangers-red text-white">프로젝트</span>
              <span className="label-mono text-rangers-bone/50">PRESENTATION · MAY 2026</span>
            </div>
            <h1 className="display-xl text-5xl lg:text-8xl tracking-ultra mb-8">
              Texas Rangers
              <br />
              <span className="text-rangers-red">−9 wins.</span>
              <br />
              <span className="font-light text-rangers-bone/50">Why?</span>
            </h1>
            <p className="text-rangers-bone/85 text-xl leading-relaxed max-w-2xl">
              득점·실점만 놓고 보면 더 많은 승수를 거뒀어야 할 시즌. 9승이 어디로
              사라졌는지, 우리는 10시즌치 데이터를 다시 펼쳐 그 답을 찾아 봤습니다.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-32">
          {/* Section 1 */}
          <section className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-3">
              <div className="font-mono text-xs text-rangers-red mb-2">/01</div>
              <h2 className="font-display text-4xl">출발점</h2>
            </div>
            <div className="col-span-12 lg:col-span-9 space-y-6 text-rangers-bone/85 text-lg leading-relaxed">
              <p>
                같은 점수를 주고받은 두 팀이 같은 승수를 거두진 않습니다. 보통은 그 격차가
                ±3승 이내에서 머무는데, 2025년 텍사스 레인저스는 기대치보다{" "}
                <span className="text-rangers-red font-medium">9승이나 부족했습니다</span>.
                단순한 불운이라 보기엔 너무 큰 차이였습니다.
              </p>
              <p>
                우리는 그 9승이 어디로 새어 나갔는지를 추적하기로 했습니다. 한 시즌이 아니라
                10년치 흐름 위에서, 지금의 결과가 어떤 패턴 위에 서 있는지를 함께 봤습니다.
              </p>
            </div>
          </section>

          {/* Section 2 - Features */}
          <section className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-3">
              <div className="font-mono text-xs text-rangers-red mb-2">/02</div>
              <h2 className="font-display text-4xl">우리가 본 것</h2>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { tag: "득점 분포", items: ["같은 평균이라도 흩어지는 모양이 다르다", "큰 점수 차 승리와 완봉패의 비율", "득점이 한 경기에 몰리는 경향", "득점 변동성의 누적 효과"] },
                  { tag: "접전 경기", items: ["1점차 경기에서의 흐름", "큰 점수 차 경기 비중", "후반·박빙 상황 성적", "결정적 순간의 득실 가중치"] },
                  { tag: "기본 지표", items: ["득점·실점·평균자책점", "타격 종합 지표", "출루·장타력 흐름", "투수진의 안정성"] },
                  { tag: "검토 후 제외", items: ["로스터 평균 연령 구성", "베테랑·신인 비중", "이번 결과와 직접 연결이 약했던 변수들"] },
                ].map((g) => (
                  <div key={g.tag} className="border border-white/10 p-6 bg-rangers-graphite/30">
                    <div className="label-mono text-rangers-red mb-4">{g.tag}</div>
                    <ul className="space-y-2 text-sm text-rangers-bone/85 leading-relaxed">
                      {g.items.map((i) => (
                        <li key={i}>· {i}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3 - Findings */}
          <section className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-3">
              <div className="font-mono text-xs text-rangers-red mb-2">/03</div>
              <h2 className="font-display text-4xl">발견</h2>
            </div>
            <div className="col-span-12 lg:col-span-9 space-y-8">
              <div className="border-l-2 border-rangers-red pl-8 py-2">
                <div className="label-mono text-rangers-red mb-3">발견 01</div>
                <h3 className="font-display text-3xl mb-3">결국 마운드의 문제였다.</h3>
                <p className="text-rangers-bone/85 leading-relaxed">
                  여러 변수를 비교한 결과, 평균자책점의 작은 변화가 다른 어떤 지표보다 시즌
                  승수에 큰 영향을 줬습니다. 다음 시즌 손봐야 할 우선순위가 분명히 드러났습니다.
                </p>
              </div>

              <div className="border-l-2 border-rangers-blue-bright pl-8 py-2">
                <div className="label-mono text-rangers-blue-bright mb-3">발견 02</div>
                <h3 className="font-display text-3xl mb-3">5년에 걸쳐 쌓여온 약점.</h3>
                <p className="text-rangers-bone/85 leading-relaxed">
                  올해 갑자기 생긴 문제가 아니었습니다. 지난 5시즌 동안 1점차 경기 승률이
                  꾸준히 리그 평균을 밑돌고 있었고, 그 흐름이 올해 결정적으로 드러났습니다.
                </p>
              </div>

              <div className="border-l-2 border-white/30 pl-8 py-2">
                <div className="label-mono text-rangers-bone/60 mb-3">발견 03</div>
                <h3 className="font-display text-3xl mb-3">평균보다 분포가 만든 차이.</h3>
                <p className="text-rangers-bone/85 leading-relaxed">
                  같은 평균 득점을 내더라도 점수가 어떻게 흩어졌는지에 따라 승수가 달라집니다.
                  큰 점수 차 승리는 많았지만 박빙 경기를 자주 놓친 패턴이 9승의 일부를 설명합니다.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 - Deliverables */}
          <section className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-3">
              <div className="font-mono text-xs text-rangers-red mb-2">/04</div>
              <h2 className="font-display text-4xl">결과물</h2>
              <div className="label-mono text-rangers-bone/50 mt-3">산출물 4종</div>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  ["요약 리포트", "한 시즌의 진단을 한 장으로"],
                  ["분석 대시보드", "변수를 조정해 시나리오 비교"],
                  ["시즌 비교", "10년치 흐름 위에서 위치 파악"],
                  ["다음 시즌 가이드", "어디를 손봐야 하는가"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-rangers-graphite/30 p-5">
                    <div className="label-mono text-rangers-red mb-2">{k}</div>
                    <div className="text-sm text-rangers-bone/85 leading-relaxed">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
