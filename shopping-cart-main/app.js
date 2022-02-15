function updateCaseNumber(product,price,isIncreasing){
    const caseInput = document.getElementById(product+ '-number')
    let caseNumber = caseInput.value;
    if(isIncreasing){
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if(caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }  
    caseInput.value = caseNumber;  
    // update Case Total 
    const caseTotal = document.getElementById(product+'-total')
    caseTotal.innerText = caseNumber * price; 
}
// phone increase decrase events 
document.getElementById('phone-plus').addEventListener('click', function(){
    updateCaseNumber('phone', 1219, true);
})


// handle case increase decrase events 
document.getElementById('case-pius').addEventListener('click',function(){ 
    updateCaseNumber('case', 59, true);
    
   
})
document.getElementById('case-minus').addEventListener('click',function(){ 
    updateCaseNumber('case', 59, false);    
      
})
