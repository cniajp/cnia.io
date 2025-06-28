# PEK2025 ブログ入稿ガイド

Platform Engineering Kaigi 2025（PEK2025）のブログページへの記事投稿方法とルールについて説明します。

## 📁 ファイル配置

ブログ記事は以下のディレクトリに配置してください：

```
src/content/pek2025-blog/
```

## 📝 ファイル命名規則

- ファイル名は英数字とハイフンのみを使用
- 拡張子は `.md`
- 例：`announcement-cfp.md`, `event-report-2025.md`

## 📋 フロントマター（必須項目）

各記事の先頭には以下のフロントマターを記述してください：

```yaml
---
title: '記事のタイトル'
description: '記事の概要説明（SEO用）'
publishDate: 2025-01-15 # YYYY-MM-DD形式
category: 'カテゴリ名'
tags: ['タグ1', 'タグ2', 'タグ3']
author:
  name: '著者名'
  icon: '~/assets/images/pek2025/teamMembers/author-name.jpg' # オプション
image: '/pek2025/blog/記事ファイル名/article-header.jpg' # ヘッダー画像（オプション）
draft: false # true にすると非公開
---
```

### フィールド詳細

| フィールド    | 必須 | 説明                               | 例                                                    |
| ------------- | ---- | ---------------------------------- | ----------------------------------------------------- |
| `title`       | ✅   | 記事タイトル                       | "PEK2025開催決定のお知らせ"                           |
| `description` | ✅   | 記事の概要（120文字程度推奨）      | "Platform Engineering Kaigi 2025の開催が決定しました" |
| `publishDate` | ✅   | 公開日（YYYY-MM-DD形式）           | `2025-01-15`                                          |
| `category`    | ❌   | カテゴリ                           | "お知らせ", "技術解説", "イベントレポート"            |
| `tags`        | ❌   | タグ（配列形式、3個程度推奨）      | `["PEK2025", "Platform Engineering"]`                 |
| `author.name` | ❌   | 著者名                             | "PEK2025運営チーム"                                   |
| `author.icon` | ❌   | 著者アイコン画像パス               | `~/assets/images/pek2025/teamMembers/author.jpg`      |
| `image`       | ❌   | ヘッダー画像パス（1200×675px推奨） | `/pek2025/blog/記事ファイル名/article-header.jpg`     |
| `draft`       | ❌   | 下書きフラグ（true で非公開）      | `false`                                               |

## 🎨 推奨カテゴリ

以下のカテゴリを推奨します：

- **お知らせ** - 開催情報、重要な告知
- **技術解説** - Platform Engineering関連の技術記事
- **report** - 過去のイベントや関連イベントのレポート
- **スピーカー紹介** - 登壇者の紹介記事
- **スポンサー紹介** - スポンサー企業の紹介
- **exhibit** - 展示・企画関連の記事
- **food** - 食事・おやつ関連の記事
- **Reception** - 受付・案内関連の記事
- **Publishing** - 出版・書籍関連の記事

## 🏷️ 推奨タグ

### イベント関連

- `PEK2025` - PEK2025関連の記事
- `PFEM` - Platform Engineering Meetup関連
- `お知らせ` - 重要な告知・案内

### 技術関連

- `Platform Engineering` - プラットフォームエンジニアリング
- `DevOps` - DevOps関連
- `SRE` - Site Reliability Engineering
- `Infrastructure` - インフラストラクチャ
- `Kubernetes` - Kubernetes関連
- `Cloud` - クラウド関連
- `Automation` - 自動化関連

## 🖼️ 画像の使用

### 記事内画像

記事内で画像を使用する場合：

```markdown
![画像の説明](/pek2025/blog/記事ファイル名/image-name.jpg)
```

### 画像ファイルの配置

画像ファイルは記事ごとにディレクトリを作成して配置：

**ファイル配置場所**:

```
public/pek2025/blog/記事ファイル名/
```

**記事内での記述パス** (`public` は省略):

```markdown
![画像の説明](/pek2025/blog/記事ファイル名/image-name.jpg)
```

**例**: `sample-post.md` の記事の場合

ファイル配置：

```
public/pek2025/blog/sample-post/
├── header-image.jpg
├── screenshot-1.png
└── diagram.png
```

記事内での参照：

```markdown
![ヘッダー画像](/pek2025/blog/sample-post/header-image.jpg)
![スクリーンショット](/pek2025/blog/sample-post/screenshot-1.png)
![図解](/pek2025/blog/sample-post/diagram.png)
```

### 画像の推奨仕様

- **ヘッダー画像**: 1200×675px（16:9比率）
- **記事内画像**: 最大幅800px推奨
- **ファイル形式**: JPG, PNG, WebP
- **ファイルサイズ**: 500KB以下推奨

## 👤 著者アイコン

著者アイコンを設定する場合：

1. 画像ファイルを `src/assets/images/pek2025/teamMembers/` に配置
2. ファイル名は `author-name.jpg` 形式
3. 画像サイズは 200×200px 推奨（正方形）

## ✍️ Markdown記法

### 見出し

```markdown
# 大見出し（H1）- 記事タイトルで自動使用

## 中見出し（H2）

### 小見出し（H3）
```

### リスト

```markdown
- 箇条書き
- 項目2

1. 番号付きリスト
2. 項目2
```

### リンク

```markdown
[リンクテキスト](https://example.com)
```

### 強調

```markdown
**太字**
_斜体_
`インラインコード`
```

### コードブロック

````markdown
```javascript
const example = 'コードブロック';
console.log(example);
```
````

### 引用

```markdown
> 引用文
> 複数行の引用
```

## 📊 記事の品質ガイドライン

### 文章

- **文字数**: 800文字以上推奨
- **段落**: 適切な改行で読みやすく
- **見出し**: 階層構造を意識
- **専門用語**: 必要に応じて説明を追加

### SEO対策

- **タイトル**: 32文字以内推奨
- **description**: 120文字程度
- **見出し**: キーワードを含める
- **alt属性**: 画像には適切な説明を

## 🔄 投稿フロー

1. **記事作成**: Markdownファイルを作成
2. **画像準備**: 必要な画像を適切なディレクトリに配置
3. **プレビュー**: PRを作成することで Cloudflare によってプレビュー環境が払い出されます
4. **レビュー**: 運営チームによる内容確認
5. **公開**: `draft: false` に設定して公開


## ❌ 禁止事項

- 他社の著作権を侵害するコンテンツ
- 政治的・宗教的な内容
- 差別的・攻撃的な表現
- 商用利用目的の宣伝（スポンサー記事除く）
- 事実と異なる情報

