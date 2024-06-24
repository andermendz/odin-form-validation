let formFields = document.querySelectorAll(".form-field");


formFields.forEach((formField) => {
  let inputField = formField.querySelector("input");
  let selectField = formField.querySelector("select");
  let fieldStatus = formField.querySelector(".field-status");
  

  if (inputField) {
    inputField.oninput = () => {
      if (inputField.checkValidity()) {
        fieldStatus.innerHTML = "field is fine";
      } else {
        fieldStatus.innerHTML = "field if wrong";
      }
    };
  }

  if (selectField){
  
        selectField.oninput = () => {
            if (selectField.checkValidity()) {
                console.log(selectField.checkValidity())
                fieldStatus.innerHTML = "field is fine";
              } else {
                fieldStatus.innerHTML = "field if wrong";
              }
        };
    
  }
});


