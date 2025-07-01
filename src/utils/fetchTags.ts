import axios from 'axios';
import * as cheerio from 'cheerio';
import type { ForteeTag } from '../types'; // タグの型定義をインポート

export async function fetchTags(url: string): Promise<ForteeTag[]> {
  try {
    // ページのHTMLを取得
    const { data } = await axios.get(url);
    // cheerioでHTMLを読み込む
    const $ = cheerio.load(data);

    // 'tag'クラスを持つspan要素をすべて選択し、テキストと背景色を抽出
    const tags = $('.tag')
      .map((i, el) => {
        const text = $(el).text().trim(); // タグのテキスト
        const backgroundColor = $(el).css('background-color') ?? 'rgba(0, 128, 128, 1)'; // CSSから背景色を取得.
        const color = $(el).css('color') ?? 'rgba(255, 255, 255, 1)'; // CSSから文字色を取得.取れなければ白色を使用

        return { text, backgroundColor, color };
      })
      .get(); // Cheerioオブジェクトを通常の配列に変換

    return tags;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
