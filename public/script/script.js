document.getElementById('productForm').addEventListener('submit', addProduct);

function addProduct(e) {
  e.preventDefault();
  
  const productName = document.getElementById('productName').value;
  const productPrice = document.getElementById('productPrice').value;

  if (productName && productPrice) {
    const productList = document.getElementById('productList');
    
    const productItem = document.createElement('li');
    productItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    productItem.innerHTML = `
      ${productName} - $${productPrice}
      <button class="btn btn-danger btn-sm delete-product">Delete</button>
    `;
    
    productList.appendChild(productItem);
    
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    
    productItem.querySelector('.delete-product').addEventListener('click', () => {
      productItem.remove();
    });
  }
}
