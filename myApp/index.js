let todoContainer = document.getElementById('class-containerid')
let inputTodo = document.getElementById('input-todo')
let addTodo = document.getElementById('add-todo')
const modal = document.getElementById('modalId')//modal id 
const editId = document.getElementById('editId')//edit input id
let todoArray = []

const url = "http://localhost:3000/"
const postUrl = "http://localhost:3000/todos"
const delUrl  = "http://localhost:3000/todos/:id"

//this function fetch our data from backend and bring all todos to frontend
async function get_todo(){
    try{
        //fetch returns a promise
        const response = await fetch(url)
        //response.json() also returns a promse
        const data = await response.json()
        //promise of res.json is returned
        return data
    }
    catch(error){
        console.log(error)
    }
}

//function to post new data
async function post_todo(){
    try{
        
        let res =  await fetch(postUrl,{
            headers:{
                "content-type":"application/json"
            },
            method:'post',
            body:JSON.stringify({
                name:inputTodo.value,
                completed:false,
            })
           })
        if(!res.ok){
            const response = await res.json()
            if(res.status===409){
                inputTodo.style.border = "1px solid red"
                
            }
            else{
                inputTodo.innerText = ""
                inputTodo.style.border = "1px solid black"
                
            }
            throw new Error(`${JSON.stringify(response)} status code :${res.status}`)
            
        }
        

        let data = await res.json()
        return data
    }
    catch(error){
        console.log(error)
    }
}

//function to delete one

async function delete_todo(curentelement){
    try{
        const del_url = postUrl +'/'+curentelement._id;
        console.log(del_url)
        let response = await fetch( del_url,{
            method:"delete",
            headers:{
                "content-type":"application/json"
            }
        })
        const data = await response.json()
        return data

    }
    catch(errror){
        console.log(error)
    }
}

async function edit_todo(cur){
    try{
        const edit_url = postUrl+"/"+cur._id;
        
        let res =  await fetch(edit_url,{
            headers:{
                "content-type":"application/json"
            },
            method:'put',
            body:JSON.stringify({
                name:editId.value,
                completed:false,
            })
           })
        if(!res.ok){
            const response = await res.json()
            if(res.status===409){
                inputTodo.style.border = "1px solid red"
                
            }
            else{
                inputTodo.innerText = ""
                inputTodo.style.border = "1px solid black"
                
            }
            throw new Error(`${JSON.stringify(response)} status code :${res.status}`)
            
        }
        

        let data = await res.json()
        return data
    }
    catch(error){
        console.log(error)
    }
}

function showModal(cur){
    modal.style.display = "block"
    let save_edit = document.getElementById('save_modal')
    save_edit.addEventListener('click',()=> {
        edit_todo(cur)
        closeModal()
    })
}



let modalCloseBtn = document.getElementById('modalCloseId')
modalCloseBtn.addEventListener('click',closeModal)

function closeModal(){
    modal.style.display = "none"
}




addTodo.addEventListener('click',(e)=> {
    if(inputTodo.value != ""){
        post_todo();
    }
    
    
})



//this function just creates elements in dom and append them to container in html
function display_todos(todoArray){
    todoArray.forEach((cur)=> {
        console.log(cur)
    
        

        //parent
        let todo = document.createElement('div')
        todo.classList.add('todo')

        //child
        let todoinfo = document.createElement('div')
        todoinfo.classList.add('todo-info')
        let todobtn = document.createElement('div')
        todobtn.classList.add('todo-btn')

        

        //grand childern
        let todocompleted = document.createElement('input')
        todocompleted.classList.add('todo-completed')
        todocompleted.setAttribute("type","checkbox")
        todocompleted.checked= cur.completed
        let todoName =  document.createElement('p')
        todoName.classList.add('todo-name')
        todoName.innerHTML = cur.name
        
        let todoEdit = document.createElement('button')
        todoEdit.classList.add('todo-edit')
        todoEdit.innerHTML = 'edit'
        todoEdit.addEventListener('click',(e)=> {
            e.preventDefault()
            showModal(cur);
            console.log('opnen modal')
           
        })



        let todoDel = document.createElement('button')
        todoDel.classList.add('todo-delete')
        todoDel.innerHTML = 'Delete'
        todoDel.addEventListener('click',(e)=> {
            e.preventDefault()
            console.log("Delete")
            delete_todo(cur)
        })
        
        todoinfo.appendChild(todocompleted)
        todoinfo.appendChild(todoName)
        todobtn.appendChild(todoEdit)
        todobtn.appendChild(todoDel)
        
        todo.appendChild(todoinfo)
        todo.appendChild(todobtn)

        todoContainer.appendChild(todo)
    })
}


//calling the get_todo function , get_todo returns a promse
get_todo()
    //if that promise resovlve
    .then((data)=> {
        todoArray = data //assigning it to an array so that can iterate 
        console.log(todoArray)
        display_todos(todoArray)
    })
    .catch((err)=> console.log(err))

display_todos(todoArray)