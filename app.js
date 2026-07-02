let battles = JSON.parse(localStorage.getItem("battles")) || [];

/* =====================
 データ
===================== */
const battleTypes = [
  "レギュラーマッチ",
  "バンカラマッチ(チャレンジ)",
  "バンカラマッチ(オープン)",
  "Xマッチ",
  "イベントマッチ",
  "フェスマッチ(チャレンジ)",
  "フェスマッチ(オープン)",
  "トリカラバトル",
  "プライベートマッチ"
];

const rules = [
  "ナワバリバトル",
  "ガチエリア",
  "ガチヤグラ",
  "ガチホコ",
  "ガチアサリ"
];

const weapons = [

/* =====================
 シューター
===================== */
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

/* =====================
 ブラスター
===================== */
"ホットブラスター","ホットブラスターカスタム","ホットブラスター艶",
"ロングブラスター","ロングブラスターカスタム",
"ラピッドブラスター","ラピッドブラスターデコ",
"Rブラスターエリート","Rブラスターエリートデコ","RブラスターエリートWNTR",
"ノヴァブラスター","ノヴァブラスターネオ",
"オーダーブラスターレプリカ",
"クラッシュブラスター","クラッシュブラスターネオ",
"S-BLAST92","S-BLAST91",

/* =====================
 ローラー
===================== */
"スプラローラー","スプラローラーコラボ","オーダーローラーレプリカ",
"カーボンローラー","カーボンローラーデコ","カーボンローラーANGL",
"ダイナモローラー","ダイナモローラーテスラ","ダイナモローラー冥",
"ワイドローラー","ワイドローラーコラボ","ワイドローラー惑",
"ヴァリアブルローラー","ヴァリアブルローラーフォイル",

/* =====================
 チャージャー
===================== */
"スプラチャージャー","スプラチャージャーコラボ","スプラチャージャーFRST",
"スプラスコープ","スプラスコープコラボ","スプラスコープFRST",
"スクイックリンα","スクイックリンβ",
"14式竹筒銃・甲","14式竹筒銃・乙",
"ソイチューバー","ソイチューバーカスタム",
"R-PEN/5H","R-PEN/5B",
"リッター4K","リッター4Kカスタム",
"4Kスコープ","4Kスコープカスタム",

/* =====================
 スロッシャー
===================== */
"バケットスロッシャー","バケットスロッシャーデコ",
"ヒッセン","ヒッセンヒュー","ヒッセンASH",
"モップリン","モップリンD","モップリン角",
"スクリュースロッシャー","スクリュースロッシャーネオ",
"エクスプロッシャー","エクスプロッシャーカスタム",
"オーバースロッシャー","オーバースロッシャーデコ",

/* =====================
 スピナー
===================== */
"バレルスピナー","バレルスピナーデコ",
"スプラスピナー","スプラスピナーコラボ","スプラスピナーPYTN",
"イグザミナー","イグザミナーヒュー",
"ハイドラント","ハイドラントカスタム","ハイドラント圧",
"ノーチラス47","ノーチラス79",
"クーゲルシュライバー","クーゲルシュライバーヒュー",

/* =====================
 マニューバー
===================== */
"スプラマニューバー","スプラマニューバーコラボ","スプラマニューバー耀",
"デュアルスイーパー","デュアルスイーパーカスタム","デュアルスイーパー蹄",
"スパッタリー","スパッタリーヒュー","スパッタリーOWL",
"クアッドホッパーブラック","クアッドホッパーホワイト",
"ケルビン525","ケルビン525デコ",
"ガエンFF","ガエンFFカスタム",

/* =====================
 シェルター
===================== */
"パラシェルター","パラシェルターソレーラ",
"24式張替傘・甲","24式張替傘・乙",
"キャンピングシェルター","キャンピングシェルターソレーラ","キャンピングシェルターCREM",
"スパイガジェット","スパイガジェットソレーラ","スパイガジェット繚",

/* =====================
 フデ
===================== */
"ホクサイ","ホクサイヒュー","ホクサイ彗",
"オーダーブラシレプリカ",
"パブロ","パブロヒュー",
"フィンセント","フィンセントヒュー","フィンセントBRNZ",

/* =====================
 ストリンガー
===================== */
"トライストリンガー","トライストリンガーコラボ","トライストリンガー燈",
"LACT-450","LACT-450デコ","LACT-450MILK",
"フルイドV","フルイドVカスタム",

/* =====================
 ワイパー
===================== */
"ドライブワイパー","ドライブワイパーデコ","ドライブワイパーRUST",
"ジムワイパー","ジムワイパーヒュー","ジムワイパー封",
"オーダーワイパーレプリカ",
"デンタルワイパーミント","デンタルワイパースミ"

];
const stages = [
  "ユノハナ大渓谷",
  "ゴンズイ地区",
  "ヤガラ市場",
  "マテガイ放水路",
  "ナンプラー遺跡",
  "ナメロウ金属",
  "クサヤ温泉",
  "タラポートショッピングパーク",
  "ヒラメが丘団地",
  "マサバ海峡大橋",
  "キンメダイ美術館",
  "マヒマヒリゾート＆スパ",
  "海女美術大学",
  "チョウザメ造船",
  "ザトウマーケット",
  "スメーシーワールド",
  "コンブトラック",
  "マンタマリア号",
  "タカアシ経済特区",
  "オヒョウ海運",
  "バイガイ亭",
  "ネギトロ炭鉱",
  "カジキ空港",
  "リュウグウターミナル",
  "デカライン高架下"
];

