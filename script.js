
let commentlist = document.getElementById("commentlist"); 
let addcomment = document.getElementById("addcomment");
let submitbtn = document.getElementById("submit"); 
submitbtn.addEventListener("click", () => {
    let newcomment = addcomment.value.trim();

    if (newcomment) {
       
        let newcommentElement = document.createElement("div");
        newcommentElement.classList.add("comment"); 
        newcommentElement.innerText = newcomment;

        commentlist.appendChild(newcommentElement); 

        addcomment.value = "";
    } else {
        alert("Please write a comment before submitting.");
    }
});
