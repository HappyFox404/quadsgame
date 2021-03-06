function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
  
function GenerateDiceRoll() { 
    return [RandomRange(1, 6), RandomRange(1, 6)];
};

function GenerateLog(txt, st) { 
    return { text: txt, status: st };
};

function GetNamePlayer(settings, id) { 
    return settings.find(item => item.id === id).value;
}

function ChangeObject(item, prop) { 
    return Object.assign({}, item, prop);
}

function GetGameState() { 
    return JSON.parse(localStorage.getItem('gameState'));
}

function ChangeGameState(prop) { 
    var obj = ChangeObject(GetGameState(), prop);
    localStorage.setItem("gameState", JSON.stringify(obj));
    return obj;
}

function SetGameState(gameSate) { 
    localStorage.setItem("gameState", JSON.stringify(gameSate));
}

function GameState(currentPlayer, diceRoll = GenerateDiceRoll()) { 
    return {
        currentPlayer: currentPlayer,
        diceRoll: diceRoll
    };
}

function DiceRoll(item) {
    if (item === 0 || item === 1)
        return GetGameState().diceRoll[item];
    else
        return GetGameState().diceRoll;
}

function GetPlayer() { 
    return GetGameState().currentPlayer;
}

function GameStateExsists() { 
    return localStorage.getItem('gameState') !== null;
}

const player1 = 'lightblue';
const player2 = 'lightgreen';

function GetPlayerColor() { 
    return (GetPlayer() === 1) ? player1 : player2;
}

function GetPlayerColorValue(value) { 
    return (value === 1) ? player1 : player2;
}

function MaxBoard() { 
    return 32;
}

function SelectItem(err, i, j, value) { 
    return {
        err: err,
        i: i,
        j: j,
        value: value
    }
}

export {
    GenerateDiceRoll,
    GenerateLog,
    GetNamePlayer,
    ChangeObject,
    ChangeGameState,
    SetGameState,
    GameState,
    DiceRoll,
    GameStateExsists,
    GetPlayer,
    GetPlayerColor,
    MaxBoard,
    GetPlayerColorValue,
    SelectItem
};