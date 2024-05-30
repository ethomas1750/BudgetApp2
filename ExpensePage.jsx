// rrd imports
import {userLoaderData} from "react-router-dom"

// helpers
import {fetchData} from "../helpers";

// loader
export function dashboardLoader() {
    const expenses = fetchData("expenses")
    return{expenses}
    } 

export const ExpensesPage = () => {
    const {expenses} = userLoaderData()

    return <div className="grid-lg">
        <h1>All Expenses</h1>
        {
            expenses && expenses.length > 0
            ? (
                <div className="grid-md">
                    <h2>Recent Expenses<small>({expenses.length}total)</small>
                    </h2>
                    <Table expenses={expenses}/>
                    </div>
            )
            : <p>No Expenses to show</p>
        }
    </div>;
};

export default ExpensesPage

