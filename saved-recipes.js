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
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div class="card align-items-center" id="${index}">
                <a href="${list.Link}" target="_black"><img src="${list.Image}" class="card-img-top" alt="..."></a>
                <div class="card-body">
                <a href="${list.Link}" target="_black"><h5 class="card-title">${list.Title}</h5></a>
                <p class="card-text"><small class="text-muted"><input data-href="${list.Link}" data-title="${list.Title}" class="hearted" type="checkbox"/></small> Email to me</p>
                <button class="btn trash-button" onclick="remove(${index})" id="${index}"><i class="fa fa-trash">
                Remove
                </i></button>
                </div>
            </div>
            </div>
                `
            //     <button class="btn" onclick="saveRecipe('${element.strMealThumb}', '${element.strSource}', '${element.strMeal}')"><i class="fa fa-heart" aria-hidden="true">
            //     Flavorite this item
            // </i></button>

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