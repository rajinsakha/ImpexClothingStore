const sideMenu = document.querySelector('.side-menu');
const categoryLinks = [...document.getElementsByClassName("category-link")]
const productList = [...document.getElementsByClassName("explore-products")]

function openMenu(){
    sideMenu.style.left = "0";
}

function closeMenu(){
    sideMenu.style.left = "-300px";
}

// For product page to display each category
categoryLinks.forEach((list) => {
    list.addEventListener('click',()=>{
        productList.forEach((product)=>{
            if(list.textContent.toLowerCase() === product.id){
                product.classList.add('active-tab');
                list.classList.add('active-link');
                console.log(list.classList);
                

                categoryLinks.forEach((list) =>{
                    if(list.textContent.toLowerCase !== product.id){
                        list.classList.remove('active-link');
                    } 
                })

            }
            else{
                product.classList.remove('active-tab');
            }
        })
    })
    
});
