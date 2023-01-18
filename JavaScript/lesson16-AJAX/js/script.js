const btn= document.querySelector('button');
const text = document.querySelector('.text');


const uploadData = ()=>{
   
        const xhttp = new XMLHttpRequest();
        // console.log(xhttp);
        xhttp.onload = function() {
            text.innerHTML = this.responseText;
            }
          xhttp.open("GET", "../data/country.txt", true);
          xhttp.send();


      
}
btn.onclick = uploadData;