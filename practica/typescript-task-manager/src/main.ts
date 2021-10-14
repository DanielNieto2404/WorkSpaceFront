const TAREAS = [
    {
      texto: 'Mi primera tarea',
      completada: false,
      id: 1,
    },
    {
      texto: 'Una tarea sin terminar',
      completada: false,
      id: 2,
    },
    {
      texto: 'Una tarea terminada',
      completada: true,
      id: 3,
    },
    {
      texto: 'Una tarea para editar',
      completada: false,
      id: 4,
    },
    {
      texto: 'Una tarea para eliminar',
      completada: true,
      id: 5,
    },
    {
      texto: 'Una tarea con un texto muy largo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid asperiores consequuntur dolorem excepturi fugiat harum ipsa iure laboriosam libero minima neque porro possimus quam, quasi qui saepe velit veritatis."',
      completada: false,
      id: 6,
    },
    {
      texto: 'Tarea numero 7',
      completada: false,
      id: 7,
    },
    {
      texto: 'Tarea numero 8',
      completada: false,
      id: 8,
    },
    {
      texto: 'Tarea numero 9',
      completada: false,
      id: 9,
    },
    {
      texto: 'Tarea numero 10',
      completada: false,
      id: 10,
    },
  ];

  //Elements
  const taskListHTML = document.querySelector('#taskList');

  function listTaskHTML(tasks) {
    taskListHTML.innerHTML = '';
  
    for (let task of tasks) {
      taskListHTML.innerHTML += `
      <li>
        <div>
          <input type="checkbox" ${task.done ? 'checked' : ''}>
          <span>${task.name}</span>
        </div>
        <span class="material-icons btn-delete">delete_outline</span>
      </li>
    `
    }
  }
  function saveData(tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  function getData(){
    return JSON.parse(localStorage.getItem('tasks'))
  }
  const tasks = JSON.parse(localStorage.getItem('tasks'))
listTaskHTML(TAREAS);
  
