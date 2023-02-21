var getDaysInMonth = function(month,year) {
    
    return new Date(year, month, 0).getDate();
  
   };
   console.log(getDaysInMonth(1, 2023));
   console.log(getDaysInMonth(2, 2024));
   console.log(getDaysInMonth(9, 2023));
   console.log(getDaysInMonth(12, 2023));