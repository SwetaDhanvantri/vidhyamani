let form = document.getElementById('subscribe');  
function subscribe(){
    var n=document.getElementById("email").value;  
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  

    if(n==''){  
        alert("Enter each details correctly");  
}
else if (!email_val.test(n))  
{  
    alert('Invalid email format please enter valid email id');  
}  
else{  
    alert("Subscribed successfully...");  
    window.location="https://vidhyamani.com/";  
    } 
} 