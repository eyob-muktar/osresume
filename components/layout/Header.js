import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useMediaQuery } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Header component using <SignedIn> & <SignedOut>.
//
// The SignedIn and SignedOut components are used to control rendering depending
// on whether or not a visitor is signed in.
//
// https://docs.clerk.dev/frontend/react/signedin-and-signedout

const Header = ({ route }) => {
  const mobile = useMediaQuery('(max-width:400px)');
  return (
    <header className={`shadow-sm ${route === '/' ? 'bg-transparent' : ''}`}>
      <div className="max-w-screen-xl mx-auto flex justify-between py-4 px-2 sm:p-4">
        <div className="flex align-center items-center">
          <Link href="/" className="flex items-center">
            {!mobile && <Image src="/icon-192x192.png" className="h-8 w-8" width={32} height={32} alt="Logo" />}
            <span className="text-default font-semibold text-sm lg:text-base ml-3">OS Resume</span>
          </Link>
        </div>
        <div className="flex align-center items-center">
          <SignedOut>
            <Link className="mr-5" href="/sign-up">
              <p className="cursor-pointer rounded-full px-3 py-2 bg-primary text-white font-normal">Sign Up</p>
            </Link>
            <Link href="/sign-in">
              <p className="text-default cursor-pointer rounded-full px-2.5 py-1.5 border-opacity-50 border-primary border-2 text-primary font-normal">
                Sign In
              </p>
            </Link>
          </SignedOut>
          <SignedIn className="ml-4">
            <Link href="/templates">
              <p className="text-default text-xs md:text-sm cursor-pointer lg:px-4">Templates</p>
            </Link>
            <Link href="/dashboard">
              <p className="text-default text-xs md:text-sm cursor-pointer lg:px-4">Dashboard</p>
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