/* =====================
 タブ
===================== */
function showTab(id) {

  document.querySelectorAll(".tab").forEach(t => {
    t.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

/* =====================
 初期化
===================== */
window.addEventListener("DOMContentLoaded", () => {

  fill("battleType", battleTypes);
  fill("rule", rules);
  fill("weapon", weapons);
  fill("stage", stages);

  document.getElementById("saveBtn").onclick = saveBattle;

  update();
});

function fill(id, arr) {
  const el = document.getElementById(id);
  arr.forEach(v => {
    const o = document.createElement("option");
    o.value = v;
    o.textContent = v;
    el.appendChild(o);
  });
}

/* =====================
 保存
===================== */
function saveBattle() {

  battles.push({
    battleType: v("battleType"),
    rule: v("rule"),
    stage: v("stage"),
    weapon: v("weapon"),
    result: v("result"),
    kill: n("kill"),
    assist: n("assist"),
    death: n("death"),
    paint: n("paint"),
    special: n("special")
  });

  localStorage.setItem("battles", JSON.stringify(battles));
  update();
}

function v(id) {
  return document.getElementById(id)?.value || "";
}

function n(id) {
  return Number(document.getElementById(id)?.value || 0);
}

/* =====================
 更新
===================== */
function update() {
  stats();
  list();
}

/* =====================
 統計
===================== */
function stats() {

  const wins = battles.filter(b => b.result === "win").length;
  const loses = battles.filter(b => b.result === "lose").length;

  const kills = sum("kill");
  const deaths = sum("death");
  const paint = sum("paint");

  const rate = battles.length ? (wins / battles.length) * 100 : 0;
  const kd = deaths ? kills / deaths : kills;

  set("total", battles.length);
  set("wins", wins);
  set("loses", loses);
  set("rate", rate.toFixed(1) + "%");
  set("kd", kd.toFixed(2));
  set("avgPaint", battles.length ? (paint / battles.length).toFixed(1) : 0);
}

function sum(key) {
  return battles.reduce((a,b)=>a+(b[key]||0),0);
}

function set(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

/* =====================
 一覧
===================== */
function list() {

  const el = document.getElementById("list");
  el.innerHTML = "";

  battles.slice().reverse().forEach((b,i) => {

    const idx = battles.length - 1 - i;

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <b>${b.weapon}</b><br>
      ${b.stage}<br>
      ${b.battleType} / ${b.rule} / ${b.result}<br>
      K:${b.kill} A:${b.assist} D:${b.death}<br>
      ${b.paint}p SP:${b.special}<br>
      <button onclick="del(${idx})">削除</button>
    `;

    el.appendChild(div);
  });
}

/* =====================
 削除
===================== */
function del(i) {
  battles.splice(i,1);
  localStorage.setItem("battles", JSON.stringify(battles));
  update();
}
