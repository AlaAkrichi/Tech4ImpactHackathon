
import React from 'react';

export interface AchievementBadgeProps {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  earned?: boolean;
  progress?: {
    current: number;
    total: number;
  };
  date?: string;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  name,
  description,
  icon,
  color,
  earned = false,
  progress,
  date,
}) => {
  return (
    <div 
      className={`
        relative group w-full max-w-xs rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg
        ${earned ? 'bg-white dark:bg-gray-800' : 'bg-gray-100 dark:bg-gray-800/50 grayscale'}
      `}
    >
      <div 
        className={`
          absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20
          ${earned ? '' : 'opacity-5 group-hover:opacity-10'}
        `}
        style={{ background: color }}
      />
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div 
            className={`
              h-12 w-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110
              ${earned ? 'text-white' : 'text-gray-400 dark:text-gray-500'}
            `}
            style={{ background: earned ? color : 'transparent', border: earned ? 'none' : '2px dashed #cbd5e1' }}
          >
            {icon}
          </div>
          
          {earned && date && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Earned on {date}
            </span>
          )}
        </div>
        
        <h3 className={`text-lg font-medium mb-1 ${earned ? '' : 'text-gray-500 dark:text-gray-400'}`}>{name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{description}</p>
        
        {progress && (
          <div className="mt-3">
            <div className="flex justify-between text-xs mb-1">
              <span className={earned ? 'text-gray-600 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400'}>Progress</span>
              <span className={earned ? 'font-medium' : 'text-gray-500 dark:text-gray-400'}>
                {progress.current}/{progress.total}
              </span>
            </div>
            <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-500"
                style={{ 
                  width: `${(progress.current / progress.total) * 100}%`,
                  background: earned ? color : '#94a3b8'
                }}
              />
            </div>
          </div>
        )}
        
        {earned && (
          <div 
            className="absolute top-2 right-2 h-6 w-6 rounded-full flex items-center justify-center" 
            style={{ background: color }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-white"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementBadge;
