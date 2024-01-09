"use client"
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@nextui-org/react';

const ModalButton = ({name,bio,email,number,location}:any) => {

console.log(bio);
  return (
    <>
    <Dialog>
          <DialogTrigger asChild>
          <Button className='bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-green-600 focus:outline-none focus:shadow-outline' >View Details</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{name}</DialogTitle>
              <DialogDescription>
              Hello, I am Nayan Debnath. I am currently in MBB University completing my BA Honours Degree. I was a science student in HS+2 stage and my Speciality is Biology (Science)and English. I am currently interested to teach students who are in classes 5-10 in subjects Science or English. I heartily believe that senior students can better deal with students and make them clear about the concepts properly and I also appreciate the parents who choose APNI VIDYA. Location Tag: Agartala, Class Tag: Class 5, Class 6, Class 7, Class 8, Class 9, Class 1
              </DialogDescription>
            </DialogHeader>
            
            <DialogFooter>
            <div className='grid grid-cols-1 gap-2'>
  <div className=" p-4 rounded shadow">
    <p className="text-lg font-bold">Email: {email}</p>
  </div>
  <div className="p-4 rounded shadow">
    <p className="text-lg font-bold">Number: {number}</p>
  </div>
  <div className="p-4 rounded shadow">
    <p className="text-lg font-bold">Location: {location}</p>
  </div>
</div>

            </DialogFooter>
          </DialogContent>
        </Dialog>
    
    </>
  );
};

export default ModalButton;
