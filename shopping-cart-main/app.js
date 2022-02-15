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
document.getElementById('case-pius').addEventListener('click',function(){ 
    updateCaseNumber(true);
    
    /*  const caseInput = document.getElementById('case-number')
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1;  */    
})
document.getElementById('case-minus').addEventListener('click',function(){ 
    updateCaseNumber(false);    
    /*const caseInput = document.getElementById('case-number')
    const caseNumber = caseInput.value; 
    caseInput.value = parseInt(caseNumber) - 1;*/    
})
