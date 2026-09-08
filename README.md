# kurocafe

ぶりゴリちゃんと、ベビーカステラ・ばななスムージーのキッチンカーサイト。

## フォルダ

- `website/` : Next.jsアプリケーション
- `PROJECT_BRIEF.md` : kurocafeの制作方針
- `KITCHEN_CAR_WEBSITE_GUIDE.md` : 共通ルールの引き継ぎ用コピー

共通ルールの正本は、ローカルの隣接フォルダ `../KitchenCarHPノウハウ/` で管理します。

## ローカル開発

```powershell
cd website
npm ci
npm run dev
```

## Vercel

GitHubリポジトリ `michi-kitchen/kurocafe` をインポートします。

- Framework Preset: **Next.js**
- Root Directory: **website**
- Node.js: **22.x**
- Install Command: **npm ci**
- Build Command: **npm run build**
- Output Directory: **既定値（.next）**
- Production Branch: **main**
- 環境変数: 不要

Git連携後はmainへのPushから再デプロイできます。クライアントにはVercelのデプロイ画面で取得したURLを共有してください。

## クライアント確認用の初版

オーナーの想いはヒアリング前のダミー原稿、商品と大きなキャラクターは仮ビジュアルです。既存の丸型ロゴは使用許可済みのInstagram投稿画像を使用しています。価格・原材料・アレルギー情報・車両写真・実績などは確認後に追加します。

検索登録を防ぐため、現時点ではnoindexを指定しています。これはアクセス制限ではありません。公開用原稿・素材を確定する際に見直してください。

詳細は [website/README.md](website/README.md) を参照。
