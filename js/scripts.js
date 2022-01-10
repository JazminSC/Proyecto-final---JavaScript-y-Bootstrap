//llama al formulario y llama la funcion saveTask (Guardar tarea) mediante submit en un evento
document.getElementById('formTask').addEventListener('submit', saveTask); 

//funcion traer
function saveTask(e) 
{
  //guarda el titulo dentro de la variable title
  let title = document.getElementById('title').value; //id="title" input
  //guarda un texto (descripcion)dentro de la variable description
  let description = document.getElementById('description').value;// id="description" tetxarea
  console.log(description)

  //objeto
  let task = {
    title,
    description
  };
  
  //Nota: si localstorage esta vacio
  //si no hay tareas
  if(localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task); //Llena el arreglo
  //almacena un dato en tasks y convierte el objeto task en un string
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {//caso contrario si existen tareas
    //obtiene las tareas alamacenadas en el localStorage 
    //y las alamacena e un variable
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    //actualiza a traves del metodo push
    tasks.push(task);
    //almacena de nuevo
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks(); //metodo que obtiene las tareas (linea 58)
  document.getElementById('formTask').reset();

  //previene el comportamiento por defecto
  e.preventDefault();
}

function deleteTask(title) {
  console.log(title)
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

//Hara una consulta en el localstorage, teniendo los datos,
// los mostrara en pantalla
function getTasks() {
  //obtiene las tareas y las covierte a json
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  //obtiene el div tasks
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';//limpia el formulario

  //for para recorrer el arreglo
  for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;
    //vista para mostrar el arreglo
    tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p>${title} - ${description}
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-2 btn-sm">Eliminar</a>
          </p>
        </div>
      </div>`;
  }
}

//inicia apenas se ejecute el codigo, mostrando las tareas previamente guardadas
getTasks();





//----------------------------------------- Funciones para redirecionar ------------------------------------------------------
function redireccionar() {
    window.location="Formulario/FormularioTareas.html";

}
function redireccionar2() {
    window.location="Api/IndexApi.htmlr";

}