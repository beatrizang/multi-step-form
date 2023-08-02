const errorEmpty = 'This field is required';
const errorEmail = 'Valid email required';
const stepNumber1 = document.getElementById('step-number-1');
const stepNumber2 = document.getElementById('step-number-2');

$(document).ready(function(){
    stepNumber1.style.background = 'var(--light-blue)';
    stepNumber1.style.color = 'var(--marine-blue)';
    $('#step-2').hide();
    $('#step-3').hide();
    $('#step-4').hide();
    $('#step-5').hide();
});

//BOTONES DE STEP 1
$('#btn-step1').click(function(){

    let name = $('#form-name').val();
    let email = $('#form-email').val();
    let phone = $('#form-phone').val();

    let errorName = showError(name,'error-name');
    let errorEmail = showError(email,'error-email');
    let errorPhone = showError(phone,'error-phone');

    let errorEmail2 = showErrorEmail(email,'error-email');

    if(!errorName && !errorEmail && !errorPhone &&  !errorEmail2){
        $('#step-1').hide();
        $('#step-2').show();
        stepNumber1.style.background = 'transparent';
        stepNumber1.style.color = 'var(--white)';
        stepNumber2.style.background = 'var(--light-blue)';
        stepNumber2.style.color = 'var(--marine-blue)';
    }
});

//BOTONES DE STEP 2
$('#btn-back2').click(function(){
    $('#step-1').show();
    $('#step-2').hide();
    stepNumber1.style.background = 'var(--light-blue)';
    stepNumber1.style.color = 'var(--marine-blue)';
    stepNumber2.style.background = 'transparent';
    stepNumber2.style.color = 'var(--white)';
});



function showErrorEmail(email,id){
    if(!esEmail(email)){
        $('#'.concat(id)).html(errorEmail);
        return true;
    }
    else{
        $('#'.concat(id)).html('');
        return false;
    }
}

function showError(valor,id){
    if(isEmpty(valor)){
        $('#'.concat(id)).html(errorEmpty);
        return true;
    }
    else{
        $('#'.concat(id)).html('');
        return false;
    }
}

function esEmail(cadena){
    let regex = new RegExp('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}');
    return regex.test(cadena);
}

function isEmpty(cadena){
    return (cadena.length == 0 || cadena == ' ')?true : false;
}