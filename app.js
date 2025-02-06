window.onload = function() {
    fetch('https://56pyj61f33.execute-api.ap-south-1.amazonaws.com/prod/recipes')
        .then(response => response.json())
        .then(data => {
            const recipeList = document.getElementById('recipeList');
            const recipes = JSON.parse(data.body);
            recipes.forEach(recipe => {
                const recipeItem = document.createElement('div');
                recipeItem.textContent = `${recipe.name}: ${recipe.instructions}`;
                recipeList.appendChild(recipeItem);
            });
        });
};
