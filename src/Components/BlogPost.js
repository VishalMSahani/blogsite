import React, { useContext } from 'react'
import { AppContext } from '../context/Contextapp'
import Spinner from './Spinner';

const BlogPost = () => {
    const {post, isLoading } = useContext(AppContext);

     console.log(post);

  return (
    <div>
        {
            isLoading ? (<Spinner/>) : post.length === 0 ? (
                <div>
                <h1 className="text-center">No Posts Found </h1>
                </div>
            ) : (
                post.map((posts) => {
                    return <div className='flex flex-col max-w-[500px] max-sm:w-[350px] px-2 border-2 mb-2
                    p-2 bg-gray-50 rounded-lg shadow-sm'
                     key={posts.id}>
                        <h2 className='font-semibold text-lg' 
                        >{posts.title}</h2>
                            <div className='text-sm text-gray-700 '>
                                <p className=''>
                                by: <span className='italic text-blue-800'> {posts.author}</span> 
                                <span> in </span> <span className='text-black font-semibold underline italic'>{posts.category}</span>
                                </p>
                            </div>
                            <div className='text-sm text-gray-700  mb-2'>
                                <p>
                                    Posted on <span>{posts.date}</span>
                                </p>
                            </div>
                            <div className='text-justify mb-1 mt-2'>
                                {posts.content}
                            </div>
                                <div className='cursor-pointer text-sm underline  text-blue-600  '>
                            {posts.tags && posts.tags.map((tag, index) => (
                                <span className='px-1 hover:text-blue-900' key={index}>#{tag}</span>
                            ))}
                        </div>
                            

                        </div>
                        
                })
            )
            
        }
      
    </div>
  )
}

export default BlogPost
