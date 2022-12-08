let button = document.getElementById('btn-calc');

button.addEventListener('click', () =>
{
    const car_price = parseFloat(document.getElementById('car_price').value);
    const interest_rate = parseFloat(document.getElementById('interest_rate').value);
    const loan_period = parseFloat(document.getElementById('loan_period').value);
    const down_payment_pct = parseFloat(document.getElementById('down_payment_pct').value);
    
    const result1 = document.getElementById('down_payment_output');
    const result2 = document.getElementById('applied_loan_amount_pct_output');
    const result3 = document.getElementById('applied_loan_amount_output');
    const result4 = document.getElementById('total_interest_paid_output');
    const result5 = document.getElementById('total_loan_amount_output');
    const result6 = document.getElementById('monthly_repayment_unit_output');
    const result7 = document.getElementById('monthly_repayment_output');


    

    let cp_status=false, ir_status=false; lp_status=false; dp_status=false;


    if(car_price === '' || isNaN(car_price) || (car_price <= 0))
    {
        document.getElementById('car_price_error').innerHTML = 'Please provide a valid CAR PRICE money amount.';
    }
    else
    {
        document.getElementById('car_price_error').innerHTML = '';
        cp_status=true;
    }


    if(interest_rate === '' || isNaN(interest_rate) || (interest_rate <= 0))
    {
        document.getElementById('interest_rate_error').innerHTML = 'Please provide a valid INTEREST RATE percentage amount.';
    }
    else
    {
        document.getElementById('interest_rate_error').innerHTML = '';
        ir_status=true;
    }


    if(loan_period === '' || isNaN(loan_period) || (loan_period <= 0))
    {
        document.getElementById('loan_period_error').innerHTML = 'Please provide a valid LOAN PERIOD amount.';
    }
    else
    {
        document.getElementById('loan_period_error').innerHTML = '';
        lp_status=true;
    }


    if(down_payment_pct === '' || isNaN(down_payment_pct) || (down_payment_pct <= 0))
    {
        document.getElementById('down_payment_pct_error').innerHTML = 'Please provide a valid DOWN PAYMENT percentage amount.';
    }
    else
    {
        document.getElementById('down_payment_pct_error').innerHTML = '';
        dp_status=true;
    }



    if(cp_status && ir_status && lp_status && dp_status)
    {
        // xxx_myr means data input of xxx is in the form of "%"
        const down_payment = (car_price * down_payment_pct/100).toFixed(2);

        const applied_loan_amount_pct = (100 - down_payment_pct);
        const applied_loan_amount = (car_price * applied_loan_amount_pct/100).toFixed(2);

        const total_interest_paid = (applied_loan_amount * interest_rate/100 * loan_period).toFixed(2);

        const total_loan_amount = (parseFloat(applied_loan_amount) + parseFloat(total_interest_paid)).toFixed(2);

        const monthly_repayment = (total_loan_amount / (loan_period*12)).toFixed(2);


        
        result1.innerHTML = down_payment;
        result2.innerHTML = applied_loan_amount_pct;
        result3.innerHTML = applied_loan_amount;
        result4.innerHTML = total_interest_paid;
        result5.innerHTML = total_loan_amount;
        result6.innerHTML = 'MYR';
        result7.innerHTML = monthly_repayment;
    }
    else
    {
        alert('The form has errors');
        result.innerHTML = '';
    }
});