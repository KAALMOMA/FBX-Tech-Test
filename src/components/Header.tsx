'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Header() {
  const { user, isLoading } = useUser();

  return (
    <>
      <div className="navigation">
        <div className="logo-area">
          <Link href="/">
            <Image 
              className="fbx-logo" 
              src="/images/fbx-logo-small.png" 
              alt="FBX Logo"
              width={50}
              height={40}
            />
          </Link>
        </div>
        <div className="button-area">
          <Link className="button" href="/about">About</Link>

          <div className="button dropdown">
            <div className="shop">Shop</div>
            <div className="dropdown-content">
              <Link href="#">Robotics Kits</Link>
              <Link href="#">3D Printers</Link>
              <Link href="#">Parts</Link>
            </div>
          </div>

          <div className="button dropdown">
            <Link className="shop" href="/learn">Learn</Link>
            <div className="dropdown-content">
              <Link href="#">Robotics</Link>
              <Link href="#">3D Printing</Link>
            </div>
          </div>

          <Link className="button" href="/enterprise">Enterprise</Link>

          <div className="button dropdown">
            <div className="shop">Contact</div>
            <div className="dropdown-content">
              <Link href="/contact/general">General Inquiries</Link>
              <Link href="/contact/enterprise">Enterprise Inquiries</Link>
            </div>
          </div>

          {user && (
            <Link className="button" href="/dashboard">Dashboard</Link>
          )}
        </div>

        <div className="sign-in-area">
          {!isLoading && (
            <div className="button-special">
              {user ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm">{user.name || user.email}</span>
                  <Link href="/api/auth/logout" className="text-white hover:text-gray-200">
                    Sign Out
                  </Link>
                </div>
              ) : (
                <Link href="/api/auth/login" className="text-white hover:text-gray-200">
                  Sign In
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="color-div-bar"></div>
    </>
  );
} 