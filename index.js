const myarray = [{name: 'rohith',Date: '2001-01-17'}];

function renderToDoList(){
    let todoList = ''; // this will create the empty string just to store the entered values 
    for (let i = 0;i<myarray.length;i++){
        const todoObject = myarray[i];
        // const name = todoObject.name;
        // const Date = todoObject.Date;
        const {name,Date} = todoObject
        const html = `
        <div> ${name}</div>
        <div>${Date} </div>
        <button onClick = "
        myarray.splice(${i},1); 
        renderToDoList(); 
        " class = "delete-button">Delete</button>`;                              //splice is a method which acts as similar to the function slice and it takes two parameters one is the index value which    we  are trying to remove and other is the no of values we are trying to delete and in each case we will be removing the specified one from the list and so we take the one i and delete 1 from the array. 
                            // and after removing we have to make sure the list is still available and to do so we are rendering it again.
        todoList += html;
    }
    // console.log(myarray);

    document.querySelector('.js-div').innerHTML = todoList // this will push the code into the html
}

function addToDo(){
    let input = document.querySelector('.input');           //this will select the input 
    const date = document.querySelector('.date');
    let dateValue = date.value;
    let value = input.value;        //this will grab the value in the input in the form of 'string'
    myarray.push({
        name :value,
    Date : dateValue});        //this will push the value into the code
    
    
    // console.log(myarray);       // this will print the elements of array in the code in the form of object

    input.value = '';       // after hiting enter this will make the to do input empty so that we dont need to clear everytime 
    renderToDoList();       // this is a call to the function.
}

function greeting(name) {
    console.log(`Hello ${name}`);
} 

function processInput(name){
    var name = prompt('enter your name: ');
    greeting(name);
}

processInput(name);