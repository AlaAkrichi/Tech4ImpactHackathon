
import React from 'react';

interface ProgressBarProps {
  progress: number; // 0 to 100
  color?: string;
  height?: number;
  animated?: boolean;
  showPercentage?: boolean;
  label?: string;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = 'bg-jeel-blue',
  height = 6,
  animated = true,
  showPercentage = false,
  label,
  className = '',
}) => {
  // Ensure progress is between 0 and 100
  const normalizedProgress = Math.min(100, Math.max(0, progress));
  
  return (
    <div className={className}>
      {(label || showPercentage) && (
        <div className="flex justify-between mb-1">
          {label && <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>}
          {showPercentage && (
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {normalizedProgress.toFixed(0)}%
            </span>
          )}
        </div>
      )}
      
      <div 
        className="w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <div
          className={`${color} rounded-full ${animated ? 'transition-all duration-500' : ''}`}
          style={{ 
            width: `${normalizedProgress}%`,
            height: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
