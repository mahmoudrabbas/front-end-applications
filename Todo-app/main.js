


window.addEventListener('load', function(){
    input.focus();
})



function isEmpty() {
    if(input.value === ''){
        return true;
    }else{
        return false;
    }
}



let tasks = [];
let doneTasks = [];

if(localStorage.getItem('tasks')){
    tasks = localStorage.getItem('tasks').split(",");
}

if(localStorage.getItem('done')){
    doneTasks = localStorage?.getItem('done').split(",");
}



form.addEventListener('submit', function(e){
    e.preventDefault();
    if(isEmpty()){
        taskCheck.style.display = 'block';
    }else {
        taskCheck.style.display = 'none';
        tasks.push(input.value);
        localStorage.setItem('tasks', [...tasks]);
        input.value = '';
        input.focus();
        location.reload();
    }
})

addTasks();


function addTasks(){
    for(let i=0; i<tasks.length; i++){

        let text = document.createTextNode(`[${i+1}] ${tasks[i]}`);
        let p = document.createElement('p');
        p.classList.add('text');
        p.append(text);


        let deleteWord = document.createTextNode('Delete');
        let btn = document.createElement('button');
        btn.classList.add('delBtn');
        btn.append(deleteWord);


        let task = document.createElement('div');
        task.classList.add('task');
        task.append(p);
        task.append(btn);

        
        tasksDiv.append(task);
    }
}


let delBtns = document.getElementsByClassName('delBtn');

for(let i=0; i<delBtns.length; i++){
    delBtns[i].addEventListener('click', function(){
        let paraText = this.parentElement.children[0].innerHTML;
        console.log(paraText);
        tasks = tasks.filter((text) => `[${i+1}] ${text}` !== paraText);
        doneTasks = doneTasks.filter((t) => t === i);
        localStorage.setItem('tasks', tasks);
        localStorage.setItem('done', doneTasks);
        this.parentElement.remove();
    })
}


let myTasks = document.getElementsByClassName('task');

for(let i=0; i<myTasks.length; i++){
    myTasks[i].addEventListener('click', function(){
        if(myTasks[i]?.classList.contains('done')){
            doneTasks.pop(i);
            localStorage.setItem('done', doneTasks);
        }
        myTasks[i]?.classList.toggle('done');
        if(myTasks[i]?.classList.contains('done')) {
            doneTasks.push(i);
            localStorage.setItem('done', doneTasks);
        }
    })
}

for(let i=0; i<doneTasks.length; i++){
    myTasks[doneTasks[i]]?.classList.add('done');
}

if(tasks.length === 0 ){
    localStorage.clear();
}

