import Link from 'next/link'
import Head from 'next/head'

export default async function Home() {
  // const res = await fetch('https://api.example.com/top-products')
  // const topProducts = await res.json()

  const topProducts = [
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

  return (
    <>
      <main className='p-2 text-textPrimary min-h-[1000px]'>
        {/* 1. Hero Section */}
        <section className='text-center px-4 sm:px-6 pt-10 sm:pt-16 pb-14 sm:pb-24 max-w-screen-lg mx-auto'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6'>
            Find the Best <span className='text-brandName'>Supplements</span> for Your Health &amp;
            Performance
          </h1>
          <p className='text-base sm:text-lg text-textSecondary mb-6'>
            Compare protein powders, pre-workouts, and more by price, quality, and user reviews.
          </p>
          <Link
            href='/protein-powders'
            className='inline-block bg-buttonBackground text-buttonText text-base sm:text-lg px-6 py-3 rounded-full hover:opacity-90 transition'
          >
            See Top Protein Powders
          </Link>
        </section>

        {/* 2. How It Works / Value Prop */}
        <section className='py-10 sm:py-14 px-4 sm:px-6 border-y-2 border-borderColor'>
          <div className='max-w-5xl mx-auto text-center mb-4 sm:mb-8'>
            <h2 className='text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4'>
              How SupplementPicks Helps You
            </h2>
            <p className='text-sm sm:text-base text-textSecondary'>
              We rank products using a data-driven system based on price, ingredients, and user
              feedback. Our mission is to help you make smarter supplement choices—faster.
            </p>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto text-center'>
            {['Unbiased Rankings', 'Compare Metrics', 'Save Time & Money', 'Updated Regularly'].map(
              (title, idx) => (
                <div key={idx} className='flex flex-col items-center'>
                  <div className='w-12 h-12 rounded-full bg-[#e8f3db] flex items-center justify-center mb-4'>
                    <div className='w-6 h-6 bg-[#6ba539] rounded-full'></div>
                  </div>
                  <h3 className='font-semibold mb-1 sm:mb-2 text-base sm:text-lg text-textPrimary'>
                    {title}
                  </h3>
                  <p className='text-xs sm:text-sm text-textSecondary'>
                    {
                      [
                        'No paid placements—just honest, research-backed results.',
                        'Easily compare nutrition, price, and user ratings side by side.',
                        'Quickly identify top picks without endless searching.',
                        'Our lists reflect the latest products and real user feedback.',
                      ][idx]
                    }
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* 3. Top 3 Supplements */}
        <section className='py-10 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto'>
          <h2 className='text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12'>
            Top Ranked Supplements
          </h2>
          <div className='grid md:gap-6 gap-4 max-w-screen-xl mx-auto px-4 sm:grid-cols-2 lg:grid-cols-3'>
            {topProducts.map((product, idx) => (
              <a
                key={idx}
                href={product.link}
                target='_blank'
                rel='noopener noreferrer'
                tabIndex={0}
                aria-label={`Open ${product.name} in new tab`}
                className='relative z-1 group border border-2-borderColor rounded-2xl bg-cardBackground text-textPrimary py-3 px-4 cursor-pointer transition-shadow hover:shadow-lg hover:scale-102 block'
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

                <h2 className='text-base text-left mr-4 font-bold mt-4 mb-2 leading-snug'>
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
                    <span className='text-textPrimary font-medium'>
                      {product.userScore.toFixed(1)}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 4. Browse by Category */}
        <section className='py-10 sm:py-14 px-4 sm:px-6 max-w-5xl mx-auto'>
          <h2 className='text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12'>
            Browse by Category
          </h2>
          <div className='grid sm:grid-cols-3 gap-4 sm:gap-6'>
            {[
              ['Protein Powders', '/protein-powders'],
              ['Pre-Workout', '#'],
              ['Green Powders', '#'],
            ].map(([label, link], idx) => (
              <Link
                key={idx}
                href={link}
                className={`rounded-2xl p-4 sm:p-6 text-center shadow-sm transition border ${
                  link === '#'
                    ? 'bg-primaryAccent text-textSecondary border-2-borderColor cursor-not-allowed'
                    : 'bg-cardBackground hover:shadow-md border-2-borderColor text-textPrimary'
                }`}
              >
                <h3 className='text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>{label}</h3>
                <p className='text-xs sm:text-sm'>
                  {link === '#' ? 'Coming Soon' : 'View Rankings'}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* 5. SEO / Trust Section */}
        <section className='py-10 sm:py-14 px-4 sm:px-6 sm:mb-12 border-t-2 border-borderColor'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-xl sm:text-2xl font-semibold mb-3 sm:mb-4'>
              Why Trust SupplementPicks?
            </h2>
            <p className='text-xs sm:text-base text-textSecondary mb-3 sm:mb-4'>
              We include no sponsored placements. All products are ranked using publicly available
              data on ingredients, price, and user reviews. Our goal is to provide unbiased,
              transparent comparisons to help you make informed choices. We update our rankings
              regularly to reflect the latest products and user feedback.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
