const colorPicker = document.getElementById('colorPicker');

function createSketchpad() {
    const gridSize = 120 * 64;
    const grid = document.getElementById('sketchpad');
    let mouseDown = false;

    document.body.onmousedown = () => (mouseDown = true);
    document.body.onmouseup = () => (mouseDown = false);

    for (let i = 0; i < gridSize; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', () => {
            if (mouseDown) {
                pixel.style.backgroundColor = colorPicker.value;
            }
        });
        grid.appendChild(pixel);
    }
}

function resetSketchpad() {
    const grid = document.getElementById('sketchpad');
    grid.innerHTML = '';
    createSketchpad();
}

createSketchpad();
