function PizzaOrder(psize, pflavour, ptopping, pnumber) {
  this.size = psize;
  this.flavour = pflavour;
  this.toppings = ptopping;
  this.number = pnumber;
}
PizzaOrder.prototype.calculateTotal = function() {
  var total = (this.size + this.flavour + this.toppings) * this.number;
  return total;
};

function orderDelivery(delivery = 170) {
  var size, flavour, topping, number;
  size = parseInt($("#size").val());
  flavour = parseInt($("#size").val());
  topping = parseInt($("#toppings").val());
  number = parseInt($("#number").val());

  var order = new PizzaOrder(size, flavour, topping, number);
  alert(
    "You have ordered " +
      order.number +
      " Pizza " +
      " which amounts to Kshs. " +
      (order.calculateTotal() + delivery) +
      " Thank you "
  );
  prompt("Enter your location");
  alert(
    `Your order has been placed, It will be delivered in a short while. The delivery fee is kshs ${delivery}.`
  );
}
function orderPickup() {
  var size, flavour, topping, number;
  size = parseInt($("#size").val());
  flavour = parseInt($("#size").val());
  topping = parseInt($("#toppings").val());
  number = parseInt($("#number").val());

  var order = new PizzaOrder(size, flavour, topping, number);
  alert(
    "You have ordered " +
      order.number +
      " Pizza " +
      " which amounts to Kshs. " +
      order.calculateTotal() +
      " Your order is ready for pickup at our station along Gong lane plaza.Feel free to  Contact us for more information.See you soon."
  );
}
