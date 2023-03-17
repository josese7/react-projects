import React, { useState } from 'react'
import { FaHeart, FaRegHeart} from 'react-icons/fa'

const Movie = ({movie}) => {
  const [like, setLike] = useState(false)
  console.log(movie)
  return (
    <React.Fragment>

    
    <div className='w-40 sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
          <img className='w-full h-auto block' 
               src={movie?.backdrop_path?`https://image.tmdb.org/t/p/w500/${ movie?.backdrop_path}`: ''} 
               alt={movie?.title} 
          />
          <div className='absolute top-0 left-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-100 text-white'>
            <p className=' flex justify-center items-center  text-center  h-full whitespace-normal text-xs md:text-sm font-bold '>
              {movie?.title}
            </p>

            <p>
              {
                like? <FaHeart className='absolute top-3 left-3 text-gray-400' /> : <FaRegHeart className='absolute top-3 left-3 text-gray-400' />
              }
            </p>

          </div>
    </div>
    </React.Fragment>
  )
  
}

export default Movie