import axios from 'axios';
import cheerio from 'cheerio';

export async function fetchTags(url: string) {
  try {
    // ページのHTMLを取得
    const { data } = await axios.get(url);
    // cheerioでHTMLを読み込む
    const $ = cheerio.load(data);

    // 'tag'クラスを持つspan要素をすべて選択し、テキストと背景色を抽出
    const tags = $('.tag')
      .map((i, el) => {
        const text = $(el).text().trim(); // タグのテキスト
        const backgroundColor = $(el).css('background-color'); // CSSから背景色を取得
        const color = $(el).css('color'); // CSSから文字色を取得

        return { text, backgroundColor, color };
      })
      .get(); // Cheerioオブジェクトを通常の配列に変換

    return tags;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
