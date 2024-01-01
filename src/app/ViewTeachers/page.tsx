import React from 'react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getAllUsers } from '@/src/actions/user.action'
const page = async() => {
    try{
    const result = await getAllUsers()
    console.log(result);
    return (
      <>
        {result.map((item, index) => (
          <div key={item.id}>
          <Card>
  <CardHeader>
    <CardTitle><Image
      src={item.pic}
      alt=""
      width={10}
      height={10}
      className=""
    
    /></CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
          </div>
        ))}
      </>
    );
    }
    catch(error)
    {
        console.log(error);
    }
  
  
  
}

export default page