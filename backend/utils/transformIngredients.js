const fs = require('fs')

// Load your transformed supplements JSON
const supplements = JSON.parse(fs.readFileSync('./tmp/cleaned_supplements.json', 'utf-8'))

// Create a Set of all unique ingredients
const uniqueIngredients = new Set()

for (const supp of supplements) {
  for (const ing of supp.ingredients) {
    uniqueIngredients.add(ing.toLowerCase().trim())
  }
}

// Convert to object with blank ratings
const ingredientQualityTable = {}

;[...uniqueIngredients].sort().forEach((ing) => {
  ingredientQualityTable[ing] = {
    health_rating: null,
    reason: null,
  }
})

// Write to file
fs.writeFileSync(
  './tmp/ingredient_quality_table.json',
  JSON.stringify(ingredientQualityTable, null, 2)
)

console.log('✅ Ingredient quality table generated with', uniqueIngredients.size, 'ingredients.')
