let contenedor = document.getElementById("base");

let añadir = document.getElementById("añadir");
let eliminar = document.getElementById("eliminar");



añadir.addEventListener("click", ()=> {
    let tarea = document.createElement("div");
    tarea.textContent = "Tarea";
    tarea.classList.add("tarea");
    contenedor.append(tarea);
});

eliminar.addEventListener("click", ()=> {
    contenedor.lastChild.remove()
});
