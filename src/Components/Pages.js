import React, { useContext } from 'react'
import { AppContext } from '../context/Contextapp'

const Pages = () => {
    const {pagehandler, page, totalPages} = useContext(AppContext);
  return (
    

    <div  className=" flex flex-row justify-between  border-2 py-2 mt-2 mb-4 min-w-[500px] max-sm:w-[400px] truncate rounded-lg">
        <div className='p-2'>
            {
                page  > 1 && (<button className='px-2 py-1 border-2 border-gray-400 rounded-lg
                font-medium bg-gray-200'
                     onClick={()=>pagehandler(page - 1)}>Previous</button>) 
            }
            {
                page < totalPages && (<button className='px-3 py-1 border-2 border-gray-500
                font-semibold bg-gray-400 hover:bg-gray-500 rounded-lg ml-3'
                    onClick={()=>pagehandler(page + 1)}>Next</button>)  
            }
        </div>
      
        <p className='flex justify-end items-center px-2 gap-1 '>
            Page <span className='font-semibold'>{ page} </span> of {totalPages}
        </p>
     
    </div>

   
    )
}

export default Pages
