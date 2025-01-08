document.getElementById("montarPizza").addEventListener("click", function () {
    const pizzaName = document.getElementById("pizzaName").value.trim();
    const pizzaSize = document.querySelector('input[name="size"]:checked');
    const ingredientCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    // Validação
    if (!pizzaName) {
        alert("Por favor, insira o nome da pizza.");
        return;
    }

    if (!pizzaSize) {
        alert("Por favor, escolha um tamanho para a pizza.");
        return;
    }

    if (ingredientCheckboxes.length === 0) {
        alert("Por favor, selecione pelo menos um ingrediente.");
        return;
    }

    // Pegar dados
    const size = pizzaSize.value;
    const ingredients = Array.from(ingredientCheckboxes).map(checkbox => checkbox.value);

    // Mostrar os dados
    const pizzaOutput = document.getElementById("pizzaOutput");
    pizzaOutput.innerHTML = `
      <p><strong>Nome da Pizza:</strong> ${pizzaName}</p>
      <p><strong>Tamanho:</strong> ${size}</p>
      <p><strong>Ingredientes:</strong> ${ingredients.join(", ")}</p>
  `;
});
