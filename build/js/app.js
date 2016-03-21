var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(description, priority, assignedTo) {
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
            this.done = false;
        }
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(description, priority, assignedTo) {
            _super.call(this, description, priority);
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var WorkTask = (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(dueDate, description, priority, assignedTo) {
            _super.call(this, description, priority, assignedTo);
            this.dueDate = dueDate;
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return WorkTask;
    }(Task));
    ToDoList.WorkTask = WorkTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            _super.call(this, description, "Low");
            this.description = description;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    var diane = {
        name: "Diane D",
        email: "diane@epicodus.com"
    };
    var thor = {
        name: "Thor Son of Odin",
        email: "thor@asgard.com"
    };
    var loki = {
        name: "God of mischief",
        email: "loki@geocities.com",
        phone: "555-666-7777"
    };
    ToDoList.people = {
        "diane": diane,
        "thor": thor,
        "loki": loki
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-create-tasks.ts" />
var ToDoList;
(function (ToDoList) {
    ToDoList.describeTasksForPerson = function (assignee, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo === assignee) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
    ToDoList.tasksOfType = function (taskType, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_2 = taskCollection; _i < taskCollection_2.length; _i++) {
            var task = taskCollection_2[_i];
            if ((taskType === "HomeTask") && (task instanceof ToDoList.HomeTask)) {
                descriptions.push(task.description);
            }
            if ((taskType === "WorkTask") && (task instanceof ToDoList.WorkTask)) {
                descriptions.push(task.description);
            }
            if ((taskType === "HobbyTask") && (task instanceof ToDoList.HobbyTask)) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
    ToDoList.tasksOfPriority = function (taskPriority, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_3 = taskCollection; _i < taskCollection_3.length; _i++) {
            var task = taskCollection_3[_i];
            if (taskPriority === task.priority) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
    ToDoList.describeFirstHighPriority = function (assignee, taskCollection) {
        for (var _i = 0, taskCollection_4 = taskCollection; _i < taskCollection_4.length; _i++) {
            var task = taskCollection_4[_i];
            if ((task.assignedTo === assignee) && (task.priority === "High")) {
                return task.description;
            }
        }
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />
var people = ToDoList.people;
var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));
tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));
console.log(tasks);
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Here are Thor's tasks: ");
for (var _i = 0, thorTasks_1 = thorTasks; _i < thorTasks_1.length; _i++) {
    var task = thorTasks_1[_i];
    console.log(task);
}
var homeTasks = ToDoList.tasksOfType("HomeTask", tasks);
console.log("Home Tasks: ");
for (var _a = 0, homeTasks_1 = homeTasks; _a < homeTasks_1.length; _a++) {
    task = homeTasks_1[_a];
    console.log(task);
}
var lowPriority = ToDoList.tasksOfPriority("Low", tasks);
console.log("Task Priority: ");
for (var _b = 0, lowPriority_1 = lowPriority; _b < lowPriority_1.length; _b++) {
    task = lowPriority_1[_b];
    console.log(task);
}
var firstPriority = ToDoList.describeFirstHighPriority(people.thor, tasks);
console.log("Here is Thor's first tasks: " + firstPriority);
/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />
/// <reference path="to-do-create-tasks.ts" />
$(document).ready(function () {
    $(".button").click(function (event) {
        event.preventDefault();
        var btnId = $(this).attr('id');
        var userInput = $("#userInput").val();
        if (btnId === "getAllTasks") {
            var list = ToDoList.describeTasksForPerson(ToDoList.people[userInput], tasks);
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                task = list_1[_i];
                $('.showAllTasks').append("<p>" + task + "</p>");
            }
        }
    });
});
