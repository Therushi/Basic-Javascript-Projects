const message = document.getElementById("message");
const clipboard = document.getElementById('copyToClipboard');
const reset = document.querySelector('#reset');

// console.log(message,clipboard,reset);
clipboard.addEventListener('click', () => {
    let text = message.value;
    if(text){
        message.select();
        navigator.clipboard.writeText(text)
        .then(()=>{
            alert("Copied",text)
        })
        .catch((err)=>{
            console.log(err);
        })
    }else{
        alert("Please Enter Some text to copy...!")
    }
})

reset.addEventListener('click', ()=>{
    let text = message.value;
    if(text){
      message.value = ""
    }
})