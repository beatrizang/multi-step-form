const errorEmpty = 'This field is required';
const errorEmail = 'Valid email required';

const stepNumber1 = document.getElementById('step-number-1');
const stepNumber2 = document.getElementById('step-number-2');
const stepNumber3 = document.getElementById('step-number-3');
const stepNumber4 = document.getElementById('step-number-4');

const cardArcade = document.getElementById('card-arcade');
const cardAdvanced = document.getElementById('card-advanced');
const cardPro = document.getElementById('card-pro');

const checkService = document.getElementById('check-service');
const checkStorage = document.getElementById('check-storage');
const checkCustomizable = document.getElementById('check-customizable');

let cardSelected;

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
        btnColorsNext(stepNumber1,stepNumber2);
    }
});

//BOTONES DE STEP 2
$('#btn-back2').click(function(){
    $('#step-1').show();
    $('#step-2').hide();

    btnColorsPrevious(stepNumber1,stepNumber2);

});

$('#card-arcade').click(function(){
    cardColor(cardArcade,'magnolia','purplish-blue');
    cardColor(cardAdvanced,'white','light-gray');
    cardColor(cardPro,'white','light-gray');
});

$('#card-advanced').click(function(){
    cardColor(cardAdvanced,'magnolia','purplish-blue');
    cardColor(cardArcade,'white','light-gray');
    cardColor(cardPro,'white','light-gray');
});

$('#card-pro').click(function(){
    cardColor(cardPro,'magnolia','purplish-blue');
    cardColor(cardAdvanced,'white','light-gray');
    cardColor(cardArcade,'white','light-gray');
});


$('#btn-step2').click(function(){
    $('#step-2').hide();
    $('#step-3').show();

    btnColorsNext(stepNumber2,stepNumber3);
});

$('#btn-step3').click(function(){
    $('#step-3').hide();
    $('#step-4').show();

    btnColorsNext(stepNumber3,stepNumber4);
});

$('#check-service').click(function(){
    cardColor(checkService,'magnolia','purplish-blue');
});

$('#check-storage').click(function(){
    cardColor(checkStorage,'magnolia','purplish-blue');
});

$('#check-customizable').click(function(){
    cardColor(checkCustomizable,'magnolia','purplish-blue');
});

$('#btn-back3').click(function(){
    $('#step-2').show();
    $('#step-3').hide();
    btnColorsPrevious(stepNumber2,stepNumber3);
});

$('#btn-step4').click(function(){
    $('#step-4').hide();
    $('#step-5').show();
})

$('#btn-back4').click(function(){
    $('#step-3').show();
    $('#step-4').hide();
    btnColorsPrevious(stepNumber3,stepNumber4);
});

$('#btn-confirm').click(function(){
    $('#step-4').hide();
    $('#step-5').show();
})

function btnColorsNext (previous,next){
    previous.style.background = 'transparent';
    previous.style.color = 'var(--white)';
    next.style.background = 'var(--light-blue)';
    next.style.color = 'var(--marine-blue)';
}

function btnColorsPrevious (previous,next){
    previous.style.background = 'var(--light-blue)';
    previous.style.color = 'var(--marine-blue)';
    next.style.background = 'transparent';
    next.style.color = 'var(--white)';
}

function cardColor(card,bgColor,brColor){
    card.style.background = 'var(--'+bgColor+')';
    card.style.border = '1px solid var(--'+brColor+')';
}

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