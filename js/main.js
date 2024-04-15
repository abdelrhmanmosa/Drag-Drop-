let input = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let boxes = document.querySelectorAll(".box");
let drag = null;

btn.addEventListener("click", () => {
  if (input.value != "") {
    boxes[0].innerHTML += `
    <p class="items" draggable="true" >${input.value}</p> 
    `;
    input.value = "";
  }
  dragItem();
});

function dragItem() {
  let items = document.querySelectorAll(".items");
  items.forEach((item) => {
    item.addEventListener("dragstart", function() {
      // console.log("drag started")
      this.style.opacity = "0.5";
      drag = item;
    });
    item.addEventListener("dragend", function() {
      // console.log("drag started")
      this.style.opacity = "1";
      drag = null;
    });
    item.addEventListener("dblclick", function(e){
      item.remove();
    })
    boxes.forEach((box) => {
      box.addEventListener("dragover", function(e){
        // console.log("dragover l");
        this.style.backgroundColor = "blue";
        this.style.color = "#fff";
        e.preventDefault();
      })
      box.addEventListener("dragleave", function(e){
        // console.log("dragover l");
        this.style.backgroundColor = "#fff";
        this.style.color = "#000";
      })
      box.addEventListener("drop", function(){
        this.append(drag);
      })
    })
  });
}
