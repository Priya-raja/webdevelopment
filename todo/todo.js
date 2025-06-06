const fs = require('fs');
const filepath = "./tasks.json";


const saveTasks = (task) =>{
    
    const dataJSON = JSON.stringify(task, null, 2);
    fs.writeFileSync(filepath, dataJSON);
}
const loadTasks=()=>{
    try{
        const dataBuffer = fs.readFileSync(filepath, 'utf8');
    //    
        return JSON.parse(dataBuffer);

    }catch(error){
        return [];
    }
}

const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push({task});
    saveTasks(tasks);
    console.log(`Task "${task}" added.`);

}

const listTasks = () => {
     const tasks = loadTasks();
    if (tasks.length === 0) {
        console.log("No tasks found.");
        return;
    }
    console.log("Tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task.task}`);
    });
}
const removeTask = (taskIndex) => {
    const tasks = loadTasks();  
     tasks.splice(taskIndex - 1, 1) 
    saveTasks(tasks)
    listTasks()
}

const command = process.argv[2];
const argument = process.argv[3];

if(command === "add") {
 addTask(argument);   
} else if(command === "list") {
 listTasks();
} else if(command === "remove") {
 removeTask(argument);
}
