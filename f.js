function inSoChiaHetCho2() {
    for(let i = 0; i <= 100; i++) {
        if (i % 2 === 0) console.log(i)
    };
}

function inSoChiaCho2Du1() {
    for(let i = 0; i <= 100; i++) {
        if (i % 2 === 1) console.log(i)
    };
}

function inSoChiaCho3Du1() {
    for(let i = 0; i <= 100; i++) {
        if (i % 3 === 1) console.log(i)
    };
}

function inSoChinhPhuong() {
    for(let i = 0; i <= 100; i++) {
        if (Math.sqrt(i) % 1 === 0) console.log(i)
    };
}

function inSo(checkNumber) {
    for(let i = 0; i <= 100; i++) {
        if (checkNumber(i)) console.log(i)
    };
}

inSo(i => Math.sqrt(i) % 1 === 0);
