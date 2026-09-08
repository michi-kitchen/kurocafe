# kurocafe

ベビーカステラ・ばななスムージーと「ぶりゴリちゃん」の静的HTMLサイトです。

## ファイル

- `index.html` — ページの構成と文章
- `styles.css` — 配色・レイアウト・スマートフォン対応
- `script.js` — スマホメニューと相談テンプレートのコピー
- `assets/` — 画像素材
- `favicon.svg` — 既存ロゴを使ったアイコン

`index.html` をブラウザで開けば表示できます。パッケージのインストール・ビルド・フレームワークは不要です。

## 配信する場合

リポジトリ直下がサイトのルートです。Vercelでは Framework Preset を Other、Root Directory をリポジトリ直下にし、ビルド・インストールのコマンドは空欄にします。設定とデプロイはユーザーが行います。

## 制作中の内容

- 世界観とメニューを優先し、出店予定は後半に配置。
- オーナーの想いは、ヒアリング後に差し替えるダミー原稿。
- 商品画像と大きなぶりゴリちゃんは承認済みの方向性に基づく生成イメージ。正式素材に差し替え予定。
- 価格・サイズ・原材料・アレルギー情報、車両写真、実績、具体的な出店条件は確認後に追加。
- 問い合わせはInstagramへのリンク。フォーム送信や自動メッセージ送信は行いません。
- 現在はnoindexを指定。アクセス制限ではありません。

## 素材の出典

丸型ロゴ: https://www.instagram.com/kurocafe96/p/DW29frXjzuY/
オーナーの許可済み投稿画像をそのまま保存し、CSSでロゴの範囲を表示しています。

FV: 内蔵画像生成ツールで制作した仮素材。バナナを頭に乗せたゴリラ、ベビーカステラ、ばななスムージー、青緑のジャングルの葉を組み合わせています。

## 共通ルール

正本は、隣接フォルダ `../KitchenCarHPノウハウ/KITCHEN_CAR_WEBSITE_GUIDE.md` にあります。ここにはkurocafe固有の制作内容だけを保存します。

## ジャングル全体デザイン（2026-09-08）

- 見出しはMochiy Pop One。全収録文字を含むローカル配信版。ライセンスは assets/OFL-MochiyPopOne.txt。文字の一部が代替フォントになる問題を防ぐため、文字を間引かない。
- assets/menu-sample.png は生成した仮の商品写真。メニュー内で切り取り位置を変えて表示。正式写真が届いたら各商品の img とCSSのトリミングを差し替える。
- assets/truck-sample.png は生成した架空の車両イラスト。実車の色や仕様を示すものではない。
- assets/jungle-leaf.svg と assets/banana.svg は装飾用ベクター。
- バナナ・ステッカーは一度だけ動く。動きを減らす設定ではアニメーションを停止。
- 下部のぶりゴリちゃんを押すとあいさつ。既存のFV仮画像を使用。
- メニュー、FAQ、相談文コピー（コピー不可時の手動選択）、320〜1440pxの表示を確認。

### 仮画像の制作記録

内蔵画像生成ツールを使用。正式画像に差し替えるまでの仮素材。

商品画像プロンプト：
Create one wide 3:2 editorial food photograph for a Japanese baby castella and banana smoothie food truck website. Warm ivory seamless background #fff7e6. Left half: generous small kraft paper boat filled with golden round Japanese baby castella cakes, a few scattered in foreground. Right half: a clear tall takeaway cup of pale creamy banana smoothie with flat clear lid and white straw, ripe banana beside it. Entire objects visible with generous margins, appetizing detailed natural studio photography, warm sunlight soft shadows, playful premium food magazine art direction. No text, no logo, no people, no foliage. This is explicitly a temporary illustrative product image, not real shop products.

車両画像プロンプト：
Wide 3:2 playful hand-painted editorial illustration for a jungle themed Japanese sweets food truck website. A charming small retro teal and cream Japanese kei food truck in side three-quarter view, yellow striped awning open over serving window, surrounded by large lush teal banana leaves and palms. Warm ivory #fff7e6 background, dark forest green ink outlines, screenprint texture, banana yellow details. Truck on a small sandy clearing. No people, no gorilla, no logos, no text. Clearly an illustration, not a photograph or depiction of a real specific truck. Entire truck visible, premium whimsical food brand visual, generous space around truck.

## 共有プレビュー（OGP）

公開URL: https://kurocafenew.vercel.app/
共有画像: assets/ogp.png（1733×907、PNG）
OGPとTwitter Cardのタイトル・説明文・画像をHTMLのheadに指定。公開ドメイン変更時はcanonical、og:url、og:image、twitter:imageを更新する。

内蔵画像生成ツールで既存FVを参照して共有画像を制作。
プロンプト: Create a polished horizontal 1200x630 social sharing OGP banner for kurocafe based on the provided website hero reference. Preserve this gorilla mascot's appearance, banana on head, baby castella and banana smoothie. Composition: large friendly gorilla and appetizing food on the right half; left half clear warm ivory space with huge dark forest green text exactly 'kurocafe', and below bold Japanese text exactly 'ベビーカステラと' then 'ばななスムージー'. Small bottom line 'ぶりゴリちゃんと、おやつの時間。'. Teal jungle leaves framing the corners, banana yellow underline accent. Warm cream background, textured playful editorial illustration matching reference. All text and faces safely inset from edges. No sticker sheets, no UI buttons, no additional text. This is a website share card, wide landscape ratio 1.91:1.

## FVの商品差し替え（2026-09-08）

assets/jungle-hero-gorilla-castella.png をFVに使用。ユーザー提供のゴリラ型・ハート型カステラ写真を参照し、内蔵画像生成ツールで既存FVの商品部分を編集した合成イメージ。元のFVは下部の既存表示で使用するため保存。メニュー画像・OGPは今回の変更対象外。

生成指示: Edit image 1 only. Replace ONLY the round baby castella cakes inside the foreground kraft paper boat with the actual style of cakes shown in image 2: detailed molded seated gorilla shaped baby castella, golden brown with lighter yellow edges, with one or two heart shaped cakes among them. Preserve the gorilla cake molded facial features, arms, chest and seated body appearance from reference image 2. Arrange these realistically in the same paper boat, similar size and pile volume as the original cakes. Image 2 is product reference only; do not include its newspaper wrapper, foliage or background. Keep ALL other elements of image 1 unchanged: exact cartoon gorilla mascot and facial expression and waving hand and head banana, smoothie cup and straw, teal jungle leaves, cream background, original portrait composition, lighting and margins. No text. Maintain original 1122x1402 aspect ratio. The result must look like the original hero with only the cake product changed.
