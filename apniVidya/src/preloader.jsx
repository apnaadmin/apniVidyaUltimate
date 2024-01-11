"use client"
import { useEffect } from "react";
import {preLoaderAnim} from '@/app/utils/anime'

export default function Preloader()
{
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
   <span>Please</span>
   <span>pay</span>
   <span>the</span>

   <span>developer</span>

   <span>fees</span>

      </div>
    </div>
  );
};