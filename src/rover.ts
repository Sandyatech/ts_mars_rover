type RoverInstruction = 'L' | 'R' | 'M'
type RoverDirecttion = 'N' | 'E' | 'W' | 'S';
type Grid = { x: number, y: number };
let plateuSize: Grid = { x: 0, y: 0 };
let currentPosition: Grid = { x: 0, y: 0 };
let direction: string;
let positionAftermoves: string='';
export function rover(command: string) {
    if (command == undefined) throw new Error("please define the command");
    const commands: string[] = command.split('\n');
    if (commands.length < 3) throw new Error("please define the command in three lines");
    const Grid1: number[] = commands[0].split(' ').map(Number);
    plateuSize.x = Grid1[0];
    plateuSize.y = Grid1[1];
    for (let i = 1; i < commands.length; i += 2) {
        roverPosition(commands[i]);
        for (const movement of commands[i + 1])
            move(movement);
        positionAftermoves += `${currentPosition.x} ${currentPosition.y} ${direction}`;
    }
    return positionAftermoves;
}

function roverPosition(command: string) {
    const pos: number[] = command.replace(/^[a-z]+$/g, '').split(' ').map(Number);
    direction = command.replace(/[0-9]\s+/g, '');
    currentPosition.x = pos[0];
    currentPosition.y = pos[1];
}

function move(movement: string) {
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

