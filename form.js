var personRegistrationForm = function () {
    var FirstName = document.getElementById("firstName").value;
    var LastName = document.getElementById("lastName").value;
    var Email = document.getElementById("eMail").value;
    var DOB = document.getElementById("age").value;
    var AGE = calcAge();
    var validateName = /^[A-Za-z]+$/;
    var validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (document.getElementById("m").checked) {
        var Gender = document.getElementById("m").value;
    } else if (document.getElementById("f").checked) {
        var Gender = document.getElementById("f").value;
    }
    var Interest = document.getElementById("int").value;

    function registerForm() {
        var AGE = calcAge();
        var choices = multipleInterest();
        var Email = document.getElementById("eMail").value;
        if (document.getElementById("m").checked) {
            var Gender = document.getElementById("m").value;
        } else if (document.getElementById("f").checked) {
            var Gender = document.getElementById("f").value;
        }
        if (Gender == "male") {
            alert("Hello, Sir! You are " + AGE + " years old. We will send you mails on your selected topic of interest : " + choices + " on your email id : " + Email + ".");
        } else if (Gender == "female") {
            alert("Hello, Madam! You are " + AGE + " years old. We will send you mails on your selected topic of interest : " + choices + " on your email id : " + Email + ".");
        } else {
            alert("Hello! You are " + AGE + " years old. We will send you mails on your selected topic of interest : " + choices + " on your email id : " + Email + ".");
        }
    }

    function calcAge() {
        var today = new Date();
        var userdt = document.getElementById('age').value;
        var birthDate = new Date(userdt);
        var AGE = (today.getFullYear() - birthDate.getFullYear());
        return AGE;
    }

    function multipleInterest() {
        var choices = " ", i;
        for (i = 0; i < myForm.interest.options.length; i++) {
            if (myForm.interest.options[i].selected) {
                choices += myForm.interest.options[i].value + ",";
            }
        }
        return choices;
    }

    validateRegistrationForm();

    function displayTable() {
        var list = multipleInterest();
        var personInterest = list;
        var table = document.getElementById("DataTable");
        var getRow = document.getElementById("getRow").value;
        if (table.rows.length != getRow) {
            table.deleteRow(getRow);
        } else {
            document.getElementById("getRow").value = getRow + 1;
        }
        var row = table.insertRow(getRow);
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        var cell5 = row.insertCell();
        var cell6 = row.insertCell();
        var cell7 = row.insertCell();
        cell1.innerHTML = FirstName;
        cell2.innerHTML = LastName;
        cell3.innerHTML = Email;
        cell4.innerHTML = DOB;
        cell5.innerHTML = Gender;
        cell6.innerHTML = personInterest;
        var update = "Update";
        var remove = "Remove";
        var action = '<a href="#" onclick="updateTable(' + (getRow) + ');"  > Update</a>';
        cell7.innerHTML = action;
        resetForm();
    }

    function validateRegistrationForm() {
        if (FirstName == "") {
            window.alert("Please enter your first name.");
            firstName.focus();
            return false;
        }
        else if (!FirstName.match(validateName)) {
            window.alert("Please enter valid first name.");
            firstName.focus();
            return false;
        }
        else if (LastName == "") {
            window.alert("Please enter your last name.");
            lastName.focus();
            return false;
        }
        else if (!LastName.match(validateName)) {
            window.alert("Please enter valid last name.");
            lastName.focus();
            return false;
        }
        else if (Email == "") {
            window.alert("Please enter e-mail address.");
            eMail.focus();
            return false;
        }
        else if (!Email.match(validateEmail)) {
            window.alert("Please enter valid e-mail address.");
            eMail.focus();
            return false;
        }
        else if (DOB == "") {
            window.alert("Please enter your Age");
            age.focus();
            return false;
        }
        else if (AGE < 0) {
            window.alert('Invalid Date of Birth Entered');
            age.focus();
            return false;
        }
        else if (Interest == "") {
            window.alert('Select your Interest');
            int.focus();
            return false;
        }
        else {
            registerForm();
            displayTable();
            updateTable();
        }
    }
}
function updateTable(tableRow) {
    document.getElementById("firstName").value = DataTable.rows[tableRow].cells[0].innerHTML;
    document.getElementById("lastName").value = DataTable.rows[tableRow].cells[1].innerHTML;
    document.getElementById("eMail").value = DataTable.rows[tableRow].cells[2].innerHTML;
    document.getElementById("age").value = DataTable.rows[tableRow].cells[3].innerHTML;
    if (DataTable.rows[tableRow].cells[4].innerHTML == "male") {
        document.getElementById("m").checked = true;
    } else {
        document.getElementById("f").checked = true;
    }
    for (var i = 0; i < document.getElementById("int").length; i++) {
        if (document.getElementById("int")[i].value == DataTable.rows[tableRow].cells[5].innerHTML) {
            document.getElementById("int").selectedIndex = i;
            break;
        }
    }
    document.getElementById("getRow").value = tableRow;
    document.getElementById("formUpdate").value = "Update";
}
function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("eMail").value = "";
    document.getElementById("m").checked = false;
    document.getElementById("f").checked = false;
    document.getElementById("age").value = "";
    document.getElementById("int").selectedIndex = 0;
    document.getElementById("formUpdate").value = "Add";
    document.getElementById("getRow").value = document.getElementById("DataTable").rows.length;
}
