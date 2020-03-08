console.log( 'Salary Calculator' );

$( document ).ready( readyNow );

employees = [];

function readyNow(){
    console.log( 'JQ' );
    $('#btn-submit').on('click', employeeObject );    
    $('#tble-entry').on('click', '.btn-delete', deleteEmployee );
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

    tableAppend();
} 

function tableAppend(){
    let tableEntry = $('.myTable');
    tableEntry.empty();


   //originally I wasn't using a loop for this. Eric helped me with this idea. 
    for (item of employees) {
        console.log('in employees loop');
        let $td = $(`
            <tr>
            <td>${item.firstName}</td>
            <td>${item.lastName}</td>
            <td>${item.idNumber}</td>
            <td>${item.jobTitle}</td>
            <td>${item.annualSalary}</td>
            <td><button class="btn-delete">Delete</button></td>
            </tr>`
        );
        tableEntry.append($td);
}
 
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
        $el.append(`<h4>$'${monthlyCost}</h4>`);
        $el.css('background-color', 'red');
    }   
}

function deleteEmployee(){
    console.log( "in delete button" );
    $(this).parent().parent().empty();
}