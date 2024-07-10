function random(min, max) { // [min, max]
    const min_ceil = Math.ceil(min);
    const max_floor = Math.floor(max);
    return Math.floor(Math.random() * (max_floor - min_ceil + 1) + min_ceil);
}

function choice(c) {
    if (c == 0) {
        return "rock";
    }
    if (c == 1) {
        return "paper";
    }
    if (c == 2) {
        return "scissors";
    }
}

function get_state(c1, c2) {
    // -1 - loss, 0 - draw, 1 - win
    let st = -1; 
    if ((c1 == 0 && c2 == 2) || (c1 == 1 && c2 == 0) || (c1 == 2 && c2 == 1)) {
        st = 1;
    } else if (c1 == c2) {
        st = 0;
    }
    return st;
}

function get_sign(st) {
    if (st == 0) {
        return '==';
    }
    if (st == 1) {
        return '>';
    }
    return '<';
}

function is_int(value) {
    var x = parseFloat(value);
    return !isNaN(value) && (x | 0) === x;
}

function run_game() {
    // rock - 0, paper - 1, scissors - 2
    let c_bot = random(0, 2);
    // let c_user = random(0, 2); // TODO: find a way to get user input, also validate it
    let c_user = document.getElementById("user-input").value;

    if (!is_int(c_user) || (c_user >= 3 || c_user <= -1)) {
        console.error("input should be an integer between 0 and 2");
        return;
    }

    let state = get_state(c_user, c_bot);
    let sign = get_sign(state);

    console.log(c_user + " " + c_bot); // TODO: fix
    console.log(choice(c_user) + " " + sign + " " + choice(c_bot));

    if (state == 1) {
        console.log("WIN");
    } else if (state == 0) {
        console.log("DRAW");
    } else {
        console.log("LOSS")
    }
}

document.getElementById("run").onclick = run_game;
