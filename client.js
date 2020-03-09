console.log( 'Salary Calculator' );

$( document ).ready( readyNow );

employees = [];

function readyNow(){
    console.log( 'JQ' );
    $('#btn-submit').on('click', employeeObject );    
    $('#tble-entry').on('click', '.btn-delete', deleteEmployee );
}

//creating object for each employee entry and pushing to array
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

//appending table entry to DOM
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
            <td class="salaryDOM">${item.annualSalary}</td>
            <td><button class="btn-delete">Delete</button></td>
            </tr>`
        );
        tableEntry.append($td);
}

//emptying input fields
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
    calculateMonthly();
}

//calculating monthly totals from inputs
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

//differentiating between below and above threshold of monthly totals.
//appending to DOM
    if( monthlyCost <= 200000 ){
        console.log( ' less than 200,000');
        let $el = $('#monthlyTotal');
        $el.empty();
        $el.append(`<h4>The total monthly cost is $${monthlyCost}</h4>`);
    }else{
        console.log( 'more than 200,000 ');
        let $el = $('#monthlyTotal');
        $el.empty();
        $el.append(`<h4>Alert! Monthly cost exceeds limit $${monthlyCost}</h4>`);
        $el.css('background-color', 'red');
    }   
}

// this is as far as I got trying to get my delete button to work

function deleteEmployee(){
    console.log( "in delete button" );
    let $el1 = $('.salaryDOM').text();
    console.log( $el1 );
    let $el2 = $(this).parent().parent();
    employees.shift( $el2 );
    $el2.empty();
    



}

