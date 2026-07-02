let battles = JSON.parse(localStorage.getItem("battles")) || [];

/* =====================
 バトル種類（確定版）
===================== */
const battleTypes = [
  "レギュラーマッチ",
  "バンカラマッチ（オープン）",
  "バンカラマッチ（チャレンジ）",
  "Xマッチ",
  "イベントマッチ",
  "フェスマッチ（オープン）",
  "フェスマッチ（チャレンジ）",
  "トリカラバトル（攻撃）",
  "トリカラバトル（守備）",
  "プライベートマッチ"
];

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
const rules = ["ナワバリバトル","ガチエリア","ガチヤグラ","ガチホコバトル","ガチアサリ"];

/* 初期化 */
window.onload = () => {

  fill("weapon", weapons);
  fill("stage", stages);
  fill("rule", rules);
  fill("battleType", battleTypes);

  setupTabs();
  renderBattleList();
  renderAnalysis();
};

/* =====================
 タブ
===================== */
function setupTabs(){

  document.querySelectorAll(".tab").forEach(tab=>{
    tab.addEventListener("click", () => {

      const target = tab.dataset.tab;

      // タブ状態
      document.querySelectorAll(".tab")
        .forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // ページ切替
      document.querySelectorAll(".page")
        .forEach(p => p.classList.remove("active"));

      const targetPage = document.getElementById(target);
      if(targetPage) targetPage.classList.add("active");

      // ⭐重要：分析だけ再描画
      if(target === "analysis"){
        renderAnalysis();
      }

    });
  });

}

/* =====================
 セレクト
===================== */
function fill(id, arr){
  const el=document.getElementById(id);

  arr.forEach(v=>{
    const o=document.createElement("option");
    o.value=v;
    o.textContent=v;
    el.appendChild(o);
  });
}

/* =====================
 保存
===================== */
function saveBattle(){

  battles.push({
    weapon:v("weapon"),
    stage:v("stage"),
    rule:v("rule"),
    battleType:v("battleType"),
    result:v("result"),
    kill:n("kill"),
    assist:n("assist"),
    death:n("death"),
    paint:n("paint"),
    special:n("special")
  });

  localStorage.setItem("battles", JSON.stringify(battles));

  clearInputs();

  renderBattleList();
  renderAnalysis();

  alert("保存できました");
}

/* =====================
 入力クリア
===================== */
function clearInputs(){
  ["kill","assist","death","paint","special"].forEach(id=>{
    document.getElementById(id).value="";
  });
}

/* =====================
 戦績
===================== */
function renderBattleList(){

  const el=document.getElementById("battleList");

  if(!el) return;

  el.innerHTML = battles.map((b,i)=>`
    <div class="card">
      ${b.result} | ${b.weapon} | ${b.stage}<br>
      ${b.rule} / ${b.battleType}<br>
      K:${b.kill} A:${b.assist} D:${b.death} 塗:${b.paint} SP:${b.special}
    </div>
  `).join("");
}

/* =====================
 分析（完全版）
===================== */
function renderAnalysis(){

  const el=document.getElementById("summary");
  if(!el) return;

  if(battles.length===0){
    el.innerHTML="<div class='card'>データなし</div>";
    return;
  }

  const wins=battles.filter(b=>b.result==="win").length;

  const kills=sum("kill");
  const deaths=sum("death");

  const kd=deaths?kills/deaths:kills;

  const avgKill=avg("kill");
  const avgDeath=avg("death");
  const avgPaint=avg("paint");
  const avgSp=avg("special");

  const bestKill=[...battles].sort((a,b)=>b.kill-a.kill)[0];

  el.innerHTML=`
    <div class="card">

      📊 基本統計<br>
      試合数:${battles.length}<br>
      勝率:${(wins/battles.length*100).toFixed(1)}%<br>
      K/D:${kd.toFixed(2)}<br><br>

      🎯 平均<br>
      キル:${avgKill.toFixed(2)}<br>
      デス:${avgDeath.toFixed(2)}<br>
      塗り:${avgPaint.toFixed(1)}<br>
      SP:${avgSp.toFixed(1)}<br><br>

      🔥 ハイライト<br>
      最高キル:${bestKill.kill} (${bestKill.weapon})<br>

    </div>

    ${weaponStats()}
    ${stageStats()}
    ${typeStats()}
  `;
}

/* =====================
 武器分析
===================== */
function weaponStats(){

  const map={};

  battles.forEach(b=>{
    if(!map[b.weapon]) map[b.weapon]={win:0,total:0};
    map[b.weapon].total++;
    if(b.result==="win") map[b.weapon].win++;
  });

  const arr=Object.entries(map)
    .map(([k,v])=>({name:k,rate:v.win/v.total}))
    .sort((a,b)=>b.rate-a.rate)
    .slice(0,5);

  return `
    <div class="card">
      🏆 武器TOP<br>
      ${arr.map(x=>`${x.name} ${(x.rate*100).toFixed(1)}%`).join("<br>")}
    </div>
  `;
}

/* =====================
 ステージ分析
===================== */
function stageStats(){

  const map={};

  battles.forEach(b=>{
    if(!map[b.stage]) map[b.stage]={win:0,total:0};
    map[b.stage].total++;
    if(b.result==="win") map[b.stage].win++;
  });

  const arr=Object.entries(map)
    .map(([k,v])=>({name:k,rate:v.win/v.total}))
    .sort((a,b)=>b.rate-a.rate)
    .slice(0,5);

  return `
    <div class="card">
      🗺 ステージTOP<br>
      ${arr.map(x=>`${x.name} ${(x.rate*100).toFixed(1)}%`).join("<br>")}
    </div>
  `;
}

/* =====================
 種類分析
===================== */
function typeStats(){

  const map={};

  battles.forEach(b=>{
    if(!map[b.battleType]) map[b.battleType]={win:0,total:0};
    map[b.battleType].total++;
    if(b.result==="win") map[b.battleType].win++;
  });

  const arr=Object.entries(map)
    .map(([k,v])=>({name:k,rate:v.win/v.total}));

  return `
    <div class="card">
      ⚔ 種類別勝率<br>
      ${arr.map(x=>`${x.name} ${(x.rate*100).toFixed(1)}%`).join("<br>")}
    </div>
  `;
}

/* =====================
 数学
===================== */
function sum(k){return battles.reduce((a,b)=>a+(b[k]||0),0);}
function avg(k){return battles.length?sum(k)/battles.length:0;}

/* =====================
 ヘルパー
===================== */
function v(id){return document.getElementById(id)?.value||"";}
function n(id){return Number(document.getElementById(id)?.value||0);}

window.onload = () => {

  fill("weapon", weapons);
  fill("stage", stages);
  fill("rule", rules);
  fill("battleType", battleTypes);

  setupTabs();

  renderBattleList();
  renderAnalysis();

};
