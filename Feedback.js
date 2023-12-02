/*Reference : https://youtu.be/CYlNJpltjMM*/
function FormValidation(){
    var custName = document.forms["feedbackForm"]["custName"].value;
    var custEmail = document.forms["feedbackForm"]["custEmail"].value;
    var custRating = document.forms["feedbackForm"]["custRating"].value;
    var custComment = document.forms["feedbackForm"]["custComment"].value;
    if (custName=="" ||custEmail=="" ||custRating=="" ){
        alert("Please fill in all required field.");
        return false;
    }
    else{
        alert("Dear" +custName+", \n\nThankYou very much for your feedback. You have rated our site as"+ custRating+", and Your comment was"+"'"+custComment+"'.");
        return true;
    }
}

