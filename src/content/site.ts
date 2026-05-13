export interface Stat {
  label: string;
  value: string;
}

export interface Plan {
  name: string;
  note: string;
  regularPrice: string;
  currentPrice: string;
  recommended?: boolean;
  badge?: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  comment: string;
}

export interface SiteContent {
  company: string;
  meta: { title: string; description: string; ogImage: string; url: string };
  nav: { label: string; href: string }[];
  cta: { label: string; subLabel: string; href: string };
  psychology: {
    scarcityBanner: { enabled: boolean; text: string };
    socialProofStats: Stat[];
    lossAversion: { enabled: boolean; text: string };
    priceAnchoring: { enabled: boolean };
    limitedOffer: { enabled: boolean; text: string };
  };
  hero: { title: string; lead: string; videoSrc: string; secondaryCta: string };
  problems: { eyebrow: string; title: string; lead: string; items: string[] };
  loss: { title: string; risks: string[] };
  features: { eyebrow: string; title: string; lead: string; items: { icon: string; title: string; text: string }[] };
  beforeAfter: { eyebrow: string; title: string; before: string[]; after: string[] };
  testimonials: { eyebrow: string; title: string; items: Testimonial[] };
  logos: { title: string; note?: string; items: string[] };
  pricing: { eyebrow: string; title: string; lead: string; plans: Plan[] };
  faq: { eyebrow: string; title: string; items: { question: string; answer: string }[] };
  form: { eyebrow: string; title: string; lead: string; action: string };
  footer: { sns: { label: string; href: string }[] };
}

