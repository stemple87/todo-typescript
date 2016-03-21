/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />
/// <reference path="to-do-create-tasks.ts" />


$(document).ready(function(){
  $(".button").click(function(event){
    event.preventDefault();
    var btnId = $(this).attr('id');
    var userInput = $("#userInput").val();

    if (btnId === "getAllTasks"){

      var list = ToDoList.describeTasksForPerson(ToDoList.people[userInput], tasks);


      for(task of list){
        $('.showAllTasks').append("<p>"+task+"</p>");
      }
    }

  })
})
