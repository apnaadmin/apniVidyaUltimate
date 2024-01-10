import Image from 'next/image';

const Banner = () => {

    return (
        <div id="home-section" className='bg-lightkblue'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-evenly'>
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M27.5 13.85V15C27.4985 17.6955 26.6256 20.3183 25.0117 22.4772C23.3977 24.6362 21.1291 26.2156 18.5442 26.9798C15.9593 27.7441 13.1966 27.6523 10.6681 26.7182C8.1396 25.784 5.98082 24.0576 4.5137 21.7963C3.04658 19.535 2.34974 16.86 2.5271 14.1703C2.70445 11.4807 3.74651 8.92036 5.49785 6.87129C7.24919 4.82223 9.61598 3.39418 12.2452 2.80014C14.8745 2.20609 17.6253 2.47787 20.0875 3.57495" stroke="#1CBEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.5 5L15 17.5125L11.25 13.7625" stroke="#1CBEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>                        
                        </div>
                        <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>


                        Find The Perfect Teacher For You
                        </h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>Be the best by learning from the best, elevate your career to new heights of success, paving the way for a brighter future.</h3>


                        <div className='flex items-center justify-between pt-10 lg:pt-4'>
                            <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M27.5 13.85V15C27.4985 17.6955 26.6256 20.3183 25.0117 22.4772C23.3977 24.6362 21.1291 26.2156 18.5442 26.9798C15.9593 27.7441 13.1966 27.6523 10.6681 26.7182C8.1396 25.784 5.98082 24.0576 4.5137 21.7963C3.04658 19.535 2.34974 16.86 2.5271 14.1703C2.70445 11.4807 3.74651 8.92036 5.49785 6.87129C7.24919 4.82223 9.61598 3.39418 12.2452 2.80014C14.8745 2.20609 17.6253 2.47787 20.0875 3.57495" stroke="#1CBEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.5 5L15 17.5125L11.25 13.7625" stroke="#1CBEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>                          <p className='text-sm sm:text-lg font-normal text-black'>A+ Communication Skills</p>
                            </div>
                            <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M27.5 13.85V15C27.4985 17.6955 26.6256 20.3183 25.0117 22.4772C23.3977 24.6362 21.1291 26.2156 18.5442 26.9798C15.9593 27.7441 13.1966 27.6523 10.6681 26.7182C8.1396 25.784 5.98082 24.0576 4.5137 21.7963C3.04658 19.535 2.34974 16.86 2.5271 14.1703C2.70445 11.4807 3.74651 8.92036 5.49785 6.87129C7.24919 4.82223 9.61598 3.39418 12.2452 2.80014C14.8745 2.20609 17.6253 2.47787 20.0875 3.57495" stroke="#1CBEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.5 5L15 17.5125L11.25 13.7625" stroke="#1CBEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>                         <p className='text-sm sm:text-lg font-normal text-black'>In-depth Knowledge</p>
                            </div>
                            <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M27.5 13.85V15C27.4985 17.6955 26.6256 20.3183 25.0117 22.4772C23.3977 24.6362 21.1291 26.2156 18.5442 26.9798C15.9593 27.7441 13.1966 27.6523 10.6681 26.7182C8.1396 25.784 5.98082 24.0576 4.5137 21.7963C3.04658 19.535 2.34974 16.86 2.5271 14.1703C2.70445 11.4807 3.74651 8.92036 5.49785 6.87129C7.24919 4.82223 9.61598 3.39418 12.2452 2.80014C14.8745 2.20609 17.6253 2.47787 20.0875 3.57495" stroke="#1CBEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.5 5L15 17.5125L11.25 13.7625" stroke="#1CBEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>                       <p className='text-sm sm:text-lg font-normal text-black'>1+ year experience</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-6 flex justify-center'>
                        <Image src="/assets/banner/mahila.png" alt="nothing" width={1000} height={805} />
                    </div>
                </div>
            </div>

        </div>

        
    )
}

export default Banner;
