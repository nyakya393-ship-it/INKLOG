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
  "スプラシューター","わかばシューター",".52ガロン","リッター4K",
  "スプラローラー","ヒッセン","バレルスピナー","スプラマニューバー",
  "パラシェルター","ホクサイ","トライストリンガー","ジムワイパー"
];

const stages = [
  "ユノハナ大渓谷","ゴンズイ地区","ヤガラ市場","マテガイ放水路",
  "ナメロウ金属","クサヤ温泉","ヒラメが丘団地","マサバ海峡大橋"
];

/* =====================
 タブ
===================== */
function showTab(id) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  if (id === "statsTab") renderStats();
}

/* =====================
 初期化
===================== */
window.addEventListener("DOMContentLoaded", () => {

  fill("battleType", battleTypes);
  fill("rule", rules);
  fill("stage", stages);
  fill("weapon", weapons);

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

  sync();
}

/* =====================
 削除（1件）
===================== */
function deleteBattle(index) {
  battles.splice(index, 1);
  sync();
}

/* =====================
 全削除
===================== */
function clearBattles() {
  if (!confirm("全部消す？")) return;
  battles = [];
  sync();
}

/* =====================
 保存同期
===================== */
function sync() {
  localStorage.setItem("battles", JSON.stringify(battles));
  update();
}

/* =====================
 更新
===================== */
function update() {
  renderList();
}

/* =====================
 統計
===================== */
function renderStats() {

  const wins = battles.filter(b => b.result === "win").length;
  const loses = battles.filter(b => b.result === "lose").length;

  const kills = sum("kill");
  const deaths = sum("death");
  const paint = sum("paint");

  const rate = battles.length ? (wins / battles.length) * 100 : 0;
  const kd = deaths ? kills / deaths : kills;

  const box = document.getElementById("statsBox");
  if (!box) return;

  box.innerHTML = `
    <div class="card">試合: ${battles.length}</div>
    <div class="card">勝ち: ${wins}</div>
    <div class="card">負け: ${loses}</div>
    <div class="card">勝率: ${rate.toFixed(1)}%</div>
    <div class="card">K/D: ${kd.toFixed(2)}</div>
    <div class="card">平均塗り: ${battles.length ? (paint / battles.length).toFixed(1) : 0}</div>

    <button onclick="clearBattles()">全削除</button>
  `;
}

/* =====================
 一覧（削除ボタン追加）
===================== */
function renderList() {

  const list = document.getElementById("list");
  list.innerHTML = "";

  battles.slice().reverse().forEach((b,i) => {

    const index = battles.length - 1 - i;

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <b>${b.weapon}</b><br>
      ${b.stage}<br>
      ${b.battleType} / ${b.rule} / ${b.result}<br>
      K:${b.kill} A:${b.assist} D:${b.death}<br>
      ${b.paint}p SP:${b.special}<br>

      <button onclick="deleteBattle(${index})">削除</button>
    `;

    list.appendChild(div);
  });
}

/* =====================
 ヘルパー
===================== */
function v(id){ return document.getElementById(id)?.value || ""; }
function n(id){ return Number(document.getElementById(id)?.value || 0); }
function sum(k){ return battles.reduce((a,b)=>a+(b[k]||0),0); }
