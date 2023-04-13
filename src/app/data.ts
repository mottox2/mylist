type Tag = {
  emoji: string
  name: string
  description: string
  content?: string
}

const tags: Tag[] = [
  {
    emoji: '🎮',
    name: 'ヘブンバーンズレッド',
    description: 'key作品が好きでAB!コラボから',
  },
  {
    emoji: '🎮',
    name: 'スプラトゥーン',
    description: 'ローラーとエクスプロッシャー',
    content: `スプラトゥーン2と3をやっています。一応、どちらともX帯にいます。
スプラトゥーン3になって、サーモンランが楽しくてかなり回しています。
ガチマではヴァリアブルローラーとエクスプロッシャーを使うことが多く、後ろから支援するポジションにいることが多いです。
ゲーム実況者でははんじょうやかよたそさんが好きです。ちょこぺろさんの配信を見るのも好きでした。`
  },
  {
    emoji: '👞',
    name: 'ジム',
    description: '週イチで通ってます',
    content: `腰痛対策のために通い始めました。腰痛は改善しましたが、数字が変わっていくのが嬉しくて今も続けています。
腰痛に悩んでいるデスクワーカーは一度トレーナーさんに見てもらうといい気がします。`
  },
  {
    emoji: '🎮',
    name: 'APEX Legends',
    description: 'ゲーム実況もよく見ます',
    content: `基本的にソロでやってます。コースティングやローバを使っていて、だいたいダイヤ4あたりにいます。
競技の選手やVTuberのゲーム配信を見ています。フレンド募。`
  },
  {
    emoji: '📺',
    name: 'ラブライブ！',
    description: 'μ’sがめちゃくちゃ好きでした',
    content: `μ’sが好きでFinal LoveLive!やAqoursのライブにも何回か行きました。
Snow halationが特に好きで穂乃果ソロのオレンジサイリウムは最高だと思っています。μ’sでは穂乃果、Aqoursでは曜ちゃん、虹ヶ咲では彼方ちゃんが好きです。`
  },
  {
    emoji: '🎮',
    name: 'プロジェクトセカイ',
    description: '推しはまふゆとLeo/need',
    content: `声優とボカロの声をうまく調和させていて、聴いてて心地よいです。
どのユニットも好きですが、特にLeo/need推し。オリジナル曲では『ステラ』『STAGE OF SEKAI』『青く駆けろ！』、カバー曲では『タイムマシン』『ray』あたりが好き。`
  },
  {
    emoji: '🎺',
    name: 'ホルン',
    description: '吹奏楽とオーケストラ'
  },
  {
    emoji: '📺',
    name: 'SHIROBAKO',
    description: '仕事で迷ったときに見てます'
  },
  {
    emoji: '📕',
    name: 'ソードアート・オンライン',
    description: '話が好きだし、茅場晶彦に憧れる…'
  },
  {
    emoji: '📺',
    name: 'ぼっち・ざ・ろっく！',
    description: '結束バンドを無限ループ中'
  },
  {
    emoji: '🎵',
    name: '口笛',
    description: '知ってる曲なら吹けます'
  },
  {
    emoji: '📕',
    name: 'のだめカンタービレ',
    description: 'オーケストラを始めたきっかけ'
  },
  {
    emoji: '📷',
    name: 'AI画像生成',
    description: 'Stable Diffusionで挑戦中'
  },
  {
    emoji: '📺',
    name: 'RTA',
    description: 'ドラクエをよく見ます'
  },
  {
    emoji: '🎵',
    name: 'ワルキューレ',
    description: 'マクロスの方です'
  },
  {
    emoji: '📺',
    name: 'ヴァイオレット・エヴァーガーデン',
    description: '10話で何回も泣かされました'
  },
  {
    emoji: '📺',
    name: 'CLANNAD',
    description: '何度も見てます'
  },
  {
    emoji: '💬',
    name: 'つくること',
    description: 'くだらないものづくりが好き'
  },
  {
    emoji: '🍰',
    name: '甘いもの',
    description: '特にタルトが好きです'
  },
  {
    emoji: '✏️',
    name: '技術同人誌',
    description: 'プログラミング本の執筆',
    content: `自分の好きな技術に関する本を書いて、即売会に参加していました。表紙を作るのが好きで、毎回楽しく作っていました。
コロナが落ち着いてオフライン即売会も増えてきたので、新刊を出したいです。`
  },
  {
    emoji: '🎵',
    name: '槇原敬之',
    description: '曲がとても好き'
  },
  {
    emoji: '👞',
    name: '散歩',
    description: '知らない道が好き'
  },
  {
    emoji: '🎵',
    name: 'Kalafina',
    description: '梶浦ワールド'
  },
  {
    emoji: '💄',
    name: 'スキンケア',
    description: '清潔感を出していきたい'
  },
  {
    emoji: '📺',
    name: 'にじさんじ',
    description: '周防サンゴ、グウェル',
    content: `ンゴちゃんの朗読（実質歌枠）が最高すぎて一気に好きになりました。
グウェルの企画力はすごい。`
  },
  {
    emoji: '📕',
    name: '天城ブリリアントパーク',
    description: '最終巻をずっと待ってる'
  },
  {
    emoji: '📺',
    name: '異世界食堂',
    description: '何度も見直すグルメアニメ'
  },
  {
    emoji: '🎮',
    name: 'FORTNITE',
    description: 'ハマっていました'
  },
  {
    emoji: '📕',
    name: '妹さえいればいい。',
    description: 'お仕事系ラノベは大好物'
  },
  {
    emoji: '📕',
    name: 'ゼロの使い魔',
    description: '異世界転移物では一番'
  },
  // NEWGAME!
  // ロックマンエグゼ
  // カービィーのエアライド
  // ダンまち
  // すかすか
  // リズと青い鳥
  // ヒロアカ
  // 冴えない彼女の育てかた
]

export const creatorTags: Tag[] = [
  {
    emoji: '💻',
    name: 'React',
    description: '8年ぐらい書いてます',
  },
  {
    emoji: '🎨',
    name: 'Figma',
    description: 'プラグイン開発やってます',
    content: `本業の会社でも頑張って導入しました。コラボレーションツールとしては圧倒的だと思っています。
個人だけではなく会社の自由研究でもプラグインを開発しました。
実はデザインツール単体として見るとSketchの方が好きです。`
  },
  {
    emoji: '💻',
    name: 'TypeScript',
    description: '型がないと不安です',
  },
  {
    emoji: '📔',
    name: 'Obsidian',
    description: 'メモ書きに使ってます',
  },
  {
    emoji: '💻',
    name: 'Next.js',
    description: 'このサイトもNext.js製',
    content: `今やスタンダードになったReactベースのフレームワークです。
このサイトでは、Next.js 13で導入されたApp Routerを利用した実装を行っています。もちろん、canaryを使って人柱になってます。`
  },
  {
    emoji: '📔',
    name: 'esa.io',
    description: '触り心地が好き',
  },
  {
    emoji: '💻',
    name: 'Astro',
    description: 'ドキュメント翻訳',
  },
  {
    emoji: '💻',
    name: 'デザインエンジニア',
    description: 'デザインとエンジニアリング',
  },
  {
    emoji: '💻',
    name: 'Gatsby',
    description: '本を書いたOSS',
  },
  {
    emoji: '📱',
    name: 'マッチングアプリ',
    description: '大苦戦',
  },
]

export default tags