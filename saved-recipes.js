const localRecipe = localStorage.getItem("recipeStorage")
const localJSON = JSON.parse(localRecipe)
const cardContainer = document.getElementById("cardContainer")

document.addEventListener('DOMContentLoaded', function () {


    cardContainer.innerHTML = renderRecipeList(localJSON)
    // number()



});

//rendering recipe
function renderRecipeList(local) {
    const lisLocalArray = local.map((list, index) => {


        return `
            <div class="card col-lg-3 col-sm-12" id="${index}">
                <a href="${list.Link}" target="_black"><img src="${list.Image}" class="card-img-top" height="240" alt="..."></a>
                <div class="card-body">
                <a href="${list.Link}" target="_black"><h5 class="card-title text-dark">${list.Title}</h5></a>
                <p class="card-text"><small class="text-muted"><input data-href="${list.Link}" data-title="${list.Title}" class="hearted" type="checkbox"/></small></p>
                <button class="btn btn-primary" type="button" onclick="remove(${index})" id="${index}">Remove</button>
                </div>
            </div>
                `


    })


    return lisLocalArray.join("")


}
//remove recipe from saving
function remove(index) {
    let removeRecipe = document.getElementById(index)
    removeRecipe.remove(removeRecipe)

    const recipeStorage = JSON.parse(localStorage.getItem("recipeStorage"))
    // 

    recipeStorage.splice(index, 1)

    let toString = JSON.stringify(recipeStorage);
    localStorage.setItem("recipeStorage", toString);
    cardContainer.innerHTML = renderRecipeList(recipeStorage)

}