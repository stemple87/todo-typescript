/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {

  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection){
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

  export var tasksOfType = function(taskType: string, taskCollection: Task[]){
    var descriptions: String[] = [];

    for(var task of taskCollection){

      if((taskType === "HomeTask")&&(task instanceof HomeTask)) {
        descriptions.push(task.description);
      }
      if((taskType === "WorkTask")&&(task instanceof WorkTask)) {
        descriptions.push(task.description);
      }
      if((taskType === "HobbyTask")&&(task instanceof HobbyTask)) {
        descriptions.push(task.description);
      }

    }
    return descriptions;
  }

  export var tasksOfPriority = function(taskPriority: string, taskCollection: Task[]){
    var descriptions: String[] = [];

    for(var task of taskCollection){
      if(taskPriority === task.priority){
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

  export var describeFirstHighPriority = function(assignee: IPerson, taskCollection: Task[]){
    for(var task of taskCollection){
      if((task.assignedTo === assignee) && (task.priority === "High")) {
        return task.description;
      }
    }
  }
}
