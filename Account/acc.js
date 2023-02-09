
function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("title").style.color = "white";
    document.getElementById("one").style.color = "white";
    document.getElementById("ca-creation").style.color = "white";
 }

 function Ligtmode() {
    var element = document.body;
    element.classList.toggle("light-mode");
    document.getElementById("title").style.color = "black";
    document.getElementById("one").style.color = "black";
    document.getElementById("ca-creation").style.color = "black";
 }

//  Log in
 function check(){

    var userName = document.getElementById('USname').value;
    var userPw = document.getElementById('USpass').value;
    console.log(storedName.value);
    var khaibao = localStorage.getItem("List");
    var tr = false;

    for (i = 0; i < khaibao.length; i++) {
        if (khaibao [i].name === userName && khaibao [i].password === userPw) { 
            tr = true; 
            break;
        }  
    };
    if(tr == false){
        alert('Log in failed');
    }else{
        alert('Log in successful');
        // window.location = 'Trang home';
    }
    }




    // Sign up
    function store(){

        var done = document.getElementById("done").value;
        var name = document.getElementById('email').value;
        var pw = document.getElementById('pass').value;
        var repeat_password = document.getElementById("repass").value;
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
        
        if(name.length == 0){
            alert('Please fill in email');
        
        }else if(pw.length == 0){
            alert('Please fill in password');
        
        }else if(pw.length == 0){
            alert('Please re-enter the password');

        }else if(name.length == 0 && pw.value.length == 0){
            alert('Please fill in email and password');
        
         }else if(pw.length > 16){
           alert('Max of 16');        
        }else if(!pw.match(upperCaseLetters)){
            alert('please add 1 uppercase letter');
        
        }else if(!pw.match(lowerCaseLetters)){
            alert('please add 1 lovercase letter');
        
        }
        else{               
           var user = localStorage.getItem("List") ? JSON.parse(localStorage.getItem("List")) : [];
             user.push({
               name: name,
             password: pw,
             repeat_password: repeat_password,
             });
             console.log(user);
             localStorage.setItem("List", JSON.stringify(user));	
             localStorage.setItem("abc", JSON.stringify(user));
             }
             
         var button = document.getElementById("button1");
         button.addEventListener('click', store);
            alert('Your account has been created');
        }

        
