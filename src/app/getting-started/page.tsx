'use client';

import { useState } from 'react';

function CopyButton({ text, className = "" }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`text-slate-400 hover:text-white transition-colors ${className}`}
      title="클립보드에 복사"
    >
      {copied ? (
        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  );
}

export default function GettingStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-slate-900 dark:to-zinc-900">
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <div className="flex flex-col">
                <a href="/" className="text-xl font-bold text-slate-900 dark:text-white">Hello! Vibe</a>
                <span className="text-xs text-slate-600 dark:text-slate-400">Claude Code편</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">홈</a>
              <a href="/getting-started" className="text-blue-600 dark:text-blue-400 font-medium">시작하기</a>
              <a href="/usage-guide" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">사용법 가이드</a>
              <a href="/tutorials" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">튜토리얼</a>
              <a href="/community" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">커뮤니티</a>
              <a href="/use-cases" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">활용 사례</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Claude Code 시작하기
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Claude Code 설치부터 첫 프로젝트 설정까지, 단계별로 안내해드립니다.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
              <span className="ml-2 text-sm font-medium text-slate-900 dark:text-white">시스템 요구사항</span>
            </div>
            <div className="w-8 h-0.5 bg-slate-300 dark:bg-slate-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
              <span className="ml-2 text-sm font-medium text-slate-900 dark:text-white">설치</span>
            </div>
            <div className="w-8 h-0.5 bg-slate-300 dark:bg-slate-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">3</div>
              <span className="ml-2 text-sm font-medium text-slate-900 dark:text-white">인증</span>
            </div>
            <div className="w-8 h-0.5 bg-slate-300 dark:bg-slate-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">4</div>
              <span className="ml-2 text-sm font-medium text-slate-900 dark:text-white">첫 프로젝트</span>
            </div>
          </div>
        </div>

        {/* Step 1: System Requirements */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">1</span>
              시스템 요구사항 확인
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">운영체제</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    macOS 10.15 이상
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Ubuntu 20.04+ / Debian 10+
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Windows (WSL 환경)
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">하드웨어 & 소프트웨어</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    최소 4GB RAM
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Node.js 18 이상
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                    인터넷 연결
                  </li>
                  <li className="flex items-center text-slate-500 dark:text-slate-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Git 2.23+ (선택사항)
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <div className="flex">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <p className="text-amber-800 dark:text-amber-200 font-medium">Windows 사용자 주의사항</p>
                  <p className="text-amber-700 dark:text-amber-300 text-sm mt-1">
                    Claude Code는 Windows에서 직접 실행되지 않습니다. WSL(Windows Subsystem for Linux) 환경에서 실행해주세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Installation */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">2</span>
              Claude Code 설치
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">1. Node.js 설치 확인</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-3">먼저 Node.js가 설치되어 있는지 확인합니다:</p>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">터미널</span>
                    <CopyButton text="node --version" />
                  </div>
                  <code className="text-green-400 font-mono">node --version</code>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
                  v18.0.0 이상이 표시되어야 합니다. 설치되지 않았다면 <a href="https://nodejs.org" className="text-blue-600 dark:text-blue-400 hover:underline">nodejs.org</a>에서 다운로드하세요.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">2. Claude Code 설치</h3>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">터미널</span>
                    <CopyButton text="npm install -g @anthropic-ai/claude-code" />
                  </div>
                  <code className="text-green-400 font-mono">npm install -g @anthropic-ai/claude-code</code>
                </div>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <div className="flex">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-red-800 dark:text-red-200 font-medium">중요한 주의사항</p>
                    <p className="text-red-700 dark:text-red-300 text-sm mt-1">
                      <code className="bg-red-100 dark:bg-red-800 px-1 rounded">sudo npm install -g</code>를 사용하지 마세요. 권한 문제와 보안 위험을 초래할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">3. 설치 확인</h3>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">터미널</span>
                    <CopyButton text="claude --version" />
                  </div>
                  <code className="text-green-400 font-mono">claude --version</code>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
                  Claude Code 버전이 표시되면 설치가 완료된 것입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Authentication */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">3</span>
              인증 설정
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Claude Code 시작</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-3">프로젝트 디렉토리로 이동한 후 Claude Code를 시작합니다:</p>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">터미널</span>
                    <CopyButton text="cd my-project" />
                  </div>
                  <code className="text-green-400 font-mono block mb-2">cd my-project</code>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm invisible">터미널</span>
                    <CopyButton text="claude" />
                  </div>
                  <code className="text-green-400 font-mono">claude</code>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">인증 방법 선택</h3>
                <div className="grid gap-4">
                  <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mt-1 mr-3">
                        <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Anthropic Console (권장)</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                          기본 옵션으로, Anthropic Console을 통해 OAuth 인증을 진행합니다.
                        </p>
                        <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-1">
                          <li>• console.anthropic.com에서 활성 결제 필요</li>
                          <li>• 가장 안정적인 인증 방법</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mt-1 mr-3">
                        <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Claude Pro/Max 플랜</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                          Claude.ai Pro 또는 Max 구독을 통한 통합 인증
                        </p>
                        <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-1">
                          <li>• 웹 인터페이스와 동일한 계정 사용</li>
                          <li>• 하나의 구독으로 모든 서비스 이용</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mt-1 mr-3">
                        <span className="text-green-600 dark:text-green-400 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">기업용 플랫폼</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                          Amazon Bedrock 또는 Google Vertex AI 연동
                        </p>
                        <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-1">
                          <li>• 기업 클라우드 인프라와 통합</li>
                          <li>• 규정 준수 및 보안 요구사항 충족</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: First Project */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">4</span>
              첫 프로젝트 초기화
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">1. 프로젝트 요약 생성</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-3">Claude Code가 프로젝트를 이해할 수 있도록 요약을 생성합니다:</p>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Claude Code</span>
                    <CopyButton text="이 프로젝트에 대해 요약해줘" />
                  </div>
                  <code className="text-blue-400 font-mono">claude{`>`} </code>
                  <code className="text-white font-mono">이 프로젝트에 대해 요약해줘</code>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">2. CLAUDE.md 파일 생성</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-3">프로젝트 가이드 파일을 자동으로 생성합니다:</p>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Claude Code</span>
                    <CopyButton text="/init" />
                  </div>
                  <code className="text-blue-400 font-mono">claude{`>`} </code>
                  <code className="text-white font-mono">/init</code>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
                  이 명령어는 프로젝트의 구조, 개발 명령어, 아키텍처 정보를 포함한 CLAUDE.md 파일을 생성합니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">3. 변경사항 커밋</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-3">생성된 CLAUDE.md 파일을 저장소에 추가합니다:</p>
                <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Claude Code</span>
                    <CopyButton text="생성된 CLAUDE.md 파일을 커밋해줘" />
                  </div>
                  <code className="text-blue-400 font-mono">claude{`>`} </code>
                  <code className="text-white font-mono">생성된 CLAUDE.md 파일을 커밋해줘</code>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="flex">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-green-800 dark:text-green-200 font-medium">축하합니다!</p>
                    <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                      Claude Code 설정이 완료되었습니다. 이제 자연어 명령으로 코딩을 시작할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">다음 단계</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">기본 사용법 익히기</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• 코드 질문하기: "인증이 어떻게 작동하는지 설명해줘"</li>
                  <li>• 파일 편집하기: "폼에 입력 검증을 추가해줘"</li>
                  <li>• 테스트 실행하기: "테스트를 실행하고 실패한 부분을 수정해줘"</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">고급 기능 탐험</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• 확장된 사고: "이 기능의 아키텍처에 대해 깊이 생각해봐"</li>
                  <li>• Git 자동화: "이 기능에 대한 PR을 생성해줘"</li>
                  <li>• 웹 검색: Claude가 자동으로 문서를 찾아 참조</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center">
                홈으로 돌아가기
              </a>
              <a href="/use-cases" className="border border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center">
                실전 튜토리얼
              </a>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">문제 해결</h2>
            
            <div className="space-y-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="font-medium text-slate-900 dark:text-white">WSL에서 설치 오류가 발생해요</span>
                  <svg className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 p-4 text-slate-600 dark:text-slate-300">
                  <p className="mb-2">WSL에서 Windows npm을 사용하고 있을 수 있습니다. 다음을 시도해보세요:</p>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3 mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-xs">터미널</span>
                      <CopyButton text="npm config set os linux" className="scale-75" />
                    </div>
                    <code className="text-green-400 text-sm">npm config set os linux</code>
                  </div>
                  <p>또는 강제 설치:</p>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-xs">터미널</span>
                      <CopyButton text="npm install -g @anthropic-ai/claude-code --force --no-os-check" className="scale-75" />
                    </div>
                    <code className="text-green-400 text-sm">npm install -g @anthropic-ai/claude-code --force --no-os-check</code>
                  </div>
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="font-medium text-slate-900 dark:text-white">"node: not found" 오류가 나타나요</span>
                  <svg className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 p-4 text-slate-600 dark:text-slate-300">
                  <p className="mb-2">WSL이 Windows Node.js를 사용하고 있을 수 있습니다. 다음으로 확인:</p>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3 mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-xs">터미널</span>
                      <CopyButton text="which node && which npm" className="scale-75" />
                    </div>
                    <code className="text-green-400 text-sm">which node && which npm</code>
                  </div>
                  <p>경로가 <code>/mnt/c/</code>로 시작한다면 Linux용 Node.js를 설치하세요:</p>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-xs">터미널</span>
                      <CopyButton text="curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash" className="scale-75" />
                    </div>
                    <code className="text-green-400 text-sm">curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash</code>
                  </div>
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="font-medium text-slate-900 dark:text-white">권한 오류가 발생해요</span>
                  <svg className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 p-4 text-slate-600 dark:text-slate-300">
                  <p className="mb-2">npm 글로벌 설치 권한을 설정하세요:</p>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3 mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-xs">터미널</span>
                      <CopyButton text="mkdir ~/.npm-global" className="scale-75" />
                    </div>
                    <code className="text-green-400 text-sm block mb-1">mkdir ~/.npm-global</code>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-xs invisible">터미널</span>
                      <CopyButton text="npm config set prefix '~/.npm-global'" className="scale-75" />
                    </div>
                    <code className="text-green-400 text-sm">npm config set prefix '~/.npm-global'</code>
                  </div>
                  <p>그리고 ~/.bashrc 또는 ~/.zshrc에 추가:</p>
                  <div className="bg-slate-900 dark:bg-slate-800 rounded p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-xs">설정 파일</span>
                      <CopyButton text="export PATH=~/.npm-global/bin:$PATH" className="scale-75" />
                    </div>
                    <code className="text-green-400 text-sm">export PATH=~/.npm-global/bin:$PATH</code>
                  </div>
                </div>
              </details>
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-blue-800 dark:text-blue-200">
                더 많은 문제 해결 방법은 <a href="/use-cases" className="font-medium hover:underline">문제 해결 가이드</a>를 참고하세요.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}