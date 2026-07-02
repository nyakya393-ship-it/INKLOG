let battles = JSON.parse(localStorage.getItem("battles")) || [];

/* データ */
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

/* タブ */
function setupTabs(){

  document.querySelectorAll(".tab").forEach(tab=>{
    tab.onclick = () => {

      document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
      document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");

    };
  });
}

/* セレクト */
function fill(id, arr){
  const el=document.getElementById(id);
  arr.forEach(v=>{
    const o=document.createElement("option");
    o.value=v;
    o.textContent=v;
    el.appendChild(o);
  });
}

/* 保存 */
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

  showToast("保存できました");
}

/* クリア */
function clearInputs(){
  ["kill","assist","death","paint","special"].forEach(id=>{
    document.getElementById(id).value="";
  });
}

/* 戦績 */
function renderBattleList(){

  const el=document.getElementById("battleList");
  if(!el) return;

  el.innerHTML = battles.map((b,i)=>`
    <div class="card">
      <button class="deleteBtn" onclick="deleteBattle(${i})">削除</button><br>

      ${resultLabel(b.result)} | ${b.weapon} | ${b.stage}<br>
      ${b.rule} / ${b.battleType}<br>
      K:${b.kill} A:${b.assist} D:${b.death} 塗:${b.paint} SP:${b.special}
    </div>
  `).join("");
}

/* 削除 */
function deleteBattle(i){

  if(!confirm("削除する？")) return;

  battles.splice(i,1);
  localStorage.setItem("battles", JSON.stringify(battles));

  renderBattleList();
  renderAnalysis();

  showToast("削除しました");
}

/* ラベル */
function resultLabel(r){
  if(r==="win") return "勝ち";
  if(r==="lose") return "負け";
  if(r==="disconnect") return "通信切断";
  if(r==="invalid") return "無効試合";
  return r;
}

/* 分析 */
function renderAnalysis(){

  const el=document.getElementById("summary");
  if(!el) return;

  if(battles.length===0){
    el.innerHTML="<div class='card'>データなし</div>";
    return;
  }

  const valid = battles.filter(b=>b.result==="win"||b.result==="lose");
  const wins = valid.filter(b=>b.result==="win").length;

  const kills=sum("kill");
  const deaths=sum("death");
  const kd=deaths?kills/deaths:kills;

  el.innerHTML=`
    <div class="card">

      試合:${battles.length}<br>
      勝率:${valid.length?(wins/valid.length*100).toFixed(1):"0"}%<br>
      K/D:${kd.toFixed(2)}<br><br>

      勝ち:${battles.filter(b=>b.result==="win").length}<br>
      負け:${battles.filter(b=>b.result==="lose").length}<br>
      切断:${battles.filter(b=>b.result==="disconnect").length}<br>
      無効:${battles.filter(b=>b.result==="invalid").length}<br>

      <br>
      平均キル:${avg("kill").toFixed(2)}<br>
      平均デス:${avg("death").toFixed(2)}<br>

    </div>

    ${weaponStats()}
    ${stageStats()}
    ${typeStats()}
  `;
}

/* 武器 */
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

  return `<div class="card">武器TOP<br>
    ${arr.map(x=>`${x.name} ${(x.rate*100).toFixed(1)}%`).join("<br>")}
  </div>`;
}

/* ステージ */
function stageStats(){

  const map={};

  battles.forEach(b=>{
    if(!map[b.stage]) map[b.stage]={win:0,total:0};
    map[b.stage].total++;
    if(b.result==="win") map[b.stage].win++;
  });

  const arr=Object.entries(map)
    .map(([k,v])=>({name:k,rate:v.win/v.total}))
    .slice(0,5);

  return `<div class="card">ステージTOP<br>
    ${arr.map(x=>`${x.name} ${(x.rate*100).toFixed(1)}%`).join("<br>")}
  </div>`;
}

/* 種類 */
function typeStats(){

  const map={};

  battles.forEach(b=>{
    if(!map[b.battleType]) map[b.battleType]={win:0,total:0};
    map[b.battleType].total++;
    if(b.result==="win") map[b.battleType].win++;
  });

  const arr=Object.entries(map)
    .map(([k,v])=>({name:k,rate:v.win/v.total}));

  return `<div class="card">種類別勝率<br>
    ${arr.map(x=>`${x.name} ${(x.rate*100).toFixed(1)}%`).join("<br>")}
  </div>`;
}

/* 数学 */
function sum(k){return battles.reduce((a,b)=>a+(b[k]||0),0);}
function avg(k){return battles.length?sum(k)/battles.length:0;}

/* トースト */
function showToast(t){

  const el=document.getElementById("toast");

  el.textContent=t;
  el.classList.add("show");

  setTimeout(()=>el.classList.remove("show"),2000);
}

/* ヘルパー */
function v(id){return document.getElementById(id)?.value||"";}
function n(id){return Number(document.getElementById(id)?.value||0);}
