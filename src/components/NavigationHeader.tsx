'use client';

import { useRef, MutableRefObject } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

interface NavigationHeaderProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  handleCloseButtonClick: () => void;
  handleLinkClick: () => void;
  menuRef: MutableRefObject<HTMLDivElement | null>;
}

export default function NavigationHeader({
  isMobileMenuOpen,
  toggleMobileMenu,
  handleCloseButtonClick,
  handleLinkClick,
  menuRef
}: NavigationHeaderProps) {
  const pathname = usePathname();

  // Check if current path matches menu item
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const getLinkClassName = (href: string, baseClasses: string) => {
    const active = isActiveLink(href);
    return `${baseClasses} ${active ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400'}`;
  };

  return (
    <header className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 dark:text-white">Hello! Vibe</span>
              <span className="text-xs text-slate-600 dark:text-slate-400">Claude Code편</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={getLinkClassName('/', 'transition-colors')}>
              홈
            </Link>
            <Link href="/getting-started" className={getLinkClassName('/getting-started', 'transition-colors')}>
              시작하기
            </Link>
            <Link href="/usage-guide" className={getLinkClassName('/usage-guide', 'transition-colors')}>
              사용법 가이드
            </Link>
            <Link href="/tutorials" className={getLinkClassName('/tutorials', 'transition-colors')}>
              튜토리얼
            </Link>
            <Link href="/community" className={getLinkClassName('/community', 'transition-colors')}>
              커뮤니티
            </Link>
            <Link href="/use-cases" className={getLinkClassName('/use-cases', 'transition-colors')}>
              활용 사례
            </Link>
            <a href="https://github.com/revfactory/claude-code-guide" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={isMobileMenuOpen ? handleCloseButtonClick : toggleMobileMenu}
              className="relative z-50 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 touch-manipulation"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            >
              <span className="sr-only">{isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onLinkClick={handleLinkClick}
          getLinkClassName={getLinkClassName}
          menuRef={menuRef}
        />
      </nav>
    </header>
  );
}