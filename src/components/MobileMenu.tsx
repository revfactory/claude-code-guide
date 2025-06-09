'use client';

import { MutableRefObject } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onLinkClick: () => void;
  getLinkClassName: (href: string, baseClasses: string) => string;
  menuRef: MutableRefObject<HTMLDivElement | null>;
}

export default function MobileMenu({
  isOpen,
  onLinkClick,
  getLinkClassName,
  menuRef
}: MobileMenuProps) {
  return (
    <div 
      ref={menuRef}
      className={`md:hidden relative z-40 transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0'
      }`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-200 dark:border-slate-700">
        <Link href="/" className={getLinkClassName('/', 'block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors')} onClick={onLinkClick}>
          홈
        </Link>
        <Link href="/getting-started" className={getLinkClassName('/getting-started', 'block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors')} onClick={onLinkClick}>
          시작하기
        </Link>
        <Link href="/usage-guide" className={getLinkClassName('/usage-guide', 'block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors')} onClick={onLinkClick}>
          사용법 가이드
        </Link>
        <Link href="/tutorials" className={getLinkClassName('/tutorials', 'block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors')} onClick={onLinkClick}>
          튜토리얼
        </Link>
        <Link href="/community" className={getLinkClassName('/community', 'block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors')} onClick={onLinkClick}>
          커뮤니티
        </Link>
        <Link href="/use-cases" className={getLinkClassName('/use-cases', 'block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors')} onClick={onLinkClick}>
          활용 사례
        </Link>
        <a href="https://github.com/revfactory/claude-code-guide" target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" onClick={onLinkClick}>
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  );
}