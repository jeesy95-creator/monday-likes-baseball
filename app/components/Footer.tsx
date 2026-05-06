import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-rangers-ink mt-32">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="font-display text-3xl tracking-tightest leading-none">
              Monday Likes
              <br />
              <span className="text-rangers-red">Baseball.</span>
            </div>
            <p className="mt-6 text-rangers-bone/60 text-sm leading-relaxed max-w-sm">
              숫자와 움직임 사이에서, 야구라는 게임을 다시 읽습니다.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="label-mono text-rangers-red mb-4">Site</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-rangers-bone/70 hover:text-white">About</Link></li>
              <li><Link href="/services" className="text-rangers-bone/70 hover:text-white">Services</Link></li>
              <li><Link href="/team" className="text-rangers-bone/70 hover:text-white">Team</Link></li>
              <li><Link href="/projects/tex-2025" className="text-rangers-bone/70 hover:text-white">Projects</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="label-mono text-rangers-red mb-4">Domains</div>
            <ul className="space-y-2 text-sm text-rangers-bone/70">
              <li>팀·시즌 분석</li>
              <li>경기 예측</li>
              <li>동작 분석</li>
              <li>맞춤 대시보드</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="label-mono text-rangers-red mb-4">Contact</div>
            <p className="text-sm text-rangers-bone/70 leading-relaxed">
              협업·문의<br />
              <a href="mailto:lch092420@gmail.com" className="link-underline text-white">
                lch092420@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-rangers-bone/40">
          <div className="font-mono">
            © {new Date().getFullYear()} MONDAY LIKES BASEBALL · ALL RIGHTS RESERVED
          </div>
          <div className="font-mono">
            BUILT FOR THE LOVE OF THE GAME · ⚾
          </div>
        </div>
      </div>
    </footer>
  );
}
