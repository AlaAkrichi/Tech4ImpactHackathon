import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { Hammer, Clock, Sparkles, MessageCircle } from 'lucide-react';

export const WaitingList = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handelDiscord= ()=>{
    
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="flex justify-center mb-6">
            <Hammer size={48} className="text-purple-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Coming Soon!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We're working hard to bring you something amazing. Stay tuned for updates as we build this feature!
          </p>
          <div className="flex justify-center items-center gap-4">
            <Clock size={24} className="text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Estimated Beta Launch: <strong>May 2025</strong>
            </span>
          </div>
          <div className="mt-6">
                 <div className="space-y-4">
                  
                  <a
                    href={import.meta.env.VITE_DISCORD_INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center hover:cursor-pointer gap-2 py-3 px-4 bg-[#5865F2] text-white rounded-lg font-medium hover:bg-[#5865F2]/90 focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:ring-offset-2 transition-all"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    Join the movement
                  </a>
                </div> 
          </div>
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            <Sparkles size={16} className="inline-block mr-1 text-purple-500" />
            Exciting features are on the way!
          </div>
        </div>
      </div>
    </div>
  );
};
