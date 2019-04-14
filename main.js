function openModalWindow()
 {
  document.body.classList.add("open-modal-window");
 }

 function closeModalWindow()
 {
   document.body.classList.remove("open-modal-window");
   location.reload();
 }

 function closeModalAutomatic(e)
 {
  if(!e.target.closest("div").classList.contains("modal-window-container"))
         {
          closeModalWindow();
         }
 }