fetch("products.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("products");

    data.forEach(p => {
      container.innerHTML += `
        <div class="product">
          <h3>${p.name}</h3>
          <p>${p.price}</p>
          <a href="https://wa.me/201000000000?text=عايز%20اطلب%20${p.name}">
            اطلب الآن
          </a>
        </div>
      `;
    });
  });
