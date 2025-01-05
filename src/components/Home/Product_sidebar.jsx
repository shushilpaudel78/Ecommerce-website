import React from 'react'
import {Link} from 'react-router-dom'

const Product_sidebar = () => {
  return (
    <>
    <div className="w-full h-auto">

        <ul className='flex flex-col gap-4 font-poppins font-normal text-[16px] text-textBlue sm:text-[14px] sm:gap-[18px]'>
            
            <li> <Link>Woman Fashion</Link> </li>
            <li> <Link>linMan Fashion link</Link> </li>
            <li><Link>Electronics </Link> </li>
            <li> <Link>Home &  Life style</Link></li>
            <li> <Link>Medicine</Link></li>
            <li> <Link>Sports & Outdoor</Link></li>
            <li><Link>Baby & Toys </Link></li>
            <li><Link>Groceries and Pets </Link></li>
            <li> <Link>Health & Beauty</Link></li>

        </ul>

    </div>




      
    </>
  )
}

export default Product_sidebar
