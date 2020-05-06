
// function Test (){
//     let testing = "Testing, 1, 2, testing"
//     console.log (testing)
// }

// Test ()

// function createHeaderElement (headline) {
//     let headerEl = document.createElement ("h1")
//     let headerEl.innerText = `${headline}`
//     return headerEl
// }


fetch ('https://api.github.com/users/scarter13')
.then (function (response) {
    // console.log (response)
    return response.json ()
})
.then (function (data) {
    console.log (data)
    console.log (data.name)

let targetBodyElement = document.querySelector ("body")
let headerElement = document.createElement ("h1")
headerElement.innerText = (data.name)
console.log (headerElement)
targetBodyElement.appendChild(headerElement)

let leftElement = document.createElement ("div")
let leftHeader = document.createElement ("h2")
leftHeader.innerText = ("The Basics")
leftElement.appendChild(leftHeader)
let nameEl = document.createElement ("p")

let nameEl = document.createElement ("p")

let nameEl = document.createElement ("p")

targetBodyElement.appendChild(leftElement)

})

// let headerElement = document.querySelector("h1")


// console.log (targetElement)
// console.log (headerElement)
// console.log (headerEl)




