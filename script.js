const root = document.getElementById("root");
let form;
window.addEventListener("load", (event) => {
  form = document.createElement("form");
  const input1 = document.createElement("input");
  input1.id = "input1";
  const input2 = document.createElement("input");
  input2.id = "input2";
  const input3 = document.createElement("input");
  input3.setAttribute("type", "submit");
  input3.id = "submit";
  form.appendChild(input1);
  form.appendChild(input2);
  form.appendChild(input3);
  root.appendChild(form);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("ran");
    let valueOne = Number(document.getElementById("input1").value);
    let valueTwo = Number(document.getElementById("input2").value);
    let math = valueOne + valueTwo;
    window.alert(math);
  });
});
