/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />
/// <reference path="to-do-create-tasks.ts" />


$(document).ready(function(){
  $(".button").click(function(event){
    event.preventDefault();
    var btnId = $(this).attr('id');
    var personName = $("#personName").val();
    var priority = $("#priority").val();
    var urgent = $('#urgent').val();

    if (btnId === "getAllTasks"){
      $('.resultDiv').empty();
      var list = ToDoList.describeTasksForPerson(ToDoList.people[personName], tasks);
      for(task of list){
        $('.resultDiv').append("<p>"+task+"</p>");
      }
    }
    if (btnId === "getPriority"){
      $('.resultDiv').empty();
      var list = ToDoList.tasksOfPriority(priority, tasks);
      for(task of list){
        $('.resultDiv').append("<p>"+task+"</p>");
      }
    }
    if (btnId === "getUrgent"){
      $('.resultDiv').empty();
      var task = ToDoList.describeFirstHighPriority(ToDoList.people[urgent], tasks);

      $('.resultDiv').append("<p>"+task+"</p>");

    }
  });
});
