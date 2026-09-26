// Original lines in the spirit of Buddhist thought.
// Not sutra quotations, predictions, or medical advice.

export const ESSENCE = {
  impermanence: "無常",
  release: "手放す",
  compassion: "慈悲",
  mindfulness: "気づき",
  middle: "中道",
  suffering: "苦とほどけ"
};

export const STILL_HINT = {
  restless: "ざわつきを、敵にしない。息のあいだだけ、脇に置きなさい。",
  weary: "肩の力を、息のたびに、一つずつ。",
  clinging: "握っている手を、開かなくていい。ゆるめるだけでいい。",
  lost: "方向は、あとでよい。いまは、呼吸だけ。",
  soft: "すでにある静けさを、壊さない。"
};

export const questions = [
  {
    id: "state",
    kicker: "一つめの問い",
    title: "いま、心はどのあたりにいますか。",
    choices: [
      { id: "restless", label: "ざわついている" },
      { id: "weary", label: "つかれている" },
      { id: "clinging", label: "手放せずにいる" },
      { id: "lost", label: "道に迷っている" },
      { id: "soft", label: "すでに少し静か" }
    ]
  },
  {
    id: "toward",
    kicker: "二つめの問い",
    title: "その心は、どこへ向いていますか。",
    choices: [
      { id: "past", label: "過ぎていったこと" },
      { id: "future", label: "まだ来ないこと" },
      { id: "other", label: "誰かのこと" },
      { id: "self", label: "自分自身" },
      { id: "loss", label: "失うこと" }
    ]
  },
  {
    id: "teaching",
    kicker: "三つめの問い",
    title: "どの教えに、耳を傾けますか。",
    choices: [
      { id: "impermanence", label: "移ろうということ" },
      { id: "release", label: "手放すということ" },
      { id: "compassion", label: "慈悲" },
      { id: "mindfulness", label: "いまに気づくこと" },
      { id: "middle", label: "中道" },
      { id: "suffering", label: "苦しみがほどけること" }
    ]
  }
];

