import React from 'react';
import Table from './Table';

const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Amount', accessor: 'amount' },
    { header: 'Spent', accessor: 'spent' },
    { header: 'Remaining', accessor: 'remaining' },
    { header: 'Created At', accessor: 'createdAt' }
];

const data = [
    {
        name: 'Groceries',
        amount: 500,
        spent: 150,
        remaining: 350,
        createdAt: '2023-01-01'
    },
    {
        name: 'Entertainment',
        amount: 200,
        spent: 50,
        remaining: 150,
        createdAt: '2023-01-05'
        expense.map( { expenses ) => {}
            <tr key={expense.id}>

             {/*<ExpenseItem />}*

            </tr>
    }
];

const App = () => (
    <div className="App">
        <h1>Budget Table</h1>
        <Table columns={columns} data={data} />
    </div>
);

export default App;
