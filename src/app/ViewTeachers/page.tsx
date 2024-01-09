import React from 'react'
import Image from 'next/image'
import { MapPin,Brain,Microscope} from 'lucide-react'
import Filter from '../components/filter'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "shad/card"
import { getAllUsers } from '@/src/actions/user.action'
import { Button } from '@nextui-org/react'
import Search from '../components/Search'
import { useSearchParams,useRouter,usePathname } from 'next/navigation'
import ModalButton from '../components/ModalButton'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import FilterScreen from '../components/filterScreen'
const page = async({searchParams}:any) => {
    try{
  
    const result = await getAllUsers({
      searchQuery: searchParams.name,
      stateQuery:searchParams.state
    })
   
   
    
    return (
      <>
       <MaxWidthWrapper>
        <div className='flex flex-col justify-center items-center'>
            
            <div className='flex max-sm:flex-col sm:gap-5 items-center justify-center'>
                <div className=' '>
      <Search
  iconPosition='left'
  otherClasses='flex items-center justify-center mb-8'  
  placeholder='Search anything'
  route='/ViewTeachers'
/>
</div>
<div>

<FilterScreen/>
</div>
</div>

<div>
      {result.map((item, i) => (
  <div key={i}>
   

      <div className='bg-white m-3 px-3 pt-3 pb-2 my-20 shadow-courses rounded-2xl sm:grid sm:grid-cols-2 dark:bg-gray-300 '>
          <div className="relative rounded-3xl">
              <Image src="https://nextui.org/images/hero-card.jpeg" alt="gaby" width={238} height={12} className=" mt-3 border-2 rounded-lg border-gray-500 dark:bg-gray-600  "  />
          
              <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-6">
               
              </div>
          </div>

          <div className="px-3">
              <h4 className='text-2xl font-semibold pt-6 text-gray-700'>{item.name},</h4>
              <h4 className='text-lg  pt-1 text-gray-500'>{item.experience}</h4>
              
            
           
           
              <hr style={{ color: "#C4C4C4" }} />
              <div className='grid grid-cols-1 ml-3'>
              <div className="flex justify-between pt-6">
                  <div className="flex ">
                      <Image src={'/assets/courses/book-open.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                      <h3 className="text-base font-medium text-black opacity-75"><span className='text-blue-600 font-semibold'>Subject:</span>{item.subject}</h3>
                  </div>
                  
                  
               
              </div>
              <div className="flex justify-between pt-6">
                 
                  <div className="flex ">
                      <Image src={'/assets/courses/users.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                      <h3 className="text-base font-medium text-black opacity-75"><span className='text-blue-600 font-semibold'>Mode:</span>
                      {item.mode ? item.mode : "Offline"}
</h3>
                  </div>
                  
               
              </div>
              <div className="flex justify-between pt-6">
                 
                 <div className="flex ">
                     {/* <Image src={'/assets/courses/users.svg'} alt="users" width={24} height={24} className="inline-block m-auto" /> */}
                     <MapPin className="inline-block m-auto " />
                     <h3 className="text-base font-medium text-black opacity-75"> <span className='text-blue-600 font-semibold'>Location:</span>{item.location}</h3>
                 </div>
                 
              
             </div>
                <div className="flex justify-between pt-6">
                  <div className="flex ">
                      <Image src={'/assets/courses/book-open.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                      <h3 className="text-base font-medium text-black opacity-75"><span className='text-blue-600 font-semibold'>Contact:</span>{item.number}</h3>
                  </div>
                 
                  
               
              </div>
              <div className='flex flex-col items-center justify-center mt-2'>
               <ModalButton name={item.name} bio={item.bio} email={item.email} number={item.number} location={item.location}/>
              </div>
              </div>

      
          </div>
        
      </div>
      
  </div>


))}
</div>
</div>
</MaxWidthWrapper>
      </>
    );
    
    }
    catch(error)
    {
        console.log(error);
    }
  
  
  
}

export default page




// Bhavna Debnath

// 12+ 2nd Year, Fresher
// Subject: English
// Mode: Offline
// Location: East Jogendranagar Datta para