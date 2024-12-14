// Función para obtener los productos desde localStorage
function getProducts() {
  const products = localStorage.getItem("products");
  return products ? JSON.parse(products) : [];
}

// Función para guardar los productos en localStorage
function saveProducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

// Función para renderizar los productos (comentarios) en la tabla
function renderProducts() {
  const products = getProducts(); // Recupera los productos almacenados en localStorage
  const commentsTable = document.getElementById("comments-table");
  commentsTable.innerHTML = ''; // Limpiar la tabla antes de mostrar los nuevos datos

  // Itera sobre los productos (comentarios) y los agrega a la tabla
  products.forEach((product, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.email}</td>
      <td>${product.rate}</td>
      <td>${product.comment}</td>
      <td>
        <button class="btn btn-warning btn-sm" onclick="editProduct(${index})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="deleteProduct(${index})">Eliminar</button>
      </td>
    `;
    commentsTable.appendChild(row);
  });
}

// Función para editar un producto (comentario)
function editProduct(index) {
  const products = getProducts();
  const product = products[index];

  // Redirigir al formulario con los datos actuales
  localStorage.setItem('editIndex', index);
  localStorage.setItem('name', product.name);
  localStorage.setItem('email', product.email);
  localStorage.setItem('rate', product.rate);
  localStorage.setItem('comment', product.comment);

  window.location.href = "form.html"; // Redirige al formulario para editar
}

// Función para borrar un producto (comentario)
function deleteProduct(index) {
  let products = getProducts();
  products.splice(index, 1); // Elimina el producto (comentario) del arreglo
  saveProducts(products); // Guarda los cambios en localStorage
  renderProducts(); // Vuelve a renderizar los productos
}

// Cargar los productos cuando la página se carga
document.addEventListener("DOMContentLoaded", function() {
  renderProducts(); // Llamar a la función para mostrar los productos
});