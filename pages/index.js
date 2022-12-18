import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillFacebook} from 'react-icons/ai'
import Image from 'next/image';
import naly from "../public/naly.png"
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>TheOne Portfolio</title>
        <meta name="description" content="Keep your dreams up" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className=" min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>theone</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/>
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium dark:text-teal-200'>KEV Chhunly</h2>
            <h3 className='text-2xl py-2 dark:text-white'>Cloud Infrastructure Engineer.</h3>
            <p className='text-md py-5 leading-4 text-gray-800 dark:text-gray-100'>System Infrastructure consulant. Join me down below and let&apos;s get cracking!</p>
          </div>
          <div className='text-5xl flex justify-center gap-8 py-3 text-gray-600 dark:text-white'>
            <a href="#" target="_blank"><AiFillTwitterCircle/></a>
            <a href="#" target="_blank"><AiFillLinkedin/></a>
            <a href="#" target="_blank"><AiFillYoutube/></a>
            <a href="#" target="_blank"><AiFillFacebook/></a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={naly} alt="NFT avatar" layout='fill' objectFit='cover'/>
          </div>
        </section>
      </main>
      </div>
  )
}
