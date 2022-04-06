let text = document.querySelector('input');
const submit =  document.querySelector('button');
const message = document.querySelector('#message');




submit.addEventListener('click',()=>{
    let textValue = text.value;
    if(textValue.length > 0){
        message.innerText = textValue;
    } else{
        alert('input message')
    }
    text.value = '';
})