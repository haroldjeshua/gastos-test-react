import React, { useContext, useState } from "react"

const BudgetsContext = React.createContext()

export function useBudgets() {
    return useContext(BudgetsContext)
}

// for budget:
// {
//     id:
//     name:
//     max;
// }

// for expense:
// {
//    id:
//    budgetId:
//    amount:
//    description:
// }

export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useState([])
    const [expenses, setExpenses] = useState([])

    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId)
    }
    function addExpense() {}
    function addBudget() {}
    function deleteBudget() {}
    function deleteExpense() {}
    
    return (
        <BudgetsContext.Provider value={{
            budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense
        }}>{children}</BudgetsContext.Provider>
    )
}