
import React from 'react';

export interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
  category: {
    name: string;
    color: string;
  };
  reward?: {
    xp: number;
    badges?: string[];
  };
  attendees?: {
    count: number;
    max?: number;
    avatars?: string[];
  };
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  date,
  time,
  location,
  image,
  category,
  reward,
  attendees,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg group">
      {image && (
        <div className="h-40 w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div 
            className="px-2 py-1 text-xs font-medium rounded-full"
            style={{ 
              backgroundColor: `${category.color}20`,
              color: category.color
            }}
          >
            {category.name}
          </div>
          
          {reward && (
            <div className="flex items-center gap-1 text-jeel-purple">
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
              >
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
              <span className="text-xs font-medium">{reward.xp} XP</span>
            </div>
          )}
        </div>
        
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="mr-1"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span className="text-xs">{date}</span>
          </div>
          
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="mr-1"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span className="text-xs">{time}</span>
          </div>
          
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="text-xs">{location}</span>
          </div>
        </div>
        
        {attendees && (
          <div className="flex justify-between items-center">
            <div className="flex -space-x-2">
              {attendees.avatars ? (
                attendees.avatars.slice(0, 4).map((avatar, index) => (
                  <img 
                    key={index}
                    src={avatar}
                    alt="Attendee" 
                    className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800"
                  />
                ))
              ) : (
                Array.from({ length: Math.min(4, attendees.count) }).map((_, index) => (
                  <div 
                    key={index}
                    className="h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-800 flex items-center justify-center"
                  >
                    <span className="text-[10px] text-gray-600 dark:text-gray-300">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                ))
              )}
              
              {attendees.count > 4 && (
                <div className="h-6 w-6 rounded-full bg-gray-100 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                  <span className="text-[10px] text-gray-600 dark:text-gray-300">
                    +{attendees.count - 4}
                  </span>
                </div>
              )}
            </div>
            
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {attendees.max 
                ? `${attendees.count}/${attendees.max} attending`
                : `${attendees.count} attending`
              }
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
