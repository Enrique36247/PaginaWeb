document.addEventListener('DOMContentLoaded', function () {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const rateInput = document.getElementById("rate");
  const commentInput = document.getElementById("comment");
  const form = document.getElementById('comment-form');

  // Si estamos editando un producto, cargamos los datos en el formulario
  if (localStorage.getItem('editIndex') !== null) {
    const index = localStorage.getItem('editIndex');
    nameInput.value = localStorage.getItem('name');
    emailInput.value = localStorage.getItem('email');
    rateInput.value = localStorage.getItem('rate');
    commentInput.value = localStorage.getItem('comment');

    // Cambiar el texto del botón para indicar que es una edición
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.textContent = "Guardar Cambios";
    
    // Eliminar el índice de edición de localStorage
    localStorage.removeItem('editIndex');
  }

  // Función para mostrar los mensajes de error
  function showError(input, message) {
    const errorElement = document.getElementById(`${input.id}-error`);
    input.classList.add("is-invalid");
    errorElement.textContent = message;
  }

  // Función para limpiar los mensajes de error
  function clearError(input) {
    const errorElement = document.getElementById(`${input.id}-error`);
    input.classList.remove("is-invalid");
    errorElement.textContent = "";
  }

  // Manejar el envío del formulario
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Limpiar cualquier mensaje de error previo
    clearError(nameInput);
    clearError(emailInput);
    clearError(rateInput);
    clearError(commentInput);

    let isValid = true;

    // Validación de los campos
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

    // Si todos los campos son válidos, se guarda el comentario
    if (isValid) {
      const name = nameInput.value;
      const email = emailInput.value;
      const rate = rateInput.value;
      const comment = commentInput.value;

      const product = { name, email, rate, comment };
      let products = JSON.parse(localStorage.getItem('products')) || [];

      if (localStorage.getItem('editIndex') !== null) {
        // Si estamos editando, reemplazamos el producto en el índice correspondiente
        const index = localStorage.getItem('editIndex');
        products[index] = product;
        localStorage.removeItem('editIndex'); // Limpiamos el índice de edición
      } else {
        // Si no estamos editando, simplemente agregamos el nuevo producto
        products.push(product);
      }

      localStorage.setItem('products', JSON.stringify(products));

      // Redirigir a la página de comentarios
      window.location.href = "show-data.html";
    }
  });
});