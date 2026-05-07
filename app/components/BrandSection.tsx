import Link from "next/link";

export default function BrandSection() {
  return (
    <section className="relative py-32 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Section number */}
          <div className="col-span-12 lg:col-span-2">
            <div className="sticky top-32">
              <div className="font-mono text-xs text-rangers-red mb-2">§ 01</div>
              <div className="label-mono text-rangers-bone/40">Brand</div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-rangers-bone/85 leading-relaxed text-lg">
              <p>
                Monday Likes Baseball은 데이터 분석 부트캠프 최종 프로젝트에서 출발한,
                야구를 좋아하는 사람들의 작은 분석 그룹입니다. 한 경기 안에 흩어진 수백
                개의 신호 — 투구 속도, 타구 각도, 골반 회전 시점 — 을 모아 의미 있는
                이야기로 엮어내는 일을 합니다.
              </p>
              <p>
                기록 위의 숫자와 그라운드 위의 움직임을 같은 좌표계에 올려놓고 봅니다.
                통계와 해부학이 만나는 자리에서, 야구는 늘 다르게 읽힙니다.
              </p>
            </div>

            <div className="mt-12">
              <Link
                href="/story"
                className="inline-flex items-center gap-3 group"
              >
                <span className="label-mono text-rangers-red">Read our story</span>
                <span className="w-12 h-px bg-rangers-red group-hover:w-20 transition-all duration-500" />
              </Link>
            </div>
          </div>

          {/* Right column - data card */}
          <div className="col-span-12 lg:col-span-3">
            <div className="border border-white/10 p-6 bg-rangers-graphite/40 backdrop-blur-sm">
              <div className="label-mono text-rangers-red mb-4">우리가 하는 일</div>
              <ul className="space-y-4">
                {[
                  { num: "01", label: "팀·시즌 분석", sub: "운과 실력의 경계를 가르는 일" },
                  { num: "02", label: "경기 예측", sub: "다음 한 경기를 미리 그려보는 일" },
                  { num: "03", label: "동작 분석", sub: "한 동작 안의 위험 신호를 읽는 일" },
                ].map((item) => (
                  <li key={item.num} className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-0">
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
