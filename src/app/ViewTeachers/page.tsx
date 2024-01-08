import React from 'react'

import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { getAllUsers } from '@/src/actions/user.action'

import Search from '../components/Search'
import { useSearchParams,useRouter,usePathname } from 'next/navigation'
import MaxWidthWrapper from '../components/MaxWidthWrapper';
const page = async({searchParams}:any) => {
    try{
  
    const result = await getAllUsers({
      searchQuery: searchParams.name,
    })
    console.log(result);
    return (
      <>
      
       
          <>
            {result.map((item, index) => (
              <>
              <MaxWidthWrapper>
              <div key={index}>
                 <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
       
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="https://files.edgestore.dev/xv88212va5vg843u/myImages/_public/151d9b78-01ee-47ff-b2f1-b5553ac6d271.jpg"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Available soon.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
  </div>
              </div>
              </MaxWidthWrapper>
              </>
            ))}
          </>
        );
     
       
      </>
      
    );
    
    }
    catch(error)
    {
        console.log(error);
    }
  
  
  
}

export default page