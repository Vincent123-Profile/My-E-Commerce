function search() {
    var input, filter, products, product, title, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    products = document.querySelectorAll(".product");

    for (i = 0; i < products.length; i++) {
        product = products[i];
        title = product.querySelector("h2").textContent.toUpperCase();
        if (title.indexOf(filter) > -1) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    }
}
