function random(min, max) { // [min, max]
    const min_ceil = Math.ceil(min);
    const max_floor = Math.floor(max);
    return Math.floor(Math.random() * (max_floor - min_ceil + 1) + min_ceil);
}

function get_choice(c) {
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

function run_game() {
    // rock - 0, paper - 1, scissors - 2
    let c_bot = random(0, 2);

    if (c_user == -1) {
        alert("no weapon selected");
        return;
    }
    
    let state = get_state(c_user, c_bot);
    let sign = get_sign(state);

    console.log(get_choice(c_user) + " " + sign + " " + get_choice(c_bot));

    if (state == 1) {
        document.getElementById("result").textContent="WIN";
        console.log("WIN");
        wins++;
        document.getElementById("wins").innerHTML = wins;
    } else if (state == 0) {
        document.getElementById("result").textContent="DRAW";
        console.log("DRAW");
        draws++;
        document.getElementById("draws").innerHTML = draws;
    } else {
        document.getElementById("result").textContent="LOSS";
        console.log("LOSS");
        losses++;
        document.getElementById("losses").innerHTML = losses;
    }
    document.getElementById("games").innerHTML = wins + draws + losses;

    // reset
    c_user = -1;
    document.getElementById("weapon").textContent="none";
}

let wins = 0;
let draws = 0;
let losses = 0;

let c_user = -1;

document.addEventListener("keydown", function(event) {
    if (event.key == "r") {
        console.log("rock");
        document.getElementById("weapon").textContent="rock";
        c_user = 0;
    }
    if (event.key == "p") {
        console.log("paper");
        document.getElementById("weapon").textContent="paper";
        c_user = 1;
    }
    if (event.key == "s") {
        console.log("scissors");
        document.getElementById("weapon").textContent="scissors";
        c_user = 2;
    }
    if (event.key == "Enter") {
        console.log("enter");
        run_game();
    }
});

document.getElementById("run").onclick = run_game;
