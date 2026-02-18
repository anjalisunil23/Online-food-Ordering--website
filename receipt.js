window.onload = function () {

    let order = JSON.parse(localStorage.getItem("order"));

    document.getElementById("order-id").textContent = order.id;
    document.getElementById("order-date").textContent = order.date;

    let receiptTable = document.getElementById("receipt-items");
    let totalAmount = 0;

    order.items.forEach(item => {

        let row = document.createElement("tr");

        let itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;

        row.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td>${item.quantity}</td>
            <td>₹${itemTotal}</td>
        `;

        receiptTable.appendChild(row);
    });

    document.getElementById("receipt-total").textContent = totalAmount;
};
