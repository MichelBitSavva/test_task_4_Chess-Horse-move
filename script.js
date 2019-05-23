let chess = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];

function draw() {
    let out = '';
    document.querySelector('#field').innerHTML = '';
    let m = 0;
    for (let i = 0; i < chess.length; i++) {
        let arr = chess[i];
        for (let k = 0; k < arr.length; k++) {
            if (m % 2 == 0) {
                document.querySelector('#field').innerHTML += '<div class="chess-block bg-black" data-x="' + k + '" data-y="' + i + '"></div>';

            }
            else {
                document.querySelector('#field').innerHTML += '<div class="chess-block" data-x="' + k + '" data-y="' + i + '"></div>';

            }
            m++;
        }
        m++;
    }
    document.querySelectorAll('.chess-block').forEach(function (element) {
        element.onclick = horse;
    })
}

function horse() {


    document.querySelectorAll('.chess-block').forEach(function (element) {
        element.classList.remove('active');
        element.classList.remove('green');
    })
    let x = this.dataset.x;
    let y = this.dataset.y;
    this.classList.add('green');
    const move = [
        [+x - 2, +y + 1],
        [+x - 2, +y - 1],
        [+x - 1, +y - 2],
        [+x - 1, +y + 2],
        [+x + 2, +y + 1],
        [+x + 2, +y - 1],
        [+x + 1, +y - 2],
        [+x + 1, +y + 2],
    ]

    move.forEach(function (e) {

        if (e[0] >= 0 && e[0] <= 7 && e[1] >= 0 && e[1] <= 7) {

            document.querySelector('.chess-block[data-x="' + e[0] + '"][data-y="' + e[1] + '"]').classList.add('active');


        };
    });
}

draw();
