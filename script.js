document.addEventListener("DOMContentLoaded" function() {
	
})
const container = document.getElementById("container");
    const boxCount = 800;
function createBox() {
	for (let i = 0; i < boxCount; i++) {
      const box = document.createElement("div");
      box.className = "square";
      container.appendChild(box);
    }
}
createBox();
)};