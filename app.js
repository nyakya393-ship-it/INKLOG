let battles = JSON.parse(localStorage.getItem("battles")) || [];

/* ★ここに前の「武器フル配列」を入れる */
const weapons = [
  // =====================
  // シューター
  // =====================
  "スプラシューター","スプラシューターコラボ","スプラシューター煌",
  "ヒーローシューターレプリカ","オーダーシューターレプリカ","オクタシューターレプリカ",
  "わかばシューター","もみじシューター",
  ".52ガロン",".52ガロンデコ",
  ".96ガロン",".96ガロンデコ",".96ガロン爪",
  "プロモデラーMG","プロモデラーRG","プロモデラー彩",
  "N-ZAP85","N-ZAP89",
  "スペースシューター","スペースシューターコラボ",
  "ボールドマーカー","ボールドマーカーネオ",
  "シャープマーカー","シャープマーカーネオ","シャープマーカーGECK",
  "プライムシューター","プライムシューターコラボ","プライムシューターFRZN",
  "ジェットスイーパー","ジェットスイーパーカスタム","ジェットスイーパーCOBR",
  "ボトルガイザー","ボトルガイザーフォイル",
  "L3リールガン","L3リールガンD","L3リールガン箔",
  "H3リールガン","H3リールガンD","H3リールガンSNAK",

  // =====================
  // ブラスター
  // =====================
  "ホットブラスター","ホットブラスターカスタム","ホットブラスター艶",
  "ロングブラスター","ロングブラスターカスタム",
  "ラピッドブラスター","ラピッドブラスターデコ",
  "Rブラスターエリート","Rブラスターエリートデコ","RブラスターエリートWNTR",
  "ノヴァブラスター","ノヴァブラスターネオ",
  "オーダーブラスターレプリカ",
  "クラッシュブラスター","クラッシュブラスターネオ",
  "S-BLAST92","S-BLAST91",

  // =====================
  // ローラー
  // =====================
  "スプラローラー","スプラローラーコラボ","オーダーローラーレプリカ",
  "カーボンローラー","カーボンローラーデコ","カーボンローラーANGL",
  "ダイナモローラー","ダイナモローラーテスラ","ダイナモローラー冥",
  "ワイドローラー","ワイドローラーコラボ","ワイドローラー惑",
  "ヴァリアブルローラー","ヴァリアブルローラーフォイル",

  // =====================
  // チャージャー
  // =====================
  "スプラチャージャー","スプラチャージャーコラボ","スプラチャージャーFRST",
  "スプラスコープ","スプラスコープコラボ","スプラスコープFRST",
  "スクイックリンα","スクイックリンβ",
  "14式竹筒銃・甲","14式竹筒銃・乙",
  "ソイチューバー","ソイチューバーカスタム",
  "R-PEN/5H","R-PEN/5B",
  "リッター4K","リッター4Kカスタム",
  "4Kスコープ","4Kスコープカスタム",

  // =====================
  // スロッシャー
  // =====================
  "バケットスロッシャー","バケットスロッシャーデコ",
  "ヒッセン","ヒッセンヒュー","ヒッセンASH",
  "モップリン","モップリンD","モップリン角",
  "スクリュースロッシャー","スクリュースロッシャーネオ",
  "エクスプロッシャー","エクスプロッシャーカスタム",
  "オーバースロッシャー","オーバースロッシャーデコ",

  // =====================
  // スピナー
  // =====================
  "バレルスピナー","バレルスピナーデコ",
  "スプラスピナー","スプラスピナーコラボ","スプラスピナーPYTN",
  "イグザミナー","イグザミナーヒュー",
  "ハイドラント","ハイドラントカスタム","ハイドラント圧",
  "ノーチラス47","ノーチラス79",
  "クーゲルシュライバー","クーゲルシュライバーヒュー",

  // =====================
  // マニューバー
  // =====================
  "スプラマニューバー","スプラマニューバーコラボ","スプラマニューバー耀",
  "デュアルスイーパー","デュアルスイーパーカスタム","デュアルスイーパー蹄",
  "スパッタリー","スパッタリーヒュー","スパッタリーOWL",
  "クアッドホッパーブラック","クアッドホッパーホワイト",
  "ケルビン525","ケルビン525デコ",
  "ガエンFF","ガエンFFカスタム",

  // =====================
  // シェルター
  // =====================
  "パラシェルター","パラシェルターソレーラ",
  "24式張替傘・甲","24式張替傘・乙",
  "キャンピングシェルター","キャンピングシェルターソレーラ","キャンピングシェルターCREM",
  "スパイガジェット","スパイガジェットソレーラ","スパイガジェット繚",

  // =====================
  // フデ
  // =====================
  "ホクサイ","ホクサイヒュー","ホクサイ彗",
  "オーダーブラシレプリカ",
  "パブロ","パブロヒュー",
  "フィンセント","フィンセントヒュー","フィンセントBRNZ",

  // =====================
  // ストリンガー
  // =====================
  "トライストリンガー","トライストリンガーコラボ","トライストリンガー燈",
  "LACT-450","LACT-450デコ","LACT-450MILK",
  "フルイドV","フルイドVカスタム",

  // =====================
  // ワイパー
  // =====================
  "ドライブワイパー","ドライブワイパーデコ","ドライブワイパーRUST",
  "ジムワイパー","ジムワイパーヒュー","ジムワイパー封",
  "オーダーワイパーレプリカ",
  "デンタルワイパーミント","デンタルワイパースミ"
];

