//function to change the text colors
function changeColors() { 
    var body = document.querySelector("body"); 
    var text_select = document.getElementById("text-select");
    var text_color = text_select.value;
    body.style.color = text_color;
}

//function to change the background image
function changeBackground(){
    let btn1 = document.querySelector('#btn-1');
    let btn2 = document.querySelector('#btn-2');
    let btn3 = document.querySelector('#btn-3');
    let btn4 = document.querySelector('#btn-4');
    btn1.addEventListener('click', () =>{
        document.body.style.backgroundImage = "url('Background-1.jpg')";

    });
    btn2.addEventListener('click', () =>{
        document.body.style.backgroundImage = "url('Background-2.jpg')";

    });
    btn3.addEventListener('click', () =>{
        document.body.style.backgroundImage = "url('Background-3.jpg')";
    });
    btn4.addEventListener('click', () =>{
        document.body.style.backgroundImage = "url('Background-4.jpg')";
    });
}