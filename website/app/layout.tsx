import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'kurocafe｜ぶりゴリちゃんと、おやつの時間。',
  description:
    'ベビーカステラとばななスムージーのキッチンカー kurocafe。ぶりゴリちゃんの楽しい世界観と看板メニューをご紹介。イベント・施設への出店もご相談ください。',
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
