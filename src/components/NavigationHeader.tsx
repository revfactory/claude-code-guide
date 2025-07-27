'use client';

import { ReactNode, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { MAIN_NAVIGATION, EXTERNAL_LINKS, GitHubIcon, NavigationItem } from '../constants/navigation';

interface NavigationHeaderProps {
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
  getLinkClassName: (href: string, baseClasses: string) => string;
  children?: ReactNode; // MobileMenu를 children으로 받음
}

export default function NavigationHeader({
  isMobileMenuOpen,
  onMobileMenuToggle,
  getLinkClassName,
  children
}: NavigationHeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const desktopLinkClasses = 'transition-colors';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown) {
        const currentRef = dropdownRefs.current[openDropdown];
        if (currentRef && !currentRef.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  const renderNavItem = (item: NavigationItem, index: number) => {
    const hasDropdown = item.items && item.items.length > 0;
    const isOpen = openDropdown === item.label;

    if (!hasDropdown && item.href) {
      return (
        <Link
          key={item.href}
          href={item.href}
          className={getLinkClassName(item.href, desktopLinkClasses)}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <div
        key={index}
        className="relative"
        ref={(el) => { dropdownRefs.current[item.label] = el; }}
      >
        <button
          onClick={() => setOpenDropdown(isOpen ? null : item.label)}
          className="flex items-center space-x-1 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span>{item.label}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        {isOpen && hasDropdown && item.items && (
          <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-2 z-[100]">
            {item.items.map((subItem) => (
              <Link
                key={subItem.href}
                href={subItem.href!}
                className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                onClick={() => setOpenDropdown(null)}
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm relative z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 dark:text-white">Hello! Vibe</span>
              <span className="text-xs text-slate-600 dark:text-slate-400">Claude Code편</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {MAIN_NAVIGATION.map((item, index) => renderNavItem(item, index))}
            
            <a 
              href={EXTERNAL_LINKS.github.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <GitHubIcon />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onMobileMenuToggle();
              }}
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

        {/* Mobile Menu (컴포지션 패턴으로 children 렌더링) */}
        {children}
      </nav>
    </header>
  );
}