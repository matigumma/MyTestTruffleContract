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

    // READ
    mapping (uint => Task) public tasks;

    // CREATE
    function createTask(string memory _title, string memory _description) public {
        tasks[taskcounter] = Task(taskcounter, _title, _description, false, block.timestamp );
        taskcounter++;
    }

    function findIndexById(uint _id) internal view returns (uint) {
        for (uint i = 0; i < taskcounter; i++) {
            if (tasks[i].id == _id) {
                return i;
            }
        }
        revert("task no found");
    }

    function getTaskById(uint _id) public view returns (Task memory) {
        uint index = findIndexById(_id);
        return tasks[index];
    }

    // UPDATE TITLE
    function modifyTitle(uint _id, string memory _newTitle) public {
        uint index = findIndexById(_id);
        tasks[index].title = _newTitle;
    } 

    // UPDATE DESCRIPTION
    function modifyDescription(uint _id, string memory _description) public {
        uint index = findIndexById(_id);
        tasks[index].description = _description;
    } 

    // UPDATE DONE = DELETE
    function toggleDone(uint _id) public {
        uint index = findIndexById(_id);
        Task storage task = tasks[index];
        task.done = !task.done;
    } 
}
