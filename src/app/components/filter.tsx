"use client"
import {useState} from 'react';
import { Button } from 'shad/button';
import { useSearchParams,useRouter } from 'next/navigation';
import { formUrl } from '@/lib/utils';

type Props = {
  FilterData: Array<{ name: string,value:string }>;
};

function Filter() {
    const FilterData=[
        {
          name:"Tripura"
        },
        {
          name:"West Bengal"
        },
    ]
  const router = useRouter()
  const searchParams = useSearchParams()
  const [active, setActive] = useState('');
  const handleTypeClick = (item:string)=>
  {
    if(active === item){
      setActive("")
      const newUrl = formUrl({
        params:searchParams.toString(),
        key:'state',
        value:null
        
      })
      router.push(newUrl, {scroll:false})
    }
    else{
      setActive(item)
    
      
        const newUrl = formUrl({
          params:searchParams.toString(),
          key:'state',
          value:item.toLocaleLowerCase()
          
        })
         router.push(newUrl, {scroll:false})
    
  }
}
  
  return (
    <>
      <div className="flex gap-5 mt-12 max-sm:hidden ">
        {FilterData.map((item, index) => (
          <Button key={index} className='px-3 py-3' onClickCapture={()=> handleTypeClick(item.name)}>
            {item.name}
          </Button>
        ))}
      </div>
    </>
  );
}

export default Filter;
