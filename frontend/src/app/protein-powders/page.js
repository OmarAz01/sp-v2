import SupplementList from '../../components/supplementList'

export default function ProteinPowders({searchParams}) {
  return (
    <>
      <div className='flex flex-col w-full items-center text-center'>
        <div className='flex flex-col items-center mb-8 max-w-screen-lg'>
          <h1 className='md:text-6xl text-3xl font-bold mb-4 mt-12 xl:mt-18'>Protein Powders</h1>
          <p>
            Compare whey, casein, and plant-based protein powders by cost per gram of protein,
            ingredient quality, user ratings, and overall score.
          </p>
          <div className='flex gap-3 mt-6 text-sm text-gray-600 text-start'>
            <a href='/protein-powders' className='hover:underline'>
              All
            </a>
            <span className='text-gray-800'>|</span>
            <a href='/protein-powders?type=whey' className='hover:underline'>
              Whey
            </a>
            <span className='text-gray-800'>|</span>
            <a href='/protein-powders?type=plant' className='hover:underline'>
              Plant-Based
            </a>
            <span className='text-gray-800'>|</span>
            <a href='/protein-powders?type=casein' className='hover:underline'>
              Casein
            </a>
          </div>
        </div>
        <div className='flex flex-col items-center w-full max-w-screen-lg'>
          <SupplementList supplementName='protein powder' filters={searchParams} />
        </div>
      </div>
    </>
  )
}
