
function Test (){
    let testing = "Testing, 1, 2, testing"
    console.log (testing)
}

Test ()


fetch ('https://api.github.com/users/scarter13')
.then (function (response) {
    console.log (response)
})