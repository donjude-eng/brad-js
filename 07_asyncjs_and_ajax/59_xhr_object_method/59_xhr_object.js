document.getElementById('button').addEventListener('click' ,loadData);

function loadData(){
    //Create an XHR Object
    const xhr = new XMLHttpRequest();

    //OPEN
     xhr.open('GET', '59_xhr_object.txt' , true);
     //console.log('READYSTATE' , xhr.readyState);


    //Optional -Used for spinners/loaders
    xhr.onprogress = function(){
        console.log('READYSTATE' , xhr.readyState);
    }

     xhr.onload = function(){
        console.log('READYSTATE' , xhr.readyState);
         if(this.status === 200){
        //   console.log (this.responseText);
        document.getElementById('output').innerHTML = `<h1> ${this.responseText}</h1>`;
         }

     }

    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE' , xhr.readyState);
    //     if (this.status === 200 && this.readyState === 4){
    //         console.log (this.responseText);
    //     }
    // }

    xhr.onerror = function (){
        console.log ('Request error...');
    }

     xhr.send();

     // HTTP statuses
     // 200: "OK"
     // 403: "Forbidden"
     // 404: "Not Found"


     //readySate Values
     //0: request not initialized
     //1: server conncetion established
     //2: request recieved
     //3: processing request
     //4: request finsihed and response ready
}