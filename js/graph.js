function updateGraph() {
    const alphaInput = document.getElementById('alpha');
    const betaInput = document.getElementById('beta');

    // Do not update the graph if either input is empty.
    if (alphaInput.value === '' || betaInput.value === '') {
        return;
    }

    const alpha = parseFloat(alphaInput.value);
    const beta = parseFloat(betaInput.value);
    const graph = document.getElementById('graph');

    // Clear the existing segments.
    while (graph.firstChild) {
        graph.firstChild.remove();
    }

    // Create ticks and labels
    for(let i = 0; i <= 1.00000; i += 0.16667) {
        createTick(i);
        createLabel(i);
    }

    // Create new segments based on the input values.
    if (alpha + beta <= 1) {
        createSegment(0, beta, 'red');
        createSegment(beta, alpha + beta, 'green');
        createSegment(alpha + beta, 1, 'red');
    } else {
        createSegment(0, alpha + beta - 1, 'green');
        createSegment(alpha + beta - 1, beta, 'red');
        createSegment(beta, 1, 'green');
    }
}

function createSegment(start, end, color) {
    const segment = document.createElement('div');
    segment.classList.add('segment', color);
    segment.style.left = (start * 100) + '%';
    segment.style.width = ((end - start) * 100) + '%';
    document.getElementById('graph').appendChild(segment);
}

function createTick(position) {
    const tick = document.createElement('div');
    tick.classList.add('tick');
    tick.style.left = (position * 100) + '%';
    document.getElementById('graph').appendChild(tick);
}

function createLabel(position) {
    const label = document.createElement('div');
    label.classList.add('label');
    label.textContent = position.toFixed(1);
    label.style.left = (position * 100) + '%';
    document.getElementById('graph').appendChild(label);
}
