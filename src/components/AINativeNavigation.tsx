'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AINativeNavItem {
  href: string;
  label: string;
  description: string;
}

const AI_NATIVE_NAV_ITEMS: AINativeNavItem[] = [
  {
    href: '/ai-native/overview',
    label: '개요',
    description: 'AI Native 개발 철학과 접근 방식'
  },
  {
    href: '/ai-native/core-principles',
    label: '핵심 원칙',
    description: 'AI Native 엔지니어의 기본 원칙'
  },
  {
    href: '/ai-native/workflow',
    label: '워크플로우',
    description: 'AI를 활용한 개발 워크플로우'
  },
  {
    href: '/ai-native/tools',
    label: '도구',
    description: 'AI 개발 도구와 활용법'
  },
  {
    href: '/ai-native/sdlc',
    label: 'SDLC',
    description: 'AI Native 소프트웨어 개발 생명주기'
  },
  {
    href: '/ai-native/best-practices',
    label: '모범 사례',
    description: 'AI 활용 개발의 모범 사례'
  }
];

export default function AINativeNavigation() {
  const pathname = usePathname();

  return (
    <nav className="mb-8">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            AI Native 가이드
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {AI_NATIVE_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block p-3 rounded-lg border transition-all ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700'
                      : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="font-medium text-slate-900 dark:text-white mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {item.description}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}