let plusjs=document.getElementById("plus")
let savejs=document.getElementById("saveIn")


let count = 0
function plus(){
    count += 1
    plusjs.textContent = count
}
function save(){
    savejs.textContent+=count + " - "
    console.log(count)
}