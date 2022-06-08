const showBtn=document.querySelector("#counterBtn"),resetBtn=document.querySelector("#resetCountBtn"),spanText=document.querySelector("#counterText"),modal=document.querySelector("#modalContent"),modalAlert=document.querySelector(".section__alert"),icon=document.querySelector("#closeIcon"),url="https://jsonplaceholder.typicode.com/users",usersWrapper=document.querySelector("#usersWrapper"),usersTable=document.querySelector("#usersTable"),loader=document.querySelector("#loader");let count=0;localStorage.getItem("counterValue")&&(count=Number(localStorage.getItem("counterValue")));const usersService=async()=>{try{const t=await fetch(url);var e;200<=t.status&&t.status<300?(e=await t.json(),hideLoader(),generateTable(e)):usersWrapper.innerHTML="<h3>Sorry, we are unable to show data. Try to refresh a page."}catch(e){throw new Error(e)}},showModal=()=>{modalAlert.classList.remove("hide"),modal.classList.remove("hide"),modal.classList.add("show"),modalAlert.classList.add("show")},hideModal=()=>{modalAlert.classList.add("hide"),modal.classList.add("hide"),modalAlert.classList.remove("show"),modal.classList.remove("show")},counter=()=>{count+=1,localStorage.setItem("counterValue",count)},countTextUpdate=()=>{spanText.innerText=count+" times"},resetBtnToggler=()=>{5<=count||5<=localStorage.getItem("counterValue")?resetBtn.style.display="block":resetBtn.style.display="none "},countReset=()=>{count=0,localStorage.setItem("counterValue",count),resetBtnToggler()},rowStyle=e=>{if(e%2!=0)return"even"},generateTable=e=>{for(const n of e){var{id:t,name:o,email:r,address:s,phone:a,company:l}=n;usersTable.style.display="table";const c=document.createElement("tr");c.innerHTML=`
    <td>${o}</td>
    <td>${r}</td>
    <td>${s.city}, ${s.street} ${s.suite}</td>
    <td>${a}</td>
    <td>${l.name}</td>`,c.classList.add(rowStyle(t)),usersTable.append(c)}},hideLoader=()=>{loader.style.display="none"};showBtn.addEventListener("click",()=>{counter(),countTextUpdate(),resetBtnToggler(),showModal()}),resetBtn.addEventListener("click",()=>{countReset(),countTextUpdate()}),icon.addEventListener("click",()=>hideModal()),window.addEventListener("click",e=>{e.target==modal&&hideModal()}),usersService();