'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  MapPin,
  CalendarDays,
  MessageCircle,
  Check,
  Copy,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
const instagram = 'https://www.instagram.com/kurocafe96/';
function Instagram({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
const nav = [
  { href: '#about', label: 'kurocafeについて' },
  { href: '#menu', label: 'メニュー' },
  { href: '#events', label: '出店について' },
  { href: '#news', label: '出店予定' },
];
const inquiry =
  'kurocafe 出店相談\n・イベント名：\n・開催日／時間：\n・会場名／住所：\n・想定来場者数：\n・ご希望のメニュー：\n・ご担当者名：\n・その他のご相談：';
function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`shop-logo ${className}`}>
      <Image
        unoptimized
        src="/assets/stickers-original.jpg"
        alt="kurocafe・ぶりゴリちゃんの公式丸型ロゴ"
        width="1440"
        height="1920"
      />
    </span>
  );
}
function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="kicker">{children}</p>;
}
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'manual'>(
    'idle',
  );
  async function copyInquiry() {
    try {
      await navigator.clipboard.writeText(inquiry);
      setCopyState('copied');
    } catch {
      setCopyState('manual');
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        本文へ移動
      </a>
      <header id="top" className="site-header">
        <a href="#top" className="brand" aria-label="kurocafe トップへ">
          <Logo />
          <span>
            <strong>kurocafe</strong>
            <small>ベビーカステラとばななスムージー</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="button yellow header-contact" href="#contact">
          出店のご相談 <ArrowUpRight size={18} />
        </a>
        <button
          type="button"
          className="mobile-toggle"
          aria-expanded={menuOpen}
          aria-controls={menuOpen ? 'mobile-nav' : undefined}
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="モバイルナビゲーション"
          >
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>
                {n.label}
                <ArrowRight size={18} />
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              出店のご相談
              <ArrowUpRight size={18} />
            </a>
          </nav>
        )}
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="hero-eyebrow">
                BABY CASTELLA &amp; BANANA SMOOTHIE
              </p>
              <h1 id="hero-title">
                おやつの時間だ、
                <br />
                <span>ウホッ！</span>
              </h1>
              <p className="hero-description">
                ベビーカステラとばななスムージーの
                <br />
                キッチンカー kurocafe
              </p>
              <div className="hero-actions">
                <a className="button green" href="#menu">
                  メニューを見る <ArrowDown size={19} />
                </a>
                <a className="button outline" href="#contact">
                  出店のご相談 <ArrowUpRight size={19} />
                </a>
              </div>
              <a className="scroll-hint" href="#about">
                <span />
                ぶりゴリちゃんと、おやつの旅へ
                <ArrowDown size={14} />
              </a>
            </div>
            <div className="hero-art">
              <Image
                unoptimized
                priority
                className="hero-image"
                src="/assets/jungle-hero.png"
                alt="ジャングルの葉を背にしたぶりゴリちゃんと、ベビーカステラ・ばななスムージーのイメージ"
                width="1122"
                height="1402"
                fetchPriority="high"
              />
              <span className="mascot-bubble">ぶりゴリちゃん</span>
              <span className="food-tag castella-tag">ベビーカステラ</span>
              <span className="food-tag banana-tag">
                ばなな
                <br />
                スムージー
              </span>
              <span className="art-note">商品・キャラクターはイメージです</span>
            </div>
          </div>
          <div className="hero-ribbon" aria-hidden="true">
            <span>HELLO, SWEET JUNGLE!</span>
            <span>✦</span>
            <span>HAVE A GORILLA GOOD DAY</span>
            <span>✦</span>
            <span>HELLO, SWEET JUNGLE!</span>
          </div>
        </section>
        <section id="about" className="section about">
          <div className="section-heading">
            <Kicker>ABOUT KUROCAFE</Kicker>
            <h2>
              おやつを囲む時間に、
              <br />
              笑顔と、ちょっとした驚きを。
            </h2>
          </div>
          <div className="about-grid">
            <div className="mascot-card">
              <span className="handwritten">はじめまして！</span>
              <Logo />
              <h3>ぶりゴリちゃんです。</h3>
              <p>
                kurocafeのマスコット。
                <br />
                このゴリラが、お店の目印！
              </p>
              <a
                href="https://www.instagram.com/kurocafe96/p/DW29frXjzuY/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagramでも会えるよ <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="owner-story">
              <p className="editorial-label">
                オーナーの想い <span>仮原稿</span>
              </p>
              <h3>
                食べる楽しさも、
                <br />
                出会う楽しさも。
              </h3>
              <p>
                ベビーカステラをひとくち、
                <br className="desktop-break" />
                ばななスムージーをひとくち。
                <br />
                いつもの場所が、ちょっと楽しい場所になる。
              </p>
              <p>
                そんなひとときを届けたいという想いを、
                <br className="desktop-break" />
                この小さなキッチンカーに乗せています。
                <br />
                ぶりゴリちゃんと一緒に、
                <br className="desktop-break" />
                思わず誰かに話したくなるおやつの時間を。
              </p>
              <p className="draft-note">
                ※
                この文章はダミーテキストです。オーナーへのヒアリング後に差し替えます。
              </p>
            </div>
          </div>
        </section>
        <section id="menu" className="section menu-section">
          <div className="section-heading">
            <Kicker>OUR SIGNATURE MENU</Kicker>
            <h2>どっちも、主役。</h2>
            <p>
              ひとくちのおやつと、ばななの一杯。
              <br />
              kurocafeの看板メニューをご紹介。
            </p>
          </div>
          <div className="menu-grid">
            <article className="menu-card castella">
              <div className="menu-topline">
                <span>01 / BABY CASTELLA</span>
                <span>ひとくちの楽しみ</span>
              </div>
              <div
                className="product-visual castella-visual"
                aria-hidden="true"
              />
              <div className="menu-card-copy">
                <h3>ベビーカステラ</h3>
                <p>
                  ひとりのおやつにも、みんなで分け合う時間にも。
                  <br />
                  ころんとしたひとくちを、会場でどうぞ。
                </p>
                <span className="menu-pill">BABY CASTELLA</span>
              </div>
            </article>
            <article className="menu-card banana">
              <div className="menu-topline">
                <span>02 / BANANA SMOOTHIE</span>
                <span>ばななのごほうび</span>
              </div>
              <div
                className="product-visual banana-visual"
                aria-hidden="true"
              />
              <div className="menu-card-copy">
                <h3>ばななスムージー</h3>
                <p>
                  おやつのおともに選びたい、ばななの一杯。
                  <br />
                  ベビーカステラと一緒に楽しんで。
                </p>
                <span className="menu-pill">BANANA SMOOTHIE</span>
              </div>
            </article>
          </div>
          <p className="menu-note">
            写真はイメージです。価格・サイズ・原材料・アレルギー情報は、確認後に掲載します。
          </p>
        </section>
        <section id="events" className="section events-section">
          <div className="events-intro">
            <div>
              <Kicker>KUROCAFE AT YOUR EVENT</Kicker>
              <h2>
                あなたの会場に、
                <br />
                おやつのジャングルを。
              </h2>
            </div>
            <p>
              メニューも、キャラクターも、楽しみのひとつに。
              <br />
              イベントや施設での出店について、
              <br />
              まずは開催場所と日程をお聞かせください。
            </p>
          </div>
          <div className="event-banner">
            <div className="event-banner-copy">
              <span className="mini-label">MEET BURI GORI</span>
              <h3>
                おいしい出会いに、
                <br />
                ぶりゴリちゃんも一緒。
              </h3>
              <p>
                ベビーカステラとばななスムージーを、
                <br />
                kurocafeの世界観とともに。
              </p>
              <a className="text-link" href="#contact">
                出店について相談する
                <ArrowUpRight size={20} />
              </a>
            </div>
            <Logo className="event-logo" />
          </div>
          <div className="conditions">
            <h3>出店をご検討の方へ</h3>
            <dl>
              <div>
                <dt>対応エリア</dt>
                <dd>
                  開催場所をお知らせください。出店可否を個別に確認します。
                </dd>
              </div>
              <div>
                <dt>スペース・設備</dt>
                <dd>
                  車両の設置場所、搬入経路、電源の有無についてご相談ください。
                </dd>
              </div>
              <div>
                <dt>メニュー・提供数</dt>
                <dd>
                  来場者数や開催時間、ご希望のメニューをお聞かせください。
                </dd>
              </div>
              <div>
                <dt>費用・出店条件</dt>
                <dd>開催内容を伺ったうえで、個別にご案内します。</dd>
              </div>
            </dl>
          </div>
        </section>
        <section id="flow" className="section flow-section">
          <div className="section-heading">
            <Kicker>LET’S PLAN SOMETHING SWEET</Kicker>
            <h2>ご相談から、出店まで。</h2>
          </div>
          <ol className="steps">
            <li>
              <span className="step-number">01</span>
              <MessageCircle size={28} />
              <h3>まずはご相談</h3>
              <p>
                日程・会場・イベントの内容を
                <br />
                Instagramからお知らせください。
              </p>
            </li>
            <li>
              <span className="step-number">02</span>
              <CalendarDays size={28} />
              <h3>内容をすり合わせ</h3>
              <p>
                出店可否、メニューや設備、
                <br />
                費用などの条件を確認します。
              </p>
            </li>
            <li>
              <span className="step-number">03</span>
              <MapPin size={28} />
              <h3>当日、会場へ</h3>
              <p>
                決定した内容に合わせて、
                <br />
                kurocafeが会場へ伺います。
              </p>
            </li>
          </ol>
          <div className="faq">
            <h3>よくあるご質問</h3>
            <Accordion>
              {[
                {
                  q: '日程や内容がまだ決まっていなくても相談できますか？',
                  a: '検討中の内容を添えてご相談ください。候補日や会場、イベントの規模が分かると、より具体的なお話ができます。',
                },
                {
                  q: '電源や設置スペースはどのくらい必要ですか？',
                  a: '必要な寸法や設備条件は現在確認中です。会場の設置場所・搬入経路・電源の有無をお知らせいただき、個別にご確認ください。',
                },
                {
                  q: '商品の原材料・アレルギーについて知りたいです。',
                  a: '原材料・アレルギー情報は確認後に掲載します。ご購入・ご依頼の前に、Instagramまたは店頭でご確認ください。',
                },
              ].map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger>
                    <span>
                      <b>Q.</b>
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>{f.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section id="news" className="section news-section">
          <div>
            <Kicker>WHERE TO MEET US</Kicker>
            <h2>次は、どこで会える？</h2>
            <p>
              出店スケジュールや日々のお知らせは、
              <br />
              Instagramでご案内しています。
            </p>
          </div>
          <a
            className="instagram-card"
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={32} />
            <span>
              <small>出店予定・最新情報</small>
              <strong>@kurocafe96</strong>
            </span>
            <ArrowUpRight size={30} />
          </a>
        </section>
        <section id="contact" className="contact-section">
          <div className="contact-inner">
            <Kicker>BRING KUROCAFE TO YOU</Kicker>
            <h2>
              楽しい一日を、
              <br />
              一緒につくりませんか。
            </h2>
            <p>
              出店のご相談は、Instagramのメッセージへ。
              <br />
              開催日・会場・イベントの内容をお知らせください。
            </p>
            <a
              className="button yellow contact-button"
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={23} />
              Instagramで出店を相談する
              <ArrowUpRight size={22} />
            </a>
            <button className="copy-button" type="button" onClick={copyInquiry}>
              {copyState === 'copied' ? (
                <Check size={16} />
              ) : (
                <Copy size={16} />
              )}{' '}
              {copyState === 'copied'
                ? '相談用テンプレートをコピーしました'
                : '相談用テンプレートをコピー'}
            </button>
            <output className="copy-status" aria-live="polite">
              {copyState === 'copied'
                ? 'Instagramのメッセージに貼り付けて、ご記入ください。'
                : copyState === 'manual'
                  ? 'コピーできませんでした。下の文章を選択してコピーしてください。'
                  : ''}
            </output>
            {copyState === 'manual' && (
              <textarea
                className="manual-template"
                aria-label="相談用テンプレート"
                defaultValue={inquiry}
                readOnly
                rows={9}
                onFocus={(e) => e.currentTarget.select()}
              />
            )}
          </div>
          <span className="contact-wordmark" aria-hidden="true">
            kurocafe
          </span>
        </section>
      </main>
      <footer className="site-footer">
        <a className="brand footer-brand" href="#top">
          <Logo />
          <strong>kurocafe</strong>
        </a>
        <p>ベビーカステラとばななスムージーのキッチンカー</p>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="kurocafeのInstagram（新しいタブで開く）"
        >
          <Instagram size={23} />
        </a>
        <small>© {new Date().getFullYear()} kurocafe</small>
      </footer>
    </>
  );
}
