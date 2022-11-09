function getOption() {
    selectElement = document.querySelector('#selections');
    output = selectElement.value;
    document.querySelector('.output').textContent = output;
}