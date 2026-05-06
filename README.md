# Monday Likes Baseball

야구 데이터 분석 및 바이오메카닉스 컨설팅 회사 웹사이트입니다.
Next.js 14 (App Router) + TypeScript + Tailwind CSS로 제작되었습니다.

## 빠른 시작

```bash
# 1. 의존성 설치
npm install

# 2. 환경변수 설정
cp .env.local.example .env.local
# .env.local을 열어 NEXT_PUBLIC_DASHBOARD_URL 수정

# 3. 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기.

## 프로젝트 구조

```
app/
├── layout.tsx              # 전역 레이아웃 (Nav, Footer)
├── page.tsx                # 홈페이지 (메인)
├── globals.css             # 전역 스타일 + 폰트 임포트
├── components/
│   ├── Nav.tsx             # 상단 내비게이션
│   ├── Footer.tsx          # 푸터
│   ├── Hero.tsx            # 히어로 섹션
│   ├── BrandSection.tsx    # 브랜드 소개 (§01)
│   ├── Services.tsx        # 서비스 소개 (§02)
│   ├── FeaturedProject.tsx # TEX 2025 프로젝트 (§03)
│   └── CTA.tsx             # 마지막 콜투액션
├── about/page.tsx          # /about
├── services/page.tsx       # /services
└── projects/tex-2025/page.tsx  # /projects/tex-2025
```

## Streamlit 대시보드 연결

`Launch Dashboard` 버튼은 `.env.local`의 `NEXT_PUBLIC_DASHBOARD_URL` 값으로
**새 탭**에서 열립니다 (`target="_blank"`).

iframe 임베드는 사용하지 않습니다 — Streamlit의 `X-Frame-Options` 정책,
모바일 UX, 사이드바 가시성 문제 때문에 새 탭 방식이 가장 안정적입니다.

## 배포

### Vercel (Next.js — 추천)
```bash
npm install -g vercel
vercel
```
환경변수 `NEXT_PUBLIC_DASHBOARD_URL`을 Vercel 대시보드에서 설정해야 합니다.

### Streamlit Community Cloud (Streamlit 앱)
1. Streamlit 앱을 GitHub에 푸시
2. [share.streamlit.io](https://share.streamlit.io) 에서 앱 연결
3. 배포된 URL을 Next.js 사이트의 환경변수에 등록

## 디자인 노트

- **Color**: Texas Rangers 블루(#003278) + 레드(#C0111F) 기반의 다크 테마
- **Typography**: Fraunces (display, italic) + Geist (sans) + JetBrains Mono (data)
- **Layout**: 12-column grid with editorial section markers (§01, §02, ...)

## 라이선스

Private project.
