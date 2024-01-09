import Link from "next/link";
import Image from "next/image";

interface ProductType {
    id: number;
    section: string;
    link: string[];
}

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}


const products: any = [
    {
        id: 1,
        section: "Company",
        link: ['About', 'Careers'],
    },
    {
        id: 2,
        section: "Contact",
        link: ['Help/FAQ']
    }
    ,
    {
        id: 3,
        // section: "More",
        link: []
    }
]

const footer = () => {
    return (

        <div className="mx-auto max-w-2xl sm:pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">

                {/* COLUMN-1 */}

                <div className='sm:col-span-6 lg:col-span-5'>
                    <div className="flex flex-shrink-0 items-center border-right">
                        <Image src="/assets/apnividyalogo2.png" alt="logo" width={214} height={66} />
                    </div>
                    <h3 className='text-xs font-medium text-gunmetalgray lh-160 mt-5 mb-4 lg:mb-16'> Choose only the, best<br /> for you Child</h3>
                    <div className='flex gap-4'>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.82547 13.8316L2.80662 8.03257H0.339844V5.54726H2.80662V3.8904C2.80662 1.65429 4.18103 0.57666 6.16092 0.57666C7.10931 0.57666 7.9244 0.647798 8.16194 0.679593V3.01646L6.78878 3.01709C5.71201 3.01709 5.50352 3.5326 5.50352 4.28907V5.54726H8.56243L7.74017 8.03257H5.50351V13.8316H2.82547Z" fill="#2C090B"/>
</svg>
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7_50881)">
<path d="M12.548 2.11621H5.64098C3.73368 2.11621 2.1875 3.66239 2.1875 5.56969V12.4767C2.1875 14.384 3.73368 15.9301 5.64098 15.9301H12.548C14.4553 15.9301 16.0014 14.384 16.0014 12.4767V5.56969C16.0014 3.66239 14.4553 2.11621 12.548 2.11621Z" stroke="black" stroke-width="1.84186" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.8551 8.588C11.9403 9.16283 11.8421 9.74991 11.5745 10.2657C11.3068 10.7815 10.8834 11.1998 10.3643 11.4611C9.84522 11.7223 9.25698 11.8133 8.68324 11.721C8.10951 11.6286 7.57949 11.3578 7.16858 10.9468C6.75767 10.5359 6.48679 10.0059 6.39447 9.43218C6.30214 8.85845 6.39308 8.27021 6.65435 7.75114C6.91561 7.23207 7.3339 6.80859 7.84971 6.54095C8.36552 6.2733 8.95259 6.17512 9.52742 6.26036C10.1138 6.3473 10.6566 6.62053 11.0758 7.03967C11.4949 7.45882 11.7681 8.00166 11.8551 8.588Z" stroke="black" stroke-width="1.84186" stroke-linecap="round" stroke-linejoin="round"/>
<ellipse cx="12.8915" cy="5.22452" rx="1.03605" ry="1.03605" fill="#2C090B"/>
</g>
<defs>
<clipPath id="clip0_7_50881">
<rect width="16.5767" height="16.5767" fill="white" transform="translate(0.804688 0.734863)"/>
</clipPath>
</defs>
</svg>

<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.8749 1.66135C13.3815 1.90988 12.8882 1.99273 12.3126 2.07557C12.8882 1.7442 13.2993 1.24714 13.4638 0.584388C12.9704 0.915762 12.3948 1.08145 11.737 1.24714C11.2437 0.750075 10.5036 0.418701 9.76359 0.418701C8.36575 0.418701 7.13236 1.66135 7.13236 3.15253C7.13236 3.40106 7.13236 3.56675 7.21459 3.73244C4.99449 3.64959 2.93885 2.57263 1.62323 0.915762C1.37656 1.32998 1.29433 1.7442 1.29433 2.3241C1.29433 3.23538 1.78769 4.06381 2.52772 4.56087C2.11659 4.56087 1.70546 4.39518 1.29433 4.2295C1.29433 5.55499 2.19881 6.63196 3.4322 6.88049C3.18552 6.96333 2.93885 6.96333 2.69217 6.96333C2.52772 6.96333 2.36327 6.96333 2.19881 6.88049C2.52772 7.95745 3.51443 8.78589 4.74782 8.78589C3.84333 9.53148 2.69217 9.94569 1.37656 9.94569C1.12988 9.94569 0.965427 9.94569 0.71875 9.94569C1.95214 10.6913 3.34998 11.1883 4.83004 11.1883C9.76359 11.1883 12.477 7.04617 12.477 3.48391C12.477 3.40106 12.477 3.23538 12.477 3.15253C13.0526 2.73832 13.546 2.24126 13.8749 1.66135Z" fill="#2C090B"/>
</svg>


                    </div>
                </div>

                {/* CLOUMN-2/3/4 */}


                {products.map((product:any) => (
                    <div key={product.id} className="sm:col-span-2">
                        <p className="text-black text-lg font-medium mb-9">{product.section}</p>
                        <ul>
                            {product.link.map((link: string, index: number) => (
                                <li key={index} className='mb-5'>
                                    <Link href="/" className="text-darkgray text-base font-normal mb-6 space-links">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>

            {/* All Rights Reserved */}

            <div className='py-10 md:flex items-center justify-between border-t border-t-gray-blue'>
                <h4 className='text-dark-red opacity-75 text-sm text-center md:text-start font-normal'>@2023.ApniVidya.All rights reserved</h4>
                <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
                    <h4 className='text-dark-red opacity-75 text-sm font-normal'><Link href="/" target="_blank">Privacy policy</Link></h4>
                    <div className="h-5 bg-dark-red opacity-25 w-0.5"></div>
                    <h4 className='text-dark-red opacity-75 text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4>
                </div>
            </div>
        </div>
    )
}

export default footer;
