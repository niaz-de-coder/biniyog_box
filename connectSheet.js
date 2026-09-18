// Paste your Web App URL inside the quotes below
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxYIBk7kAQ4DQfjt1DbRVEQr1WhIiGZ1timhgFGCz-mrOgO64gGm7w_E6FC-S8rm6GKog/exec"; 

async function fetchSimulationData() {
  try {
    const response = await fetch(WEB_APP_URL);
    const data = await response.json();
    
    // Now you can use these variables anywhere in your script
    console.log("Total Balance:", data.totalBalance);
    console.log("Cash Balance:", data.cashBalance);
    console.log("Shares Balance:", data.sharesBalance);
    console.log("Invested Amount:", data.investedAmount);
    console.log("Withdrawal Amount:", data.withdrawalAmount);
    console.log("Income:", data.income);
    
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
  }
}

// Run the function
fetchSimulationData();
