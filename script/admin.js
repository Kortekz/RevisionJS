// use a constructor function for multiple objects

// each item must have an edit and delete button


// this is where all products will be stored
let items = []

// object created manually
let object1 = {
    id: 1,
    name: 'Nike Shoe',
    description: 'This is better than the original',
    price: 800,
    url: 'somethingCool'
}

// Constructor function
// function to create objects
function Constructor(id, name, description, price, url){
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.url = url
}
// second item created using constructor
let item2 = new Constructor(2, 'Adidas', 'This is better than the fake', 700, 'https://www.thoughtco.com/thmb/4ygrrOY7jjTBlJaj7pyp5blTEKc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/32716134786_ef6e02d6fb_k-5c3d514346e0fb0001af0f44.jpg')

// pushing items into array
items.push(object1, item2)

// sets the array in local storage
localStorage.setItem('items',JSON.stringify(items))
// sets the array from local storage to array(items) in code
items = JSON.parse(localStorage.getItem('items'))
// JSON.parse converts string to array

let table = document.querySelector('table')

// event handler, use an event listener 
function corne(){
    let products = items.map(function(item, index){
        console.log (item)
        console.log (index)
        return `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>R${item.price}</td>
                <td>${item.description}</td>
                <td> <img src='${item.url}' "width: 150px,  height=150px"/> </td>
                <td> <button> Edit </button> </td>
                <td> <button class='delete' value='${index}' > Delete </button> </td>
            </tr>
                 `
    })

table.innerHTML = products.join('')
}
corne()

function favourite(){
    // sets the array in local storage
    localStorage.setItem('items',JSON.stringify(items))
    // sets the array from local storage to array(items) in code
    items = JSON.parse(localStorage.getItem('items'))
    // JSON.parse converts string to array
}

// function to remove items
// Nested function
function remove(position){
    items.splice(position, 1)
}
let deleteButton = document.querySelector('.delete')
// also another nested function
function remove(position){
    items.splice(position, 1)
    favourite()
    corne()
}
table.addEventListener('click', function(){
    if(event.target.classList.contains('delete')){
        remove(event.target.value)
        // alert(event.target.value)
    }
})


