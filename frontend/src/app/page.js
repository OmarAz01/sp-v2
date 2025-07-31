import Link from 'next/link'
import Head from 'next/head'

export default async function Home() {
  const apiUrl = process.env.API_URL || 'https://localhost:8080/api/v1'
  const res = await fetch(`${apiUrl}/top-products`, {
    next: {revalidate: 36000},
  })
  if (!res.ok) {
    throw new Error('Failed to fetch top products')
  }
  const topProducts = await res.json()

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
          <div className='grid gap-4 sm:gap-0 sm:max-w-[680px] lg:max-w-[850px] mx-auto px-4 gird-cols-1'>
            {topProducts.map((product, idx) => (
              <div
                key={idx}
                className={`sm:border-b border-b-black relative border sm:border-0 text-textPrimary sm:rounded-none rounded-2xl flex flex-col p-4 ${
                  idx % 2 === 0 ? 'bg-transparent' : 'bg-cardBackground'
                }`}
              >
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                  <span
                    className={`text-sm sm:-top-1 sm:-left-4 -top-1 -left-1 border absolute font-semibold rounded-full inline-block px-2 py-1 
                    ${
                      product.overall >= 80
                        ? 'bg-green-100 text-green-700'
                        : product.overall >= 75
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-800'
                    }`}
                    style={{verticalAlign: 'middle'}}
                  >
                    {product.overall}
                  </span>
                  {/* Left: Name and scores */}
                  <div className='flex flex-col lg:flex-row sm:items-start lg:items-center items-center  lg:justify-between lg:gap-8 flex-1 min-w-0'>
                    {/* Name */}
                    <span className='font-bold text-center truncate text-base sm:text-lg sm:mb-0 md:max-w-64 max'>
                      {product.name}
                    </span>
                    {/* Scores */}
                    <div className='flex flex-row flex-wrap gap-x-4 gap-y-1 my-2 sm:my-0 items-center text-center'>
                      <span className='text-xs sm:text-sm text-gray-500'>
                        Price:{' '}
                        <span className='font-medium text-textPrimary'>
                          ${product.pricePerUnit.toFixed(2)}
                        </span>
                      </span>
                      <span className='text-xs sm:text-sm text-gray-500'>
                        Health:{' '}
                        <span className='font-medium text-textPrimary'>
                          {product.healthScore.toFixed(1)}
                        </span>
                      </span>
                      <span className='text-xs sm:text-sm text-gray-500'>
                        User:{' '}
                        <span className='font-medium text-textPrimary'>
                          {product.userScore.toFixed(1)}
                        </span>
                      </span>
                    </div>
                  </div>
                  {/* Right: Button */}
                  <div className='mt-1 sm:mt-0 sm:ml-4 flex-shrink-0 w-full sm:w-fit flex items-center'>
                    <a
                      href={product.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='block w-full sm:w-fit text-center bg-buttonBackground text-buttonText px-2 py-2 rounded-lg font-semibold text-xs sm:text-sm hover:opacity-90 transition'
                      aria-label={`Open ${product.name} in new tab`}
                    >
                      View at {product.linkName || 'Product Site'}
                    </a>
                  </div>
                </div>
              </div>
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
        <section className='py-10 sm:py-14 px-4 sm:px-6 sm:mb-18 border-t-2 border-borderColor'>
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
