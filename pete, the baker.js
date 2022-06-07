function cakes(recipe, available) {
    let result = Number.MAX_VALUE;
    let i = 0;
    for (let x in recipe) {
      result = Math.min(Math.floor(available[x] / recipe[x]), result);
    } return result || i;
}