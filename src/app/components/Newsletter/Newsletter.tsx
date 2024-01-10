import Image from "next/image";

const Newsletter = () => {
    return (
        <>
            {/* <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl testimonialbg"> */}
            <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl">
                <div className="grid grid-cols-1 gap-x-6 md:grid-cols-12 xl:gap-x-8">

                    <div className="col-span-12 bg-imagee">
                        <div className="mb-10 mt-24 lg:mx-64 lg:my-24">
                            <h3 className="text-4xl md:text-55xl text-center font-semibold text-white mb-3">Contact Us.
</h3>
                            <h3 className="text-base font-normal opacity-75 text-white text-center mb-8">
                            Contact and reachout to our team,
 <br /> additional informations about our services.
                            </h3>

                            <div>
                            <h2 className="py-6 lg:py-5 text-sm md:text-lg w-full mx-1 text-black rounded-full pl-1 focus:outline-none focus:text-black bg-white text-center"><div class="flex items-center justify-center"><div class="bg-black rounded-full p-2 mr-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="text-white text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>Email us at support@apnividya.in</div></h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>


    )
}

export default Newsletter;