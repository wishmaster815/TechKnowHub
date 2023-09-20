const searchInput = document.querySelectorAll(".Searchbar")[0];
const searchInput2 = document.querySelectorAll(".Searchbar")[1];


let users = document.querySelectorAll(".linkbox");


searchInput.addEventListener("input",(e)=>{
    const value = e.target.value.toLowerCase();
    for(var i = 0;i<users.length;i++){
        const head = users[i].getElementsByTagName('h3')[0];
        const isVisible = head.innerHTML.toLowerCase().includes(value);
        users[i].classList.toggle("hide",!isVisible);
    }
    
});
searchInput2.addEventListener("input",(e)=>{
    const value = e.target.value.toLowerCase();
    for(var i = 0;i<users.length;i++){
        const head = users[i].getElementsByTagName('h3')[0];
        const isVisible = head.innerHTML.toLowerCase().includes(value);
        users[i].classList.toggle("hide",!isVisible);
    }
    
});