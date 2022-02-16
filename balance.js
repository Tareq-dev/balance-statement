     function getInputNumber(id) {
          const income = document.getElementById(id).value;
          const incomeValue = parseFloat(income);
          document.getElementById(id).value = '';
          return incomeValue;
     }
     // calculate income and saving
     document.getElementById('calculate-btn').addEventListener('click', function() {
         const incomeValue = getInputNumber('income-value');
         const foodValue = getInputNumber('food-value');
         const rentValue = getInputNumber('rent-value');
         const clothValue = getInputNumber('cloth-value');

        const totalExpenses =  foodValue + rentValue + clothValue;
        const balance = incomeValue - totalExpenses;

         document.getElementById('balance').innerText = balance;
         document.getElementById('total-expense').innerText = totalExpenses ;
      })   
         


