import React from 'react';

const MonthYear = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.toLocaleString('default', { month: 'long' });
    
    return (
      <div>
        {month} {year}  
      </div>
    );
}
  
export default MonthYear;