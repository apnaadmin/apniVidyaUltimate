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
import { Button } from '@/components/ui/button'
const page = async() => {
    try{
    const result = await getAllUsers()
    console.log(result);
    return (
      <>
        {result.map((item, index) => (
          <div key={item._id.$oid} className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300 mb-4 ">
            <div className="relative">
            <Image
              src={item.pic}
              alt={item.name}
              width={100}
              height={100}
              className=""
             
            />
            </div>
            <div className="px-6 py-4">
              <h2 className="text-3xl font-bold mb-2 text-gray-800">{item.name}</h2>
              <p className="text-gray-600 text-base">{item.bio}</p>
            </div>
            <div className="px-6 py-2">
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Email:</span> {item.email}
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Experience:</span> {item.experience}
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Subject:</span> {item.subject}
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Location:</span> {item.location}
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Contact:</span> {item.number}
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none">
                View Details
              </button>
            </div>
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