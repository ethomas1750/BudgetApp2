import React from 'react';
import PropTypes from 'prop-types';
import './ExpenseItem.css'; // Import the CSS file for styling the expense item

const ExpenseItem = ({ expense }) => {
    const { name, amount, date, category } = expense;

    return (
        <div className="expense-item">
            <h3 className="expense-name">{name}</h3>
            <div className="expense-details">
                <p><strong>Amount:</strong> ${amount.toFixed(2)}</p>
                <p><strong>Date:</strong> {new Date(date).toLocaleDateString()}</p>
                <p><strong>Category:</strong> {category}</p>
            </div>
        </div>
    );
};

ExpenseItem.propTypes = {
    expense: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
    }).isRequired,
};

export default ExpenseItem;
