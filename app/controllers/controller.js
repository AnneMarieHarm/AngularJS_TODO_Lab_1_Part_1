"use strict";

function TodoController() {
    const vm = this;

    vm.tasks = [
        { task: "Handle physical Inbox", completed: true },
        { task: "Relax", completed: true },
        { task: "Handle regular 'in' and 'out' tasks", completed: true },
        { task: "Shop for groceries, etc.", completed: false },
        { task: "Work on Sunday", completed: true },
    ]
}

angular
    .module("todoApp")
    .controller("TodoController", TodoController)

