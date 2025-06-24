'use client';

import { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Dashboard() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/api/auth/login');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (user) {
      document.body.classList.add('fade-in');
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-inter">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <>
      {/* Animated Background */}
      <div id="box"></div>

      <div className="home-desktop-1440-px">
        <Header />
        
        {/* Hero Stack */}
        <div className="stack-11" style={{ padding: '130px 30px 90px 30px' }}>
          <div className="hero-text">
            <div className="hero-main">Welcome, {user.name || user.email}!</div>
            <div className="hero-sub">
              This is your personalized dashboard where you can manage your account and access exclusive content.
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="stack-5">
          <div className="dashboard-content">
            <div className="user-info">
              <h2 className="text-2xl font-inter font-bold mb-4">Your Profile</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <strong>Name:</strong> {user.name || 'Not provided'}
                </div>
                <div className="mb-4">
                  <strong>Email:</strong> {user.email}
                </div>
                <div className="mb-4">
                  <strong>Email Verified:</strong> {user.email_verified ? 'Yes' : 'No'}
                </div>
                {user.picture && (
                  <div className="mb-4">
                    <strong>Profile Picture:</strong>
                    <img 
                      src={user.picture} 
                      alt="Profile" 
                      className="w-16 h-16 rounded-full mt-2"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="dashboard-actions mt-8">
              <h2 className="text-2xl font-inter font-bold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-inter font-semibold mb-2">My Orders</h3>
                  <p className="text-gray-custom mb-4">View and track your recent orders</p>
                  <button className="button-special2">View Orders</button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-inter font-semibold mb-2">Learning Progress</h3>
                  <p className="text-gray-custom mb-4">Track your STEM learning journey</p>
                  <button className="button-special2">View Progress</button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-inter font-semibold mb-2">Support</h3>
                  <p className="text-gray-custom mb-4">Get help with your products</p>
                  <button className="button-special2">Contact Support</button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-inter font-semibold mb-2">Account Settings</h3>
                  <p className="text-gray-custom mb-4">Manage your account preferences</p>
                  <button className="button-special2">Settings</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
} 