
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Trophy, 
  BarChart, 
  Settings,
  BookOpen,
  MessageSquare,
  Bell,
  HelpCircle,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  badge?: {
    count: number;
    color: string;
  };
}

const NavItem: React.FC<NavItemProps> = ({ to, icon: Icon, label, badge }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
        ${isActive 
          ? 'bg-jeel-blue/10 text-jeel-blue font-medium' 
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
        }
      `}
    >
      <Icon size={20} />
      <span>{label}</span>
      {badge && (
        <div className={`ml-auto px-2 py-0.5 rounded-full text-xs font-medium ${badge.color}`}>
          {badge.count}
        </div>
      )}
    </NavLink>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const isMobile = useIsMobile();
  
  // Calculate classes for the sidebar
  const sidebarClasses = `
    fixed top-0 left-0 h-full bg-white dark:bg-gray-900 border-r border-gray-200 
    dark:border-gray-800 transition-all duration-300 ease-in-out z-20 overflow-y-auto
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    ${isMobile ? 'w-64' : 'w-64 lg:w-72'}
  `;
  
  // Calculate classes for the overlay
  const overlayClasses = `
    fixed inset-0 bg-black/50 transition-opacity duration-300 z-10
    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
  `;
  
  return (
    <>
      {/* Sidebar overlay - only shown on mobile when sidebar is open */}
      {isMobile && <div className={overlayClasses} onClick={onClose} />}
      
      {/* Sidebar */}
      <aside className={sidebarClasses}>
        <div className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gradient-to-br from-jeel-blue to-jeel-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <span className="font-bold text-lg">JeelQuest</span>
          </div>
          {isMobile && (
            <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <X size={20} />
            </button>
          )}
        </div>
        
        <div className="p-4">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-jeel-purple/20 flex items-center justify-center">
                <span className="text-jeel-purple font-medium">AK</span>
              </div>
              <div>
                <p className="font-medium">Alex Kim</p>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Level 7</span>
                  <div className="h-4 w-4 rounded-full bg-jeel-green/20 flex items-center justify-center">
                    <span className="text-[10px] font-medium text-jeel-green">7</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs text-gray-500 dark:text-gray-400">XP Progress</span>
                <span className="text-xs font-medium">1,240 / 1,500</span>
              </div>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-jeel-blue to-jeel-purple rounded-full transition-all duration-500"
                  style={{ width: '82%' }}
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <div className="flex-1 bg-jeel-purple/10 rounded-lg p-2 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">Badges</p>
                <p className="font-medium text-jeel-purple">12</p>
              </div>
              <div className="flex-1 bg-jeel-blue/10 rounded-lg p-2 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">Rank</p>
                <p className="font-medium text-jeel-blue">#32</p>
              </div>
              <div className="flex-1 bg-jeel-green/10 rounded-lg p-2 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">Streak</p>
                <p className="font-medium text-jeel-green">5d</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-1">
            <NavItem to="/dashboard" icon={LayoutDashboard} label="Dashboard" />
            <NavItem 
              to="/students" 
              icon={Users} 
              label="Students" 
              badge={{ count: 3, color: 'bg-jeel-blue/20 text-jeel-blue' }} 
            />
            <NavItem to="/courses" icon={BookOpen} label="Courses" />
            <NavItem 
              to="/events" 
              icon={Calendar} 
              label="Events" 
              badge={{ count: 2, color: 'bg-jeel-orange/20 text-jeel-orange' }} 
            />
            <NavItem to="/achievements" icon={Trophy} label="Achievements" />
            <NavItem to="/analytics" icon={BarChart} label="Analytics" />
            <NavItem to="/messages" icon={MessageSquare} label="Messages" />
            <NavItem to="/notifications" icon={Bell} label="Notifications" />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="space-y-1">
              <NavItem to="/settings" icon={Settings} label="Settings" />
              <NavItem to="/help" icon={HelpCircle} label="Help & Support" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
