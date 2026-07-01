document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("battleForm");
  const list = document.getElementById("list");

  let battles = JSON.parse(localStorage.getItem("battles")) || [];

  // ===== 統計更新（v0.5.0）=====
  function updateStats() {
    const total = battles.length;
    const win = battles.filter(b => b.result === "win").length;
    const lose = battles.filter(b => b.result === "lose").length;

    const rate = total === 0 ? 0 : Math.round((win / total) * 100);

    document.getElementById("totalBattles").textContent = total;
    document.getElementById("winCount").textContent = win;
    document.getElementById("loseCount").textContent = lose;
    document.getElementById("winRate").textContent = rate + "%";
  }

  // ===== 表示 =====
  function render() {
    list.innerHTML = "";

    battles.forEach((b, i) => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <b>${b.rule}</b><br>
        結果：${b.result === "win" ? "勝ち" : "負け"}<br>
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

    const battle = {
      rule: document.getElementById("rule").value,
      result: document.getElementById("result").value,
      memo: document.getElementById("memo").value
    };

    battles.push(battle);
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
