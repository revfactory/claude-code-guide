# Hello! Vibe - Claude Code편

한국 개발자를 위한 Claude Code 사용자 모임 웹사이트입니다. AI 코딩 도구 Claude Code의 활용법, 튜토리얼, 커뮤니티를 제공합니다.

🌐 **Website**: [hellovibe.io](https://hellovibe.io)  
📧 **Contact**: robin.hwang@kakaocorp.com  
📚 **GitHub**: [revfactory/claude-code-guide](https://github.com/revfactory/claude-code-guide)

## 🚀 프로젝트 개요

이 프로젝트는 Next.js 15와 Tailwind CSS v4를 사용하여 구축된 현대적인 웹 애플리케이션입니다. Cloudflare를 통해 배포되며, AI 기반 자동화 워크플로우를 포함합니다.

### 주요 기능

- **📖 학습 가이드**: Claude Code 기본 사용법부터 고급 기능까지
- **🛠️ 실전 튜토리얼**: 실제 프로젝트에서 활용할 수 있는 워크플로우
- **👥 커뮤니티**: 한국 개발자들의 활용 사례 및 경험 공유
- **🔒 보안 강화**: 다층 봇 차단 시스템으로 무단 데이터 수집 방지
- **🤖 AI 자동화**: GitHub Actions를 통한 이슈 트리아지 및 PR 리뷰

## 🛠️ 기술 스택

- **프레임워크**: Next.js 15 (App Router)
- **스타일링**: Tailwind CSS v4
- **폰트**: Geist Sans & Geist Mono
- **배포**: Cloudflare (OpenNext.js)
- **패키지 매니저**: pnpm
- **자동화**: GitHub Actions + Claude AI

## 🏃‍♂️ 시작하기

### 개발 환경 설정

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행 (Turbopack 사용)
pnpm dev

# 브라우저에서 http://localhost:3000 접속
```

### 주요 명령어

```bash
# 개발
pnpm dev          # 개발 서버 시작 (Turbopack)
pnpm build        # 프로덕션 빌드
pnpm start        # 프로덕션 서버 실행
pnpm lint         # ESLint 실행

# Cloudflare 배포
pnpm preview      # 로컬에서 Cloudflare 미리보기
pnpm deploy       # Cloudflare에 배포
```

## 📁 프로젝트 구조

```
claude-code-guide/
├── src/app/                    # Next.js App Router 페이지
│   ├── api/robots/            # 동적 robots.txt API
│   ├── getting-started/       # 시작하기 가이드
│   ├── usage-guide/           # 사용법 가이드
│   ├── tutorials/             # 튜토리얼
│   ├── community/             # 커뮤니티
│   └── use-cases/            # 활용 사례
├── public/                    # 정적 자산
│   ├── robots.txt            # 봇 차단 규칙
│   └── *.svg                 # 아이콘들
├── raw/                      # 문서 소스 파일
├── .github/workflows/        # GitHub Actions 워크플로우
└── CLAUDE.md                 # Claude Code 프로젝트 지침
```

## 🔒 보안 기능

### 다층 봇 차단 시스템

1. **정적 robots.txt**: 기본 크롤러 제어
2. **동적 API 라우트**: User-Agent 기반 실시간 차단
3. **Next.js 보안 헤더**: XSS, 클릭재킹 등 방지
4. **Cloudflare 규칙**: 엣지에서 봇 차단 및 속도 제한

### 차단되는 봇 유형

- AI 훈련봇 (GPTBot, ChatGPT, CCBot, OpenAI)
- SEO 크롤러 (SemrushBot, AhrefsBot, MJ12bot)
- 데이터 수집봇 (DataForSeoBot, PetalBot, BLEXBot)
- 기타 악성 크롤러들

## 🤖 AI 자동화 워크플로우

### Claude Code GitHub Action

- **트리거**: 이슈/PR 댓글에서 `@claude` 호출
- **기능**: 자동 코드 분석, 버그 수정, 기능 구현
- **권한**: 파일 편집, 테스트 실행, 빌드 확인

### 자동 PR 리뷰

- **트리거**: PR 생성 시 자동 실행
- **기능**: 코드 품질 검토, 베스트 프랙티스 확인
- **언어**: 한국어로 건설적인 피드백 제공

### 이슈 트리아지

- **트리거**: 새 이슈 생성 시 자동 실행
- **기능**: 자동 라벨링, 중복 이슈 감지, 우선순위 설정
- **도구**: GitHub MCP 서버 연동

## 📊 배포 정보

- **도메인**: [hellovibe.io](https://hellovibe.io), [www.hellovibe.io](https://www.hellovibe.io)
- **호스팅**: Cloudflare Pages
- **SSL**: 자동 SSL/TLS 인증서
- **CDN**: Cloudflare 글로벌 CDN

## 🚀 배포하기

```bash
# Cloudflare에 배포
pnpm deploy

# 또는 수동 배포
pnpm build
wrangler pages deploy .open-next/assets --project-name=claude-code-guide
```

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'feat: Add amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

### AI 도움 받기

이슈나 PR에서 `@claude`를 멘션하면 Claude AI가 자동으로 도움을 제공합니다:

```
@claude 이 버그를 수정해주세요
@claude 새로운 컴포넌트를 추가해주세요
@claude 코드 리뷰를 해주세요
```

## 📝 라이선스

이 프로젝트는 두 가지 라이선스로 구성됩니다:

### 소스 코드 - MIT License
- 모든 소스 코드는 MIT 라이선스 하에 자유롭게 사용 가능
- 상업적 사용, 수정, 배포 허용

### 컨텐츠 및 문서 - All Rights Reserved  
- 웹사이트 컨텐츠, 튜토리얼, 가이드는 저작권 보호
- 개인 학습 및 비상업적 교육 목적으로만 사용 가능
- 상업적 재배포 또는 무단 복제 금지
- 상업적 사용 시 사전 허가 필요: robin.hwang@kakaocorp.com

자세한 내용은 [LICENSE](./LICENSE) 파일을 참조하세요.

## 📞 연락처

- **메인테이너**: robin.hwang@kakaocorp.com
- **GitHub**: [revfactory/claude-code-guide](https://github.com/revfactory/claude-code-guide)
- **웹사이트**: [hellovibe.io](https://hellovibe.io)

---

💡 **Claude Code에 대해 더 알고 싶다면?**

- [공식 문서](https://docs.anthropic.com/en/docs/claude-code)
- [GitHub 저장소](https://github.com/anthropics/claude-code)
- [커뮤니티 Discord](https://www.anthropic.com/discord)