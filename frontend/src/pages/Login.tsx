import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { login } from '@/slices/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

        email: formData.email,
        password: formData.password,

      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      return response.json();
    })
    .then(data => {
      login(data.token);
      toast.success('Account created successfully!');
      setIsSubmitting(false);
      navigate('/dashboard');
    })
    .catch(error => {
      toast.error(error.message || 'Failed to create account');
      setIsSubmitting(false);
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 lg:p-24">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center md:text-left">
            <div className="inline-flex items-center mb-4">
              <div className="h-10 w-10 bg-gradient-to-br from-jeel-blue to-jeel-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <h1 className="ml-3 text-2xl font-bold">JeelQuest</h1>
            </div>
            <h2 className="text-3xl font-bold mb-2 animate-fade-in">Level Up Your Student Life</h2>
            <p className="text-gray-500 dark:text-gray-400 animate-fade-in">
              Log in to continue your educational journey and earn rewards
            </p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-jeel-blue focus:border-transparent transition-all"
                  placeholder="your.email@university.edu"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <Link to="/forgot-password" className="text-sm text-jeel-blue hover:underline transition-colors">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-jeel-blue focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} className="text-gray-400 hover:text-gray-500" />
                  ) : (
                    <Eye size={18} className="text-gray-400 hover:text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 flex items-center justify-center gap-2 bg-jeel-blue text-white rounded-lg font-medium hover:bg-jeel-blue/90 focus:outline-none focus:ring-2 focus:ring-jeel-blue focus:ring-offset-2 transition-all disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                <>
                  Start Your Quest <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
          
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full py-3 px-4 flex justify-center items-center gap-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jeel-blue transition-all"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              
              <button
                type="button"
                className="w-full py-3 px-4 flex justify-center items-center gap-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jeel-blue transition-all"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="#0077B5"/>
                </svg>
                LinkedIn
              </button>
            </div>
          </div>
          
          <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-jeel-blue hover:underline transition-colors">
              Create a free account
            </Link>
          </p>
        </div>
      </div>
      
      {/* Right Side - Decorative */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-jeel-blue to-jeel-purple relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgNTBhMjUgMjUgMCAwIDEgMjUgMjVhMjUgMjUgMCAwIDEtMjUgMjVhMjUgMjUgMCAwIDEtMjUtMjVhMjUgMjUgMCAwIDEgMjUtMjV6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center p-12">
          <div className="max-w-md text-center">
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="h-24 w-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float shadow-xl">
                  <span className="text-white font-bold text-5xl">J</span>
                </div>
                <div className="absolute -top-2 -right-2 h-6 w-6 bg-jeel-green rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-medium text-xs">+1</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-4">Join the Quest</h2>
            <p className="text-white/80 mb-8">
              Unlock achievements, earn rewards, and connect with peers while advancing your academic journey.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                <h3 className="text-lg font-medium mb-1">Earn XP</h3>
                <p className="text-sm text-white/70">Complete tasks and climb the leaderboard</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                <h3 className="text-lg font-medium mb-1">Win Badges</h3>
                <p className="text-sm text-white/70">Showcase your achievements and skills</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                <h3 className="text-lg font-medium mb-1">Connect</h3>
                <p className="text-sm text-white/70">Build your network with like-minded peers</p>
              </div>
            </div>
            
            <div className="flex -space-x-2 overflow-hidden justify-center">
              <div className="h-10 w-10 rounded-full border-2 border-white/30 bg-jeel-purple/50 flex items-center justify-center text-white text-sm font-medium">
                AK
              </div>
              <div className="h-10 w-10 rounded-full border-2 border-white/30 bg-jeel-green/50 flex items-center justify-center text-white text-sm font-medium">
                JL
              </div>
              <div className="h-10 w-10 rounded-full border-2 border-white/30 bg-jeel-blue/50 flex items-center justify-center text-white text-sm font-medium">
                MB
              </div>
              <div className="h-10 w-10 rounded-full border-2 border-white/30 bg-jeel-orange/50 flex items-center justify-center text-white text-sm font-medium">
                TK
              </div>
              <div className="h-10 w-10 rounded-full border-2 border-white/30 bg-white/10 flex items-center justify-center text-white text-sm font-medium">
                +24
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-white/60 text-sm">
              Already have 1,500+ students on their educational quests
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
