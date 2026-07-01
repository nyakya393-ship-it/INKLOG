// =====================
// ストレージ
// =====================
let battles = JSON.parse(localStorage.getItem("battles")) || [];

// =====================
// DOM
// =====================
const form = document.getElementById("battleForm");
const list = document.getElementById("list");
const weaponSel = document.getElementById("weapon");
const stageSel = document.getElementById("stage");

// =====================
// 武器（完全版）
// =====================
const weapons = [
  // シューター
  "スプラシューター","スプラシューターコラボ","ヒーローシューター",
  "わかばシューター","もみじシューター",
  ".52ガロン",".52ガロンデコ",".96ガロン",".96ガロンデコ",".96ガロン爪",
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

  // ブラスター
  "ホットブラスター","ホットブラスターカスタム","ホットブラスター艶",
  "ロングブラスター","ロングブラスターカスタム",
  "ラピッドブラスター","ラピッドブラスターデコ",
  "Rブラスターエリート","Rブラスターエリートデコ","RブラスターエリートWNTR",
  "ノヴァブラスター","ノヴァブラスターネオ",
  "オーダーブラスターレプリカ",
  "クラッシュブラスター","クラッシュブラスターネオ",
  "S-BLAST92","S-BLAST91",

  // ローラー
  "スプラローラー","スプラローラーコラボ","オーダーローラーレプリカ",
  "カーボンローラー","カーボンローラーデコ","カーボンローラーANGL",
  "ダイナモローラー","ダイナモローラーテスラ","ダイナモローラー冥",
  "ワイドローラー","ワイドローラーコラボ","ワイドローラー惑",
  "ヴァリアブルローラー","ヴァリアブルローラーフォイル",

  // チャージャー
  "スプラチャージャー","スプラチャージャーコラボ","スプラチャージャーFRST",
  "スプラスコープ","スプラスコープコラボ","スプラスコープFRST",
  "スクイックリンα","スクイックリンβ",
  "14式竹筒銃・甲","14式竹筒銃・乙",
  "ソイチューバー","ソイチューバーカスタム",
  "R-PEN/5H","R-PEN/5B",
  "リッター4K","リッター4Kカスタム",
  "4Kスコープ","4Kスコープカスタム",

  // スロッシャー
  "バケットスロッシャー","バケットスロッシャーデコ",
  "ヒッセン","ヒッセンヒュー","ヒッセンASH",
  "モップリン","モップリンD","モップリン角",
  "スクリュースロッシャー","スクリュースロッシャーネオ",
  "エクスプロッシャー","エクスプロッシャーカスタム",
  "オーバースロッシャー","オーバースロッシャーデコ",

  // スピナー
  "バレルスピナー","バレルスピナーデコ",
  "スプラスピナー","スプラスピナーコラボ","スプラスピナーPYTN",
  "イグザミナー","イグザミナーヒュー",
  "ハイドラント","ハイドラントカスタム","ハイドラント圧",
  "ノーチラス47","ノーチラス79",
  "クーゲルシュライバー","クーゲルシュライバーヒュー",

  // マニューバー
  "スプラマニューバー","スプラマニューバーコラボ","スプラマニューバー耀",
  "デュアルスイーパー","デュアルスイーパーカスタム","デュアルスイーパー蹄",
  "スパッタリー","スパッタリーヒュー","スパッタリーOWL",
  "クアッドホッパーブラック","クアッドホッパーホワイト",
  "ケルビン525","ケルビン525デコ",
  "ガエンFF","ガエンFFカスタム",

  // シェルター
  "パラシェルター","パラシェルターソレーラ",
  "24式張替傘・甲","24式張替傘・乙",
  "キャンピングシェルター","キャンピングシェルターソレーラ","キャンピングシェルターCREM",
  "スパイガジェット","スパイガジェットソレーラ","スパイガジェット繚",

  // フデ
  "ホクサイ","ホクサイヒュー","ホクサイ彗",
  "オーダーブラシレプリカ",
  "パブロ","パブロヒュー",
  "フィンセント","フィンセントヒュー","フィンセントBRNZ",

  // ストリンガー
  "トライストリンガー","トライストリンガーコラボ","トライストリンガー燈",
  "LACT-450","LACT-450デコ","LACT-450MILK",
  "フルイドV","フルイドVカスタム",

  // ワイパー
  "ドライブワイパー","ドライブワイパーデコ","ドライブワイパーRUST",
  "ジムワイパー","ジムワイパーヒュー","ジムワイパー封",
  "オーダーワイパーレプリカ",
  "デンタルワイパーミント","デンタルワイパースミ"
];

// =====================
// ステージ
// =====================
const stages = [
  "ユノハナ大渓谷","ゴンスイ地区","ヤガラ市場","マテガイ放水路",
  "ナンプラー遺跡","ナメロウ金属","クサヤ温泉","タラポート",
  "ヒラメが丘","マサバ","キンメダイ","マヒマヒ",
  "海女美","チョウザメ","ザトウ","スメーシー",
  "コンブ","マンタ","タカアシ","オヒョウ",
  "バイガイ","ネギトロ","カジキ","リュウグウ","デカライン"
];

// =====================
// 初期化
// =====================
weapons.forEach(w => {
  const o = document.createElement("option");
  o.textContent = w;
  o.value = w;
  weaponSel.appendChild(o);
});

stages.forEach(s => {
  const o = document.createElement("option");
  o.textContent = s;
  o.value = s;
  stageSel.appendChild(o);
});

// =====================
// 保存
// =====================
form.addEventListener("submit", e => {
  e.preventDefault();

  battles.push({
    battleType: document.getElementById("battleType").value,
    rule: document.getElementById("rule").value,
    stage: stageSel.value,
    weapon: weaponSel.value,
    result: document.getElementById("result").value,

    kill: +document.getElementById("kill").value,
    assist: +document.getElementById("assist").value,
    death: +document.getElementById("death").value,
    paint: +document.getElementById("paint").value,
    special: +document.getElementById("special").value,

    memo: document.getElementById("memo").value
  });

  localStorage.setItem("battles", JSON.stringify(battles));

  form.reset();
  render();
  toast("Saved");
});

// =====================
// 表示
// =====================
function render() {
  list.innerHTML = "";

  battles.forEach(b => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <b>${b.stage}</b> / ${b.weapon}<br>
      ${b.rule} / ${b.result}<br>
      K:${b.kill} A:${b.assist} D:${b.death}<br>
      ${b.paint}p / SP:${b.special}<br>
      ${b.memo || ""}
    `;

    list.appendChild(div);
  });

  stats();
}

// =====================
// 統計
// =====================
function stats() {
  const wins = battles.filter(b => b.result === "win").length;
  const loses = battles.filter(b => b.result === "lose").length;
  const total = battles.length;

  const kills = battles.reduce((a,b)=>a+b.kill,0);
  const deaths = battles.reduce((a,b)=>a+b.death,0);

  document.getElementById("totalBattles").textContent = total;
  document.getElementById("wins").textContent = wins;
  document.getElementById("loses").textContent = loses;

  document.getElementById("winRate").textContent =
    total ? Math.round((wins/(wins+loses))*100) + "%" : "0%";

  document.getElementById("kd").textContent =
    deaths ? (kills/deaths).toFixed(2) : kills;
}

// =====================
// トースト
// =====================
function toast(text) {
  const t = document.getElementById("toast");
  t.textContent = text;
  t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),1200);
}

// =====================
// 初回描画
// =====================
render();
