function handleSubmit(event) {
    event.preventDefault();

    let userDate = document.getElementById("userDate").value;
    let userMonth = document.getElementById("userMonth").value;
    if (userMonth > 12){
        return alert("Nhap sai ruiii");
    }
    let userYear = document.getElementById("userYear").value;
    let chuoi = userDate + userMonth + userYear;

    let render = document.getElementById("render");

    let stringArray = chuoi.split("");
    let sum=0;
    for (let i=0; i<stringArray.length; i++){
        sum += parseInt(stringArray[i]);
    }
    if (sum==11){
        sum=11;
    } else if (sum==22){
        sum=22;
    } else if (sum==33){
        sum=33;
    } else{
        let tempDonvi=sum%10;
        let temChuc=parseInt(sum/10);
        sum=tempDonvi+temChuc;
    }

    let divId = "number"+sum;
    let renderItem=document.getElementById(divId);
    renderItem.classList.add("display-item");
    render.innerHTML = `Your date is ${userDate} your month is ${userMonth} your year is ${userYear}`;
}