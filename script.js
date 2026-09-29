// ==========================================
// SpendWise - JavaScript Foundation
// ==========================================

console.log("SpendWise script loaded successfully!");

// Requirement 2 & 3: Store Application Data & Collect User Input
// Prompt users for input and parse responses as numbers
let totalIncome = parseFloat(prompt("Enter your total monthly income ($):"));
let housingExpense = parseFloat(prompt("Enter your monthly housing/rent expense ($):"));
let foodExpense = parseFloat(prompt("Enter your monthly food/groceries expense ($):"));
let utilitiesExpense = parseFloat(prompt("Enter your monthly utilities expense ($):"));

// Requirement 5: Reusable Functions
/**
 * Calculates total expenses from individual expense items.
 * @param {number} housing 
 * @param {number} food 
 * @param {number} utilities 
 * @returns {number} Sum of expenses
 */
function calculateTotalExpenses(housing, food, utilities) {
    return housing + food + utilities;
}

/**
 * Calculates remaining balance after deducting expenses from total income.
 * @param {number} income 
 * @param {number} totalExpenses 
 * @returns {number} Remaining balance
 */
function calculateRemainingBalance(income, totalExpenses) {
    return income - totalExpenses;
}

// Requirement 4: Perform Budget Calculations
let totalExpenses = calculateTotalExpenses(housingExpense, foodExpense, utilitiesExpense);
let remainingBalance = calculateRemainingBalance(totalIncome, totalExpenses);

// Requirement 6: Display Results in Browser Console
console.log("==========================================");
console.log("            SPENDWISE SUMMARY             ");
console.log("==========================================");
console.log(`Total Monthly Income:    $${totalIncome.toFixed(2)}`);
console.log(`Total Monthly Expenses:  $${totalExpenses.toFixed(2)}`);
console.log(`------------------------------------------`);
console.log(`Remaining Balance:       $${remainingBalance.toFixed(2)}`);
console.log("==========================================");

// Provide visual feedback based on the remaining balance
if (remainingBalance > 0) {
    console.log("Status: Good job! You are within your budget.");
} else if (remainingBalance === 0) {
    console.log("Status: You have broken even this month.");
} else {
    console.log("Status: Warning! You are over budget.");
}
