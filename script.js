let total = 0;

document.getElementById("addBtn").onclick = function () {
    let name = document.getElementById("name").value;
    let price = Number(document.getElementById("amount").value);
    let cat = document.getElementById("category").value;

    if (name == "" || price <= 0) return alert("Enter valid details");

    total += price;
    document.getElementById("total").value = total;
    document.getElementById("items").value += name + " (" + cat + "), ";
}