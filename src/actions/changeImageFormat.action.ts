"use server"
import { writeFile } from "fs/promises";
import { join } from 'path'



export async function changeImage({data}) {
  try{
    
    const file: File | null = pic as unknown as File
    if (!file) {
      throw new Error('No file uploaded')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

   
    const path = join('/', 'tmp', file.name)
    await writeFile(path, buffer)
    console.log(`open ${path} to see the uploaded file`)

    return file
  }
  catch(error)
  {
    console.log(error);
  }
    
}