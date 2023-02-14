const chai = require('chai');
const assert = chai.assert;

import { rover } from '../src/rover';

describe('Test Rover object type', function () {

    it('Test Rover type', function () {
        assert.strictEqual(typeof rover === 'function', true)
    });

    it('Test Rover cannot move', function () {

        //@todo this will need a proper parser solution
        let command = "5 5\n" + //Size of plateue.
            "1 2 N\n" +         //Start position
            "LMLMLMLMM\n" +        //Moving command.
            "1 2 N\n" +         //Start position
            "MMMMMM";        //Moving command.
        assert.strictEqual('Out of Boundary Instruction', rover(command));

    });

    it('Test Rover move', function () {
        
        //@todo this will need a proper parser solution
        let command = "5 5\n" + //Size of plateue.
            "1 2 N\n" +         //Start position
            "LMLMLMLMM"; 
        assert.strictEqual('1 3 N', rover(command));

    });

})
        /*let testCommands = {
            'plateau_size': {
                'width': 5,
                'height': 5
            },
            'starting_position': {
                'x': 1,
                'y': 2,
                'd': 'N'
            },
            'moving_command': 'LMLMLMLMM'
        }

        assert.strictEqual('1 3 N', R1.execute(testCommands));


        let R2 = new Rover();

        let testCommands2 = {
            'plateau_size': {
                'width': 5,
                'height': 5
            },
            'starting_position': {
                'x': 3,
                'y': 3,
                'd': 'E'
            },
            'moving_command': 'MMRMMRMRRM'
        }

        assert.strictEqual('5 1 E', R2.execute(testCommands2)); */



