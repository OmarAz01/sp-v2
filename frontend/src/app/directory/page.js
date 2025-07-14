import Link from 'next/link'
const directoryData = [
  {
    title: 'Protein Powders',
    href: '/protein-powders',
  },
]

export default function DirectoryPage() {
  return (
    <>
      <div className='flex flex-col w-full items-center text-center'>
        <div className='flex flex-col items-center mb-8 max-w-screen-lg px-4 border-b border-borderColor pb-4'>
          <h1 className='md:text-6xl text-3xl font-bold mb-4 mt-8 xl:mt-18 text-textPrimary'>
            Directory
          </h1>
          <p className='text-textSecondary'>
            Explore our directory of supplements, including protein powders, vitamins, and more.
          </p>
        </div>
        <div className='flex flex-col items-center w-full max-w-screen-lg'>
          <div className='flex flex-col items-start w-full space-y-4 px-2'>
            {directoryData.map((item) => (
              <Link key={item.title} href={item.href} className=''>
                <h2 className='text-textPrimary hover:underline hover:italic'>{item.title}</h2>
              </Link>
            ))}
            <h2 className='text-zinc-500 line-through'>Pre-Workout</h2>
            <h2 className='text-gray-500 line-through'>Green Powders</h2>
          </div>
        </div>
      </div>
    </>
  )
}
