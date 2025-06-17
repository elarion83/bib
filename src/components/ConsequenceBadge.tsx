import React from 'react';
import { ConsequenceBadgeProps } from '../types/scandal';

const ConsequenceBadge: React.FC<ConsequenceBadgeProps> = ({ 
  consequence, 
  variant = 'default' 
}) => {
  const getVariantClasses = (variant: string, consequence: string): string => {
    // Détermine automatiquement la variante basée sur le contenu si c'est 'default'
    if (variant === 'default') {
      const lowercaseConsequence = consequence.toLowerCase();
      
      if (lowercaseConsequence.includes('prison') || lowercaseConsequence.includes('condamnation') || lowercaseConsequence.includes('inculpation')) {
        return 'bg-red-100 text-red-800 border-red-200';
      } else if (lowercaseConsequence.includes('démission') || lowercaseConsequence.includes('destitution') || lowercaseConsequence.includes('impeachment')) {
        return 'bg-orange-100 text-orange-800 border-orange-200';
      } else if (lowercaseConsequence.includes('amende') || lowercaseConsequence.includes('sanction') || lowercaseConsequence.includes('exclusion')) {
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      } else if (lowercaseConsequence.includes('acquittement') || lowercaseConsequence.includes('innocenté') || lowercaseConsequence.includes('réhabilité')) {
        return 'bg-green-100 text-green-800 border-green-200';
      } else {
        return 'bg-gray-100 text-gray-800 border-gray-200';
      }
    }

    const variantClasses = {
      default: 'bg-gray-100 text-gray-800 border-gray-200',
      warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      danger: 'bg-red-100 text-red-800 border-red-200',
      success: 'bg-green-100 text-green-800 border-green-200',
    };
    
    return variantClasses[variant as keyof typeof variantClasses] || variantClasses.default;
  };

  return (
    <span 
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
        ${getVariantClasses(variant, consequence)}
        transition-all duration-200 hover:scale-105
      `}
    >
      {consequence}
    </span>
  );
};

export default ConsequenceBadge; 