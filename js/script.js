let addedContact = [];
let userInf = {
  name : null , 
  surname : null ,
  familiar : null , 
  number : null
}

let elContactForm = document.querySelector(".contact-form");
let userNameInput = elContactForm.querySelector("#user-name");
let userSurnameInput = elContactForm.querySelector("#user-surname");
let userAdressInput = elContactForm.querySelector(".familiar");
let userNumberInput = elContactForm.querySelector("#user-number");
let warText = elContactForm.querySelector(".war-text");
let warText2 = elContactForm.querySelector(".war-text2");
let warText3 = elContactForm.querySelector(".war-text3");
let resultList = document.querySelector(".result-ul");

elContactForm.addEventListener("submit", function(evt){

  evt.preventDefault();

  let userName = userNameInput.value.trim();
  let userSurname = userSurnameInput.value.trim();
  let userAdress = userAdressInput.value;
  let userNumber = userNumberInput.value.trim();

  
  if (userName ==  "" || userName == Number(userName)) {
    warText.setAttribute("style", "display: block;");
    userNameInput.value = "";
    return;
  } else{
    warText.setAttribute("style", "display: none;");
  }
  if (userSurname ==  "" || userSurname == Number(userSurname)) {
    warText2.setAttribute("style", "display: block;");
    userSurnameInput.value = "";
    return;
  } else{
    warText2.setAttribute("style", "display: none;");
  }
  if (userNumber == "" || userNumber != Number(userNumber)){
    warText3.setAttribute("style", "display: block;");
    userNumberInput.value = "";
    return;
  } else{
    warText3.setAttribute("style", "display: none;");
  }

  userInf.name = userName;
  userInf.surname = userSurname;
  userInf.familiar = userAdress;
  userInf.number = userNumber;

  for(let i in userInf){
    addedContact.push(i,userInf[i]);
  }

  for(let i = 0; i < addedContact.length; i++){
    let newLi = document.createElement("li");
    newLi.textContent = addedContact[i];
    
    resultList.appendChild(newLi);
    console.log(newLi);
  }

  
});
