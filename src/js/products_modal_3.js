(()=>{let a={openModalBtn:document.querySelector("[data-window-third-open]"),closeModalBtn:document.querySelector("[data-window-third-close]"),modal:document.querySelector("[data-window-third]")};function b(){a.modal.classList.toggle("modal-hidden")}a.openModalBtn.addEventListener("click",b),a.closeModalBtn.addEventListener("click",b)})()