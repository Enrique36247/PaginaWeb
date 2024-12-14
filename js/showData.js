function getProducts() {
  const products = localStorage.getItem("products");
  return products ? JSON.parse(products) : [];
}

function saveProducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

function renderProducts() {
  const products = getProducts(); 
  const commentsTable = document.getElementById("comments-table");
  commentsTable.innerHTML = ''; 

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

function editProduct(index) {
  const products = getProducts();
  const product = products[index];

  localStorage.setItem('editIndex', index);
  localStorage.setItem('name', product.name);
  localStorage.setItem('email', product.email);
  localStorage.setItem('rate', product.rate);
  localStorage.setItem('comment', product.comment);

  window.location.href = "form.html"; 
}

function deleteProduct(index) {
  let products = getProducts();
  products.splice(index, 1); 
  saveProducts(products); 
  renderProducts(); 
}

document.addEventListener("DOMContentLoaded", function() {
  renderProducts(); 
});