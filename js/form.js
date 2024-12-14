document.addEventListener('DOMContentLoaded', function () {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const rateInput = document.getElementById("rate");
  const commentInput = document.getElementById("comment");
  const form = document.getElementById('comment-form');

  if (localStorage.getItem('editIndex') !== null) {
    const index = localStorage.getItem('editIndex');
    nameInput.value = localStorage.getItem('name');
    emailInput.value = localStorage.getItem('email');
    rateInput.value = localStorage.getItem('rate');
    commentInput.value = localStorage.getItem('comment');

    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.textContent = "Guardar Cambios";
    
    localStorage.removeItem('editIndex');
  }

  function showError(input, message) {
    const errorElement = document.getElementById(`${input.id}-error`);
    input.classList.add("is-invalid");
    errorElement.textContent = message;
  }

  function clearError(input) {
    const errorElement = document.getElementById(`${input.id}-error`);
    input.classList.remove("is-invalid");
    errorElement.textContent = "";
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    clearError(nameInput);
    clearError(emailInput);
    clearError(rateInput);
    clearError(commentInput);

    let isValid = true;

    if (nameInput.value.trim() === "") {
      showError(nameInput, "El nombre es obligatorio.");
      isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailInput.value.trim() === "") {
      showError(emailInput, "El correo electrónico es obligatorio.");
      isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
      showError(emailInput, "Por favor, ingresa un correo electrónico válido.");
      isValid = false;
    }

    if (rateInput.value === "") {
      showError(rateInput, "Por favor, selecciona una calificación.");
      isValid = false;
    }

    if (commentInput.value.trim() === "") {
      showError(commentInput, "El comentario es obligatorio.");
      isValid = false;
    }

    if (isValid) {
      const name = nameInput.value;
      const email = emailInput.value;
      const rate = rateInput.value;
      const comment = commentInput.value;

      const product = { name, email, rate, comment };
      let products = JSON.parse(localStorage.getItem('products')) || [];

      if (localStorage.getItem('editIndex') !== null) {
        const index = localStorage.getItem('editIndex');
        products[index] = product;
        localStorage.removeItem('editIndex'); 
      } else {
        products.push(product);
      }

      localStorage.setItem('products', JSON.stringify(products));

      window.location.href = "show-data.html";
    }
  });
});