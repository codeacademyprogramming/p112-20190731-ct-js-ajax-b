"use strict";


let button = document.getElementById('ajax-button');
let pElem = document.getElementById('result');
button.addEventListener('click', ajaxRequest);


function ajaxRequest() {
    let request = new XMLHttpRequest();
    request.open('get', 'https://jsonplaceholder.typicode.com/photos');
    request.send();
    
    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let images= JSON.parse(request.responseText);
            
            document.querySelector('.row .col-md-3 img').src = images[0].url
            console.log(images);
        }
    }

}

