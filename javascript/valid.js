
function valid(){

    var alert_div = document.getElementById("alert_div");
    var alert_suc = document.getElementById("alert_div_suc");
    var alert1 = document.getElementById("alert");
    var alert2 = document.getElementById("alert1");
                var na = document.getElementById("name");
                var em = document.getElementById("email");
                var ph = document.getElementById("phone");
                var ci = document.getElementById("city");
                var fe = document.getElementById('feedback');
            
            
            var email = /^[a-zA-Z0-9._]+@/;
            var phone = /^[6-9][0-9]{9}$/;

            if(na.value.length < 4){
                alert_div.style.display = "block";
                alert1.innerText = "Enter name correctly with  more than 4 characters";
                na.focus();
            }
            else if(!email.test(em.value)){
                 alert_div.style.display = "block";
                alert1.innerText = "Enter email correctly";
                em.focus();
            }
            else if(!phone.test(ph.value)){
                alert_div.style.display = "block";
                alert1.innerText = "Enter numbers more than 10";
                ph.focus();
            }
            else if(fe.value.length < 5){
                alert_div.style.display = "block";
                alert1.innerText = "Enter city more than 6 characters";
                ci.focus();
            }
            else if(fe.value.length < 6){
                alert_div.style.display = "block";
                alert1.innerText = "Enter feedback more than 6 characters";
                fe.focus();
            }
            else{
                alert_div_suc.style.display = "block";
                alert2.innerText = "Form submitted successfully";
            }
            }