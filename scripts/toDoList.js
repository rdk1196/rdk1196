window.addEventListener('load',() =>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit',(e) => {
        e.preventDefault();

        const task = input.value;
        if(!task){
            alert("Fill out the task");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content")
        task_content_el.innerHTML = task;
       
        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_content_el.classList.add("text");
        task_input_el.type = "text";
        // task_input_el.setAttribute("readonly","readonly");

        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement("div");
        task_action_el.classList.add("actions");

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "delete";

        task_action_el.appendChild(task_delete_el);

        task_el.appendChild(task_action_el);

        list_el.appendChild(task_el);
        
        input.value = "";

        task_delete_el.addEventListener('click',() => {
            list_el.removeChild(task_el);
        })

    })


} )