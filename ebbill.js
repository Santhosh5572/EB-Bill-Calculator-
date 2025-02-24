function amt(){
    let bill = document.getElementById("bill").value
    let amount
 if(bill<=100){
    amount="NO CHARGE" , 100*0
 }
 else if(bill>100 && bill<=200){
    amount=  (100*0)+(bill-100)*2.35 
    
 }
 else if(bill>200 && bill<=400){
     amount=  (100*0)+(100*2.35)+(bill-200)*4.80
 }
 else if(bill>400 && bill<=500){
    amount=(100*0)+(100*2.35)+(200*4.80)+(bill-400)*6.45
 }
 else{
    if(bill>500){
        if(bill<=100){
            amount=bill*0
        }
        else if(bill>100 && bill<=400){
            amount=(100*0)+(bill-100)*4.80
        }
        else if(bill>400 && bill<=500){
            amount=(100*0)+(300*4.80)+(bill-400)*6.45
        }
        else if(bill>500 && bill<=600){
            amount=(100*0)+(300*4.80)+(100*6.45)+(bill-500)*8.55
        }
        else if(bill>600 && bill<=800){
            amount=(100*0)+(300*4.80)+(100*6.45)+(100*8.55)+(bill-600)*9.65
        }
        else if(bill>800 && bill<=1000){
            amount=(100*0)+(300*4.80)+(100*6.45)+(100*8.55)+(200*9.65)+(bill-800)*10.70
        }
        else {
            amount=(100*0)+(300*4.80)+(100*6.45)+(100*8.55)+(200*9.65)+(100*10.70)+(bill-1000)*11.80
        }
    }
 }
 document.getElementById("bill").value=amount 
document.getElementById("end").value= end }