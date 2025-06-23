let inputText = document.getElementById("inputText");
let btn = document.getElementById("btn");
let ul = document.getElementById("ul");
let delbtns = document.querySelectorAll(".delTask");
btn.addEventListener("click", addTask);

function addTask() {
  let li = document.createElement("li");
  li.className = `list-group-item d-flex justify-content-between align-items-center`;
  li.innerHTML = `<div>${inputText.value}</div>
                <button  class="delTask btn btn-sm btn-outline-danger">
                    <i class="bi bi-x-circle"></i>
                </button>`;
  ul.append(li);
  inputText.value = "";
}

delbtns.forEach((btns) => {
  ul.addEventListener("click", function (e) {
    e.target.closest("li").remove();
  });
});
