"use client"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createUser } from "@/src/actions/user.action"
import { useRouter,usePathname } from 'next/navigation'
import { useEdgeStore } from "@/src/lib/edgestore"
import MakePaymentComponent from '@/src/app/components/MakePayment'
import Script from "next/script"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  bio:z.string().min(10, {
    message: "Bio must be atleast 10 words",
  }),
  experience:z.string(),
  location:z.string(),
  mode:z.string(),
  email: z.string().email({
    message: "Invalid email address",
  }),
  number:z.string().min(2, {
    message: "Phone number must consist of atleast 10 digits",
  }).max(10, {
    message: "Phone number cannot exceed 10 digits",
  }),
  subject: z.string(),
})

export default function TeacherForm() {

  const edgestore = useEdgeStore()
  const router = useRouter()
  const path = usePathname()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
         name:"Anurag Bhandari",
         bio:"I am a very good guy",
         experience:"BTech NITA",
         email:"anuragbhandari77736@gmail.com",
         location:"Agartala",
         number:"1234567890",
         mode:"Offline",
         subject:"Technology", 
        },
      })
      const makePayment = async () => {
        try {
          const key = process.env.RAZORPAY_API_KEY;
          const secret = process.env.RAZORPAY_API_SECRET;
          const data = await fetch("http://localhost:3000/api/razorpay");
          const { order } = await data.json();
          console.log(order);
          const options = {
            key: key,
            name: "apniVidya",
            currency:order.currency,
            amount:order.amount,
            order_id:order.id,
            description: "Understanding RazorPay Integration",
            // image: logoBase64,
            handler: async function (response: any) {
              console.log(response);
      
              const data = await fetch("http://localhost:3000/api/paymentverify", {
                method: "POST",
                // headers: {
                //   Authorization: 'YOUR_AUTH_HERE'
                // },
                body: JSON.stringify({
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              });
      
              const res = await data.json();
      
              console.log("response verify==", res);
      
              if (res?.message == "success") {
                console.log("ok");
              }},

              prefill: {
                name: "apnividya",
                email: "apni@gmail.com",
                contact: "000000000",
              },

              
            
          };
          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
      
          paymentObject.on("payment.failed", function (response:any) {
            alert("Payment failed. Please try again. Contact support for help");
          });
          
        } catch (error) {
          console.log(error);
        }
      };
      
      const onSubmit = async (data: any) => {
        try {
          const formData = new FormData();
          Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
          });
      
          const file = (document.getElementById('picture') as HTMLInputElement)?.files?.[0];
          if (file) {
            const res = await edgestore.edgestore.myImages.upload({ file });
            console.log(res.url);
            console.log(res.thumbnailUrl);
            const picture = await res.url;
            const updatedData = { ...data, pic: picture };
            const { name, bio, location, email, subject, experience, number, pic } = updatedData;
            await createUser({
              bio,
              email,
              experience,
              location,
              name,
              number,
              pic,
              subject,
              path
            });
            router.push("/")
          }
        } catch (error) {
          console.error(error);
        }
      };
 

  return (
    <>
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-10" >
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Display Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your display name" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="bio"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bio</FormLabel>
            <FormControl>
            <Textarea
                  placeholder=" Write a SEO-friendly description along with your name, qualification, class, subject, experience, location, mode of teaching, etc."
                  className="resize-none"
                  {...field}
                />
            </FormControl>
            <FormDescription>
             
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="experience"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Qualifications</FormLabel>
            <FormControl>
              <Input placeholder="Enter your qualifications" {...field} />
            </FormControl>
            <FormDescription>
              Enter your qualifications in the format (e.g., B.A English Hons., 2 Years Experience).
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="Enter your location" {...field} />
            </FormControl>
            <FormDescription>
              Specify the location where you want to teach. Include this in the description box for SEO.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="number"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Mobile Number</FormLabel>
            <FormControl>
              <Input placeholder="Enter your mobile number" {...field} />
            </FormControl>
            <FormDescription>
              Provide your mobile number. Note that this will be publicly visible on the website for students to contact you.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter your email address"  {...field} />
            </FormControl>
            <FormDescription>
              Provide your email address. Note that this will be publicly visible on the website for students to contact you.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
       <FormField
        control={form.control}
        name="pic"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Profile Pic</FormLabel>
            <FormControl>
              <Input id="picture" placeholder="Upload the picture" type="file" {...field} />
            </FormControl>
            <FormDescription>
            Provide a profile pic under 25 kb
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      /> 
       <FormField
          control={form.control}
          name="mode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mode</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your mode of preference" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Online">Online</SelectItem>
                  <SelectItem value="Offline">Offline</SelectItem>
                  <SelectItem value="Both">Both</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
              Select the subjects that you want to teach 
               
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                <SelectItem value="Language Arts / English">Language Arts / English</SelectItem>
<SelectItem value="Mathematics">Mathematics</SelectItem>
<SelectItem value="Science">Science</SelectItem>
<SelectItem value="Social Studies">Social Studies</SelectItem>
<SelectItem value="Foreign Languages">Foreign Languages</SelectItem>
<SelectItem value="Physical Education">Physical Education</SelectItem>
<SelectItem value="Arts">Arts</SelectItem>
<SelectItem value="Computer Science">Computer Science</SelectItem>
<SelectItem value="Technology">Technology</SelectItem>
<SelectItem value="Home Economics / Family and Consumer Sciences">Home Economics / Family and Consumer Sciences</SelectItem>
<SelectItem value="Career and Technical Education (CTE)">Career and Technical Education (CTE)</SelectItem>
<SelectItem value="Philosophy / Ethics">Philosophy / Ethics</SelectItem>
<SelectItem value="Psychology">Psychology</SelectItem>
<SelectItem value="Physical Sciences">Physical Sciences</SelectItem>
<SelectItem value="Health Education">Health Education</SelectItem>
<SelectItem value="Special Education">Special Education</SelectItem>
<SelectItem value="Library / Information Literacy">Library / Information Literacy</SelectItem>
<SelectItem value="Religious Studies / Theology">Religious Studies / Theology</SelectItem>
<SelectItem value="Critical Thinking / Logic">Critical Thinking / Logic</SelectItem>
<SelectItem value="Counseling / Guidance">Counseling / Guidance</SelectItem>
<SelectItem value="Business Education">Business Education</SelectItem>
<SelectItem value="Media Studies / Communication">Media Studies / Communication</SelectItem>
<SelectItem value="Agricultural Science">Agricultural Science</SelectItem>
<SelectItem value="Military Science (ROTC)">Military Science (ROTC)</SelectItem>
<SelectItem value="Legal Studies">Legal Studies</SelectItem>
<SelectItem value="Environmental Studies">Environmental Studies</SelectItem>
<SelectItem value="Gender Studies">Gender Studies</SelectItem>
<SelectItem value="Cultural Studies">Cultural Studies</SelectItem>
<SelectItem value="Humanities">Humanities</SelectItem>
<SelectItem value="Electives">Electives</SelectItem>


                </SelectContent>
              </Select>
              <FormDescription>
              Select the subjects that you want to teach 
               
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

      <Button type="submit">Submit</Button>
      
    </form>
  </Form>
  <button className="z-50" onClick={makePayment}>Make payment</button>
 

  </>
  )
}
