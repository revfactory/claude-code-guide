import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  
  // List of blocked bot patterns
  const blockedBots = [
    'SemrushBot',
    'AhrefsBot', 
    'MJ12bot',
    'DotBot',
    'BLEXBot',
    'DataForSeoBot',
    'SeznamBot',
    'PetalBot',
    'GPTBot',
    'ChatGPT-User',
    'CCBot',
    'anthropic-ai',
    'Claude-Web',
    'ChatGPT',
    'OpenAI',
    'AI2Bot',
    'OAI-SearchBot',
    'SiteAuditBot',
    'MegaIndex',
    'ZoomBot',
    'VelenPublicWebCrawler',
    'SurdotlyBot',
    'ScreamingFrogSEOSpider',
    'ltx71'
  ];

  // Check if the user agent contains any blocked bot patterns
  const isBlockedBot = blockedBots.some(bot => 
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );

  if (isBlockedBot) {
    // Return a restrictive robots.txt for blocked bots
    return new NextResponse(
      `User-agent: *
Disallow: /
`, 
      {
        status: 200,
        headers: {
          'Content-Type': 'text/plain',
          'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
        },
      }
    );
  }

  // Return normal robots.txt for legitimate crawlers
  const robotsTxt = `# Allow legitimate search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Block malicious and data scraping bots
User-agent: SemrushBot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: BLEXBot
Disallow: /

User-agent: DataForSeoBot
Disallow: /

User-agent: SeznamBot
Disallow: /

User-agent: PetalBot
Disallow: /

User-agent: YandexImages
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Claude-Web
Disallow: /

# Block AI training bots
User-agent: ChatGPT
Disallow: /

User-agent: OpenAI
Disallow: /

User-agent: AI2Bot
Disallow: /

User-agent: OAI-SearchBot
Disallow: /

# Block aggressive crawlers
User-agent: SiteAuditBot
Disallow: /

User-agent: MegaIndex
Disallow: /

User-agent: ZoomBot
Disallow: /

User-agent: VelenPublicWebCrawler
Disallow: /

User-agent: MegaIndex.ru
Disallow: /

User-agent: SurdotlyBot
Disallow: /

User-agent: ScreamingFrogSEOSpider
Disallow: /

User-agent: ltx71
Disallow: /

# Default rule for unknown bots
User-agent: *
Crawl-delay: 10
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/

# Sitemap location
Sitemap: https://hellovibe.io/sitemap.xml`;

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}