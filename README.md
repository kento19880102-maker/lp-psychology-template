# 汎用LPテンプレート v2 心理学設計版

ココナラなどで業種別にカスタマイズして納品しやすい、Next.js 16 / TypeScript / Tailwind CSS v4 の1ページLPテンプレートです。架空のWebコンサルティング会社「Atelier Verde」をダミーコンテンツとして入れています。

## セットアップ

```bash
npm install
npm run dev
```

開発サーバー起動後、`http://localhost:3000` を確認してください。

## 1. コピーを変更する

全テキストは `src/content/site.ts` に集約しています。

変更する主な項目:

- `company`: 社名、屋号、サービス名
- `meta`: title、description、OG画像
- `meta.url`: Vercel公開後のURL。OG画像解決に使います
- `nav`: ヘッダーナビ。5項目以内推奨
- `cta`: 全CTAの共通テキスト
- `hero`: ファーストビュー
- `problems` / `loss` / `features`: 課題、損失訴求、強み
- `testimonials` / `logos`: お客様の声、導入企業
- `pricing`: 松竹梅の料金プラン
- `faq`: よくある質問
- `form`: フォーム見出しと送信先

コンポーネント側には固定コピーを極力置かず、`site.ts` を編集するだけで業種別LPへ転用できます。

## 2. 心理学要素をON/OFFする

`src/content/site.ts` の `psychology` を編集します。

```ts
psychology: {
  scarcityBanner: { enabled: true, text: "今月限定キャンペーン中" },
  socialProofStats: [
    { label: "導入企業", value: "120社" },
    { label: "満足度", value: "98%" },
    { label: "実績", value: "10年" }
  ],
  lossAversion: { enabled: true, text: "今始めないと、競合との差は広がるばかりです" },
  priceAnchoring: { enabled: true },
  limitedOffer: { enabled: true, text: "5月限定価格 / 先着8名様まで" }
}
```

使っている設計:

- 社会的証明: 実績スタッツ、お客様の声、ロゴウォール
- 希少性: ヒーローバナー、料金セクションの限定表示
- アンカリング: 松竹梅プラン、通常価格と今だけ価格、中央プラン強調
- 認知負荷軽減: 5項目以内ナビ、3項目フォーム、短文カード
- 損失回避: 問題直後のリスク提示、最終CTAの補助テキスト
- 導線設計: CTA 3箇所、スマホ固定CTA、同一文言・同一色

## 3. テーマカラーを変更する

`src/app/globals.css` のCSS変数を書き換えます。

```css
:root {
  --color-primary: #176b5b;
  --color-primary-foreground: #ffffff;
  --color-background: #fbfaf7;
  --color-foreground: #17211f;
  --color-muted: #66716d;
}
```

アクセントカラーだけ変える場合は、まず `--color-primary` を変更してください。ボタン、料金強調、アイコン背景などに反映されます。

## 4. 画像と動画を差し替える

`public/` 配下のファイルを同名で差し替えます。

- `public/logo.svg`: ヘッダーのロゴ
- `public/hero-video.mp4`: ヒーロー背景動画。AI生成動画を同名で配置
- `public/og-image.png`: SNSシェア用画像
- `public/testimonial-1.svg` など: お客様の声の写真

動画が空または再生できない場合でも、ヒーローにはグラデーション背景が表示されます。

## 5. フォーム送信先を変更する

Formspreeを使う場合、`src/content/site.ts` の `form.action` を発行されたURLに変更します。

```ts
form: {
  action: "https://formspree.io/f/your-form-id"
}
```

フォーム項目は、認知負荷を下げるため `名前 / メール / メッセージ` の3項目に絞っています。

## 6. Vercelへデプロイする

1. GitHubにこのプロジェクトをpush
2. Vercelで「Add New Project」を選択
3. 対象リポジトリを選ぶ
4. Framework Preset が Next.js であることを確認
5. Deploy を押す

環境変数は標準状態では不要です。
