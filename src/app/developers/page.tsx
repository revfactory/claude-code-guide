export default function DevelopersPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">개발자</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">개발자를 위한 리소스</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Claude Code를 활용한 개발에 필요한 도구와 사례, 엔터프라이즈 솔루션을 제공합니다.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/developers/developer-tools" className="block p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">개발 도구</h3>
              <p className="text-slate-600 dark:text-slate-400">
                개발 생산성을 높이는 다양한 도구와 통합 방법을 알아보세요.
              </p>
            </a>
            
            <a href="/developers/use-cases" className="block p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">활용 사례</h3>
              <p className="text-slate-600 dark:text-slate-400">
                실제 프로젝트에서 Claude Code를 활용한 사례를 확인하세요.
              </p>
            </a>
            
            <a href="/developers/enterprise" className="block p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">엔터프라이즈</h3>
              <p className="text-slate-600 dark:text-slate-400">
                기업 환경에서 Claude Code를 도입하고 관리하는 방법을 알아보세요.
              </p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}