function validateForm() {
    var firstNameInput = document.getElementById("fname-input");
    var lastNameInput = document.getElementById("lname-input");
    var emailInput = document.getElementById("email-input");

    if (firstNameInput.value.trim() === "" || emailInput.value.trim() === "" || lastNameInput.value.trim() === "") { //checking if the fields are empty
        alert("Please fill in all required fields.");
        return false;
    }

    alert("Dear " + firstNameInput.value + " " + lastNameInput.value + ", you have successfully subscribed for a personalized newsletter."); 
    return false;
}