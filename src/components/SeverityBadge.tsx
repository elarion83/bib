import React from 'react';
import { SeverityBadgeProps } from '../types/scandal';
import { getSeverityColor, getSeverityLabel, getSeverityTextColor } from '../utils/formatters';

const SeverityBadge: React.FC<SeverityBadgeProps> = ({ 
  severity, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-2xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-2 text-sm'
  };

  const iconSizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <div className="inline-flex items-center space-x-1">
      <span 
        className={`
          inline-flex items-center justify-center rounded-full font-semibold
          ${getSeverityColor(severity)}
          ${sizeClasses[size]}
          transition-all duration-200 hover:scale-105
        `}
      >
        <span className="mr-1">•</span>
        {severity}
      </span>
      <span className={`font-medium ${getSeverityTextColor(severity)} ${size === 'sm' ? 'text-2xs' : size === 'lg' ? 'text-sm' : 'text-xs'}`}>
        {getSeverityLabel(severity)}
      </span>
    </div>
  );
};

export default SeverityBadge; 