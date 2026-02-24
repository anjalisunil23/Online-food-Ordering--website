window.onload = function () {

    let order = JSON.parse(localStorage.getItem("order"));

    if (!order || !Array.isArray(order.items) || order.items.length === 0) {
        alert("No valid order found. Please place an order first.");
        window.location.href = "menu.html";
        return;
    }

    document.getElementById("order-id").textContent = order.id || "N/A";
    document.getElementById("order-date").textContent = order.date || new Date().toLocaleString();

    let receiptTable = document.getElementById("receipt-items");
    let totalAmount = 0;

    order.items.forEach(item => {

        let row = document.createElement("tr");

        const price = Math.max(0, Number(item.price || 0));
        const quantity = Math.max(1, Number(item.quantity || 1));
        let itemTotal = price * quantity;
        totalAmount += itemTotal;

        row.innerHTML = `
            <td>${item.name}</td>
            <td>₹${price}</td>
            <td>${quantity}</td>
            <td>₹${itemTotal}</td>
        `;

        receiptTable.appendChild(row);
    });

    document.getElementById("receipt-total").textContent = totalAmount;
};
