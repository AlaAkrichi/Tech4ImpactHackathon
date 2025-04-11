
import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    isPositive: boolean;
  };
  color?: string;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  change,
  color = 'bg-jeel-blue',
  className = '',
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-md ${className}`}>
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{title}</p>
            <h3 className="text-2xl font-semibold">{value}</h3>
            
            {change && (
              <div className={`flex items-center mt-1 ${change.isPositive ? 'text-jeel-green' : 'text-red-500'}`}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="mr-1"
                >
                  {change.isPositive 
                    ? <polyline points="18 15 12 9 6 15"></polyline>
                    : <polyline points="6 9 12 15 18 9"></polyline>
                  }
                </svg>
                <span className="text-xs font-medium">{Math.abs(change.value)}%</span>
                <span className="text-xs ml-1 text-gray-500 dark:text-gray-400">vs. last week</span>
              </div>
            )}
          </div>
          
          <div 
            className={`h-10 w-10 rounded-lg flex items-center justify-center text-white`}
            style={{ background: color }}
          >
            {icon}
          </div>
        </div>
      </div>
      
      <div 
        className="h-1" 
        style={{ background: color }}
      />
    </div>
  );
};

export default StatsCard;
