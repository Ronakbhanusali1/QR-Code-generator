

const input = document.getElementById('input');
const button = document.getElementById('submit');
const qrimg = document.getElementById('img');

button.addEventListener('click', ()=>{

    let qrvalue = input.value;
    if(!qrvalue) return;
    qrimg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`
    qrimg.style.display = "Block";
})


