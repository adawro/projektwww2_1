function stringlength(str)
{
    return !(str.length < 2 || str.length > 10);
}
let k;
function checkingPassword(str1,str2) {


    if (String(str1).valueOf() !== String(str2).valueOf()) {
        return false;
    } else {
        if (str1.length >= 5) {
            return true;
        } else {
            return k = 1;
        }
    }
}
function checkingEmail(userinput) {
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

    return pattern.test(userinput);
}

function validation(form) {
    let vali=0;
    if(checkingEmail(form.elements['email'].value))
    {

    }
    else
    {
        vali=1;
        alert('Podaj poprawny adres email');
    }

    if (checkingPassword(form.elements['pwd1'].value,form.elements['pwd2'].value)) {

        if(k===1)
        {
            vali=1;
            alert('Podaj hasło minmum 5 znaków');
        }

    } else {
        vali=1;
        alert('Hasła nie są takie same');
    }

    if (stringlength(form.elements["usr1"].value)) {

    } else {
        vali=1;
        alert("Please input the userid between " + 2 + " and " + 10 + " characters");
    }
    if(vali===0)
    {
        alert('Dane zostały zapisane');
    }
}
