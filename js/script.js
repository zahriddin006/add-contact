let elContactForm = document.querySelector(".form-contact");
let elNameInput = elContactForm.querySelector(".name-input");
let elSurnameInput = elContactForm.querySelector(".surname-input");
let elReletionSelect = elContactForm.querySelector(".select-reletion");
let elNumberInput = elContactForm.querySelector(".number-input");
let elAddBtn = elContactForm.querySelector(".contact-form");

let elResultList = document.querySelector(".list-output");
// let clearBtn = document.querySelector(".clear-btn");

let contacts = [];

function appendFromContacts() {
  for (let i = 0; i < contacts.length; i++) {
    
    let newLi = document.createElement("li");
    newLi.setAttribute("class", "list-unstyled bg-primary rounded-3 p-3 me-3 mt-3");

    newLi.innerHTML = `
    <p class="text-black fs-5">
    <span class="fw-bold">Name:</span>
    <span>${contacts[i].name}</span>
    </p>
    
    <p class="text-black fs-5">
    <span class="fw-bold">Surame: </span>
      <span>${contacts[i].surname}</span>
      </p>

      <p class="text-black fs-5">
      <span class="fw-bold">relation: </span>
      <span>${contacts[i].reletion}</span>
      </p>
      
      <p class="text-black fs-5">
      <span class="fw-bold">Phone number: </span>
      <a class="text-white" href="tel:${contacts[i].number}">
      ${contacts[i].number}
      </a>
      </p>
    `;
    elResultList.appendChild(newLi);
    
  }
}

elContactForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  
  let nameInputValue = elNameInput.value.trim();
  let surnameInputValue = elSurnameInput.value.trim();
  let reletionInputValue = elReletionSelect.value;
  let numberInputValue = elNumberInput.value.trim();
  
  if (nameInputValue ==  "" || nameInputValue == Number(nameInputValue)) {
    elNameInput.placeholder = "Iltimos raqam kiritmang!";
    elNameInput.value = "";
    elNameInput.className = "rounded-pill py-1 px-2 mt-3 border-danger";
    return;
  } else{
    elNameInput.className = "rounded-pill py-1 px-2 mt-3 border-black";
    elNameInput.placeholder = "Enter name";
  }
  if (surnameInputValue ==  "" || surnameInputValue == Number(surnameInputValue)) {
    elSurnameInput.placeholder = "Iltimos raqam kiritmang!";
    elSurnameInput.value = "";
    elSurnameInput.className = "rounded-pill py-1 px-2 mt-3 border-danger";
    return;
  } else{
    elSurnameInput.placeholder = "Enter surname";
    elSurnameInput.className = "rounded-pill py-1 px-2 mt-3 border-black";

  }
  if (numberInputValue == "" || numberInputValue != Number(numberInputValue)){
    elNumberInput.placeholder = "Iltimos harf kiritmang";
    elNumberInput.value = "";
    elNumberInput.className = "rounded-pill py-1 px-2 mt-3 border-danger";
    return;
  } else{
    elNumberInput.placeholder = "Enter phone number";
    elNumberInput.className = "rounded-pill py-1 px-2 mt-3 border-black";

  }

  elResultList.innerHTML = "";
  
  contacts.push({
    name: nameInputValue,
    surname: surnameInputValue,
    reletion: reletionInputValue,
    number: numberInputValue,
  });
  console.log(contacts);

  appendFromContacts();
});


