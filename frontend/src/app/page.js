import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>SupplementPicks – Compare the Best Supplements</title>
        <meta
          name='description'
          content='Discover top protein powders, creatine, and pre-workout supplements ranked by health score, price per gram, taste, and more.'
        />
      </Head>

      <main className='min-h-screen p-2 text-textPrimary'>
        {/* Hero Section */}
        <section className='text-center justify-center items-center flex flex-col max-w-screen-lg mx-auto mb-16 mt-12 xl:mt-18'>
          <h1 className='md:text-6xl text-3xl font-bold mb-4'>
            Compare the Best Supplements for Your Health and Performance
          </h1>
          <p className='md:text-xl text-base text-textSecondary mb-6 max-w-4xl'>
            Find the top protein powders, creatine, pre-workout and more — ranked by price, taste,
            ingredients, and user reviews.
          </p>
          <Link
            href='/protein-powders'
            className='inline-block bg-buttonBackground text-buttonText px-6 py-3 rounded-lg text-sm md:text-lg hover:scale-101 border-borderColor border transition'
          >
            Start with Protein Powders
          </Link>
        </section>

        {/* Category Cards */}
        <section className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20'>
          <Link
            href='/protein-powders'
            className='border rounded-xl p-6 text-center shadow hover:shadow-md transition bg-cardBackground'
          >
            <h2 className='text-xl font-semibold mb-2'>Protein Powders</h2>
            <p className='text-textSecondary text-sm'>
              Compare whey, casein, and plant-based options
            </p>
          </Link>

          <div className='border rounded-xl p-6 text-center text-gray-400 bg-gray-50'>
            <h2 className='text-xl font-semibold mb-2'>Creatine</h2>
            <p className='text-sm'>Coming soon</p>
          </div>

          <div className='border rounded-xl p-6 text-center text-gray-400 bg-gray-50'>
            <h2 className='text-xl font-semibold mb-2'>Pre-Workout</h2>
            <p className='text-sm'>Coming soon</p>
          </div>
        </section>

        {/* Top Ranked Supplements */}
        {/* <section className='max-w-3xl mx-auto mb-16 text-center flex flex-col items-center justify-center'>
          <h3 className='text-2xl font-bold mb-6 border-b-2 w-fit border-borderColor px-4'>
            Top Protein Powders
          </h3>

          <div className='space-y-4'>
            <div className='text-2xl font-semibold'>
              <span className='text-3xl font-bold' style={{color: '#d4af37'}}>
                Optimum Nutrition Gold Standard Whey
              </span>
            </div>

            <div className='text-xl font-medium'>
              <span className='text-2xl' style={{color: '#a9a9a9'}}>
                Dymatize ISO100
              </span>
            </div>

            <div className='text-lg font-normal'>
              <span className='text-xl' style={{color: '#cd7f32'}}>
                MyProtein Impact Whey
              </span>
            </div>
          </div>

          <div className='text-center mt-6'>
            <Link href='/protein-powders' className='text-blue-600 hover:underline text-sm'>
              View full rankings →
            </Link>
          </div>
        </section> */}

        {/* SEO Text Section */}
        <section className='max-w-3xl mx-auto text-sm text-center text-textSecondary leading-relaxed'>
          <p>
            SupplementPicks helps you find the best supplements for your fitness goals. Whether
            you're looking for the cleanest protein powders, affordable creatine, or the strongest
            pre-workout, we rank products based on data — including ingredient quality, price per
            gram, and taste reviews. Save time and money while choosing what actually works.
          </p>
        </section>
      </main>
    </>
  )
}
