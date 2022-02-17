       //function for getting Expense Number
     function expensesInputNumber(id) {
          const inputFeild = document.getElementById(id).value;
          const inputValue = parseFloat(inputFeild);
          //error message
          if(isNaN(inputValue) || inputValue < 0) {
                document.getElementById("error").style.display = "block";
          }
          document.getElementById(id).value = '';
          return inputValue;
     }

      //function for getting Income Number
     function IncomeInputNumber(id) {
          const inputFeild = document.getElementById(id).value;
          const inputValue = parseFloat(inputFeild);
          //error message
          if(isNaN(inputValue) || inputValue < 0) {
               document.getElementById("error").style.display = "block";
          }
          return inputValue;
     }
           // calculate Expense
          document.getElementById('calculate-btn').addEventListener('click', function() {
            
               const incomeValue = IncomeInputNumber('income-value');
               const foodValue = expensesInputNumber('food-value');
               const rentValue = expensesInputNumber('rent-value');
               const clothValue = expensesInputNumber('cloth-value');

               const totalExpenses =  foodValue + rentValue + clothValue;
               const balance = incomeValue - totalExpenses;
             
               if(totalExpenses > incomeValue){
               document.getElementById("errorMuch").style.display = "block";
               
               document.getElementById('balance').innerText = '00';
               document.getElementById('total-expense').innerText = '00' 

               }else{
                    document.getElementById('balance').innerText = balance;
                    document.getElementById('total-expense').innerText = totalExpenses;
               }
          })

          // saving and remaining balance
          document.getElementById('save-btn').addEventListener('click', function() {
          const totalExpense = document.getElementById('total-expense').innerText;
          const totalExpensesNumber = parseFloat(totalExpense);

          const balance = document.getElementById('balance').innerText;
          const balanceNumber = parseFloat(balance);

          const incomeValue = IncomeInputNumber('income-value');
          const saveValue = expensesInputNumber('save-value');

          const savingRate =  incomeValue / 100;
          const savingAmount = savingRate * saveValue;

          const remaining =  totalExpensesNumber + savingAmount;
          const remainingBalance  = incomeValue - remaining;
                //error message
          if(balanceNumber<savingAmount){
               document.getElementById("errorSave").style.display = "block";
               document.getElementById('saving-amount').innerText ='0';
               document.getElementById('remaining-balance').innerText = '0';
          }else{
               document.getElementById('saving-amount').innerText = Math.round(savingAmount) ;
               document.getElementById('remaining-balance').innerText = Math.round(remainingBalance) ;
          }
      })
