// when we send a request to server when the process happen it means we are in pending state when request is accepted by the server it means
// in resolve state when request rejected it means in rejected state

// var ans = new Promise((res, rej) => {
//     if (true) {
//         return res();
//     } else {
//         return rej();
//     }
// })

// ans.then(function () {
//     console.log("resolve done")
// })
//     .catch(function () {
//         console.log("rejected")
//     })

// problem:- select a random number from 0 to 9 if number is above 5 then it didnt resolve if it is below it resolve
// var ans = new Promise((res,rej)=>{
//     var n = Math.floor(Math.random()*10);
//     if (n < 5){
//         return res();
//     }else{
//         return rej();
//     }
// })

// ans.then(function(){
//     console.log("below")
// })
// .catch(function(){
//     console.log("above")
// })

// problem:- ghar pe aao
// gate kholo aur band karo
// khana pakao aur khana khao
// incognito open karo
// so jao

var p1 = new Promise((res,rej)=>{
    return res("ghar pe aao")
})
var p2 = p1.then(function(data){
    console.log(data)
    return new Promise((res,rej)=>{
        return res("gate kholo aur band karo")
    })
})
var p3 = p2.then(function(data){
    console.log(data)
    return new Promise((res,rej)=>{
        return res("khana bano aur khao")
    })
})
var p4 = p3.then(function(data){
    console.log(data)
    return new Promise((res,rej)=>{
        return res("incognito open karo")
    })
})
var p5 = p4.then(function(data){
    console.log(data)
    return new Promise((res,rej)=>{
        return res("sojao")
    })
})
p5.then(function(data){
    console.log(data)
})

// promise are aync
// there is a chance of rejected as well as fulfilled