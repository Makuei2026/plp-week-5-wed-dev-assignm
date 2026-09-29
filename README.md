Markdown
# SpendWise - Smart Budget Tracker

## Description
SpendWise is a lightweight web application designed to help users track their income and expenses. This project transforms SpendWise from a static visual page into a functional data-processing app using JavaScript.

## JavaScript Concepts Implemented
- **Variables & Data Types**: Stored numerical input data using `let` variables and converted user prompt strings into floats.
- **User Input**: Collected user budget and expense entries using browser `prompt()` dialogs.
- **Functions**: Created modular functions to handle budget calculations dynamically.
- **Console Output**: Logged formatted budget summaries and conditional status updates using `console.log()`.

## How Code Requirements Are Met
1. **Variables**: Used `totalIncome`, `housingExpense`, `foodExpense`, and `utilitiesExpense` to store data.
2. **User Input**: Captured input with `prompt()` and processed it using `parseFloat()`.
3. **Calculations**: Calculated total expenses by adding all individual categories, and determined the remaining balance by subtracting total expenses from income.
4. **Functions**: 
   - `calculateTotalExpenses()` organizes addition logic.
   - `calculateRemainingBalance()` handles subtraction logic.

## How to Run
1. Open `index.html` in any modern web browser.
2. Answer the browser prompts with your income and expense figures.
3. Open Developer Tools (`F12` -> Consol
