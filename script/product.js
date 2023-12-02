

let purchased = []

let main = document.querySelector('main')

let items = JSON.parse(localStorage.getItem('items'))

main.innerHTML = items.map(function(item, index){
    return `
        <div>
            <h2>${item.name}</h2>
            <p>${item.description} </p>
            <p>R${item.price} </p>
            <button value = '${index}'data-add > Add To Cart </button>

        </div>
    `
}).join('')

function add(index){
    purchased.push(items[index])
    // selects the purchased products by their index

    localStorage.setItem('purchased', JSON.stringify(purchased))
    // stores the purchsed items in local storage
}

main.addEventListener('click', function(){
    if(event.target.hasAttribute('data-add')){
        // alert('button pressed')
        add(event.target.value)
    }
})


// search function
// use toLowerCase to fix case sensitivity
    // let a = items.filter(item => {
    //     return item.name == 'Nike Shoe'

    // })