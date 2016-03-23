var validateRegistrationForm = function () {
    var name = /^[A-Za-z]+$/;
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var age = calcAge(age);

    if (!fn.value.match(name) || !ln.value.match(name)) {
        alert('Name field must have alphabet characters only');
        return false;
    }
    else if (!mail.value.match(email)) {
        alert('Invalid Email Entered');
        return false;
    }
    else if (age < 0) {
        alert('Invalid Date of Birth Entered');
        return false;
    }
    else {
        var registerForm = function () {
            var gender = document.form.gender.value;
            var int = document.form.interest.value;
            var email = document.form.mail.value;
            if (gender == "male") {
                alert("Hello, Sir! You are " + age + " years old. We will send you mails on your selected topic of interest : " + int + " on your email id : " + email + ".");
            } else if (gender == "female") {
                alert("Hello, Madam! You are " + age + " years old. We will send you mails on your selected topic of interest : " + int + " on your email id : " + email + ".");
            } else {
                alert("Hello! You are " + age + " years old. We will send you mails on your selected topic of interest : " + int + " on your email id : " + email + ".");
            }
        };
        return registerForm();
    }
    function calcAge() {
        var today = new Date();
        var userdt = document.getElementById('dob').value;
        var birthDate = new Date(userdt);
        var age = (today.getFullYear() - birthDate.getFullYear());
        return age;

    };
};



