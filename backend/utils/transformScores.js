const fs = require('fs')

const supplementsPath = './tmp/cleaned_supplements.json'
const ingredientsPath = './tmp/ingredients_scored.json'
const outputPath = './tmp/supplements_scored.json'

const ingredientsData = JSON.parse(fs.readFileSync(ingredientsPath, 'utf-8'))
const supplementsData = JSON.parse(fs.readFileSync(supplementsPath, 'utf-8'))

function getIngredientRating(name) {
  const entry = ingredientsData[name.toLowerCase()]
  return entry ? entry.health_rating : null
}

function calculateHealthScore(ingredientList) {
  let goodCount = 0
  let badCount = 0
  let mediumCount = 0
  let unknownCount = 0
  let specialPointCount = 0

  ingredientList.forEach((ingredient) => {
    const rating = getIngredientRating(ingredient)
    const isGrassFed = ingredient.toLowerCase().includes('grass-fed')
    if (isGrassFed) {
      specialPointCount++
    }
    if (rating === 'good') goodCount++
    else if (rating === 'medium') medium++
    else if (rating === 'bad') badCount++
    else unknownCount++
  })

  const total = goodCount + mediumCount + badCount + unknownCount

  // Base score from quality breakdown
  let score = 85
  score += goodCount * 2 // reward good
  score += mediumCount * 0.5 // slightly reward medium
  score -= badCount * 3 // penalize bad
  score -= unknownCount * 1.5 // lightly penalize unknown
  score += specialPointCount * 5 // bonus for grass-fed

  //bonuses

  if (total <= 7 && badCount <= 1 && unknownCount === 0) {
    score += 8
  }

  if (total <= 5 && badCount === 0 && unknownCount === 0) {
    score += 12
  }

  if (total <= 3 && badCount === 0 && unknownCount === 0) {
    score += 20
  }

  if (total > 12 && badCount >= 4) {
    score -= (total - 12) * 1.5
  }

  if (total > 15 && badCount >= 5) {
    score -= (total - 15) * 2
  }

  // Normalize and clamp
  return Math.max(0, Math.min(100, Math.round(score)))
}

function calculateOverallScore(health, userScore, pricePerUnit) {
  const healthWeight = 0.6
  const userWeight = 0.1
  const priceWeight = 0.3

  // Normalize price so lower price = higher score (assuming under $5/g is good)
  let normalizedPrice = 100
  if (pricePerUnit) {
    normalizedPrice = Math.max(0, 100 - pricePerUnit * 20) // scale for $0–$5 range
  }

  const weightedScore =
    health * healthWeight + userScore * userWeight + normalizedPrice * priceWeight

  return Math.round(Math.max(0, Math.min(100, weightedScore)))
}

const updatedSupplements = supplementsData.map((supplement) => {
  const ingredients = supplement.ingredients || []
  const userScore = (supplement.review_score ?? 0) * 20
  const price = supplement.price_per_unit ?? 0

  const healthScore = calculateHealthScore(ingredients)
  const overallScore = calculateOverallScore(healthScore, userScore, price)

  return {
    ...supplement,
    health_score: healthScore,
    overall_score: overallScore,
  }
})

fs.writeFileSync(outputPath, JSON.stringify(updatedSupplements, null, 2), 'utf-8')

console.log('Scores updated and written to', outputPath)
