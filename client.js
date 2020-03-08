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

    let $el1 = $('#row-firstName');
    $el1.append(`<div>${employee.firstName}</div>`);

    let $el2 = $('#row-lastName');
    $el2.append(`<div>${employee.lastName}</div>`);

    let $el3 = $('#row-idNumber');
    $el3.append(`<div>${employee.idNumber}</div>`);

    let $el4 = $('#row-jobTitle');
    $el4.append(`<div>${employee.jobTitle}</div>`);

    let $el5 = $('#row-annualSalary');
    $el5.append(`<div>${employee.annualSalary}</div>`);

    let $el6 = $('#row-deleteButton');
    $el6.append(`<button>Delete</button><br></br>`) 

    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
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

    if( monthlyCost < 200000 ){
        console.log( ' less than 200,000');
        let $el = $('#monthlyTotal');
        $el.empty();
        $el.append(`<h4>$${monthlyCost}</h4>`);
    }else{
        console.log( 'more than 200,000 ');
        let $el = $('#monthlyTotal');
        $el.empty();
        $el.append(`<h4>$${monthlyCost}</h4>`);
        $el.css('background-color', 'red');
    }
    
}