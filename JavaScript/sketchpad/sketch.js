function createSketchpad() {
    const gridSize = 120 * 64;
    const grid = document.getElementById('sketchpad');

    for (let i = 0; i < gridSize; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = 'black';
        });
        grid.appendChild(pixel);
    }
}

createSketchpad();
