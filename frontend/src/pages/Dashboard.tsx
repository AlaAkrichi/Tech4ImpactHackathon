
import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  BookOpen, 
  TrendingUp, 
  Trophy, 
  Clock, 
  BarChart2,
  ChevronRight,
  Search,
  Filter,
  Sliders,
  ArrowRight,
  Plus,
  Bell
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import StatsCard from '@/components/StatsCard';
import ProgressBar from '@/components/ProgressBar';
import EventCard from '@/components/EventCard';
import AchievementBadge from '@/components/AchievementBadge';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
  const upcomingEvents = [
    {
      id: '1',
      title: 'Web Development Workshop',
      description: 'Learn the fundamentals of modern web development with React.js',
      date: 'Jun 12, 2023',
      time: '10:00 AM',
      location: 'Tech Building, Room 302',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop',
      category: {
        name: 'Workshop',
        color: '#3B82F6'
      },
      reward: {
        xp: 200
      },
      attendees: {
        count: 32,
        max: 40
      }
    },
    {
      id: '2',
      title: 'Introduction to Machine Learning',
      description: 'A comprehensive introduction to machine learning concepts and applications',
      date: 'Jun 15, 2023',
      time: '2:00 PM',
      location: 'Science Center, Hall A',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000&auto=format&fit=crop',
      category: {
        name: 'Lecture',
        color: '#8B5CF6'
      },
      reward: {
        xp: 150
      },
      attendees: {
        count: 56,
        max: 100
      }
    }
  ];
  
  const achievements = [
    {
      id: '1',
      name: 'Early Bird',
      description: 'Log in for 5 consecutive days',
      icon: <Clock size={24} />,
      color: '#3B82F6',
      earned: true,
      date: 'June 5, 2023'
    },
    {
      id: '2',
      name: 'Knowledge Seeker',
      description: 'Attend 3 academic events',
      icon: <BookOpen size={24} />,
      color: '#8B5CF6',
      earned: true,
      date: 'June 8, 2023'
    },
    {
      id: '3',
      name: 'Social Butterfly',
      description: 'Connect with 10 fellow students',
      icon: <Users size={24} />,
      color: '#10B981',
      earned: false,
      progress: {
        current: 7,
        total: 10
      }
    }
  ];
  
  const tasks = [
    {
      id: '1',
      title: 'Complete Web Development Assignment',
      dueDate: 'June 15, 2023',
      priority: 'High',
      completed: false,
      course: 'CS101',
      xp: 80
    },
    {
      id: '2',
      title: 'Review Calculus Chapter 4',
      dueDate: 'June 12, 2023',
      priority: 'Medium',
      completed: false,
      course: 'MATH202',
      xp: 50
    },
    {
      id: '3',
      title: 'Prepare Group Presentation',
      dueDate: 'June 18, 2023',
      priority: 'High',
      completed: false,
      course: 'BUS303',
      xp: 100
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'ml-0 md:ml-64 lg:ml-72' : 'ml-0'}`}>
        <div className="p-4 md:p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-1">Welcome back, Alex!</h1>
            <p className="text-gray-600 dark:text-gray-400">Here's what's happening with your educational journey today.</p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            <StatsCard 
              title="Active Students" 
              value="1,248" 
              icon={<Users size={20} />} 
              change={{ value: 12, isPositive: true }}
              color="#3B82F6"
            />
            <StatsCard 
              title="Total Events" 
              value="32" 
              icon={<Calendar size={20} />} 
              change={{ value: 8, isPositive: true }}
              color="#8B5CF6"
            />
            <StatsCard 
              title="Course Completion" 
              value="78%" 
              icon={<BookOpen size={20} />}
              color="#10B981"
            />
            <StatsCard 
              title="Average Engagement" 
              value="86%" 
              icon={<TrendingUp size={20} />} 
              change={{ value: 5, isPositive: true }}
              color="#F59E0B"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activity / Leaderboard Section */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
                <div className="border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Your Progress</h2>
                  <button className="text-sm text-jeel-blue dark:text-jeel-purple flex items-center gap-1 hover:underline">
                    View Details <ChevronRight size={16} />
                  </button>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                    <div className="p-4 bg-jeel-blue/10 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">XP Level</h3>
                        <span className="text-xs font-medium px-2 py-1 bg-jeel-blue/20 text-jeel-blue rounded-full">
                          Level 7
                        </span>
                      </div>
                      <p className="text-2xl font-bold mb-3 text-jeel-blue">1,240 XP</p>
                      <ProgressBar 
                        progress={82} 
                        color="bg-jeel-blue" 
                        height={5} 
                        showPercentage={false} 
                      />
                      <div className="flex justify-between mt-1 text-xs text-gray-600 dark:text-gray-400">
                        <span>Next Level: 1,500 XP</span>
                        <span>82%</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-jeel-purple/10 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Badges</h3>
                        <span className="text-xs font-medium px-2 py-1 bg-jeel-purple/20 text-jeel-purple rounded-full">
                          12 Total
                        </span>
                      </div>
                      <p className="text-2xl font-bold mb-3 text-jeel-purple">5 Recent</p>
                      <div className="flex -space-x-2">
                        <div className="h-8 w-8 rounded-full bg-jeel-blue/30 flex items-center justify-center text-white border-2 border-white dark:border-gray-800">
                          <Trophy size={14} />
                        </div>
                        <div className="h-8 w-8 rounded-full bg-jeel-purple/30 flex items-center justify-center text-white border-2 border-white dark:border-gray-800">
                          <BookOpen size={14} />
                        </div>
                        <div className="h-8 w-8 rounded-full bg-jeel-green/30 flex items-center justify-center text-white border-2 border-white dark:border-gray-800">
                          <Users size={14} />
                        </div>
                        <div className="h-8 w-8 rounded-full bg-jeel-orange/30 flex items-center justify-center text-white border-2 border-white dark:border-gray-800">
                          <Clock size={14} />
                        </div>
                        <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-white border-2 border-white dark:border-gray-800">
                          <span className="text-xs">+7</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-jeel-green/10 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Leaderboard</h3>
                        <span className="text-xs font-medium px-2 py-1 bg-jeel-green/20 text-jeel-green rounded-full">
                          Top 10%
                        </span>
                      </div>
                      <p className="text-2xl font-bold mb-3 text-jeel-green">Rank #32</p>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <BarChart2 size={16} className="mr-2" />
                        <span className="text-xs">125 XP to next rank</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-medium">Course Progress</h3>
                      <button className="text-sm text-jeel-blue dark:text-jeel-purple hover:underline">
                        View All
                      </button>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Web Development</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">78%</span>
                        </div>
                        <ProgressBar 
                          progress={78} 
                          color="bg-jeel-blue" 
                          height={8} 
                        />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Data Structures</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">65%</span>
                        </div>
                        <ProgressBar 
                          progress={65} 
                          color="bg-jeel-purple" 
                          height={8} 
                        />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">UI/UX Design</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">92%</span>
                        </div>
                        <ProgressBar 
                          progress={92} 
                          color="bg-jeel-green" 
                          height={8} 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
                <div className="border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Pending Tasks</h2>
                  <button className="text-sm text-jeel-blue dark:text-jeel-purple flex items-center gap-1 hover:underline">
                    View All <ChevronRight size={16} />
                  </button>
                </div>
                <div className="p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="relative max-w-xs w-full">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search size={16} className="text-gray-400" />
                      </div>
                      <input
                        type="search"
                        placeholder="Search tasks..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-jeel-blue focus:border-transparent transition-all text-sm"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <Filter size={16} />
                      </button>
                      <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <Sliders size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {tasks.map(task => (
                      <div 
                        key={task.id}
                        className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-jeel-blue/30 dark:hover:border-jeel-blue/30 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0">
                            <input 
                              type="checkbox" 
                              className="h-5 w-5 rounded-md border-gray-300 dark:border-gray-700 text-jeel-blue focus:ring-jeel-blue transition-colors cursor-pointer"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-medium">{task.title}</h3>
                              <span className={`
                                text-xs px-2 py-0.5 rounded-full 
                                ${task.priority === 'High' 
                                  ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' 
                                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                }
                              `}>
                                {task.priority} Priority
                              </span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <span className="mr-3">{task.course}</span>
                              <span>Due: {task.dueDate}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="px-2 py-1 bg-jeel-purple/10 text-jeel-purple text-xs font-medium rounded-full">
                              +{task.xp} XP
                            </div>
                            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                              <Bell size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-4 w-full py-2 flex items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <Plus size={16} />
                    <span>Add New Task</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Upcoming Events</h2>
                  <button className="text-sm text-jeel-blue dark:text-jeel-purple flex items-center gap-1 hover:underline">
                    View All <ChevronRight size={16} />
                  </button>
                </div>
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {upcomingEvents.map(event => (
                    <EventCard key={event.id} {...event} />
                  ))}
                  
                  <button className="h-full min-h-[180px] w-full py-2 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="h-12 w-12 rounded-full border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center">
                      <Plus size={24} className="text-gray-400" />
                    </div>
                    <span className="font-medium">Browse More Events</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center max-w-xs">
                      Discover events that match your interests and academic goals
                    </p>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Achievements and Recent Activity */}
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
                <div className="border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Achievements</h2>
                  <button className="text-sm text-jeel-blue dark:text-jeel-purple flex items-center gap-1 hover:underline">
                    View All <ChevronRight size={16} />
                  </button>
                </div>
                <div className="p-4 space-y-4">
                  {achievements.map(achievement => (
                    <AchievementBadge key={achievement.id} {...achievement} />
                  ))}
                  
                  <button className="w-full py-2 flex items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <span>View All Achievements</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Study Activity</h2>
                  <button className="text-sm text-jeel-blue dark:text-jeel-purple flex items-center gap-1 hover:underline">
                    View Details <ChevronRight size={16} />
                  </button>
                </div>
                <div className="p-4">
                  <div className="mb-6">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">Weekly Study Time</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">15.2 hours</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                        <div key={day + index} className="flex flex-col items-center">
                          <div className="h-24 w-full bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden flex flex-col-reverse">
                            <div 
                              className="bg-jeel-blue dark:bg-jeel-purple transition-all duration-500"
                              style={{ height: `${Math.random() * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{day}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Recently Studied</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-jeel-blue/10 flex items-center justify-center">
                            <BookOpen size={20} className="text-jeel-blue" />
                          </div>
                          <div>
                            <p className="font-medium">Web Development</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Last studied 3 hours ago</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">1.5h</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-jeel-purple/10 flex items-center justify-center">
                            <BookOpen size={20} className="text-jeel-purple" />
                          </div>
                          <div>
                            <p className="font-medium">Data Structures</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Last studied yesterday</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">2h</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-jeel-green/10 flex items-center justify-center">
                            <BookOpen size={20} className="text-jeel-green" />
                          </div>
                          <div>
                            <p className="font-medium">UI/UX Design</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Last studied 2 days ago</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">1h</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
