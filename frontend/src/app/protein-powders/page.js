import SupplementList from '../../components/supplementList'

export default function ProteinPowders({products}) {
  return (
    <>
      <div className='flex flex-col w-full items-center text-center'>
        <div className='flex flex-col items-center mb-12 max-w-screen-lg'>
          <h1 className='md:text-6xl text-3xl font-bold mb-4 mt-12 xl:mt-18'>Protein Powders</h1>
          <p>
            Compare whey, casein, and plant-based protein powders by cost per gram of protein,
            ingredient quality, user ratings, and overall score. Updated constantly.
          </p>
        </div>
        <div className='flex flex-col items-center w-full max-w-screen-lg'>
          <SupplementList supplementName='protein powder' />
        </div>
      </div>
    </>
  )
}
