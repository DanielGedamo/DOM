// console.log(myId.innerText);

// interP.innerText = ("my dom app ")

// var classtext =document.getElementsByClassName("enter1")

// console.log(classtext);
// console.log(classtext[1]);
// console.log(classtext[2].innerText);

// var classForMe = document.getElementsByClassName("for elaments")
// console.log(classForMe);

// function getName() {
//     var userName = prompt('enter a name please')
//     document.body.innertext('<h2>'+userName +'</h2>')
// // } ;getName()
// function getNumAndColor(){
// var userColor = prompt("enter color")
// var userNume =+ prompt('enter number')
// for (var i= 0; i<userNume; i++){
//     document.write('<span>'+ userColor+ '</span>'+"<br>")
// };

// // }getNumAndColor()
// function soumfuonc (className ,text){
//     var elementArra= document.getElementsByClassName(className)
//     for (var i =0;i<elementArra.length;i++){
//         elementArra[i].innerText= text;
//     }
// }soumfuonc("bay","hay mami")
function soumfuonc() {
  var userNum = +prompt("enter num");

  for (var i = 0; i < userNum; i++) {
    var stors = {
      storName: prompt("enter name"),
      addres: prompt("enter the addres"),
      numOfEmployees: +prompt("enter number of Employees"),
      numOfsecsen: +prompt("enter num of secsen")
    };
    if(stors.numOfEmployees>10){
        document.write('<p>'+ storName + '</p>' +'<p>'+ numOfsecsen + '</p>'+'<p>'+ addres + '</p>'+'<p>'+ numOfEmployees + '</p>');
        
    };
  };
  var numOfPrint ()
};soumfuonc() 
