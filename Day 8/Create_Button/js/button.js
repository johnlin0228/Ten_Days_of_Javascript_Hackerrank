function increaseValue() {
    let currentValue = this.innerHTML;
    this.innerHTML = parseInt(currentValue) + 1;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", increaseValue);