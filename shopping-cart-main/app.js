function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number')
    let caseNumber = caseInput.value;
    if(isIncreasing){
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if(caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }  
    caseInput.value = caseNumber;  
    // update Case Total 
    const caseTotal = document.getElementById('case-total')
    caseTotal.innerText = caseNumber * 59; 
}
// phone increase decrase events 
document.getElementById('phone-plus').addEventListener('click', function(){
    
})


// handle case increase decrase events 
document.getElementById('case-pius').addEventListener('click',function(){ 
    updateCaseNumber(true);
    
   
})
document.getElementById('case-minus').addEventListener('click',function(){ 
    updateCaseNumber(false);    
      
})
