var validateRegistrationForm = function () {

    var validateName = /^[A-Za-z]+$/;
    var validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var age = calcAge(age);
    var FirstName = document.form.fname;
    var LastName = document.form.lname;
    var Email = document.form.email;
    var Age = document.form.age;
    var Interest = document.getElementsByName('interest')[0];

    if (FirstName.value == "" )
    {
        window.alert("Please enter your first name.");
        FirstName.focus();
        return false;
    }

    else if (!FirstName.value.match(validateName))
    {
        window.alert("Please enter valid first name.");
        FirstName.focus();
        return false;
    }

    else if (LastName.value == "")
    {
        window.alert("Please enter your last name.");
        LastName.focus();
        return false;
    }

    else if (!LastName.value.match(validateName))
    {
        window.alert("Please enter valid last name.");
        LastName.focus();
        return false;
    }

    else if (Email.value == "")
    {
        window.alert("Please enter e-mail address.");
        Email.focus();
        return false;
    }

    else if (!Email.value.match(validateEmail))
    {
        window.alert("Please enter valid e-mail address.");
        Email.focus();
        return false;
    }

    else if (Age.value == "")
    {
        window.alert("Please enter your Age");
        Age.focus();
        return false;
    }

    else if (age < 0) {
        window.alert('Invalid Date of Birth Entered');
        Age.focus();
        return false;
    }

    else if (Interest.value== "") {
        window.alert('Select your Interest');
        Interest.focus();
        return false;
    }

    else {
        var registerForm = function () {
            var gender = document.form.gender.value;
            var choices = multipleInterest(choices);
            var email = document.form.mail.value;
            if (gender == "male") {
                alert("Hello, Sir! You are " + age + " years old. We will send you mails on your selected topic of interest : " + choices + " on your email id : " + email + ".");
            } else if (gender == "female") {
                alert("Hello, Madam! You are " + age + " years old. We will send you mails on your selected topic of interest : " + choices + " on your email id : " + email + ".");
            } else {
                alert("Hello! You are " + age + " years old. We will send you mails on your selected topic of interest : " + choices + " on your email id : " + email + ".");
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

    function multipleInterest() {
        var choices = " ", i;
        for (i = 0; i < myForm.interest.options.length; i++) {
            if (myForm.interest.options[i].selected) {
                choices += myForm.interest.options[i].value + ",";
            }
        }
        return choices;
    };
};