export async function fetchProducts(supplementName) {
  //   const url = `https://api.example.com/products?name=${encodeURIComponent(supplementName)}`
  //   try {
  //     const response = await fetch(
  //       url,
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${process.env.API_KEY}`, // Use your API key here
  //         },
  //       },
  //       {next: {revalidate: 3600}}
  //     )
  //     if (!response.ok) {
  //       throw new Error(`Error fetching products: ${response.statusText}`)
  //     }
  //     const data = await response.json()
  //     return data.products || []
  //   } catch (error) {
  //     console.error('Failed to fetch products:', error)
  //     return []
  //   }
  return [
    {
      name: 'Example Protein Powder',
      ingredients: ['Whey Protein Isolate', 'Natural Flavors', 'Stevia'],
      pricePerUnit: 0.02,
      healthScore: 90.2,
      userScore: 89.6,
      link: 'https://example.com/product1',
      overall: 85,
    },
    {
      name: 'Example Plant-Based Protein',
      ingredients: ['Pea Protein', 'Brown Rice Protein', 'Natural Flavors'],
      pricePerUnit: 0.03,
      healthScore: 88.5,
      userScore: 87.4,
      link: 'https://example.com/product2',
      overall: 82,
    },
    {
      name: 'Example Casein Protein',
      ingredients: ['Micellar Casein', 'Natural Flavors', 'Stevia'],
      pricePerUnit: 0.04,
      healthScore: 85.0,
      userScore: 84.3,
      link: 'https://example.com/product3',
      overall: 80,
    },
  ]
}
