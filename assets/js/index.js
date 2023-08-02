const errorEmpty = 'This field is required';
const errorEmail = 'Valid email required';

$(document).ready(function(){
    $('#step-2').hide();
    $('#step-3').hide();
    $('#step-4').hide();
    $('#step-5').hide();
});


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
    }
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