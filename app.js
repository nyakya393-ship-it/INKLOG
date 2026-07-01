document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("battleForm");
  const list = document.getElementById("list");

  let battles = JSON.parse(localStorage.getItem("battles")) || [];

  // ===== 統計 =====
  function updateStats() {

    const validBattles = battles.filter(b => b.result !== "invalid");

    const total = validBattles.length;

    const win = validBattles.filter(b => b.result === "win").length;

    const lose =
      validBattles.filter(b => b.result === "lose").length +
      validBattles.filter(b => b.result === "disconnect").length;

    const rate = total === 0 ? 0 : Math.round((win / total) * 100);

    const totalKill = validBattles.reduce((s, b) => s + (b.kill || 0), 0);
    const totalDeath = validBattles.reduce((s, b) => s + (b.death || 0), 0);

    const kd = totalDeath === 0 ? totalKill : (totalKill / totalDeath).toFixed(2);

    document.getElementById("totalBattles").textContent = total;
    document.getElementById("winCount").textContent = win;
    document.getElementById("loseCount").textContent = lose;
    document.getElementById("winRate").textContent = rate + "%";
    document.getElementById("kdRatio").textContent = kd;
  }

  // ===== 表示 =====
  function render() {
    list.innerHTML = "";

    battles.forEach((b, i) => {

      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <b>${b.rule}</b><br>

        結果：${
          b.result === "win"
            ? "勝ち"
            : b.result === "lose"
            ? "負け"
            : b.result === "disconnect"
            ? "通信切断（負け）"
            : "無効試合"
        }<br>

        武器：${b.weapon || "未設定"}<br>
        キル：${b.kill} / デス：${b.death}<br>
        カウント：${b.count ?? "-"}<br>

        ${b.disconnect ? "⚠ 通信切断フラグ<br>" : ""}
        ${b.invalid ? "⚠ 無効試合フラグ<br>" : ""}

        メモ：${b.memo || "なし"}<br><br>

        <button onclick="removeBattle(${i})">削除</button>
      `;

      list.appendChild(div);
    });

    updateStats();
  }

  // ===== 保存 =====
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    battles.push({
      rule: document.getElementById("rule").value,
      result: document.getElementById("result").value,
      weapon: document.getElementById("weapon").value,
      kill: Number(document.getElementById("kill").value),
      death: Number(document.getElementById("death").value),
      count: Number(document.getElementById("count").value),
      memo: document.getElementById("memo").value,
      disconnect: document.getElementById("disconnect").checked,
      invalid: document.getElementById("invalid").checked
    });

    localStorage.setItem("battles", JSON.stringify(battles));

    form.reset();
    render();
  });

  // ===== 削除 =====
  window.removeBattle = function (index) {
    battles.splice(index, 1);
    localStorage.setItem("battles", JSON.stringify(battles));
    render();
  };

  render();

});
