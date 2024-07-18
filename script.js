

let toastbox = document.getElementById("toastbox")
let successmsg = " <i class='bx bxs-check-circle'></i> Successfully submitted ";
let errormsg = " <i class='bx bxs-x-circle'></i> Please fix the error";
let inavalidmsg = " <i class='bx bxs-up-arrow-circle'></i> Invalid choice, input";

function showtoast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastbox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add("error");
    };

    if(msg.includes('Invalid')){
        toast.classList.add("Invalid");
    };


    setTimeout(() => {
        toast.remove();
    }, 4000);
}