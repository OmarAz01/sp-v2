async function fetchProducts(supplementName) {
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

export default async function SupplementList({supplementName}) {
  const products = await fetchProducts(supplementName)

  return (
    <div className='grid gap-6 max-w-screen-xl mx-auto px-4'>
      {products.length === 0 ? (
        <div className='text-center text-gray-500'>No products found.</div>
      ) : (
        products.map((product, idx) => (
          <div
            key={idx}
            className='border border-borderColor rounded-2xl px-4 sm:px-12 pt-4 shadow-sm w-fit hover:shadow-lg hover:cursor-pointer transition bg-cardBackground text-textPrimary'
          >
            <div className='mb-4'>
              <h2 className='text-xl font-semibold'>{product.name}</h2>
            </div>
            <div className='flex flex-row justify-between w-fit space-x-4 sm:space-x-12 items-center mb-4'>
              <div className='flex flex-col'>
                <span className='text-sm text-gray-600'>Price per Unit</span>
                <span className='text-lg font-bold'>${product.pricePerUnit.toFixed(2)}</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-sm text-gray-600'>Health Score</span>
                <span className='text-lg font-bold'>{product.healthScore.toFixed(1)}</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-sm text-gray-600'>User Score</span>
                <span className='text-lg font-bold'>{product.userScore.toFixed(1)}</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-sm text-gray-600'>Overall Score</span>
                <span className='text-lg font-bold'>{product.overall}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
