const showBtn=document.querySelector("#counterBtn"),resetBtn=document.querySelector("#resetCountBtn"),spanText=document.querySelector("#counterText"),modal=document.querySelector("#modalContent"),modalAlert=document.querySelector(".section__alert"),icon=document.querySelector("#closeIcon");let count=0;localStorage.getItem("counterValue")&&(count=Number(localStorage.getItem("counterValue")));const showModal=()=>{modalAlert.classList.remove("hide"),modal.classList.remove("hide"),modal.classList.add("show"),modalAlert.classList.add("show")},hideModal=()=>{modalAlert.classList.add("hide"),modal.classList.add("hide"),modalAlert.classList.remove("show"),modal.classList.remove("show")},counter=()=>{count+=1,localStorage.setItem("counterValue",count)},countTextUpdate=()=>{spanText.innerText=count+" times"},resetBtnToggler=()=>{5<=count||5<=localStorage.getItem("counterValue")?resetBtn.style.display="block":resetBtn.style.display="none "},countReset=()=>{count=0,localStorage.setItem("counterValue",count),resetBtnToggler()};showBtn.addEventListener("click",()=>{counter(),countTextUpdate(),resetBtnToggler(),showModal()}),resetBtn.addEventListener("click",()=>{countReset(),countTextUpdate()}),icon.addEventListener("click",()=>hideModal()),window.addEventListener("click",e=>{e.target==modal&&hideModal()});