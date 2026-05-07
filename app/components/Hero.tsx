"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Diagonal stripes accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full stripes opacity-60" />


      {/* Stadium SVG silhouette */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-[0.08]"
        viewBox="0 0 1600 400"
        fill="none"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          d="M0,400 L0,300 Q400,200 800,250 Q1200,200 1600,300 L1600,400 Z"
          fill="white"
        />
        <path
          d="M780,250 L800,180 L820,250 Z"
          fill="#C0111F"
        />
      </svg>

      {/* Top label */}
      <div className="absolute top-32 left-6 lg:left-12 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-rangers-red" />
          <span className="label-mono text-rangers-red">EST. 2025 · KOREA</span>
        </div>
      </div>

      {/* Logo top right */}
      <div className="absolute top-20 right-6 lg:right-12 z-10 hidden lg:block">
        <Image
          src="/logo_dark.png"
          alt="Monday Likes Baseball"
          width={500}
          height={580}
          priority
          className="w-32 lg:w-40 h-auto block"
        />
      </div>

      {/* Main heading */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 pb-24 w-full">
        <div className="grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 lg:col-span-9">
            <h1 className="display-xl text-[18vw] lg:text-[11vw] text-rangers-chalk">
              Monday
              <br />
              <span className="font-light text-rangers-bone/50">
                Likes
              </span>
              <br />
              <span className="text-rangers-red">Baseball.</span>
            </h1>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:pb-8">
            <p className="text-rangers-bone/85 text-base lg:text-lg leading-relaxed">
              한 시즌의 결과부터 한 동작의 디테일까지.
              <br />
              <span className="text-rangers-bone/50">
                데이터로 풀어내는 야구의 모든 결.
              </span>
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="/dashboard"
                className="group inline-flex items-center gap-2 text-sm border-b border-white pb-1 hover:border-rangers-red hover:text-rangers-red transition-colors"
              >
                Launch Dashboard
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom ticker */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs font-mono text-rangers-bone/40">
          <div>SCROLL ↓ TO EXPLORE</div>
          <div>BOOTCAMP COHORT · MAY 2026 · SEOUL, KR</div>
        </div>
      </div>
    </section>
  );
}
