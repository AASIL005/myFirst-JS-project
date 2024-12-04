let plusjs=document.getElementById("plus")
let savejs=document.getElementById("saveIn")


let count = 0
function plus(){
    count += 1
    plusjs.textContent = count
}
function save(){
    savejs.textContent+=count + " - "
    plusjs.textContent=0
    count = 0
}