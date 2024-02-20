var users = [];
var user_output = document.getElementById("user_output"),
    spinner = document.getElementById("spinner");
    spinner.style.display = "block";
fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => {
    users = data;
    console.log(data);
    display_users();
    spinner.style.display = "none";
})


function display_users() {
    for (let index = 0; index < users.length; index++) {
        var user = users[index];
        // var imageUrl = user.images ? user.images[0] : '';
        user_output.innerHTML += `
        <div class="col col-lg-4 col-md-6 col-sm-12 py-2">
            <div class="card d-flex felx-column justify-content-around align-items-center card_fetch">
            <div class="image_fetch text-center w-50">
                <img src="${user.image}" class="card-img-top" alt="Product Image">
            </div>
                <div class="conatiner-fetch d-flex flex-column justify-content-center align-items-center card-body ps-0">
                
                    <div class="card-body d-flex justify-content-center pb-0 card_body_fetch">
                        <div class="stars d-flex justify-content-around mt-1">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p><span class="text-black">$</span>${user.price}</p>
                    </div>
                    
                    <p class="text-capitalize">best products</p>
                </div>

            </div>
        </div>
            `
    }
}