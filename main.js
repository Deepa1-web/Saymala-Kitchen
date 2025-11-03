document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach(item => {
    item.addEventListener("click", function () {
      const itemName = this.querySelector("h6").innerText;
      const itemPrice = this.querySelector("p").innerText;
      alert(`You selected ${itemName} - ${itemPrice}`);
    });
  });

  const reservationButton = document.querySelector("#reservation .btn");
  reservationButton.addEventListener("click", function () {
    alert("Reservation successful! We look forward to seeing you.");
  });
  const orderonlineButton = document.querySelector(".btn.btn-brand");
  orderonlineButton.addEventListener("click", function () {
    alert("coming soon.");
  });

});