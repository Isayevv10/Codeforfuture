let openSelect2 = document.querySelector('#inSelect2');
let openSelect1 = document.querySelector('#inSelect1');

function blick(a) {
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if ( selectedValue == +"1") {
        openSelect1.style.display = 'block';
        openSelect2.style.display = 'none';
    } else {
        openSelect2.style.display = 'block';
        openSelect1.style.display = 'none';
    }
}