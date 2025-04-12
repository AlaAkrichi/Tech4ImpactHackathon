import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, Settings, User, Menu, X, LogOut } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavbarProps {
  toggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

const Navbar = ({ toggleSidebar, isSidebarOpen }: NavbarProps) => {
  const isMobile = useIsMobile();
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Sidebar Toggle */}
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            
            {/* Logo */}
            <Link to="/" className="flex-2 flex items-center gap-2 mr-6">
              <div className="h-8 w-8 bg-gradient-to-br from-jeel-blue to-jeel-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <span className="text-xl font-bold">JeelQuest</span>
            </Link>
            
            {/* Search */}
            <div className="hidden md:block flex-1 max-w-lg ml-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
                <input
                  type="search"
                  placeholder="Search for students, events, or badges..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-jeel-blue focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
          
          {/* Right side icons */}
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            
            <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
              <Settings size={20} />
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-3 ml-4"
              >
                <div className="flex flex-col items-end">
                  <span className="font-medium">Alex Kim</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Level 7</span>
                </div>
                <div className="h-10 w-10 bg-jeel-purple/10 rounded-full flex items-center justify-center">
                  <span className="text-jeel-purple font-medium">AK</span>
                </div>
              </button>
              
              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                  <Link
                    to="/profile"
                    onClick={() => setIsProfileOpen(false)}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <User size={16} />
                    <span>Go to Profile</span>
                  </Link>
                  <button
                    onClick={() => {
                      // Add your logout logic here
                      console.log('Logging out...');
                      setIsProfileOpen(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-jeel-blue focus:border-transparent transition-all"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
