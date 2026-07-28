const judgeCircle = function (moves) {
    if (moves.length & 1) return false;

    let x = 0;
    let y = 0;

    const dir = {
        U: [0, 1],
        D: [0, -1],
        L: [-1, 0],
        R: [1, 0],
    };

    for (const c of moves) {
        const [dx, dy] = dir[c];
        x += dx;
        y += dy;
    }

    return x === 0 && y === 0;
};