
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, User, Mail, Lock, EyeOff, Eye, UserCircle } from 'lucide-react';
import ProgressBar from '@/components/ProgressBar';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    institution: '',
    yearOfStudy: '',
    major: '',
    avatar: 1,
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsSubmitting(false);
      window.location.href = '/dashboard';
    }, 1500);
  };
  
  const avatarOptions = [1, 2, 3, 4, 5, 6];
  const avatarColors = [
    'bg-jeel-blue',
    'bg-jeel-purple',
    'bg-jeel-green',
    'bg-jeel-orange',
    'bg-jeel-pink',
    'bg-pink-500',
  ];
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 lg:p-24">
        <div className="w-full max-w-md">
          <Link to="/" className="inline-flex items-center mb-8">
            <div className="h-10 w-10 bg-gradient-to-br from-jeel-blue to-jeel-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <h1 className="ml-3 text-2xl font-bold">JeelQuest</h1>
          </Link>
          
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2 animate-fade-in">
              {step === 1 && "Create Your Account"}
              {step === 2 && "Academic Information"}
              {step === 3 && "Personalize Your Profile"}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 animate-fade-in">
              {step === 1 && "Start your educational journey with JeelQuest"}
              {step === 2 && "Tell us about your studies"}
              {step === 3 && "Choose your avatar and complete registration"}
            </p>
          </div>
          
          <div className="mb-8">
            <ProgressBar 
              progress={(step / 3) * 100} 
              height={8} 
              color="bg-gradient-to-r from-jeel-blue to-jeel-purple" 
              className="mb-2"
            />
            <div className="flex justify-between">
              <span 
                className={`text-sm font-medium ${step >= 1 ? 'text-jeel-blue' : 'text-gray-400'}`}
              >
                Account
              </span>
              <span 
                className={`text-sm font-medium ${step >= 2 ? 'text-jeel-blue' : 'text-gray-400'}`}
              >
                Academics
              </span>
              <span 
                className={`text-sm font-medium ${step >= 3 ? 'text-jeel-blue' : 'text-gray-400'}`}
              >
                Profile
              </span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-jeel-blue focus:border-transparent transition-all"
                      placeholder="John"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-jeel-blue focus:border-transparent transition-all"
                      placeholder="Smith"
                      required
                    />
                  </div>
                </div>
                
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
                  <label htmlFor="password" className="block text-sm font-medium">
                    Password
                  </label>
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
                
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-jeel-blue focus:border-transparent transition-all"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} className="text-gray-400 hover:text-gray-500" />
                      ) : (
                        <Eye size={18} className="text-gray-400 hover:text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 2: Academic Information */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <label htmlFor="institution" className="block text-sm font-medium">
                    Institution
                  </label>
                  <input
                    id="institution"
                    name="institution"
                    type="text"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-jeel-blue focus:border-transparent transition-all"
                    placeholder="University of California, Berkeley"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="major" className="block text-sm font-medium">
                    Major / Field of Study
                  </label>
                  <input
                    id="major"
                    name="major"
                    type="text"
                    value={formData.major}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-jeel-blue focus:border-transparent transition-all"
                    placeholder="Computer Science"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="yearOfStudy" className="block text-sm font-medium">
                    Year of Study
                  </label>
                  <select
                    id="yearOfStudy"
                    name="yearOfStudy"
                    value={formData.yearOfStudy}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-jeel-blue focus:border-transparent transition-all"
                    required
                  >
                    <option value="" disabled>Select year</option>
                    <option value="1">Freshman (1st year)</option>
                    <option value="2">Sophomore (2nd year)</option>
                    <option value="3">Junior (3rd year)</option>
                    <option value="4">Senior (4th year)</option>
                    <option value="5">Graduate Student</option>
                    <option value="6">PhD Candidate</option>
                    <option value="7">Faculty/Staff</option>
                  </select>
                </div>
                
                <div className="flex items-center p-4 bg-jeel-blue/10 rounded-lg">
                  <div className="flex-shrink-0 h-12 w-12 bg-jeel-blue/20 rounded-full flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="text-jeel-blue"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-jeel-blue">Academic Information Bonus</h4>
                    <p className="text-xs text-gray-600">
                      Earn 100 XP when you complete your academic profile
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 3: Profile Personalization */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <label className="block text-sm font-medium mb-4">
                    Choose Your Avatar
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {avatarOptions.map((avatar, index) => (
                      <button
                        key={avatar}
                        type="button"
                        className={`
                          h-20 w-full rounded-lg flex items-center justify-center transition-all duration-300
                          ${formData.avatar === avatar 
                            ? 'ring-2 ring-offset-2 ring-jeel-blue scale-105' 
                            : 'hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105'
                          }
                        `}
                        onClick={() => setFormData(prev => ({ ...prev, avatar }))}
                      >
                        <div className={`h-16 w-16 ${avatarColors[index]} rounded-full flex items-center justify-center`}>
                          <UserCircle size={32} className="text-white" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium">Initial Rewards</h3>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-jeel-purple">+150 XP</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center">
                      <div className="h-10 w-10 bg-jeel-green/20 rounded-full flex items-center justify-center mr-3">
                        <Check size={20} className="text-jeel-green" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Early Adopter</h4>
                        <p className="text-xs text-gray-500">Joined during the launch period</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center">
                      <div className="h-10 w-10 bg-jeel-blue/20 rounded-full flex items-center justify-center mr-3">
                        <User size={20} className="text-jeel-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Profile Champion</h4>
                        <p className="text-xs text-gray-500">Completed full profile setup</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-jeel-purple/10 rounded-lg">
                  <div className="flex-shrink-0 h-12 w-12 bg-jeel-purple/20 rounded-full flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="text-jeel-purple"
                    >
                      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"></path>
                      <circle cx="12" cy="8" r="7"></circle>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-jeel-purple">You're Almost There!</h4>
                    <p className="text-xs text-gray-600">
                      Create your account to start earning achievements and connecting with peers
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex justify-between pt-4">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="py-3 px-4 flex items-center gap-2 text-gray-700 rounded-lg border border-gray-300 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                >
                  <ArrowLeft size={18} />
                  Back
                </button>
              ) : (
                <div></div>
              )}
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="py-3 px-4 flex items-center gap-2 bg-jeel-blue text-white rounded-lg font-medium hover:bg-jeel-blue/90 focus:outline-none focus:ring-2 focus:ring-jeel-blue focus:ring-offset-2 transition-all"
                >
                  Next
                  <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="py-3 px-6 flex items-center gap-2 bg-jeel-blue text-white rounded-lg font-medium hover:bg-jeel-blue/90 focus:outline-none focus:ring-2 focus:ring-jeel-blue focus:ring-offset-2 transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Join the Quest
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
          
          {step === 1 && (
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
          )}
          
          <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-jeel-blue hover:underline transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      
      {/* Right Side - Decorative */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-jeel-purple to-jeel-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgNTBhMjUgMjUgMCAwIDEgMjUgMjVhMjUgMjUgMCAwIDEtMjUgMjVhMjUgMjUgMCAwIDEtMjUtMjVhMjUgMjUgMCAwIDEgMjUtMjV6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center p-12">
          <div className="max-w-md text-center">
            <div className="mb-8">
              <div className="flex items-center -space-x-4">
                <div className="h-20 w-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <div className="text-white text-5xl">⭐</div>
                </div>
                <div className="h-20 w-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <div className="text-white text-5xl">🏆</div>
                </div>
                <div className="h-20 w-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <div className="text-white text-5xl">🚀</div>
                </div>
              </div>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-4">Create Your Student Profile</h2>
            <p className="text-white/80 mb-8">
              Set up your JeelQuest profile to track your progress, earn achievements, and connect with peers.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-left text-white">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-medium">Track Your Academic Journey</h3>
                </div>
                <p className="text-white/70 pl-13">Monitor your courses, assignments, and extracurricular activities</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-left text-white">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-medium">Earn Rewards & Recognition</h3>
                </div>
                <p className="text-white/70 pl-13">Gain XP, badges, and achievements for your academic accomplishments</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-left text-white">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-medium">Build Your Network</h3>
                </div>
                <p className="text-white/70 pl-13">Connect with peers, participate in events, and join study groups</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