const stages = [
  "ユノハナ大渓谷","ゴンスイ地区","ヤガラ市場","マテガイ放水路",
  "ナンプラー遺跡","ナメロウ金属","クサヤ温泉","タラポート",
  "ヒラメが丘団地","マサバ海峡大橋"
];

document.addEventListener("DOMContentLoaded", () => {

  const weaponSel = document.getElementById("weapon");
  const stageSel = document.getElementById("stage");
  const list = document.getElementById("list");

  // ステージ
  stages.forEach(s => {
    const o = document.createElement("option");
    o.textContent = s;
    stageSel.appendChild(o);
  });

  // 武器検索
  function renderWeapons(filter="") {
    weaponSel.innerHTML = "";
    weapons.filter(w => w.includes(filter)).forEach(w => {
      const o = document.createElement("option");
      o.textContent = w;
      weaponSel.appendChild(o);
    });
  }

  renderWeapons();

  document.getElementById("weaponSearch").addEventListener("input", e => {
    renderWeapons(e.target.value);
  });

  // 保存
  document.getElementById("saveBtn").onclick = () => {

    battles.push({
      battleType: battleType.value,
      rule: rule.value,
      stage: stageSel.value,
      weapon: weaponSel.value,
      result: result.value,
      kill: +kill.value,
      assist: +assist.value,
      death: +death.value,
      paint: +paint.value,
      special: +special.value,
      memo: memo.value
    });

    localStorage.setItem("battles", JSON.stringify(battles));

    update();
  };

  update();
});

function update() {
  renderStats();
  renderList();
}

function renderStats() {

  const wins = battles.filter(b => b.result==="win").length;
  const loses = battles.filter(b => b.result==="lose").length;

  const kills = battles.reduce((a,b)=>a+b.kill,0);
  const deaths = battles.reduce((a,b)=>a+b.death,0);

  const totalPaint = battles.reduce((a,b)=>a+(b.paint||0),0);
  const avgPaint = battles.length ? totalPaint / battles.length : 0;

  totalBattles.textContent = battles.length;
  winsEl.textContent = wins;
  losesEl.textContent = loses;

  winRate.textContent =
    battles.length ? Math.round((wins/(wins+loses))*100)+"%" : "0%";

  kd.textContent =
    deaths ? (kills/deaths).toFixed(2) : kills;

  avgPaintEl.textContent = avgPaint.toFixed(1);
}

function renderList() {

  list.innerHTML = "";

  battles.slice().reverse().forEach(b => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <b>${b.weapon}</b><br>
      ${b.stage}<br>
      ${b.rule} / ${b.result}<br>
      K:${b.kill} A:${b.assist} D:${b.death}<br>
      ${b.paint}p SP:${b.special}
    `;

    list.appendChild(div);
  });
}
