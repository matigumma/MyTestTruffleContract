// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract TasksContract {

    uint public taskcounter = 0; 

    struct Task {
        uint id;
        string title;
        string description;
        bool done; 
        uint crateAt;
    }

    // CRUD: CREATE , READ , UPDATE , DELETE

    // READ
    mapping (uint => Task) public tasks;

    // CREATE
    function createTask(string memory _title, string memory _description) public {
     tasks[taskcounter] = Task(taskcounter, _title, _description, false, block.timestamp );
     taskcounter++;
    }
// preo el _id es el index... no tiene sentido
// es lo mismo, nos esta faltando el retorno de la funcion cuando encuentra un error, es lo mismo si pongo idnex que _id.
    // function findIndex(uint _id) internal view returns (uint) {
    //     for (uint i = 0; i < taskcounter; i++) {
    //         if (tasks[i].id == _id) {
    //             return i;
    //         }
    //     }
    //     revert("task no found");
    // }

    // UPDATE TITLE
    function modifyTitle(uint _id, string memory _newTitle) public {
     tasks[_id].title = _newTitle;
    } 
     
    // UPDATE DESCRIPTION
    function modifyDescription(uint _id, string memory _description) public {
     tasks[_id].description = _description;
    } 

    // UPDATE DONE = DELETE
    function toggleDone(uint _id) public view {
     Task memory _task = tasks[_id];
     _task.done = !_task.done;
    } 

    // PIOLA ACTUALIZA LA ABI O LO Q SEA Q SE USE, NO TENGO IDEA COMO ES
    // AHORA VOY A BUSCAR COMO TESTEAR TRUFFLE DESDE JAVASCRIPT
    // ASI COMO ESTA PROBALO VOS EN TU BLOCKCHAIN LOCAL
}
