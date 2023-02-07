function handleSubmit(event){
    event.preventDefault();
    let userName=document.getElementById("userName").value;
    let userAge=document.getElementById("userAge").value;
    let render=document.getElementById("render");
    render.innerHTML=`Hi ${userName} your age is ${userAge}`;
}