const fs = require('fs')
const xlsx = require('xlsx')

function cleanIngredientName(name) {
  return name.trim().toLowerCase()
}

function transformSupplement(raw) {
  const {brandName, price, servings, unitAmount, reviewScore, ingredients, link} = raw

  const pricePerUnit = price / (servings * unitAmount)

  const cleanedIngredients = ingredients.map(cleanIngredientName)
  const filters = extractFilters(cleanedIngredients)

  const supplement = {
    brand_name: brandName,
    price,
    num_servings: servings,
    unit_amount: unitAmount,
    unit: 'g',
    unit_type: 'protein', // Default to protein, can be adjusted based on logic
    review_score: reviewScore,
    link,
    price_per_unit: Number(pricePerUnit.toFixed(3)),
    overall_score: null,
    health_score: null,
    user_score: null,
    ingredients: cleanedIngredients,
    filters,
  }

  return supplement
}

function extractFilters(ingredients) {
  const lowerIngredients = ingredients.map((i) => i.toLowerCase())
  const filters = new Set()

  const has = (substr) => lowerIngredients.some((ing) => ing.includes(substr))

  const containsAny = (substrings) => substrings.some((sub) => has(sub))

  // 🟢 Plant-Based Logic
  const containsWhey = has('whey')
  const containsPlantProteins = containsAny(['pea protein', 'rice protein', 'bean protein'])
  if (!containsWhey && containsPlantProteins) {
    filters.add('plant-based')
  }

  // 🟢 Grass-Fed
  if (has('grass-fed') || has('grass fed')) {
    filters.add('grass-fed')
  }

  // 🟢 Organic
  if (has('organic')) {
    filters.add('organic')
  }

  // 🟢 Beef
  if (has('beef')) {
    filters.add('beef')
  }

  // 🟢 Whey
  if (has('whey')) {
    filters.add('whey')
  }

  return Array.from(filters)
}

// Load Excel file
const workbook = xlsx.readFile('./tmp/protein.xlsx')
const sheetName = workbook.SheetNames[0]
const sheet = workbook.Sheets[sheetName]
const rawData = xlsx.utils.sheet_to_json(sheet)

// Process each row
const cleanedSupplements = rawData.map((row) => {
  if (typeof row.ingredients === 'string') {
    row.ingredients = row.ingredients
      .split(',')
      .map((i) => i.trim())
      .filter(Boolean) // remove empty strings
  }
  return transformSupplement(row)
})

// Write to JSON file
fs.writeFileSync('./tmp/cleaned_supplements.json', JSON.stringify(cleanedSupplements, null, 2))
console.log('✅ Cleaned supplements saved to cleaned_supplements.json')
