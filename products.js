var cart = [];

// var product_name = "";
// var price = 0;
// var qty = 0;
document.getElementById("cart_amount").innerHTML = 0;
document.getElementById("proceed-btn-Notdisabled").style.display = "none";
document.getElementById("proceed-btn-disabled").style.display = "flex";
document.getElementById("loaderScreen").style.display = "none";

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let preveiwContainer = document.querySelector(".products-preview");
let previewBox = preveiwContainer.querySelectorAll(".preview");

document.querySelectorAll(".products-container .product").forEach((product) => {
  product.onclick = () => {
    preveiwContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});

function addToCartFunction(id, item, price, image) {
  var clickedItem = {
    id: id,
    itemName: item,
    itemPrice: price,
    qty: 1,
    itemImage: image,
  };

  // check whether clicked item is already in the cart
  let oldItemIndex = cart.findIndex((el) => el.id == id);

  if (oldItemIndex != -1)
    updateQtyOnly(clickedItem, oldItemIndex); // update cart
  else addNewItemToTheCart(clickedItem); // add new item to the cart
}

function updateQtyOnly(item, oldItemIndex) {
  const newQty = cart[oldItemIndex].qty + 1;
  cart[oldItemIndex].qty = newQty;
}

function addNewItemToTheCart(item) {
  cart.push(item);

  document.getElementById("cart_amount").innerHTML = cart.length;
}
// When the user clicks on the button, open the modal
function viewCartFunction() {
  modal.style.display = "block";
  let table = document.getElementById("cart-details-table-header");
  table.className = "table-content";

  if (document.getElementById("tBody") != null) {
    document.getElementById("tBody").remove()
  }

  let tbody = document.createElement("tbody");
  tbody.id = "tBody";
  $("#tBody tr").remove();


  for (let i = 0; i < cart.length; i++) {
    document.getElementById("proceed-btn-Notdisabled").style.display = "flex";
    document.getElementById("proceed-btn-disabled").style.display = "none";
    let tr = document.createElement("tr");

    tr.style.width = "100%";
    tr.style.marginTop = "5px";
    var img = document.createElement("img");
    img.src = cart[i].itemImage;
    img.style.width = "50px";
    img.style.height = "50px";
    img.style.width = "10%";
    img.id = "picture";

    tr.appendChild(img);

    let td = document.createElement("td");
    td.style.fontSize = "16px";
    td.style.fontWeight = "500";
    td.style.padding = "5px";
    td.style.width = "30%";

    td.innerHTML = cart[i].itemName;
    tr.appendChild(td);

    let td1 = document.createElement("td");
    td1.style.fontSize = "16px";
    td1.style.fontWeight = "500";
    td1.style.padding = "5px";
    td1.style.textAlign = "right";
    td1.style.width = "15%";

    td1.innerHTML = cart[i].itemPrice;
    tr.appendChild(td1);

    $(tr).append(
      `<div style="font-size:16px;font-weight:500;display:flex; border: #000000 solid 1px;width:20%; margin:5x; background-color:gray">
          <div style="cursor:pointer;padding:5px;text-align: center;border-right: #000000 solid 1px; width:30%" onclick="addQty(${cart[i].qty},${i})">+</div>
          <div class="qty_" style="padding:5px;text-align: center;border-right: #000000 solid 1px;width:40%">${cart[i].qty}</div>
          <div style="cursor:pointer;padding:5px;text-align: center;width:30%" onclick="substratQty(${cart[i].qty},${i})">-</div>
        </div>`

    );
    // tr.appendChild("<div>+</div><div>1</div><div>+</div>");

    let td3 = document.createElement("td");
    td3.style.fontSize = "16px";
    td3.style.fontWeight = "500";
    td3.style.padding = "5px";
    td3.style.textAlign = "right";
    td3.className = "price_";
    td3.style.width = "15%";
    td3.innerHTML = (cart[i].itemPrice * cart[i].qty).toFixed(2);
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.style.fontSize = "16px";
    td4.style.fontWeight = "500";
    td4.style.padding = "5px";
    td4.style.width = "10%";

    td4.innerHTML = `<div class="remove-btn" onclick="removeItemFromCart(${cart[i].id})"><i class="fa fa-trash" aria-hidden="true"></i></div>`;
    tr.appendChild(td4);
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  document.getElementById("net_total").innerHTML = getNetTotal();
}
function addQty(qty, i) {
  var allTDs = document.getElementsByClassName("qty_");
  for (var counter = 0; counter < allTDs.length; counter++) {
    if (counter == i) {
      cart[i].qty = cart[i].qty + 1;
      allTDs[counter].innerHTML = cart[i].qty;
      var el = document.getElementsByClassName("price_");
      el[i].innerHTML = (cart[i].itemPrice * cart[i].qty).toFixed(2);
    }
  }
  document.getElementById("net_total").innerHTML = getNetTotal();
}
function substratQty(qty, i) {
  var allTDs = document.getElementsByClassName("qty_");
  for (var counter = 0; counter < allTDs.length; counter++) {
    if (counter == i) {
      if (cart[i].qty > 1) {
        cart[i].qty = cart[i].qty - 1;
        allTDs[counter].innerHTML = cart[i].qty;
        var el = document.getElementsByClassName("price_");
        el[i].innerHTML = (cart[i].itemPrice * cart[i].qty).toFixed(2);
      }
    }
  }
  document.getElementById("net_total").innerHTML = getNetTotal();
}
function getNetTotal() {
  var all_amount = document.getElementsByClassName("price_");
  var total_price = 0;
  for (let i = 0; i < all_amount.length; i++) {
    total_price = total_price + parseFloat((cart[i].itemPrice * cart[i].qty).toFixed(2));
  }
  return "$ " + total_price.toFixed(2);
}

function removeItemFromCart(id) {
  // document.getElementsByTagName("tr").deleteRow(0);
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      cart.splice(i, 1);
      let el = document.getElementsByClassName("table-content")[0];
      let tbody = el.getElementsByTagName("tbody")[1].deleteRow(i);
      document.getElementById("cart_amount").innerHTML = cart.length;
      document.getElementById("net_total").innerHTML = getNetTotal();
      if (cart.length == 0) {
        document.getElementById("proceed-btn-Notdisabled").style.display =
          "none";
        document.getElementById("proceed-btn-disabled").style.display = "flex";
      }
    }
  }
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function checkout() {
  document.getElementById("loaderScreen").style.display = "flex";

  // window.location.href = "loader.html";
  setTimeout(() => {
    window.location.href = "Checkout.html";
  }, 2000);
}


function payment() {
  var all_filled = true;
  var sub_elements = document.getElementById("checkout-form").getElementsByTagName("input");
  for (var i = 0; i < sub_elements.length; i++) {
    var element = sub_elements[i];
    if (element.value == "") {
      all_filled = false;
      element.style.borderColor = "red";
    }
  }
  if (all_filled) {
    document.getElementById("success").style.display = "flex";
    setTimeout(() => {
      document.getElementById("success").style.display = "none";
      setTimeout(() => {
        document.getElementById("loaderScreen").style.display = "flex";
        setTimeout(() => {
          window.location.href = "ProductsPage.html";
        }, 1000);
      }, 1000);
    }, 2000);
  }
}

for (let i = 1; i < 21; i++) {

  const textEl = document.getElementById('text' + i);
  const increaseBtn = document.getElementById('increase-btn' + i);
  const decreaseBtn = document.getElementById('decrease-btn' + i);
  // font size increasing
  increaseBtn.addEventListener('click', () => {
    let fontSize = window.getComputedStyle(textEl).fontSize;
    fontSize = parseInt(fontSize) + 2 + 'px';
    textEl.style.fontSize = fontSize;
  });
  // font size decreasing
  decreaseBtn.addEventListener('click', () => {
    let fontSize = window.getComputedStyle(textEl).fontSize;
    fontSize = parseInt(fontSize) - 2 + 'px';
    textEl.style.fontSize = fontSize;
  });

}
