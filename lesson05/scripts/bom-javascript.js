const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
button.addEventListener('click', function () {
    if (input.value != '') {
        /*crea li**/
        const li = document.createElement('li');
        /*creamos un boton al cual le asignamos el valor deleteButton*/
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌'
        /* adjuntamos a cada li un delete button*/
        li.append(deleteButton);
        /* adjuntamos cada elemento li a la lista html*/
        list.append(li);
        /*agregamps un event listener para borrar cada elemento cuando se le hace click*/
        deleteButton.addEventListener('click', function () {
            /*remueve el hijo de list : li*/
            list.removeChild(li);
            /* se enfoca en input*/
            input.focus();
        });

        input.focus();
        input.value = "";
    } else { input.focus }
});

