document.addEventListener("DOMContentLoaded", function () {
    //input tag
    const taskInput = document.getElementById("task")

    //button tag
    const addTaskButton = document.getElementById("addTask")
     
    //ul tag
    const taskList = document.getElementById("taskList")

    //event listener for button
    addTaskButton.addEventListener("click", function () {
        //first step for button
        const taskText = taskInput.value
        
        if (taskText === "") {
            alert("Give some values to the input")
        } else {
        //adding the values in the list
        const taskItem = document.createElement("li")//this is for nothing but li tag created with js

        //We are giving the inner HTML tag values
        taskItem.innerHTML = `${taskText} <button id="delete-btn" class="delete">Delete</button>`
        
        //appending or adding child inside the parent
        // WE are adding a new li inside the ul tag
        taskList.appendChild(taskItem)

        // 
        taskInput.value = "";

        //remove functionality starts
        const deleteButton = taskItem.querySelector("#delete-btn")
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(taskItem)
        })
        //remove functionality ends
        }

    })


    
})
