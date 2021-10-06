// Function Call
function validation() {
    // Storing Values
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var country = document.getElementById('country').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;




    // Conditions
    if (fname == "") {
        alert(" First name must be filled out");
        return false;
    }

    if (lname == "") {
        alert(" Last name must be filled out");
        return false;
    }


    if (country == "") {
        alert("Select Country to proceed..!")
        return false;
    }

    if (email == "") {
        alert("Fill Email to countinue");
        return false;
    }

    if (phone == "") {
        alert("Enter number to countinue");
        return false;
    }

    if (pass1 != pass2) {
        alert("Password Not Match");
        return false;
    } else {

        return true;
    }

}