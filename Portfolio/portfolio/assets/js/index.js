/*=============== SERVICES MODAL ===============*/
const modal=document.querySelectorAll('.service_modal'),
      modalOpen=document.querySelectorAll('.service_button'),
      modalClose=document.querySelectorAll('.service_modal-close')

     let activemodal=(modalClick)=>{
        modal[modalClick].classList.add('active-modal');
      }

      modalOpen.forEach((modalOpen,i)=>{
        modalOpen.addEventListener('click',()=>{
            activemodal(i);
        })
      })

      modalClose.forEach((modalClose)=>{
        modalClose.addEventListener('click',()=>{
            modal.forEach((modalRemove)=>{
                modalRemove.classList.remove('active-modal')
            })
        })
      })



