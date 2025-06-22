export default function ProteinPowders() {
  return (
    <>
      <div class='flex flex-col justify-between w-full items-center text-center'>
        <div class='flex flex-col items-center mb-12 max-w-screen-lg'>
          <h1 className='md:text-6xl text-3xl font-bold mb-4 mt-12 xl:mt-18'>Protein Powders</h1>
          <p>
            Compare whey, casein, and plant-based protein powders by cost per gram of protein,
            ingredient quality, user ratings, and overall score. Updated constantly.
          </p>
        </div>

        <div class='flex flex-col w-fit h-full bg-white shadow-md rounded-lg bg-clip-border'>
          <table class='w-fit text-left table-auto'>
            <thead>
              <tr>
                <th class='p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100'>
                  <p class='flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800'>
                    Name
                  </p>
                </th>

                <th class='p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100'>
                  <p class='flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800'>
                    Price / Unit
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='currentColor'
                      aria-hidden='true'
                      class='w-4 h-4'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
                      ></path>
                    </svg>
                  </p>
                </th>
                <th class='p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100'>
                  <p class='flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800'>
                    Health Score
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='currentColor'
                      aria-hidden='true'
                      class='w-4 h-4'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
                      ></path>
                    </svg>
                  </p>
                </th>
                <th class='p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100'>
                  <p class='flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800'>
                    User Reviews
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='currentColor'
                      aria-hidden='true'
                      class='w-4 h-4'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
                      ></path>
                    </svg>
                  </p>
                </th>
                <th class='p-4 transition-colors cursor-pointer border-b border-slate-300 bg-slate-50 hover:bg-slate-100'>
                  <p class='flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800'>
                    Overall
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='currentColor'
                      aria-hidden='true'
                      class='w-4 h-4'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
                      ></path>
                    </svg>
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class='hover:bg-slate-50'>
                <td class='p-4 border-b border-slate-200'>
                  <p class='block text-sm text-slate-800'>Protein Powder 1</p>
                </td>
                <td class='p-4 border-b border-slate-200'>
                  <p class='block text-sm text-slate-800'>0.02</p>
                </td>
                <td class='p-4 border-b border-slate-200'>
                  <p class='block text-sm text-slate-800'>84.4</p>
                </td>
                <td class='p-4 border-b border-slate-200'>
                  <p class='block text-sm text-slate-800'>89.2</p>
                </td>
                <td class='p-4 border-b border-slate-200'>
                  <p class='block text-sm text-slate-800'>98.2</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
