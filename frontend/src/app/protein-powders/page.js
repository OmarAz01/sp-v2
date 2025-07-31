import SupplementList from '../../components/supplementList'
import fetchProducts from '../../components/fetchProducts'
import Link from 'next/link'

export default async function ProteinPowders() {
  const products = await fetchProducts('protein powder')
  return (
    <>
      <div className='flex flex-col w-full items-center text-center sm:mb-32 mb-0'>
        <div className='flex flex-col items-center mb-8 max-w-screen-lg'>
          <h1 className='md:text-6xl text-3xl font-bold mb-4 mt-8 xl:mt-18 text-textPrimary'>
            Protein Powders
          </h1>
          <p className='text-textSecondary'>
            Compare protein powders by cost per gram of protein, ingredient quality, user ratings,
            and overall score.
          </p>
        </div>
        <div className='flex flex-col items-center w-full max-w-screen-lg mb-6'>
          <SupplementList products={products} />
          <p className='text-sm mt-8 text-secondaryText'>
            If you believe any information is inaccurate, have suggestions, or believe a product
            should be included please email us at{' '}
            <Link href='mailto:omaralzoubi001@gmail.com' className='text-brandName underline'>
              omaralzoubi001@gmail.com
            </Link>
            . We welcome feedback to improve our rankings and accuracy.
          </p>
        </div>
      </div>
    </>
  )
}
