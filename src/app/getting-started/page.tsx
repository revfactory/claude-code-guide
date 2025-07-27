'use client';

import { useState } from 'react';
import NavigationHeader from '@/components/NavigationHeader';
import MobileMenu from '@/components/MobileMenu';
import Breadcrumb from '@/components/Breadcrumb';
import { useNavigationMenu } from '@/hooks/useNavigationMenu';

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
  const { mobileMenu, helpers } = useNavigationMenu();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-slate-900 dark:to-zinc-900">
      <NavigationHeader
        isMobileMenuOpen={mobileMenu.isOpen}
        onMobileMenuToggle={mobileMenu.toggle}
        getLinkClassName={helpers.getLinkClassName}
      >
        <MobileMenu
          isOpen={mobileMenu.isOpen}
          onLinkClick={mobileMenu.onLinkClick}
          getLinkClassName={helpers.getLinkClassName}
          menuRef={mobileMenu.menuRef}
        />
      </NavigationHeader>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: '시작하기' }]} />
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
                    Windows 10+ (네이티브 지원)
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
                  <p className="text-amber-800 dark:text-amber-200 font-medium">Windows 사용자 안내</p>
                  <p className="text-amber-700 dark:text-amber-300 text-sm mt-1">
                    <strong>네이티브 지원:</strong> Git for Windows 설치 시 Git Bash에서 직접 실행 가능합니다.<br/>
                    <strong>WSL 옵션:</strong> WSL 1 또는 WSL 2에서도 사용 가능합니다.
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
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">1. 터미널 열기</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-3">운영체제에 따라 터미널을 여는 방법이 다릅니다:</p>
                
                {/* Ghostty 추천 */}
                <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-7">
                        <path d="M20.3955 32C19.1436 32 17.9152 31.6249 16.879 30.9333C15.8428 31.6249 14.6121 32 13.3625 32C12.113 32 10.8822 31.6249 9.84606 30.9333C8.8169 31.6249 7.62598 31.9906 6.37177 32H6.33426C4.63228 32 3.0358 31.3225 1.83316 30.0941C0.64928 28.8844 -0.00244141 27.2926 -0.00244141 25.6117V13.3626C-9.70841e-05 5.99443 5.99433 0 13.3625 0C20.7307 0 26.7252 5.99443 26.7252 13.3626V25.6164C26.7252 29.0086 24.0995 31.8078 20.7472 31.9906C20.6299 31.9977 20.5127 32 20.3955 32Z" fill="#3551F3"/>
                        <path d="M20.3955 30.5934C19.2773 30.5934 18.1848 30.209 17.3151 29.5104C17.165 29.3884 17.0033 29.365 16.8954 29.365C16.7243 29.365 16.5508 29.426 16.4078 29.5408C15.5451 30.2207 14.4644 30.5958 13.3625 30.5958C12.2607 30.5958 11.18 30.2207 10.3173 29.5408C10.1789 29.4306 10.0148 29.3744 9.84605 29.3744C9.67726 29.3744 9.51316 29.433 9.37485 29.5408C8.50979 30.223 7.46891 30.5864 6.36474 30.5958H6.33192C5.01675 30.5958 3.7766 30.0706 2.84122 29.1142C1.91756 28.1694 1.40649 26.9269 1.40649 25.6164V13.3673C1.40649 6.77043 6.7703 1.40662 13.3625 1.40662C19.9548 1.40662 25.3186 6.77043 25.3186 13.3627V25.6164C25.3186 28.2608 23.2767 30.4434 20.6698 30.5864C20.5784 30.5911 20.4869 30.5934 20.3955 30.5934Z" fill="black"/>
                        <path d="M23.9119 13.3627V25.6165C23.9119 27.4919 22.4654 29.079 20.5923 29.1822C19.6827 29.2314 18.8435 28.936 18.1941 28.4132C17.4158 27.7873 16.321 27.8154 15.5356 28.4343C14.9378 28.9055 14.183 29.1869 13.3601 29.1869C12.5372 29.1869 11.7847 28.9055 11.1869 28.4343C10.3922 27.8084 9.29738 27.8084 8.50266 28.4343C7.90954 28.9009 7.16405 29.1822 6.35291 29.1869C4.40478 29.2009 2.81299 27.5599 2.81299 25.6118V13.3627C2.81299 7.53704 7.5368 2.81323 13.3624 2.81323C19.1881 2.81323 23.9119 7.53704 23.9119 13.3627Z" fill="white"/>
                        <path d="M11.2808 12.4366L7.3494 10.1673C6.83833 9.87192 6.18192 10.0477 5.88654 10.5588C5.59115 11.0699 5.76698 11.7263 6.27804 12.0217L8.60361 13.365L6.27804 14.7083C5.76698 15.0036 5.59115 15.6577 5.88654 16.1711C6.18192 16.6822 6.83599 16.858 7.3494 16.5626L11.2808 14.2933C11.9935 13.8807 11.9935 12.8516 11.2808 12.4389V12.4366Z" fill="black"/>
                        <path d="M20.1822 12.2913H15.0176C14.4269 12.2913 13.9463 12.7695 13.9463 13.3626C13.9463 13.9557 14.4245 14.434 15.0176 14.434H20.1822C20.773 14.434 21.2535 13.9557 21.2535 13.3626C21.2535 12.7695 20.7753 12.2913 20.1822 12.2913Z" fill="black"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-1">💡 추천 터미널: Ghostty</h4>
                      <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                        GPU 가속 렌더링으로 초고속 성능을 자랑하는 네이티브 터미널입니다.
                        Claude Code와 함께 사용하면 더욱 빠르고 부드러운 개발 경험을 제공합니다.
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-xs">
                        <span className="flex items-center text-blue-700 dark:text-blue-300">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          10배 빠른 렌더링
                        </span>
                        <span className="flex items-center text-blue-700 dark:text-blue-300">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          macOS, Linux 지원
                        </span>
                        <a href="https://ghostty.org/download" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                          다운로드 →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-slate-600 dark:text-slate-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 0 1-1.065 1.89 9.982 9.982 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.983 9.983 0 0 0 3.205 7.334l.22.194c.556.494 1.17.92 1.815 1.285.129.073.259.141.388.208a9.86 9.86 0 0 0 .551.214c.141.053.283.104.428.152.352.12.71.223 1.073.309.083.02.166.04.25.058.402.083.81.145 1.221.184.035.004.072.006.107.009a10.002 10.002 0 0 0 1.485.014c5.522 0 10.014-4.493 10.014-10.016a9.98 9.98 0 0 0-1.757-5.63l-.003-.005z"/>
                      </svg>
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 dark:text-white mb-1">macOS</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          <kbd className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 rounded">Cmd + Space</kbd>를 누르고 "터미널" 또는 "Terminal"을 입력하거나,
                          <br />응용 프로그램 → 유틸리티 → 터미널을 실행하세요.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-slate-600 dark:text-slate-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.231 5.74l-9.48-.007L5.74 2.732l-.01 9.478m16.012-6.461v16.012l-10.495 2.25L.755 21.761V5.749L11.25 3.5l10.231 2.24M11.251 12v9.767l10.508-2.255V3.992l-10.508 2.259v5.749M4.005 7.503l3.759 1.496v1.252l-3.759-1.495v1.495l2.256.751v1.001l-2.256-.75v1.254l3.759 1.496v2.254c-1.252-.25-.749 0-3.759-1.249V7.503"/>
                      </svg>
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 dark:text-white mb-1">Windows</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          <strong>네이티브 지원:</strong> Git Bash (<a href="https://git-scm.com/downloads/win" className="text-blue-600 dark:text-blue-400 hover:underline">Git for Windows</a> 필요)
                          <br /><strong>WSL 옵션:</strong> <kbd className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 rounded">Win</kbd> 키를 누르고 "wsl"을 입력
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-slate-600 dark:text-slate-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm0-13.086c1.886 0 3.444-.385 4.659-1.09-.027-.127-.039-.26-.067-.387C16.262 6.766 14.577 6 12 6S7.738 6.766 7.408 7.938c-.026.127-.041.26-.067.387 1.215.705 2.773 1.089 4.659 1.089zm0 5.586c2.538 0 4.621-.805 5.85-2.031-.068-.34-.148-.673-.24-1.001C16.411 13.265 14.421 14 12 14s-4.411-.735-5.61-2.032c-.092.328-.172.661-.24 1.001C7.379 14.195 9.462 15 12 15z"/>
                      </svg>
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 dark:text-white mb-1">Linux</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          <kbd className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 rounded">Ctrl + Alt + T</kbd>를 누르거나,
                          <br />응용 프로그램 메뉴에서 "Terminal" 또는 "터미널"을 찾아 실행하세요.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">2. Node.js 설치 확인</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-3">터미널에서 Node.js가 설치되어 있는지 확인합니다:</p>
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
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">3. Claude Code 설치</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-3">운영체제에 따라 다양한 설치 방법을 선택할 수 있습니다:</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">npm (모든 플랫폼)</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400 text-sm">터미널</span>
                        <CopyButton text="npm install -g @anthropic-ai/claude-code" />
                      </div>
                      <code className="text-green-400 font-mono">npm install -g @anthropic-ai/claude-code</code>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Homebrew (macOS/Linux)</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400 text-sm">터미널</span>
                        <CopyButton text="brew install claude-code" />
                      </div>
                      <code className="text-green-400 font-mono">brew install claude-code</code>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">curl (직접 설치)</h4>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400 text-sm">터미널</span>
                        <CopyButton text="curl -fsSL https://claude.ai/install.sh | sh" />
                      </div>
                      <code className="text-green-400 font-mono">curl -fsSL https://claude.ai/install.sh | sh</code>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Windows Git Bash 추가 설정</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                      Portable Git 설치 시 bash 경로를 지정해야 할 수 있습니다:
                    </p>
                    <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-3">
                      <code className="text-green-400 font-mono text-sm">$env:CLAUDE_CODE_GIT_BASH_PATH="C:\Program Files\Git\bin\bash.exe"</code>
                    </div>
                  </div>
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
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">4. 설치 확인</h3>
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
                          <li>• 온프레미스 배포 가능</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mt-1 mr-3">
                        <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">API Key 인증</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                          환경 변수를 통한 직접 API Key 설정
                        </p>
                        <div className="bg-slate-900 dark:bg-slate-800 rounded p-2 text-xs">
                          <code className="text-green-400 font-mono">export ANTHROPIC_API_KEY="sk-ant-..."</code>
                        </div>
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
                  <code className="text-white font-mono">CLAUDE.md 파일을 커밋해줘</code>
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
              <a href="/tutorials" className="border border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center">
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
                더 많은 문제 해결 방법은 <a href="/guides/troubleshooting" className="font-medium hover:underline">문제 해결 가이드</a>를 참고하세요.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}