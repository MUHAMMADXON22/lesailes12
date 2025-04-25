document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach((card) => {
      const btn = card.querySelector(".plus-btn");
      const name = card.getAttribute("data-name");
      const price = parseInt(card.getAttribute("data-price"), 10);
      const output = card.querySelector(".output");
  
      btn.addEventListener("click", function () {
        let qty = prompt(`Сколько хотите заказать ${name}?`);
        qty = parseInt(qty, 10);
  
        if (!isNaN(qty) && qty > 0) {
          const total = qty * price;
  
          const isConfirmed = confirm(`${qty} × ${name} = ${total.toLocaleString()} сум\nВы хотите заказать?`);
  
          if (isConfirmed) {
            alert("Ваш заказ принят");
            output.innerHTML = `${qty} × ${name} = ${total.toLocaleString()} сум<br><strong>Ваш заказ принят</strong>`;
          } else {
            alert("Заказ отменён.");
          }
        } else {
          alert("Введите корректное количество.");
        }
      });
    });
  });