export const site: SiteContent = {
  company: "Studio Verena",
  meta: {
    title: "Studio Verena | 成果につながるWebコンサルティング",
    description: "Studio Verenaは、小さな改善を積み重ね、問い合わせにつながる導線を設計するWebコンサルティング会社です。",
    ogImage: "/og-image.png",
    url: "https://example.com",
  },
  nav: [
    { label: "課題", href: "#problems" },
    { label: "強み", href: "#features" },
    { label: "実績", href: "#proof" },
    { label: "料金", href: "#pricing" },
    { label: "相談", href: "#contact" },
  ],
  cta: {
    label: "無料で相談する",
    subLabel: "30秒で入力完了。営業日は24時間以内に返信します。",
    href: "#contact",
  },
  psychology: {
    scarcityBanner: { enabled: false, text: "ご新規様歓迎: 初回診断レポートをご用意しています" },
    socialProofStats: [
      { value: "チャット完結", label: "テキストのみで対応" },
      { value: "リサーチ付", label: "課題仮説を無料お渡し" },
      { value: "7日納品", label: "LP制作の標準納期" },
    ],
    lossAversion: { enabled: false, text: "今始めないと、競合との差は静かに広がっていきます。" },
    priceAnchoring: { enabled: false },
    limitedOffer: { enabled: false, text: "ご新規様歓迎 / 初回相談をご用意しています" },
  },
  hero: {
    title: "問い合わせが自然に増える、伝わるWeb導線を。",
    lead: "Studio Verenaは、見た目の美しさとCV設計を両立する架空のWebコンサルティング会社です。",
    videoSrc: "/hero-video.mp4",
    secondaryCta: "料金を見る",
  },
  problems: {
    eyebrow: "Problem",
    title: "こんなお悩みありませんか？",
    lead: "訪問者は来ているのに、相談や購入に進まない。多くの場合、原因は導線の迷いにあります。",
    items: ["サービスの魅力がひと目で伝わらない", "フォームまで進む人が少ない", "価格の納得感を作れていない", "競合と比べた強みがぼやけている"],
  },
  loss: {
    title: "このまま放置すると…",
    risks: ["広告費だけが増え、問い合わせ単価が上がります", "比較検討で選ばれず、機会損失が続きます", "改善の判断材料が集まらず、施策が属人的になります"],
  },
  features: {
    eyebrow: "Solution",
    title: "選ばれる理由を、3つに絞って伝える。",
    lead: "専門用語を減らし、強みを短く整理。読み手が迷わず行動できるページへ整えます。",
    items: [
      { icon: "01", title: "CV導線の再設計", text: "CTA、価格、フォームの順番を整え、相談までの心理的な距離を短くします。" },
      { icon: "02", title: "伝わるコピー整理", text: "強み、証拠、価格の理由を短い言葉に圧縮し、読み飛ばされにくくします。" },
      { icon: "03", title: "改善しやすい構造", text: "公開後も数値を見ながら、業種や訴求に合わせてすばやく調整できます。" },
    ],
  },
  beforeAfter: {
    eyebrow: "Before / After",
    title: "迷うページから、選ばれるページへ。",
    before: ["何を頼めるか分かりにくい", "価格の比較軸がない", "問い合わせ前に不安が残る"],
    after: ["ベネフィットが数秒で伝わる", "推奨プランが自然に選ばれる", "声と実績で安心して相談できる"],
  },
  testimonials: {
    eyebrow: "Voice",
    title: "お客様の声",
    items: [
      { name: "佐藤 葵", role: "美容サロン代表", image: "/testimonial-1.svg", comment: "強みの見せ方が整理され、予約前の質問が減りました。初めての方にも説明しやすいページです。" },
      { name: "田中 亮", role: "士業事務所 所長", image: "/testimonial-2.svg", comment: "料金の納得感が出て、無料相談から契約までの流れがスムーズになりました。" },
      { name: "森 佳奈", role: "スクール運営", image: "/testimonial-3.svg", comment: "スマホで見たときの読みやすさが大きく変わり、広告の反応も改善しました。" },
    ],
  },
  logos: {
    title: "成長を目指す企業が導入",
    note: "※架空企業のサンプル表示です",
    items: ["Luma Works", "Green Nest", "Mori Studio", "North Link", "Kissa Lab", "Aoba Care"],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "目的に合わせて選べる3プラン",
    lead: "最初に高品質な全体像を提示し、必要な範囲に合わせて無理なく選べます。",
    plans: [
      { name: "プレミアム", note: "戦略設計まで任せたい方向け", regularPrice: "198,000円", currentPrice: "98,000円", features: ["競合整理", "コピー設計", "改善レポート", "公開後30日サポート"] },
      { name: "スタンダード", note: "主要プラン", regularPrice: "128,000円", currentPrice: "39,800円", recommended: true, badge: "おすすめ", features: ["LP制作1ページ", "AIヒーロー動画枠", "フォーム設置", "スマホ最適化"] },
      { name: "ライト", note: "まずLPを整えたい方向け", regularPrice: "79,800円", currentPrice: "19,800円", features: ["LP制作1ページ", "基本コピー反映", "問い合わせ導線", "軽微修正1回"] },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "よくある質問",
    items: [
      { question: "業種が違っても使えますか？", answer: "はい。テキストと画像を差し替えるだけで、士業、美容、教育、店舗、BtoBまで展開できます。" },
      { question: "動画がなくても公開できますか？", answer: "できます。ヒーローにはグラデーション背景のフォールバックがあり、動画なしでも見栄えを保てます。" },
      { question: "フォームの送信先は変えられますか？", answer: "FormspreeのURLをaction属性に設定するだけで切り替えできます。" },
      { question: "色の変更は難しいですか？", answer: "設定ファイルの色指定を変えるだけで、アクセントカラーを変更できます。" },
      { question: "Vercelに公開できますか？", answer: "標準的な構成のため、GitHub連携後にVercelから簡単にデプロイできます。" },
    ],
  },
  form: {
    eyebrow: "Contact",
    title: "まずは今のページの課題を聞かせてください。",
    lead: "名前、メール、相談内容だけ。余計な入力を減らし、すぐ相談できる形にしています。",
    action: "https://formspree.io/f/your-form-id",
  },
  footer: {
    sns: [
      { label: "X", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
    ],
  },
};
