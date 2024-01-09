"use client"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "shad/select"
  import {useState,useEffect} from 'react'
  import { formUrl } from "@/lib/utils";
import { useSearchParams,useRouter } from "next/navigation";
  

  type Props = {
    FilterData: Array<{ name: string }>;
  };
  const FilterScreen = () => {

    const FilterData=[
      {
        name:"Tripura"
      },
      {
        name:"West Bengal"
      }
    ]
    const router = useRouter()
    const searchParams = useSearchParams()
    const [active, setActive] = useState('');
    const [filter,setFilter] = useState('')
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
        <div className="max-sm:w-screen mx-3 relative z-10 mb-3 ">
        <Select  onValueChange={(value) => handleTypeClick(value)} defaultValue="Tripura" >
         
        <SelectTrigger className="max-sm:w-screen mx-auto text-black">
          <SelectValue placeholder="Select value" />
        </SelectTrigger>
        <SelectContent className=" mb-96" >
          {
            FilterData.map((item,index)=>
            (
                <SelectItem key={index} value={item.name}>{item.name}   </SelectItem>
            ))
          }
        </SelectContent>
       
       
      </Select>
      </div>
    )
  }
 export default FilterScreen