let input = document.querySelector("#input ");
let square = document.querySelector("#square");
let button = document.querySelector("button");

button.addEventListener("click", event => {
    event.preventDefault();
    square.value = input.value ** 2;
})
