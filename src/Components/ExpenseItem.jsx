import './ExpenseItem.css';

function ExpenseItem(props){
    return (
        <div className='expense-Item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-Item-desc'>
                <h2>{props.title}</h2>
                <div className='expense-price'>${props.price}</div>
            </div>
        </div>
    );
}


export default ExpenseItem;