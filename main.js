function validateName(){
let usname = document.getElementById('name').value ;
let regex = /^[a-zA-Z\s]+$/

if (regex.test(usname)){
document.getElementById("mssg1").innerHTML="verified";
document.getElementById('mssg1').style.color='green';
return true
}

else{
    document.getElementById('mssg1').innerHTML="failed";
    document.getElementById('mssg1').style.color='red';
    return false
}

}

const validateNumber= () => {
let nmum = document.getElementById('number').value ;
let reg =/^[0-9]{10}$/;

if (reg.test(nmum)){
    document.getElementById("mssg2").innerHTML="verified";
    document.getElementById('mssg2').style.color='green';
    return true
    }
    
    else{
        document.getElementById('mssg2').innerHTML="failed";
        document.getElementById('mssg2').style.color='red';
        return false
    }
    
}

function validateMail(){

    let usmail = document.getElementById('mail').value ;
    let reg = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9-_]{2,20})\.([a-z]{2,6})$/;
    
    if (reg.test(usmail)){
    document.getElementById("mssg3").innerHTML="verified";
    document.getElementById('mssg3').style.color='green';
    return true
    }
    
    else{
        document.getElementById('mssg3').innerHTML="failed";
        document.getElementById('mssg3').style.color='red';
        return false
    }

}
function validateAllFields(){
    validateName();
    validateNumber();
    validateMail();
   if(validateName() && validateNumber() && validateMail() )
   {
    return true
   }
   else{

    return false
   }

}