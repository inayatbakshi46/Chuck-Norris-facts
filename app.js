let txt =  document.querySelector(".txt")
let btn = document.querySelector(".b")
let val;
const chuck = ()=>{
  let joke = fetch("https://api.chucknorris.io/jokes/random")
joke.then((response)=> {
  return response.json()
}).then((value)=>{
  val = value.value;
txt.textContent = val;
  
})
}
btn.addEventListener("click", ()=>{
  chuck();
})