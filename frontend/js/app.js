let walletAddress = "STUDENT_WALLET_ABC123";

function connectWallet() {
  localStorage.setItem("wallet", walletAddress);
  window.location.href = "dashboard.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const wallet = localStorage.getItem("wallet");
  if (wallet && document.getElementById("wallet")) {
    document.getElementById("wallet").innerText = wallet;
    fetchBalance(wallet);
  }
});

function fetchBalance(wallet) {
  fetch(`http://127.0.0.1:5000/balance/${wallet}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("balance").innerText = data.meals;
    });
}

function consumeMeal() {
  fetch(`http://127.0.0.1:5000/consume/${walletAddress}`, {
    method: "POST"
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("status").innerText = data.status;
    fetchBalance(walletAddress);
  });
}

function createToken() {
  fetch("http://127.0.0.1:5000/create-token", { method: "POST" })
    .then(res => res.json())
    .then(data => {
      document.getElementById("adminStatus").innerText = data.status;
    });
}
