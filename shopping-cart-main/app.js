function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number')
    const caseNumber = caseInput.value;
    if(isIncreasing){
        caseInput.value = parseInt(caseNumber) + 1;
    }
    else if(caseNumber > 0) {
        caseInput.value = parseInt(caseNumber) - 1;
    }    
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
