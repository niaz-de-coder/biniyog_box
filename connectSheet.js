// Paste your Web App URL inside the quotes below
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxYIBk7kAQ4DQfjt1DbRVEQr1WhIiGZ1timhgFGCz-mrOgO64gGm7w_E6FC-S8rm6GKog/exec"; 

// Format currency helper for clean display
function formatCurrency(amount) {
  const num = parseFloat(amount) || 0;
  return '$' + num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

async function fetchSimulationData() {
  try {
    const response = await fetch(WEB_APP_URL);
    const data = await response.json();
    
    // Fetch and update DOM elements by their IDs in index.html
    const totalEl = document.getElementById('totalBalanceDisplay');
    const cashEl = document.getElementById('cashBalanceDisplay');
    const sharesEl = document.getElementById('sharesBalanceDisplay');
    const incomeEl = document.getElementById('incomeBalanceDisplay');
    const investmentEl = document.getElementById('investmentBalanceDisplay');
    const withdrawalEl = document.getElementById('withdrawalBalanceDisplay');
    const modalReportEl = document.getElementById('modalReportTotal');

    if (totalEl) totalEl.innerText = formatCurrency(data.totalBalance);
    if (cashEl) cashEl.innerText = formatCurrency(data.cashBalance);
    if (sharesEl) sharesEl.innerText = formatCurrency(data.sharesBalance);
    if (incomeEl) incomeEl.innerText = formatCurrency(data.income);
    if (investmentEl) investmentEl.innerText = formatCurrency(data.investedAmount);
    if (withdrawalEl) withdrawalEl.innerText = formatCurrency(data.withdrawalAmount);
    if (modalReportEl) modalReportEl.innerText = formatCurrency(data.totalBalance);

    console.log("Portfolio data successfully loaded from Google Sheets:", data);
    
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
  }
}

// Automatically run the fetch function when the page loads
document.addEventListener('DOMContentLoaded', () => {
  fetchSimulationData();
});
