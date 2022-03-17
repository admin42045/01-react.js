import './ExpenseItem.css';

function ExpenseItem(){
    return (
        <div className='expense-Item'>
            <div>February 01 2022</div>
            <div className='expense-Item-desc'>
                <h2>Mobile Recharge</h2>
                <div className='expense-price'>$340</div>
            </div>
        </div>
    );
}


export default ExpenseItem;