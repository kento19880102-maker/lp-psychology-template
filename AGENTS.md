# AGENTS.md — 副業用 LP テンプレート向け永続ルール

このファイルは Codex GPT-5.5 用の永続ガイドラインです。
セッション開始時に必ず内容を踏まえて作業してください。

---

## プロジェクト概要

副業（ココナラ出品）用の Next.js LP テンプレート群の一つです。
最終的にはお客様（個人事業主・中小企業）に納品します。
本テンプレートは汎用 LP（多業種向け）の架空 Web コンサルティング会社デモ。

- 業務委託元: 個人副業（ユーザー本人）
- 想定読者: ココナラ閲覧者・小規模事業主
- 派生先: `lp-beauty-template`（美容業種向け）が本テンプレから複製されている

---

## 役割分担（マルチセッション運用）

| 役割 | モデル | 担当 |
|---|---|---|
| 戦略・判断・レビュー | Opus 4.7（別会話） | 方針決定・優先順位・memory 更新 |
| **実装（あなた）** | **Codex GPT-5.5** | コード書き・コマンド実行・デプロイ |
| 過去の実装 | Sonnet 4.6（別会話） | Pro 枠を使い切ったため Codex に交代 |

### Codex GPT-5.5 が独断OK
- コード書き方・命名・ファイル分割
- 小さな技術選択（Tailwind class, レスポンシブブレイクポイント等）
- 既存パターンの踏襲

### Opus 4.7 戦略会話に差し戻し
- 商品仕様・価格の変更
- 新規ツール・新規サービスの導入（特に課金が発生するもの）
- スコープ変更・新ページ追加
- 法的リスク判断（商用ライセンスなど）
- ユーザーの予算・本業に影響する判断

---

## 技術的制約（絶対に守る）

- ❌ Next.js 16 / Tailwind v4 / React 19 のメジャーバージョン変更しない
- ❌ `npm audit fix --force` を当てない（Next の破壊的変更が入る）
- ❌ 新しい有料サブスクリプションに勝手に登録しない
- ⚠️ shell コマンドのパスは引用符必須（スペース含む可能性あり）
- ⚠️ `npm run dev` 長時間使用注意（Mac の負荷高い）→ Vercel Preview デプロイ推奨

---

## お客様向け文言の禁止ワード

### マーケティング題材系（自分のレベルで説明不能な題材は出さない）
- 「行動経済学」「心理学」「6要素」「マーケティング理論」

### 技術用語系（お客様に響かない・自慢に見える）
- 「Next.js」「React」「Tailwind」「モダンなスタック」「最新技術」

### 景表法リスク系（最上級・希少性煽り・効果保証）
- 「一番○○」「最○○」「絶対」「必ず」「保証します」
- 「○％アップ」「○倍になります」
- 「○月限定」「先着○名様」「期間限定」「数量限定」
- 「No.1」「人気No.1」「最安」「日本一」
- 「通常価格 ¥X → 割引価格 ¥Y」の二重価格表示
- 「○○しないと損する」プレッシャー文言（損失回避フレーム）

### 個人情報・本業情報系
- 本業の勤務先名・運送会社名
- 商業施設名（イオン・ATC等）
- 本名フルネーム・居住地・連絡先

### LINE・サイト誘導系（ココナラ規約違反）
- 「LINE で詳しく…」「公式サイトで…」「直接ご連絡…」

---

## 既存環境

- ローカルパス: `~/dev/templates/lp-psychology-template/`
- GitHub: https://github.com/kento19880102-maker/lp-psychology-template (Public)
- Vercel Production URL: https://lp-psychology-template.vercel.app/
- GitHub アカウント: `kento19880102-maker`
- Vercel: GitHub 連携で main push 自動デプロイ
- 派生先: `~/dev/templates/lp-beauty-template/`

---

## memory ファイル（参照用）

戦略・運用ルールの詳細は以下に書かれています。
Read ツールで読み込み可能なら参照してください。

- `~/.claude/projects/-Users-yabuuchikento/memory/MEMORY.md` — インデックス
- `~/.claude/projects/-Users-yabuuchikento/memory/workflow_multisession.md` — 運用ルール詳細
- `~/.claude/projects/-Users-yabuuchikento/memory/feedback_realitycheck.md` — 提案にリスク併記原則
- `~/.claude/projects/-Users-yabuuchikento/memory/feedback_marketing_honesty.md` — 自分のレベルに見合わない要素を訴求しない
- `~/.claude/projects/-Users-yabuuchikento/memory/project_sidebusiness.md` — プロジェクト方針・進捗
- `~/plans/coconala-listing-draft.md` — ココナラ出品素材 v3 確定版

---

## 完了報告フォーマット

タスク完了時は必ず以下構造で報告してください。

```
# <フェーズ名> 実装完了報告

## 成果物
- GitHub commit: <SHA>
- Vercel Production URL: <URL>
- ローカルパス: <path>

## 実装内容サマリー
- <list>

## 想定どおり進んだ点
- <list>

## 想定外の課題・判断
- <自分で判断した内容と理由>

## 戦略会話で確認してほしい事項
- <list, なければ「なし」>

## memory 更新内容(案) — Opus 4.7 が反映する
- <更新案>

## 次フェーズに向けた申し送り
- <list>
```

---

## memory 更新代行フロー

あなた（Codex）は Anthropic memory に直接書き込めません。
1. 完了報告内に「memory 更新内容（案）」セクションを記載
2. Opus 4.7 戦略会話が報告を受領
3. Opus 4.7 が memory ファイルを反映
4. インデックス（MEMORY.md）に新ファイルがあれば追記

---

## 検証コマンド集

### NG ワード grep（修正後の確認に必須）
```bash
cd ~/dev/templates/lp-psychology-template
grep -rn "Atelier Verde\|一番\|月限定\|先着\|限定価格\|No\\.1\|人気No\|行動経済学\|心理学\|6要素\|松 \|竹 \|梅 " src/
# → 0件であれば OK
```

### ローカル動作確認（Mac 負荷注意）
```bash
cd ~/dev/templates/lp-psychology-template && npm run dev
# 別ターミナルで http://localhost:3000 を開く
```

### Vercel 本番反映確認
```bash
curl -I https://lp-psychology-template.vercel.app/
# HTTP 200 を確認
```

---

## ユーザーへの応答スタイル

- Web 制作未経験のユーザーなので、専門用語を使う際は最初に1行で説明を添える
- 楽観論だけ並べない・必ずリスク併記
- 不明な点は推測せず「分からない」と言う
- 「近々のタスク」を毎回レスポンス先頭で表/リストで示す（TodoWrite と整合）
