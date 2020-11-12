const elementCartProducts = document.querySelector('.cart > .cart__products');
const elementsQuantityControlDec = document.querySelectorAll('.product__quantity-controls > .product__quantity-control_dec');

for (const btnQuantityControlDec of elementsQuantityControlDec) {
    btnQuantityControlDec.addEventListener('click', quantityControlDec);
}
function quantityControlDec() {
    let quantityValue = this.parentNode.querySelector('.product__quantity-value').textContent;
    this.parentNode.querySelector('.product__quantity-value').textContent = quantityValue > 1 ? --quantityValue : quantityValue;
}

const elementsQuantityControlInc = document.querySelectorAll('.product__quantity-controls > .product__quantity-control_inc');

for (const btnQuantityControlInc of elementsQuantityControlInc) {
    btnQuantityControlInc.addEventListener('click', quantityControlInc);
}
function quantityControlInc() {
    let quantityValue = this.parentNode.querySelector('.product__quantity-value').textContent;
    this.parentNode.querySelector('.product__quantity-value').textContent = ++quantityValue;
}

//product__add
const elementsProductAdd = document.querySelectorAll('.product__quantity > .product__add');

for (const btnProductAdd of elementsProductAdd) {
    btnProductAdd.addEventListener('click', cartProductAdd);
}
function cartProductAdd() {
    console.log(`btnProductAddId ${this.parentNode.parentNode.parentNode.dataset.id}`);
    const elementDivProduct = this.parentNode.parentNode.parentNode;
    const elementProductQuantityValue = elementDivProduct.querySelector('.product__quantity-value');
    const elementsCartProduct = elementCartProducts.querySelectorAll('.cart__product');
    let foundInCart = 0;
    if (elementsCartProduct.length) {
        for (const elementCartProduct of elementsCartProduct) {
            if (elementCartProduct.dataset.id === elementDivProduct.dataset.id) {
                const elementCartProductCount = elementCartProduct.querySelector('.cart__product-count');

                elementCartProductCount.textContent = Number(elementCartProductCount.textContent) + Number(elementProductQuantityValue.textContent);
                foundInCart = 1;
            }
        }
        if (!foundInCart) {
            cartNewProductAdd();
        }

    } else {
        cartNewProductAdd();
    }
    elementProductQuantityValue.textContent = 0;

    function cartNewProductAdd() {
        const elementDivCartProduct = document.createElement('div');
        elementDivCartProduct.classList.add('cart__product');
        elementDivCartProduct.dataset.id = elementDivProduct.dataset.id;
        elementDivCartProduct.appendChild(elementDivProduct.querySelector('img').cloneNode(false));
        elementDivCartProduct.querySelector('img').classList.replace("product__image", "cart__product-image");
        elementDivCartProduct.appendChild(elementProductQuantityValue.cloneNode(true));
        elementDivCartProduct.querySelector('.product__quantity-value').classList.replace("product__quantity-value", "cart__product-count");
        elementCartProducts.appendChild(elementDivCartProduct);
    }
}

