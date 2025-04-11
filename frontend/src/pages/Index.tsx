
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Trophy, BarChart2, BookOpen, Star, Shield } from 'lucide-react';

const Index = () => {
  // Animation utility for staggered animations
  const staggeredItem = (index: number) => ({
    style: { '--index': index } as React.CSSProperties,
    className: 'appear-animation'
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navigation */}
      <header className="bg-white/70 backdrop-blur-lg border-b border-gray-200 py-4 px-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-to-br from-jeel-blue to-jeel-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <h1 className="text-2xl font-bold">JeelQuest</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="font-medium">Home</Link>
            <Link to="/features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link 
              to="/login" 
              className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium"
            >
              Log In
            </Link>
            <Link 
              to="/register" 
              className="px-4 py-2 rounded-lg bg-jeel-blue text-white hover:bg-jeel-blue/90 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-jeel-blue to-jeel-purple py-20 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgNTBhMjUgMjUgMCAwIDEgMjUgMjVhMjUgMjUgMCAwIDEtMjUgMjVhMjUgMjUgMCAwIDEtMjUtMjVhMjUgMjUgMCAwIDEgMjUtMjV6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative z-10" {...staggeredItem(0)}>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-6">
              <span className="h-2 w-2 bg-jeel-green rounded-full mr-2"></span>
              The ultimate student engagement platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Level Up Your Student Life</h1>
            <p className="text-xl text-white/80 mb-8 max-w-lg">
              Track progress, earn rewards, and connect with peers on your academic journey with JeelQuest's gamified student engagement platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/register" 
                className="px-6 py-3 rounded-lg bg-white text-jeel-blue font-medium hover:bg-opacity-95 transition-all flex items-center justify-center gap-2"
              >
                Start Your Quest <ChevronRight size={18} />
              </Link>
              <Link 
                to="/features" 
                className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 font-medium hover:bg-white/20 transition-all flex items-center justify-center"
              >
                Explore Features
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                <div className="h-10 w-10 rounded-full border-2 border-white/30 bg-jeel-purple/50 flex items-center justify-center text-white text-sm font-medium">
                  AK
                </div>
                <div className="h-10 w-10 rounded-full border-2 border-white/30 bg-jeel-green/50 flex items-center justify-center text-white text-sm font-medium">
                  JL
                </div>
                <div className="h-10 w-10 rounded-full border-2 border-white/30 bg-jeel-blue/50 flex items-center justify-center text-white text-sm font-medium">
                  MB
                </div>
                <div className="h-10 w-10 rounded-full border-2 border-white/30 bg-white/10 flex items-center justify-center text-white text-sm font-medium">
                  +1.5k
                </div>
              </div>
              <div className="text-sm">
                <p className="font-medium">Trusted by 1,500+ students</p>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={14} fill="#FFF" className="text-white" />
                  ))}
                  <span className="ml-2">5.0 rating</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative z-10 flex justify-center" {...staggeredItem(1)}>
            <div className="relative">
              <div className="absolute -top-20 -left-16 h-40 w-40 bg-jeel-green/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-jeel-purple/40 rounded-full blur-3xl"></div>
              
              {/* Dashboard Preview */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden shadow-2xl max-w-md w-full">
                <div className="border-b border-white/10 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">J</span>
                    </div>
                    <h3 className="font-medium text-white">Dashboard</h3>
                  </div>
                  <div className="flex -space-x-1">
                    <div className="h-6 w-6 rounded-full bg-jeel-green/30 border border-white/30"></div>
                    <div className="h-6 w-6 rounded-full bg-jeel-blue/30 border border-white/30"></div>
                    <div className="h-6 w-6 rounded-full bg-jeel-purple/30 border border-white/30"></div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-white text-lg font-medium mb-4">Your Progress</h3>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-xs text-white/70">XP Level</h4>
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 text-white">Lvl 7</span>
                        </div>
                        <p className="text-lg font-bold text-white">1,240</p>
                        <div className="mt-2 h-1 w-full bg-white/20 rounded-full overflow-hidden">
                          <div className="bg-white h-full rounded-full" style={{width: '80%'}}></div>
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-xs text-white/70">Badges</h4>
                        </div>
                        <p className="text-lg font-bold text-white">12</p>
                        <div className="mt-2 flex -space-x-1">
                          <div className="h-4 w-4 rounded-full bg-jeel-green/40 border border-white/30"></div>
                          <div className="h-4 w-4 rounded-full bg-jeel-blue/40 border border-white/30"></div>
                          <div className="h-4 w-4 rounded-full bg-jeel-purple/40 border border-white/30"></div>
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-xs text-white/70">Rank</h4>
                        </div>
                        <p className="text-lg font-bold text-white">#32</p>
                        <div className="mt-2 flex items-center">
                          <Trophy size={14} className="text-white/70" />
                          <span className="text-[10px] ml-1 text-white/70">Top 10%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-white text-lg font-medium mb-3">Course Progress</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-white/80">Web Development</span>
                          <span className="text-xs text-white/80">78%</span>
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="bg-jeel-blue h-full rounded-full" style={{width: '78%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-white/80">Data Structures</span>
                          <span className="text-xs text-white/80">65%</span>
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="bg-jeel-purple h-full rounded-full" style={{width: '65%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
                        <span className="text-white text-xs">AK</span>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
                        <span className="text-white text-xs">JL</span>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
                        <span className="text-white text-xs">+5</span>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs hover:bg-white/20 transition-colors">
                      View Events
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-10 -right-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-jeel-blue/20 rounded-full flex items-center justify-center">
                    <Trophy size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">New Badge Earned!</p>
                    <p className="text-xs text-white/70">Early Bird: 5-day streak</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -left-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 bg-jeel-green/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">+1</span>
                  </div>
                  <p className="text-xs font-medium text-white">Level Up!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" {...staggeredItem(2)}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Educational Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              JeelQuest combines academic tools with gamification to create an engaging platform for students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1" {...staggeredItem(3)}>
              <div className="h-12 w-12 bg-jeel-blue/10 rounded-lg flex items-center justify-center mb-6">
                <Trophy size={24} className="text-jeel-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Achievement System</h3>
              <p className="text-gray-600 mb-4">
                Earn badges, XP points, and climb the leaderboard as you complete academic milestones.
              </p>
              <Link to="/features" className="text-jeel-blue font-medium flex items-center hover:underline">
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1" {...staggeredItem(4)}>
              <div className="h-12 w-12 bg-jeel-purple/10 rounded-lg flex items-center justify-center mb-6">
                <BarChart2 size={24} className="text-jeel-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Progress Tracking</h3>
              <p className="text-gray-600 mb-4">
                Visualize your academic progress with interactive charts and personalized insights.
              </p>
              <Link to="/features" className="text-jeel-purple font-medium flex items-center hover:underline">
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1" {...staggeredItem(5)}>
              <div className="h-12 w-12 bg-jeel-green/10 rounded-lg flex items-center justify-center mb-6">
                <Users size={24} className="text-jeel-green" />
              </div>
              <h3 className="text-xl font-bold mb-3">Social Networking</h3>
              <p className="text-gray-600 mb-4">
                Connect with peers, join study groups, and participate in collaborative challenges.
              </p>
              <Link to="/features" className="text-jeel-green font-medium flex items-center hover:underline">
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1" {...staggeredItem(6)}>
              <div className="h-12 w-12 bg-jeel-blue/10 rounded-lg flex items-center justify-center mb-6">
                <BookOpen size={24} className="text-jeel-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Course Management</h3>
              <p className="text-gray-600 mb-4">
                Organize your courses, assignments, and deadlines in one centralized platform.
              </p>
              <Link to="/features" className="text-jeel-blue font-medium flex items-center hover:underline">
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1" {...staggeredItem(7)}>
              <div className="h-12 w-12 bg-jeel-purple/10 rounded-lg flex items-center justify-center mb-6">
                <Shield size={24} className="text-jeel-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Challenges</h3>
              <p className="text-gray-600 mb-4">
                Take on academic challenges tailored to your skills and interests to earn rewards.
              </p>
              <Link to="/features" className="text-jeel-purple font-medium flex items-center hover:underline">
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1" {...staggeredItem(8)}>
              <div className="h-12 w-12 bg-jeel-green/10 rounded-lg flex items-center justify-center mb-6">
                <Star size={24} className="text-jeel-green" />
              </div>
              <h3 className="text-xl font-bold mb-3">Event Participation</h3>
              <p className="text-gray-600 mb-4">
                Discover and join academic events, workshops, and competitions to enhance your skills.
              </p>
              <Link to="/features" className="text-jeel-green font-medium flex items-center hover:underline">
                Learn more <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-jeel-blue to-jeel-purple rounded-2xl p-10 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgNTBhMjUgMjUgMCAwIDEgMjUgMjVhMjUgMjUgMCAwIDEtMjUgMjVhMjUgMjUgMCAwIDEtMjUtMjVhMjUgMjUgMCAwIDEgMjUtMjV6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-10"></div>
          <div className="absolute -top-10 -right-10 h-40 w-40 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="text-center relative z-10" {...staggeredItem(9)}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Educational Quest?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Join thousands of students who are already transforming their academic journey with JeelQuest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/register" 
                className="px-6 py-3 rounded-lg bg-white text-jeel-blue font-medium hover:bg-opacity-95 transition-all flex items-center justify-center gap-2"
              >
                Create Free Account <ChevronRight size={18} />
              </Link>
              <Link 
                to="/login" 
                className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 font-medium hover:bg-white/20 transition-all flex items-center justify-center"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 bg-gradient-to-br from-jeel-blue to-jeel-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">J</span>
                </div>
                <h3 className="text-2xl font-bold">JeelQuest</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Gamifying the academic journey for students everywhere.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Data Processing</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} JeelQuest. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <select className="bg-gray-800 text-gray-400 text-sm rounded-lg px-3 py-1.5 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-jeel-blue focus:border-transparent">
                <option value="en">English (US)</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
