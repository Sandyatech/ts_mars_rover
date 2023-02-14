type RoverDirection = 'N' | 'E' | 'W' | 'S';
type Grid = { x: number, y: number };

let plateuSize: Grid = { x: 0, y: 0 };
let currentPosition: Grid = { x: 0, y: 0 };
let direction: RoverDirection;
let positionAftermoves: string = '';

export function rover(command: string) {
    if (command == undefined) throw new Error("please define the command");
    const commands: string[] = command.split('\n');
    if (commands.length < 3) throw new Error("please define the command in three lines");
    const platedimensions: number[] = commands[0].split(' ').map(Number);
    plateuSize.x = platedimensions[0];
    plateuSize.y = platedimensions[1];
    positionAftermoves = '';
    for (let i = 1; i < commands.length; i += 2) {
        if (!roverPosition(commands[i]))
            return 'Improper direction instruction'
        for (const movement of commands[i + 1])
            if (!move(movement))
                return 'Improper Left,Right,Move instruction'
        if (isValidPosition())
            positionAftermoves += `${currentPosition.x} ${currentPosition.y} ${direction}${(((i + 2) === commands.length) ? "" : "\n")}`;
        else
            positionAftermoves = 'Out of Boundary Instruction';
    }
    return positionAftermoves;
}

function roverPosition(command: string): boolean {
    const pos: number[] = command.replace(/^[a-z]+$/g, '').split(' ').map(Number);
    const dir: string = <RoverDirection>command.replace(/[0-9]\s+/g, '');
    if (!isValidDirection(dir))
        return false;
    direction = <RoverDirection>(dir);
    currentPosition.x = pos[0];
    currentPosition.y = pos[1];
    return true;
}

function move(movement: string): boolean {
    if (!isValidMoveInstruction(movement))
        return false
    switch (movement) {
        case 'L':
            turnLeft();
            break;
        case 'R':
            turnRight();
            break;
        case 'M':
            moveForward();
            break;
    }
    return true;
}

function turnLeft() {
    switch (direction) {
        case 'N':
            direction = 'W';
            break;
        case 'W':
            direction = 'S';
            break;
        case 'S':
            direction = 'E';
            break;
        case 'E':
            direction = 'N';
            break;
    }
}

function turnRight() {
    switch (direction) {
        case 'N':
            direction = 'E';
            break;
        case 'W':
            direction = 'N';
            break;
        case 'S':
            direction = 'W';
            break;
        case 'E':
            direction = 'S';
            break;
    }
}

function moveForward() {
    switch (direction) {
        case 'N':
            currentPosition.y = currentPosition.y + 1;
            break;
        case 'E':
            currentPosition.x = currentPosition.x + 1;
            break;
        case 'S':
            currentPosition.y = currentPosition.y - 1;
            break;
        case 'W':
            currentPosition.x = currentPosition.x - 1;
            break;
    }
}

function isValidPosition() {
    if ((currentPosition.x > plateuSize.x) || (currentPosition.x < 0) || (currentPosition.y > plateuSize.y) || (currentPosition.y < 0))
        return false;
    return true;
}

function isValidDirection(input: string): boolean {
    if (['N', 'E', 'W', 'S'].includes(input))
        return true;
    return false;

}

function isValidMoveInstruction(input: string): boolean {
    if (['L', 'R', 'M'].includes(input))
        return true;
    return false;

}


