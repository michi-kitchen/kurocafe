'use strict';

const menuButton = document.querySelector('.mobile-toggle');
const mobileNav = document.querySelector('#mobile-nav');
const menuIcon = menuButton.innerHTML;

function setMenu(open) {
  mobileNav.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  menuButton.innerHTML = open ? '<span aria-hidden="true">×</span>' : menuIcon;
}

menuButton.hidden = false;
menuButton.addEventListener('click', () => setMenu(mobileNav.hidden));
mobileNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !mobileNav.hidden) {
    setMenu(false);
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 1051px)').addEventListener('change', () => setMenu(false));

const inquiry = `kurocafe 出店相談
・イベント名：
・開催日／時間：
・会場名／住所：
・想定来場者数：
・ご希望のメニュー：
・ご担当者名：
・その他のご相談：`;
const copyButton = document.querySelector('.copy-button');
const copyStatus = document.querySelector('.copy-status');
const manualTemplate = document.querySelector('.manual-template');
copyButton.hidden = false;
manualTemplate.value = inquiry;
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(inquiry);
    manualTemplate.hidden = true;
    copyButton.textContent = '✓ 相談用テンプレートをコピーしました';
    copyStatus.textContent = 'Instagramのメッセージに貼り付けて、ご記入ください。';
  } catch {
    manualTemplate.hidden = false;
    copyStatus.textContent = '下の文章を選択してコピーしてください。';
    manualTemplate.focus();
    manualTemplate.select();
  }
});
manualTemplate.addEventListener('focus', () => manualTemplate.select());

// One-time accents; content remains visible without JavaScript.
if ('IntersectionObserver' in window) {
  const accents = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-seen');
      accents.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.banana,.mascot-card,.event-banner').forEach(item => accents.observe(item));
}
// Animate native details while preserving keyboard and no-JavaScript operation.
document.querySelectorAll('.faq details').forEach(details => {
  const summary = details.querySelector('summary');
  let animation = null;
  let expanded = details.open;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function settle() {
    if (animation) {
      animation.onfinish = null;
      animation.cancel();
      animation = null;
    }
    details.open = expanded;
    details.style.height = '';
    details.style.overflow = '';
  }
  summary.addEventListener('click', event => {
    if (!details.animate || reducedMotion.matches) return;
    event.preventDefault();
    const from = details.getBoundingClientRect().height;
    expanded = animation ? !expanded : !details.open;
    if (animation) {
      animation.onfinish = null;
      animation.cancel();
    }
    details.open = true;
    details.style.height = '';
    const border = parseFloat(getComputedStyle(details).borderBottomWidth) || 0;
    const to = expanded ? details.getBoundingClientRect().height : summary.getBoundingClientRect().height + border;
    details.style.overflow = 'hidden';
    animation = details.animate(
      { height: [from + 'px', to + 'px'] },
      { duration: 340, easing: 'cubic-bezier(.22, 1, .36, 1)' }
    );
    animation.onfinish = settle;
  });
  reducedMotion.addEventListener('change', () => { if (animation) settle(); });
  window.addEventListener('resize', () => { if (animation) settle(); });
});
