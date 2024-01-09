import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import Image from 'next/image';
import Theme from '../Theme';
interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    // { name: 'Courses', href: '#courses', current: false },
    { name: 'ViewTeachers', href: '/ViewTeachers', current: false },
    { name: 'Register', href:'/Register', current: false },
    // { name: 'Testimonial', href: '#testimonial', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}
const CustomLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
    // Check if the link is an anchor link (starts with '#') or an external link
    const isInternalLink = href.startsWith('/') || href.startsWith('#');

    if (isInternalLink) {
        return (
            <Link href={href} passHref>
                <span
                    onClick={onClick}
                    className="px-3 py-4 text-lg font-normal cursor-pointer"
                >
                    {children}
                </span>
            </Link>
        );
    } else {
        // External link, use a regular anchor tag
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="px-3 py-4 text-lg font-normal cursor-pointer">
                {children}
            </a>
        );
    }
};


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const [currentLink, setCurrentLink] = useState('/');

    const handleLinkClick = (href: string) => {
        setCurrentLink(href);
    };

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8 mb-20 ">
                    <div className="relative flex h-12 md:h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                            {/* LOGO */}

                            <div className="flex items-center">
                                
                              <Image src="/_next/image?url=%2Fassets%2Fapnividyalogo2.png&w=256&q=100" alt="ApniVisdya" height={150} width={300}/>
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:block m-auto">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <CustomLink
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => handleLinkClick(item.href)}
                                        >
                                            <span
                                                className={classNames(
                                                    item.href === currentLink ? 'underline-links' : 'text-slategray',
                                                    'px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100'
                                                )}
                                                aria-current={item.href ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </span>
                                        </CustomLink>

                                    ))}
                                    <Theme/>
                                </div>
                            </div>
                        </div>

                        {/* SIGNIN DIALOG */}

                        {/* <Signdialog /> */}


                        {/* REGISTER DIALOG */}

                        {/* <Registerdialog /> */}


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>


                    </div>
                </div>
            </>
        </Disclosure>
    );
};

export default Navbar;
