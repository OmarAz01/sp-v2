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
    {
      name: 'Example Casein Protein',
      ingredients: ['Micellar Casein', 'Natural Flavors', 'Stevia'],
      pricePerUnit: 0.04,
      healthScore: 85.0,
      userScore: 84.3,
      link: 'https://example.com/product3',
      overall: 80,
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
    {
      name: 'Example Casein Protein',
      ingredients: ['Micellar Casein', 'Natural Flavors', 'Stevia'],
      pricePerUnit: 0.04,
      healthScore: 85.0,
      userScore: 84.3,
      link: 'https://example.com/product3',
      overall: 80,
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
    {
      name: 'Example Casein Protein',
      ingredients: ['Micellar Casein', 'Natural Flavors', 'Stevia'],
      pricePerUnit: 0.04,
      healthScore: 85.0,
      userScore: 84.3,
      link: 'https://example.com/product3',
      overall: 80,
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
    {
      name: 'Example Casein Protein',
      ingredients: ['Micellar Casein', 'Natural Flavors', 'Stevia'],
      pricePerUnit: 0.04,
      healthScore: 85.0,
      userScore: 84.3,
      link: 'https://example.com/product3',
      overall: 80,
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
    {
      name: 'Example Casein Protein',
      ingredients: ['Micellar Casein', 'Natural Flavors', 'Stevia'],
      pricePerUnit: 0.04,
      healthScore: 85.0,
      userScore: 84.3,
      link: 'https://example.com/product3',
      overall: 80,
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
    {
      name: 'Example Casein Protein',
      ingredients: ['Micellar Casein', 'Natural Flavors', 'Stevia'],
      pricePerUnit: 0.04,
      healthScore: 85.0,
      userScore: 84.3,
      link: 'https://example.com/product3',
      overall: 80,
    },
    {
      name: 'Example Casein Protein',
      ingredients: ['Micellar Casein', 'Natural Flavors', 'Stevia'],
      pricePerUnit: 0.04,
      healthScore: 85.0,
      userScore: 84.3,
      link: 'https://example.com/product3',
      overall: 79,
    },
    {
      name: 'Example Casein Protein',
      ingredients: ['Micellar Casein', 'Natural Flavors', 'Stevia'],
      pricePerUnit: 0.04,
      healthScore: 85.0,
      userScore: 84.3,
      link: 'https://example.com/product3',
      overall: 78,
    },
    {
      name: 'Example Casein Protein',
      ingredients: ['Micellar Casein', 'Natural Flavors', 'Stevia'],
      pricePerUnit: 0.04,
      healthScore: 85.0,
      userScore: 84.3,
      link: 'https://example.com/product3',
      overall: 77,
    },
    {
      name: 'Example Casein Protein',
      ingredients: ['Micellar Casein', 'Natural Flavors', 'Stevia'],
      pricePerUnit: 0.04,
      healthScore: 85.0,
      userScore: 84.3,
      link: 'https://example.com/product3',
      overall: 77,
    },
    {
      name: 'Example Casein Protein',
      ingredients: ['Micellar Casein', 'Natural Flavors', 'Stevia'],
      pricePerUnit: 0.04,
      healthScore: 85.0,
      userScore: 84.3,
      link: 'https://example.com/product3',
      overall: 75,
    },
    {
      name: 'Example Casein Protein',
      ingredients: ['Micellar Casein', 'Natural Flavors', 'Stevia'],
      pricePerUnit: 0.04,
      healthScore: 85.0,
      userScore: 84.3,
      link: 'https://example.com/product3',
      overall: 75,
    },
    {
      name: 'Example Casein Protein',
      ingredients: ['Micellar Casein', 'Natural Flavors', 'Stevia'],
      pricePerUnit: 0.04,
      healthScore: 85.0,
      userScore: 84.3,
      link: 'https://example.com/product3',
      overall: 70,
    },
    {
      name: 'Example Casein Protein',
      ingredients: ['Micellar Casein', 'Natural Flavors', 'Stevia'],
      pricePerUnit: 0.04,
      healthScore: 85.0,
      userScore: 84.3,
      link: 'https://example.com/product3',
      overall: 65,
    },
    {
      name: 'Example Casein Protein',
      ingredients: ['Micellar Casein', 'Natural Flavors', 'Stevia'],
      pricePerUnit: 0.04,
      healthScore: 85.0,
      userScore: 84.3,
      link: 'https://example.com/product3',
      overall: 56,
    },
  ]
}

export default async function SupplementList({supplementName, filters}) {
  const sort = filters?.sort || 'overall'
  const type = filters?.type || 'all'
  const products = await fetchProducts(supplementName, {sort, type})

  return (
    <>
      <div className='grid md:gap-6 gap-4 max-w-screen-xl mx-auto px-4 sm:grid-cols-2 lg:grid-cols-3'>
        {products.map((product, idx) => (
          <a
            key={idx}
            href={product.link}
            target='_blank'
            rel='noopener noreferrer'
            tabIndex={0}
            aria-label={`Open ${product.name} in new tab`}
            className='relative z-1 group border border-borderColor rounded-2xl bg-cardBackground text-textPrimary py-3 px-4 cursor-pointer transition-shadow hover:shadow-lg block'
          >
            <div
              className={`absolute top-0 -right-1 z-2 bg-white border border-borderColor text-sm font-semibold p-2 rounded-full ${
                product.overall >= 80
                  ? 'text-green-600'
                  : product.overall >= 75
                  ? 'text-yellow-600'
                  : 'text-red-800'
              }`}
            >
              {product.overall}
            </div>

            <h2 className='text-lg text-left mr-4 font-bold mt-4 mb-2 leading-snug'>
              {product.name}
            </h2>

            <div className='flex justify-between text-sm text-textSecondary border-t pt-4'>
              <div className='flex flex-col'>
                <span className='text-gray-500'>Price</span>
                <span className='text-textPrimary font-medium'>
                  ${product.pricePerUnit.toFixed(2)}
                </span>
              </div>
              <div className='flex flex-col'>
                <span className='text-gray-500'>Health</span>
                <span className='text-textPrimary font-medium'>
                  {product.healthScore.toFixed(1)}
                </span>
              </div>
              <div className='flex flex-col'>
                <span className='text-gray-500'>User</span>
                <span className='text-textPrimary font-medium'>{product.userScore.toFixed(1)}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}
