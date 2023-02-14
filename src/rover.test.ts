const chai = require('chai');
const assert = chai.assert;

import { rover } from '../src/rover';

describe('Test Rover object type', function () {

    it('Test Rover type', function () {
        assert.strictEqual(typeof rover === 'function', true)
    });

    it('Test Rover cannot move with out of Boundary Instruction', function () {

        
        let command = "5 5\n" + //Size of plateue.
            "1 2 N\n" +         //Start position
            "LMLMLMLMM\n" +        //Moving command.
            "1 2 N\n" +         //Start position
            "MMMMMM";        //Moving command.
        assert.strictEqual('Out of Boundary Instruction', rover(command));

    });

    it('Test Rover cannot move with Improper Left,Right,Move instruction', function () {

       
        let command = "5 5\n" + //Size of plateue.
            "1 2 N\n" +         //Start position
            "LMLMLMLMK";
        assert.strictEqual('Improper Left,Right,Move instruction', rover(command));

    });

    it('Test Rover cannot move with Improper direction instruction', function () {

      
        let command = "5 5\n" + //Size of plateue.
            "1 2 K\n" +         //Start position
            "LMLMLMLM";
        assert.strictEqual('Improper direction instruction', rover(command));

    });

    it('Test Rover move', function () {

        
        let command = "5 5\n" + //Size of plateue.
            "1 2 N\n" +         //Start position
            "LMLMLMLMM";
        assert.strictEqual('1 3 N', rover(command));

    });

    it('Test Rover move with kata instruction', function () {

        
        let command = "5 5\n" +

        "1 2 N\n" +

        "LMLMLMLMM\n" +

        "3 3 E\n" +

        "MMRMMRMRRM";
        assert.strictEqual('1 3 N\n5 1 E', rover(command));

    });



})
      