export const words = [
  {
    id: "imp-01",
    states: ["restless", "lost"],
    toward: ["future"],
    teachings: ["impermanence"],
    text: "まだ形のない明日を、今日の手で固定しなくていい。雲は、名前がつく前に、すでに輪郭を変えている。"
  },
  {
    id: "imp-02",
    states: ["weary", "soft"],
    toward: ["past", "self"],
    teachings: ["impermanence"],
    text: "過ぎた日の重さは、同じ姿では残らない。肩に残っているのは出来事そのものではなく、まだ指にからんでいる記憶の端だ。"
  },
  {
    id: "imp-03",
    states: ["clinging", "restless"],
    toward: ["loss", "past"],
    teachings: ["impermanence"],
    text: "残そうとするものほど、先に指のあいだからこぼれていく。とどまるものは、何ひとつ、最初の形のままではない。"
  },
  {
    id: "imp-04",
    states: ["lost", "weary"],
    toward: ["other"],
    teachings: ["impermanence"],
    text: "相手の心も、あなたの心も、止まった水ではない。昨日わかったつもりの人は、今日は別の岸に立っていることがある。"
  },
  {
    id: "imp-05",
    states: ["soft", "lost"],
    toward: ["self"],
    teachings: ["impermanence"],
    text: "静けささえも、永遠の席には座らない。いま穏やかなら、その穏やかさを所有せず、通り過ぎる風として味わいなさい。"
  },
  {
    id: "imp-06",
    states: ["restless", "clinging"],
    toward: ["past"],
    teachings: ["impermanence"],
    text: "思い返すたびに、過去は少しずつ別の色になる。変わらない物語だと思っているものは、すでにあなたの中で移ろっている。"
  },
  {
    id: "imp-07",
    states: ["weary", "soft"],
    toward: ["future"],
    teachings: ["impermanence"],
    text: "先の荷物を、いまの体で運ばなくていい。まだ来ない日は、来るときに、その日の足で歩けばよい。"
  },
  {
    id: "imp-08",
    states: ["soft", "restless"],
    toward: ["other"],
    teachings: ["impermanence"],
    text: "相手の様子が今日は違うなら、あなたへの否定とはかぎらない。人は、昨日の輪郭のままでは立っていられない。"
  },
  {
    id: "rel-01",
    states: ["clinging", "weary"],
    toward: ["loss", "self"],
    teachings: ["release"],
    text: "握る力を緩めても、あなたが消えるわけではない。落ちるものは落ち、残るものは、力を入れなくても掌に残る。"
  },
  {
    id: "rel-02",
    states: ["restless", "clinging"],
    toward: ["other"],
    teachings: ["release"],
    text: "相手を思いどおりの位置に置こうとする手を、いったん膝の上に戻しなさい。人は、あなたの掌の中の石ではない。"
  },
  {
    id: "rel-03",
    states: ["weary", "soft"],
    toward: ["self"],
    teachings: ["release"],
    text: "正しさで自分を縛る縄は、自分で結んでいる。ほどくとき、誰かの許可は要らない。"
  },
  {
    id: "rel-04",
    states: ["lost", "restless"],
    toward: ["future", "loss"],
    teachings: ["release"],
    text: "道が見えないとき、余計な荷を一つ置けば、足もとが少し見える。全部を抱えたままでは、方向は定まらない。"
  },
  {
    id: "rel-05",
    states: ["soft", "weary"],
    toward: ["self"],
    teachings: ["release"],
    text: "すでに手放しかけているなら、その手を、もう一度きつく閉じなくていい。緩んだまま、呼吸を通しなさい。"
  },
  {
    id: "rel-06",
    states: ["clinging", "lost"],
    toward: ["past"],
    teachings: ["release"],
    text: "終わった場面の袖を、まだ引いていないか。幕が下りた舞台に、照明を戻さなくていい。"
  },
  {
    id: "rel-07",
    states: ["restless", "lost"],
    toward: ["self"],
    teachings: ["release"],
    text: "頭の中の説明を、一つ止めてみなさい。わかろうとする手が忙しいとき、心は休まる場所を失う。"
  },
  {
    id: "rel-08",
    states: ["soft", "clinging"],
    toward: ["future"],
    teachings: ["release"],
    text: "これからの予定を、いま全部決めきらなくていい。余白が残っているほうが、心は呼吸できる。"
  },
  {
    id: "com-01",
    states: ["weary", "soft"],
    toward: ["self"],
    teachings: ["compassion"],
    text: "疲れた人を、さらに裁く必要はない。慈悲は、遠い誰かへの飾りではなく、いちばん近くの息づかいから始まる。"
  },
  {
    id: "com-02",
    states: ["restless", "lost"],
    toward: ["other"],
    teachings: ["compassion"],
    text: "ざわつく相手を、敵の形にする前に、その人も痛みを抱えて立っていると見なさい。理解は、同意とは別のものだ。"
  },
  {
    id: "com-03",
    states: ["clinging", "weary"],
    toward: ["self", "other"],
    teachings: ["compassion"],
    text: "よく見られたい苦しさにも、席を用意してよい。その苦しさは、つながりたいという古い願いが、形を変えたものだ。"
  },
  {
    id: "com-04",
    states: ["lost", "weary"],
    toward: ["other"],
    teachings: ["compassion"],
    text: "誰かを助けようとして道に迷うとき、まず自分の足が地面についているかを見なさい。倒れている人のそばにいるには、あなたが立っている必要がある。"
  },
  {
    id: "com-05",
    states: ["soft", "restless"],
    toward: ["other", "self"],
    teachings: ["compassion"],
    text: "穏やかなときほど、その静けさを自分だけのものにしないで。余ったやさしさは、隣の人の肩へ、音もなく渡っていける。"
  },
  {
    id: "com-06",
    states: ["weary", "clinging"],
    toward: ["other"],
    teachings: ["compassion"],
    text: "やさしさが枯れた日は、大きな善意を演じてなくていい。責めないこと。それだけで、慈悲は細く続いていける。"
  },
  {
    id: "com-07",
    states: ["restless", "soft"],
    toward: ["loss", "past"],
    teachings: ["compassion"],
    text: "失ったあとの怒りも、悲しみの別の顔であることが多い。その顔を汚れたものとして追い払わなくていい。見て、名をつけて、そっと置きなさい。"
  },
  {
    id: "com-08",
    states: ["clinging", "lost"],
    toward: ["past", "self"],
    teachings: ["compassion"],
    text: "過去の自分を、いまの基準で罰し続けなくていい。あのときの人は、あのときの灯しか持っていなかった。"
  },
  {
    id: "min-01",
    states: ["restless", "lost"],
    toward: ["future", "self"],
    teachings: ["mindfulness"],
    text: "気づきは、未来を片づける技術ではない。いま鼻を通る息が、冷やいか温かいか。それを一つだけ確かめることから始まる。"
  },
  {
    id: "min-02",
    states: ["lost", "weary"],
    toward: ["self"],
    teachings: ["mindfulness"],
    text: "迷いの最中でも、足の裏が床に触れていることは残っている。考えが霧でも、足の裏の感覚ははっきりしている。"
  },
  {
    id: "min-03",
    states: ["soft", "weary"],
    toward: ["self"],
    teachings: ["mindfulness"],
    text: "すでに静かなら、その静けさを改良しなくていい。気づいているということ自体が、もう道の上にいる印だ。"
  },
  {
    id: "min-04",
    states: ["weary", "restless"],
    toward: ["past"],
    teachings: ["mindfulness"],
    text: "疲れているとき、昔の場面はくり返しやすくなる。くり返しが始まったと気づいた瞬間、あなたはそれを見ている側に戻れる。"
  },
  {
    id: "min-05",
    states: ["clinging", "restless"],
    toward: ["other", "self"],
    teachings: ["mindfulness"],
    text: "相手の一言が胸に刺さったとき、意味を裁く前に、熱の場所を見なさい。熱がどこにあるかわかれば、言葉に飲まれにくくなる。"
  },
  {
    id: "min-06",
    states: ["restless", "soft"],
    toward: ["self"],
    teachings: ["mindfulness"],
    text: "考えが走るのを、止めようとしなくていい。走っていると知っているなら、あなたは走りそのものではない。"
  },
  {
    id: "min-07",
    states: ["lost", "clinging"],
    toward: ["future"],
    teachings: ["mindfulness"],
    text: "先が見えないままでも、次の一歩の感触だけはわかる。気づきは、地図を完成させることより、いま踏んでいる地面を認めることだ。"
  },
  {
    id: "min-08",
    states: ["weary", "soft"],
    toward: ["loss", "self"],
    teachings: ["mindfulness"],
    text: "失ったあとの胸の痛みを、説明で覆う前に、その温度だけを感じてみなさい。感じているあいだ、あなたはここにいる。"
  },
  {
    id: "mid-01",
    states: ["lost", "restless"],
    toward: ["other", "self"],
    teachings: ["middle"],
    text: "相手に合わせすぎる端と、自分だけを通す端。どちらも、長くは歩けない。両方の声を聞きながら、どちらの言いなりにもならない場所がある。"
  },
  {
    id: "mid-02",
    states: ["clinging", "weary"],
    toward: ["self"],
    teachings: ["middle"],
    text: "自分を高めようと張る端と、自分を責めようと沈む端。そのあいだに、今日のあなたがただ立っていられる幅がある。"
  },
  {
    id: "mid-03",
    states: ["restless", "lost"],
    toward: ["future", "self"],
    teachings: ["middle"],
    text: "急ぎすぎれば足を踏み外し、止まりすぎれば道を忘れる。続く歩幅は、速さの自慢ではなく、明日も歩ける幅のことだ。"
  },
  {
    id: "mid-04",
    states: ["weary", "soft"],
    toward: ["self"],
    teachings: ["middle"],
    text: "休むことを怠けだと思い、動くことだけを善だと思い込んでいないか。疲れた体には休みがちょうどよく、戻った体には動きがちょうどよい。"
  },
  {
    id: "mid-05",
    states: ["soft", "clinging"],
    toward: ["other", "self"],
    teachings: ["middle"],
    text: "優しすぎて自分を消す必要はない。穏やかさと、境界とは、同時に持てる。どちらかを捨てる必要はない。"
  },
  {
    id: "mid-06",
    states: ["clinging", "lost"],
    toward: ["loss"],
    teachings: ["middle"],
    text: "すべてを保てという声と、すべてを捨てよという声。両方に従わなくていい。いま要るものだけを残し、残りは季節に返しなさい。"
  },
  {
    id: "mid-07",
    states: ["lost", "weary"],
    toward: ["past", "self"],
    teachings: ["middle"],
    text: "過去を正解だったと固定せず、失敗だったとも固定しない。あのときのあなたにできた範囲の歩みだった、と真ん中に置きなさい。"
  },
  {
    id: "mid-08",
    states: ["restless", "soft"],
    toward: ["loss"],
    teachings: ["middle"],
    text: "取り戻そうと走る端と、もう何も持つまいと捨てる端。失ったあとに要るのは、どちらの端でもなく、今日使う分だけの手だ。"
  },
  {
    id: "suf-01",
    states: ["weary", "clinging"],
    toward: ["self"],
    teachings: ["suffering"],
    text: "苦しみは、あなたが欠けている証拠ではない。熱いものを握り続けている手の、正直な熱だ。ほどけるとは、その指を一本ずつ開くことだ。"
  },
  {
    id: "suf-02",
    states: ["restless", "lost"],
    toward: ["future", "self"],
    teachings: ["suffering"],
    text: "まだ起きていない痛みを、今日の胸で先に燃やしていれば、熱は二重になる。いまある熱と、想像の熱とを、分けて見なさい。"
  },
  {
    id: "suf-03",
    states: ["clinging", "restless"],
    toward: ["loss"],
    teachings: ["suffering"],
    text: "失うこと自体が、刃のすべてではない。失ってはならない、という握りが、刃に力を加えている。握りが緩むと、痛みは痛みの大きさに戻る。"
  },
  {
    id: "suf-04",
    states: ["restless", "weary"],
    toward: ["other", "self"],
    teachings: ["suffering"],
    text: "相手を変えなければ終わらない苦しみは、長く続く。あなたが変えられるのは、相手の心ではなく、自分の握る角度だけだ。"
  },
  {
    id: "suf-05",
    states: ["lost", "weary"],
    toward: ["self"],
    teachings: ["suffering"],
    text: "なぜ苦しいのかがわからなくても、苦しいという感覚は確かだ。原因の名前を待たずに、まずは荷を床に置いてよい。"
  },
  {
    id: "suf-06",
    states: ["weary", "soft"],
    toward: ["past", "loss"],
    teachings: ["suffering"],
    text: "古い傷を、今日も同じ力で押し続けなくていい。傷が消えるのを待たずに、押し方をやめることはできる。"
  },
  {
    id: "suf-07",
    states: ["soft", "lost"],
    toward: ["self"],
    teachings: ["suffering"],
    text: "苦しみが薄い日を、自分の手柄にしなくていい。軽い状態を、次の備えに使わなくていい。ただ、軽いままにしておきなさい。"
  },
  {
    id: "suf-08",
    states: ["clinging", "lost"],
    toward: ["other"],
    teachings: ["suffering"],
    text: "相手を許せない苦しさは、あなたが冷たい証拠ではない。まだ熱い場所が残っているという知らせだ。熱いまま、距離を置いてよい。"
  }
];

export function pickWord(answers, excludeId) {
  const teaching = answers.teaching;
  const ranked = words
    .filter((w) => w.teachings.includes(teaching))
    .map((w) => {
      let score = 5;
      if (w.states.includes(answers.state)) score += 3;
      if (w.toward.includes(answers.toward)) score += 3;
      return { w, score };
    });

  if (!ranked.length) {
    return {
      id: "fallback",
      teachings: [teaching],
      states: [],
      toward: [],
      text: "いまは、言葉を足さなくていい。呼吸が通っているなら、それで足りている。"
    };
  }

  const best = Math.max(...ranked.map((x) => x.score));
  let pool = ranked.filter((x) => x.score === best).map((x) => x.w);

  if (excludeId) {
    const without = pool.filter((w) => w.id !== excludeId);
    if (without.length) {
      pool = without;
    } else {
      const wider = ranked
        .filter((x) => x.w.id !== excludeId)
        .sort((a, b) => b.score - a.score);
      const nextBest = wider.length ? wider[0].score : -1;
      const alt = wider.filter((x) => x.score === nextBest).map((x) => x.w);
      if (alt.length) pool = alt;
    }
  }

  return pool[Math.floor(Math.random() * pool.length)];
}
