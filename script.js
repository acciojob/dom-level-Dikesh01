//your JS code here. If required.

const liTag = document.getElementsByTagName("li")
let findId;

for(let i = 0; i < 10; i++){
  findId = liTag[i].id
  if(findId === "level"){
    setTimeout(() =>{
      alert(`The level of the element is: ${i}`);
    },1000);
  }
}  