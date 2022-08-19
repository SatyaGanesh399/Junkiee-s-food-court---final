    let orderItems = document.getElementById('order-menu')
    let statusBar = document.getElementById('order-status-chart')
    let finalNote = document.getElementById('final-note')
const hideItems = () =>{
    orderItems.style.display = 'none';
    statusBar.style.display = 'block';
    finalNote.style.display = 'block';
    document.getElementById('alert-id').style.display = 'block'
}
const orderMore = () =>{
    orderItems.style.display = 'block';
    statusBar.style.display = 'none';
    finalNote.style.display = 'none';
}
let card0 = document.getElementsByClassName('order-status-block')[0]
let card1 = document.getElementsByClassName('order-status-block')[1]
let card2 = document.getElementsByClassName('order-status-block')[2]
let card3 = document.getElementsByClassName('order-status-block')[3]
let card4 = document.getElementsByClassName('order-status-block')[4]
let card5 = document.getElementsByClassName('order-status-block')[5]
let card6 = document.getElementsByClassName('order-status-block')[6]
let card7 = document.getElementsByClassName('order-status-block')[7]
let card8 = document.getElementsByClassName('order-status-block')[8]
let card9 = document.getElementsByClassName('order-status-block')[9]

const executeOrder = () =>{
    let orderId = document.getElementById("entered-orderId").value
    document.getElementById("entered-orderId").value = '';
    
    
    const timerStart = (() => {
        orderPlaced()
        .then(chefReceived)
        .then(sauseAdded)
        .then(firstLayerCheese)
        .then(toppingAdded)
        .then(secondCheeseAdded)
        .then(pizzaBaked)
        .then(oreganoAdded)
        .then(packageReceived)
        .then(orderReady)
        .then(finalThankYouNote)
        })
        if(orderId == 'JFC08'){
        document.getElementById("order-title").innerHTML = "Order status of the Order Id : " + orderId ;
        document.getElementById("order-title").style.color = 'white'
        document.getElementById('invalid-alert').style.display = 'none'
        timerStart();
        }
        else{
            document.getElementById('invalid-alert').style.display = 'block'
            document.getElementById('invalid-alert').style.color = 'red'
        }
        
}


let orderPlaced = () =>{
    return new Promise((resolve, reject) => {
    setTimeout(function () {
    card0.classList.remove('btn-light')
    card0.classList.add('btn-success')
    resolve()
}, 2000)
})
}

let chefReceived = () =>{
    return new Promise((resolve, reject) => {
    setTimeout(function () {
    card1.classList.remove('btn-light')
    card1.classList.add('btn-success')
    resolve()
    }, 6000)
})
}

let sauseAdded = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(function () {
        card2.classList.remove('btn-light')
        card2.classList.add('btn-success')
        resolve()
    }, 3000)
})
}

let firstLayerCheese = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(function () {
        card3.classList.remove('btn-light')
        card3.classList.add('btn-success')
        resolve()
    }, 6000)
})
}
let toppingAdded = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(function () {
        card4.classList.remove('btn-light')
        card4.classList.add('btn-success')
        resolve()
    }, 3000)
})
}
let secondCheeseAdded = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(function () {
        card5.classList.remove('btn-light')
        card5.classList.add('btn-success')
            resolve()
        }, 8000)
})
}
let pizzaBaked = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(function () {
        card6.classList.remove('btn-light')
        card6.classList.add('btn-success')
            resolve()
        }, 5000)
})
}

let oreganoAdded = () =>{
    return new Promise((resolve, reject) => {
    setTimeout(function () {
        card7.classList.remove('btn-light')
        card7.classList.add('btn-success')
          resolve()
         }, 2000)
})
}
let packageReceived = () =>{
    return new Promise((resolve, reject) => {
    setTimeout(function () {
        card8.classList.remove('btn-light')
        card8.classList.add('btn-success')
          resolve()
         }, 2000)
})
}
let orderReady = () =>{
    return new Promise((resolve, reject) => {
    setTimeout(function () {
        card9.classList.remove('btn-light')
        card9.classList.add('btn-success')
          resolve()
         }, 2000)
})
}
let finalThankYouNote = () =>{
    return new Promise((resolve, reject) => {
    setTimeout(function () {
        document.getElementById('final-note').classList.add('bg-success')
        document.getElementById('collect-order').innerText = 'Please collect the order in the counter'
        document.getElementById('thank').innerText = 'Thank You'
        document.getElementById('visit-again').innerText = 'Please Visit Again'
          resolve()
         }, 2000)
})
}

