const cl= console.log;

const btn = document.getElementById("button")
const msg = document.getElementById("message");
const nameInput = document.getElementById("nameInput");
 const resetBtn = document.getElementById("resetBtn");

btn.addEventListener("click", () => {
      const name = nameInput.value.trim() || "Sumati";
      msg.textContent = `Hello ${name}`;
    });
	
	
resetBtn.addEventListener("click", () => {
      nameInput.value = "";
      message.textContent = "";
    });