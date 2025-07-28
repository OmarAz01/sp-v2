import SupplementList from '../../components/supplementList'

export default async function ProteinPowders({searchParams}) {
  const params = (await searchParams) || {}
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
          <div className='flex gap-3 mt-6 text-sm text-gray-900 text-start'>
            <a href='/protein-powders' className='hover:underline'>
              Overall
            </a>
            <span className='text-borderColor'>|</span>
            <a href='/protein-powders?type=price' className='hover:underline'>
              Price
            </a>
            <span className='text-borderColor'>|</span>
            <a href='/protein-powders?type=health' className='hover:underline'>
              Health
            </a>
            <span className='text-borderColor'>|</span>
            <a href='/protein-powders?type=user' className='hover:underline'>
              User
            </a>
          </div>
        </div>
        <div className='flex flex-col items-center w-full max-w-screen-lg'>
          <SupplementList supplementName='protein powder' filters={params} />
        </div>
      </div>
    </>
  )
}
