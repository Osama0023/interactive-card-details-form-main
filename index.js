const cardNumber = document.getElementById("number");
const numebrInp = document.getElementById("card_number");

const cardName = document.getElementById("name");
const nameInp = document.getElementById("card_name");

const cardMonth = document.getElementById("month");
const monthInp = document.getElementById("card_month");

const cardYear = document.getElementById("year");
const yearInp = document.getElementById("card_year");

const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("card_cvc");

const submitBtn = document.getElementById("submit_buttom");
const completed = document.querySelector(".thank");

const form = document.querySelector("form");

function setCardNumber (e) {
    cardNumber.innerText = format (e.target.value);
}
function setCardName (e) {
    cardName.innerText = e.target.value;
}
function setCardMonth(e) {
    cardMonth.innerText = e.target.value;
}
function setCardYear (e) {
    cardYear.innerText = e.target.value;
}
function setCardCvc (e) {
    cardCvc.innerText = e.target.value;
}
function format(s){
    return s.toString().replace(/\d{4}(?=.)/g,"$& ")
}

function handleSubmit (e) {
 e.preventDefault();
 if (!nameInp.value){
    nameInp.classList.add("error");
    nameInp.parentElement.classList.add("error_message");
 }
 else{
    nameInp.classList.remove("error");
    nameInp.parentElement.classList.remove("error_message")
 }if (!numebrInp.value){
    numebrInp.classList.add("error");
    numebrInp.parentElement.classList.add("error_message");
 }else if(numebrInp.value.length <16 ) {
    numebrInp.classList.add("error");
 }else{
    numebrInp.classList.remove("error");
    numebrInp.parentElement.classList.remove("error_message")
 }if (!monthInp.value){
    monthInp.classList.add("error");
    monthInp.parentElement.classList.add("error_message");
 }else if (monthInp.value>12 ){
    monthInp.classList.add("error");
    monthInp.parentElement.classList.add("error_message_validate_number");
 }
 else{
    monthInp.classList.remove("error");
    monthInp.parentElement.classList.remove("error_message")
 }if (!yearInp.value){
    yearInp.classList.add("error");
    yearInp.parentElement.classList.add("error_message");
 }else{
    yearInp.classList.remove("error");
    yearInp.parentElement.classList.remove("error_message")
 }if (!cvcInp.value){
    cvcInp.classList.add("error");
    cvcInp.parentElement.classList.add("error_message");
 }else if(cvcInp.value.length<3){
    cvcInp.classList.add("error");
    cvcInp.parentElement.classList.add("error_message_validate_number");
 }
 else{
    cvcInp.classList.remove("error");
    cvcInp.parentElement.classList.remove("error_message")
 }if (
      nameInp.value &&
      numebrInp.value &&
      monthInp.value<=12 &&
      yearInp.value &&
      cvcInp.value.length==3 &&
      numebrInp.value.length == 16 
    ) {
    completed.classList.remove("hidden");
    form.classList.add("hidden");
 }
}



numebrInp.addEventListener("keyup", setCardNumber)
nameInp.addEventListener("keyup", setCardName)
monthInp.addEventListener("keyup", setCardMonth)
yearInp.addEventListener("keyup", setCardYear)
cvcInp.addEventListener("keyup", setCardCvc)
submitBtn.addEventListener("click", handleSubmit)