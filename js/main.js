var data = ['c', 'javascript', 'java'];
var result = "";

for (var index = 0; index <= 2; index++) {
  result += `<li>${data[index]}</li>`;
}

document.querySelector("ul").innerHTML = result;
