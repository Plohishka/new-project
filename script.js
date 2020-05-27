document.getElementById('slider-left').onclick = sliderleft;
var left = 0;

function sliderleft() {
    var polosa = document.getElementById('polosa');
    left = left - 128;
    if (left < -512) {
        left = 0;
    }
    polosa.style.left = left + 'px';
}