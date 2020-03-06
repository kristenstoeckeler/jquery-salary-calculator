console.log( 'Salary Calculator' );

$( document ).ready( readyNow );

employees = [];

function readyNow(){
    console.log( 'JQ' );
    $('#btn-submit').on('click', employeeObject );    
}

function employeeObject(){
    console.log( 'in employeeObject' );
    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNumber: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#annualSalary').val()
    }
    console.log( employee );
    employees.push( employee );
    console.log( employees );
    calculateMonthly();
}

function calculateMonthly(){
    console.log( 'in calculateMonthly' );
    let annualCost = 0;
    let monthlyCost = 0;
    for (employee of employees){
        console.log( 'in for loop' );
        annualCost = annualCost + Number(employee.annualSalary);
    }
    monthlyCost = annualCost / 12;
    console.log( monthlyCost );
    // appendDOM();
}

// function appendDOM(){
//     console.log( 'in appendDOM' );
//     let $el1= 
//     let $el2 =
//     let $el3 =
//     let $el4 =
//     let $el5 =
// }