     //function for getting Expense Number
     function expensesInputNumber(id) {
          const input = document.getElementById(id).value;
          const inputValue = parseFloat(input);
          //error message
               if (document.getElementById(id).value == "") {
                    document.getElementById("error").style.display = "block";
               }
               else if(typeof inputValue == 'number' && inputValue < 0) {
               document.getElementById("error").style.display = "block";
               }
          document.getElementById(id).value = '';
          return inputValue;
     }
      //function for getting Income Number
     function IncomeInputNumber(id) {
          const input = document.getElementById(id).value;
          const inputValue = parseFloat(input);
          //error message
          if(typeof inputValue == 'number' && inputValue < 0){
               document.getElementById("error").style.display = "block";
               }
          return inputValue;
     }
           // calculate Expense
          function calculateExpense(){
               const incomeValue = IncomeInputNumber('income-value');
               const foodValue = expensesInputNumber('food-value');
               const rentValue = expensesInputNumber('rent-value');
               const clothValue = expensesInputNumber('cloth-value');

               //error message
                if(incomeValue < foodValue){
                    document.getElementById("errorFood").style.display = "block";
                    document.getElementById("errorRent").style.display = "none";
                    document.getElementById("errorCloth").style.display = "none";
               }else if(incomeValue < rentValue){
                    document.getElementById("errorFood").style.display = "none";
                    document.getElementById("errorRent").style.display = "block";
                    document.getElementById("errorCloth").style.display = "none";
               }else if(incomeValue < clothValue){
                    document.getElementById("errorFood").style.display = "none";
                    document.getElementById("errorRent").style.display = "none";
                    document.getElementById("errorCloth").style.display = "block";
               } 

               const totalExpenses =  foodValue + rentValue + clothValue;
               const balance = incomeValue - totalExpenses;
              
               if(totalExpenses > incomeValue){
                    document.getElementById("errorFood").style.display = "none";
                    document.getElementById("errorRent").style.display = "none";
                    document.getElementById("errorCloth").style.display = "none";
                    document.getElementById("errorMuch").style.display = "block";
               
               document.getElementById('balance').innerText = '00';
               document.getElementById('total-expense').innerText = '00' 
               }else{
                    document.getElementById('balance').innerText = balance;
                    document.getElementById('total-expense').innerText = totalExpenses ;
               }
               return totalExpenses;
     }

     document.getElementById('calculate-btn').addEventListener('click', function() {
          calculateExpense();
     })
      // saving and remaining balance
      document.getElementById('save-btn').addEventListener('click', function() {
          const totalExpense = document.getElementById('total-expense').innerText;
          const totalExpensesNum = parseFloat(totalExpense);

          const balance = document.getElementById('balance').innerText;
          const balanceNumber = parseFloat(balance);

          const incomeValue = IncomeInputNumber('income-value');
          const saveValue = expensesInputNumber('save-value');

          const savingRate =  incomeValue / 100;
          const savingAmount = savingRate * saveValue;

          const remaining =  totalExpensesNum + savingAmount;
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
