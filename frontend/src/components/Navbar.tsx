
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, Settings, User, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavbarProps {
  toggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, isSidebarOpen }) => {
  const isMobile = useIsMobile();
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  
  return (
    <nav className="w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 px-4 py-3 transition-all duration-300 z-10">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center">
          {isMobile && toggleSidebar && (
            <button
              onClick={toggleSidebar}
              className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
          
          <Link to="/" className="flex items-center gap-2 mr-6">
            <div className="relative">
              <div className="h-8 w-8 bg-gradient-to-br from-jeel-blue to-jeel-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-jeel-green rounded-full animate-ping opacity-75"></div>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-jeel-green rounded-full"></div>
            </div>
            {!isMobile && <span className="font-bold text-lg">JeelQuest</span>}
          </Link>
          
          {!isMobile && (
            <div className="relative max-w-md w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
              <input
                type="search"
                placeholder="Search for students, events, or badges..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-jeel-blue dark:focus:ring-jeel-purple transition-all"
              />
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-1 md:gap-2">
          {isMobile && (
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Search size={20} />
            </button>
          )}
          
          <div className="relative">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            >
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-jeel-orange"></span>
            </button>
            
            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 py-2 z-10 animate-fade-in">
                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-800">
                  <h3 className="font-medium">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 border-l-2 border-jeel-orange cursor-pointer transition-colors">
                    <p className="text-sm font-medium">New Challenge Available</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Complete the "Week of Learning" challenge to earn 500 XP</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">10 mins ago</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                    <p className="text-sm font-medium">You earned a new badge!</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Early Bird: Log in for 5 consecutive days</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">2 hours ago</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                    <p className="text-sm font-medium">Friend Request</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Alex Kim wants to connect with you</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">1 day ago</p>
                  </div>
                </div>
                <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-800">
                  <button className="text-sm text-jeel-blue dark:text-jeel-purple hover:underline w-full text-center">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Settings size={20} />
          </button>
          
          <div className="relative ml-2">
            <button 
              className="flex items-center gap-2 py-1 pl-1 pr-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="h-8 w-8 rounded-full bg-jeel-purple/20 flex items-center justify-center overflow-hidden">
                <User size={20} className="text-jeel-purple" />
              </div>
              {!isMobile && (
                <>
                  <div className="text-left">
                    <p className="text-sm font-medium leading-none">Alex Kim</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Level 7</p>
                  </div>
                  <div className="h-5 px-2 rounded-full bg-jeel-purple/10 flex items-center">
                    <span className="text-xs font-medium text-jeel-purple">1,240 XP</span>
                  </div>
                </>
              )}
            </button>
            
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 py-2 z-10 animate-fade-in">
                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-jeel-purple/20 flex items-center justify-center">
                      <User size={24} className="text-jeel-purple" />
                    </div>
                    <div>
                      <p className="font-medium">Alex Kim</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">alex.kim@university.edu</p>
                    </div>
                  </div>
                </div>
                <div className="py-1">
                  <Link to="/profile" className="px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 flex w-full text-left transition-colors">
                    Your Profile
                  </Link>
                  <Link to="/achievements" className="px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 flex w-full text-left transition-colors">
                    Achievements
                  </Link>
                  <Link to="/settings" className="px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 flex w-full text-left transition-colors">
                    Settings
                  </Link>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800 py-1">
                  <Link to="/login" className="px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 flex w-full text-left text-red-600 dark:text-red-400 transition-colors">
                    Sign out
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
