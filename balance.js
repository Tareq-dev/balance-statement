     function getInputNumber(id) {
         
          const input = document.getElementById(id).value;
          const inputValue = parseFloat(input);
          if(isNaN(inputValue)){
               document.getElementById("error").style.display = "block";
           }
          document.getElementById(id).value = '';
          return inputValue;
     }
     // calculate income and expense
     document.getElementById('calculate-btn').addEventListener('click', function() {
         const incomeValue = getInputNumber('income-value');
         const foodValue = getInputNumber('food-value');
         const rentValue = getInputNumber('rent-value');
         const clothValue = getInputNumber('cloth-value');

         if(incomeValue < foodValue){
          alert('Food expense never more than income value');
         }else if(incomeValue < rentValue){
          alert('Rent expense never more than income value')
         }else if(incomeValue < clothValue){
          alert('Cloths expense never more than income value')
         }
         const totalExpenses =  foodValue + rentValue + clothValue;
         const balance = incomeValue - totalExpenses;
        
         document.getElementById('balance').innerText = balance;
         document.getElementById('total-expense').innerText = totalExpenses ;
      })   
      

      // saving and remaining balance
         document.getElementById('save-btn').addEventListener('click', function() {
         const saveValue = getInputNumber('save-value');
         const saving = balance.innerText;
         const savingNumber = parseFloat(saving);
         const savingRate =  savingNumber / 100;
         const savingAmount = savingRate * saveValue;
         const remainingBalance = savingNumber - savingAmount;

       
         document.getElementById('saving-amount').innerText = Math.round(savingAmount) ;
         document.getElementById('remaining-balance').innerText = Math.round(remainingBalance) ;
      })
         


