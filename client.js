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
    


    appendDOM();
}

function appendDOM(){
    console.log( 'in appendDOM' );




}