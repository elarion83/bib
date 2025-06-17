import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScandalTimelineProps, ScandalFilters } from '../types/scandal';
import { formatDate, getSeverityColor, formatAmount } from '../utils/formatters';
import SeverityBadge from './SeverityBadge';
import ConsequenceBadge from './ConsequenceBadge';

const ScandalTimeline: React.FC<ScandalTimelineProps> = ({
  title,
  subtitle,
  scandals,
  filters,
  showFilters = false,
  className = ''
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [activeFilters, setActiveFilters] = useState<ScandalFilters>(filters || {});

  // Filtrage des scandales
  const filteredScandals = useMemo(() => {
    return scandals.filter(scandal => {
      if (activeFilters.country?.length && !activeFilters.country.includes(scandal.country)) {
        return false;
      }
      if (activeFilters.scandalType?.length && !activeFilters.scandalType.includes(scandal.scandalType)) {
        return false;
      }
      if (activeFilters.politicalParty?.length && !activeFilters.politicalParty.includes(scandal.politicalParty)) {
        return false;
      }
      if (activeFilters.keywords?.length && !activeFilters.keywords.some(keyword => scandal.tags?.includes(keyword))) {
        return false;
      }
      return true;
    });
  }, [scandals, activeFilters]);

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className={`App min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden ${className}`}>
      {/* Pattern de fond géométrique */}
      <div className="absolute inset-0 bg-geometric-pattern opacity-10"></div>
      
      {/* Header */}
      <div className="relative z-10 pt-16 pb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white text-center mb-4 tracking-wide"
        >
          {title}
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 text-center mb-16 tracking-widest uppercase"
        >
          {subtitle}
        </motion.h2>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 pb-20">
        {/* Timeline Items */}
        <div className="relative z-10">
          <AnimatePresence>
            {filteredScandals.map((scandal, index) => (
                              <motion.div
                key={`${scandal.title}-${scandal.date}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className={`
                  scandal-item relative mb-32 flex items-center
                  ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}
                  flex-col md:flex
                `}
                style={{ marginBottom: index === filteredScandals.length - 1 ? '0' : '8rem' }}
              >
                {/* Cercle avec icône */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    scandal-circle w-20 h-20 rounded-full flex items-center justify-center text-white shadow-2xl z-20 cursor-pointer
                    ${getSeverityColor(scandal.severity)}
                    hover:shadow-3xl transition-all duration-300
                  `}
                  onClick={() => toggleExpanded(index)}
                >
                </motion.div>

                {/* Contenu */}
                <div className={`
                  flex-1 px-0 md:px-8 mt-6 md:mt-0 
                  ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} 
                  text-center md:text-left max-w-md
                `}>
                  {/* Date */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="scandal-year text-2xl md:text-3xl font-bold text-white mb-2"
                  >
                    {formatDate(scandal.date, 'year')}
                  </motion.div>

                  {/* Titre du scandale */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="scandal-title text-xl md:text-2xl font-semibold text-white mb-3 leading-tight"
                  >
                    {scandal.title}
                  </motion.div>

                  {/* Informations principales */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="space-y-1 mb-3"
                  >
                    <div className="text-gray-300 text-sm md:text-base">
                      <span className="font-medium">{scandal.mainPerson}</span> - {scandal.position}
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm">
                      {scandal.politicalParty} | {scandal.country}
                    </div>
                  </motion.div>

                  {/* Montant si disponible */}
                  {scandal.amountInvolved && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                      className="mb-3"
                    >
                      <div className="text-lg font-bold text-yellow-400">
                        {formatAmount(scandal.amountInvolved, scandal.currency || 'EUR')}
                      </div>
                    </motion.div>
                  )}

                  {/* Badge de gravité */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                    className="mb-3"
                  >
                    <SeverityBadge severity={scandal.severity} />
                  </motion.div>

                  {/* Détails étendus */}
                  <AnimatePresence>
                    {expandedItems.has(index) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 p-4 bg-black/20 rounded-lg backdrop-blur-sm border border-white/10"
                      >
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          {scandal.description}
                        </p>

                        {scandal.otherPersons && scandal.otherPersons.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-white font-semibold text-sm mb-2">Autres personnes impliquées :</h4>
                            <div className="flex flex-wrap gap-2">
                              {scandal.otherPersons.map((person, idx) => (
                                <span key={idx} className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                                  {person}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="mb-4">
                          <h4 className="text-white font-semibold text-sm mb-2">Conséquences :</h4>
                          <div className="flex flex-wrap gap-2">
                            {scandal.consequences.map((consequence, idx) => (
                              <ConsequenceBadge key={idx} consequence={consequence} />
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <span className={`px-2 py-1 rounded-full font-medium ${
                            scandal.resolved 
                              ? 'bg-green-900/50 text-green-300 border border-green-500/30' 
                              : 'bg-red-900/50 text-red-300 border border-red-500/30'
                          }`}>
                            {scandal.resolved ? 'Jugé' : 'En instance'}
                          </span>
                          {scandal.duration && (
                            <span className="text-gray-400">
                              Durée: {scandal.duration}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ScandalTimeline; 