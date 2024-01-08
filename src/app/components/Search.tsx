"use client"
import React from 'react';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { formUrl, removeKeysFromQuery } from '@/lib/utils';
import { useTheme } from './Providers/ThemeContext';

type Props = {
  route: string;
  iconPosition: string;
  placeholder: string;
  otherClasses: string;
};

const Search = ({
  route,
  iconPosition,
  placeholder,
  otherClasses,
}: Props) => {
    const {mode} = useTheme()
  
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get('name');
  const [search, setSearch] = useState(query || '');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        const newUrl = formUrl({
          params: searchParams.toString(),
          key: 'name',
          value: search,
        });
        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ['name'],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [search, route, pathname, router, searchParams, query]);

  return (


   
      <div
        className={`relative flex items-center border rounded-md px-4 py-2 mb-10 ${
          mode === 'light' ? 'bg-white' : 'bg-gray-800'
        } ${otherClasses}`}
        style={{ width: '300px' }}
      >
        {iconPosition === 'left' && (
          <div className="mr-2">
            <Image
              src={mode === 'light' ? '/search.svg' : '/search-white.png'}
              alt="Search icon"
              width={20}
              height={20}
              className="cursor-pointer dark:text-white dark:bg-black"
            />
          </div>
        )}
  
        <div className="relative flex items-center w-full">
          <input
            type="text"
            className="flex-grow border-none outline-none text-sm text-black dark:text-black placeholder-gray-400 dark:placeholder-gray-300 p-2 rounded-md focus:ring focus:ring-blue-300 transition-all duration-300"
            placeholder={placeholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <button
              type="submit"
              className="p-2 focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-300 rounded-full bg-blue-500 hover:bg-blue-600"
            >
              <Image src={'/assets/banner/search.svg'} alt="inputicon" width={20} height={20} />
            </button>
          </div>
        </div>
  
        {iconPosition === 'right' && (
          <div className="ml-2">
            <Image
              src="/search.svg"
              alt="Search icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        )}
      </div>
    );
  
};

export default Search;
