'use client'
import {useState} from 'react'

const ingredientInfo = {
  'Whey Protein Isolate': {good: true, reason: 'High-quality protein source'},
  Stevia: {good: true, reason: 'Natural sweetener, no calories'},
  'Pea Protein': {good: true, reason: 'Plant-based protein'},
  'Brown Rice Protein': {good: true, reason: 'Plant-based protein'},
  'Natural Flavors': {good: false, reason: 'May include artificial additives'},
  'Micellar Casein': {good: true, reason: 'Slow-digesting protein'},
}

const sortOptions = [
  {label: 'Overall Score', value: 'overall'},
  {label: 'Health Score', value: 'healthScore'},
  {label: 'User Score', value: 'userScore'},
  {label: 'Price Per Unit', value: 'pricePerUnit'},
]

export default function SupplementList({products}) {
  const [openIdx, setOpenIdx] = useState(null)
  const [sortBy, setSortBy] = useState('overall')
  const [filter, setFilter] = useState('none')

  // Collect all unique filters from products
  const allFilters = Array.from(new Set(products.flatMap((p) => p.filters || [])))

  // Filter products
  const filteredProducts = products.filter((product) => {
    if (filter === 'none') return true
    return (product.filters || []).includes(filter)
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    // Sort descending for scores, ascending for price
    if (sortBy === 'pricePerUnit') {
      return a.pricePerUnit - b.pricePerUnit
    }
    return b[sortBy] - a[sortBy]
  })

  return (
    <>
      <div className='flex justify-end pb-6 gap-4'>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className='border border-black rounded-lg px-3 py-2 text-sm'
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className='border border-black rounded-lg px-3 py-2 text-sm'
        >
          <option value='none'>All Products</option>
          {allFilters.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>
      <div className='flex flex-col w-full md:px-0 px-2 sm:px-12 max-w-3xl sm:gap-0 gap-4 mx-auto'>
        {sortedProducts.map((product, idx) => {
          const isOpen = openIdx === idx
          return (
            <div
              key={idx}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className={`sm:border-b border-b-black hover:cursor-pointer relative border sm:border-0 sm:pt-8 text-textPrimary sm:rounded-none rounded-2xl flex flex-col p-4 ${
                idx % 2 === 0 ? 'bg-transparent' : 'bg-cardBackground'
              }`}
            >
              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                <span
                  className={`text-sm sm:top-2 sm:-left-2 -top-1 -left-1 border absolute font-semibold rounded-full inline-block px-2 py-1 
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
                <div className='flex flex-col md:flex-row sm:items-start md:items-center items-center  md:justify-between md:gap-8 flex-1 min-w-0'>
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
              <div
                className={`transition-all duration-700 ease-in-out w-full overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                <div
                  className={`transition-opacity duration-700 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className='bg-white rounded-lg p-4 border mt-2 text-xs sm:text-sm shadow-inner text-center sm:text-left box-border break-words'>
                    <div className='mb-2'>
                      <strong>Price Breakdown:</strong>
                      <div>
                        <span className='text-gray-700'>
                          <span className='font-mono'>
                            price / servings * {product.unitType} per serving
                          </span>
                          <br />
                          <span className='font-mono'>
                            {product.price} / {product.servings} * {product.unitAmount}
                            {product.unit} {product.unitType} = ${product.pricePerUnit.toFixed(2)}{' '}
                            per gram
                          </span>
                        </span>
                      </div>
                    </div>
                    <div>
                      <strong>Ingredient Breakdown:</strong>
                      <div className='mt-1 w-full break-words text-left'>
                        {product.ingredients.map((ing, i) => {
                          const info = ingredientInfo[ing]
                          return (
                            <span key={i} className='break-words'>
                              <span
                                className={`font-semibold ${
                                  info?.good ? 'text-green-700' : 'text-red-700'
                                }`}
                              >
                                {ing}
                              </span>
                              {info?.reason && (
                                <span className='ml-1 text-gray-500'>({info.reason})</span>
                              )}
                              {i < product.ingredients.length - 1 && (
                                <span className='text-gray-400'>, </span>
                              )}
                            </span>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
