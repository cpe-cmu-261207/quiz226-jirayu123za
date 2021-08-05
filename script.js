const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const search_btn = document.querySelector("#search");
const reset_btn = document.querySelector("#reset");
const text = document.querySelector('#text')

// define more constants and variables here
let toggle = false
let authorText = author.innerText
let textData = text.innerText;


btn_toggle.onclick = () => {
  // your code here
  if (!toggle) {
    let x = length.value
    let code = parseInt(author.innerText.split(" ")[0])
    console.log(code + x)
    author.innerText = code + x
    btn_toggle.innerText = "Display Author"
    toggle = true
  }
  else {
    author.innerText = authorText
    btn_toggle.innerText = "Display Calculation"
    toggle = false
  }

}

search_btn.onclick = () => {

  text.innerText = textData
  let b = length.value
  let words = text.innerText.split(" ")
  let selectword = []
  let color = document.querySelector("#color").value
  

  for (const word of words) {
    if (word.length >= b)
      selectword.push(word)
  }
  for (const word of selectword) {
    let innerHTML = text.innerHTML
    let index = innerHTML.indexOf(word)
    innerHTML = innerHTML.substring(0, index) + "<span style='color:" + color + " ;'>" + innerHTML.substring(index, index + word.length) + "</span>" + innerHTML.substring(index + word.length);
    text.innerHTML = innerHTML;
  }

}

reset_btn.onclick = () => {
  location.reload()
}
// more codes for Search and Reset buttons here
