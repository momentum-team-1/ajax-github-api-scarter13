
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
        // console.log (headerElement)
        targetBodyElement.appendChild(headerElement)

let leftElement = document.createElement ("div")
    let leftHeader = document.createElement ("h2")
        leftHeader.innerText = ("The Basics")
        leftElement.appendChild(leftHeader)
        
    let nameEl = document.createElement ("p")
        nameEl.innerText = ("Name " + data.name)
        leftElement.appendChild(nameEl)

    let gitUrlEl = document.createElement ("p")
        gitUrlEl.innerText = ("GitHub URL " + data.login)
        leftElement.appendChild(gitUrlEl)   
        
    let companyEl = document.createElement ("p")
        companyEl.innerText = ("Company " + data.company)
        leftElement.appendChild(companyEl)

let rightElement = document.createElement ("div")
    let rightHeader = document.createElement ("h2")
        rightHeader.innerText = ("The Story")
        rightElement.appendChild(rightHeader)

    let storyEl = document.createElement ("p")
        storyEl.innerText = (data.bio)
        rightElement.appendChild(storyEl)

let imageDiv = document.createElement ("div")
    let imageEl = document.createElement ("div")
    imageEl.innerHTML = `<img src=${data.avatar_url}>`
    // console.log (imageEl)
    imageDiv.appendChild(imageEl)



let containerElement = document.createElement ("div")
containerElement.appendChild(leftElement)
containerElement.appendChild(rightElement)
containerElement.appendChild(imageEl)
targetBodyElement.appendChild(containerElement)


containerElement.classList.add("container")
leftElement.classList.add("innerboxL")
rightElement.classList.add("innerboxR")
imageEl.classList.add("innerboxI")


})

// let headerElement = document.querySelector("h1")


// console.log (targetElement)
// console.log (headerElement)
// console.log (headerEl)




