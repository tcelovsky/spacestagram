import React from 'react';

const MonthYear = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.toLocaleString('default', { month: 'long' });
    
    return (
      <div className="current-month">
        {month} {year}  
      </div>
    );
}
  
export default MonthYear;