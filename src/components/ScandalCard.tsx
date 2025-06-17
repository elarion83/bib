import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, User, Scale, Clock } from 'lucide-react';
import { ScandalCardProps } from '../types/scandal';
import { formatDate, formatConsequences, translateScandalType, formatAmount } from '../utils/formatters';
import SeverityBadge from './SeverityBadge';
import ConsequenceBadge from './ConsequenceBadge';

const ScandalCard: React.FC<ScandalCardProps> = ({
  scandal,
  index,
  isExpanded = false,
  onToggleExpand
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="
        bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm 
        border border-white/10 rounded-lg p-4 shadow-xl hover:shadow-2xl 
        transition-all duration-300 hover:border-white/20
      "
    >
      {/* Header avec titre */}
      <div className="flex items-start space-x-3 mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-1">{scandal.title}</h3>
          <div className="flex items-center space-x-3 text-xs text-gray-300">
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{formatDate(scandal.date)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span>{scandal.country}</span>
            </div>
          </div>
        </div>
        
        <SeverityBadge severity={scandal.severity} size="sm" />
      </div>

      {/* Informations principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-gray-300">
            <User className="w-3 h-3" />
            <span className="font-medium text-sm">{scandal.mainPerson}</span>
          </div>
          <div className="text-xs text-gray-400 ml-5">
            {scandal.position} • {scandal.politicalParty}
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-gray-300">
            <Scale className="w-3 h-3" />
            <span className="font-medium text-sm">{translateScandalType(scandal.scandalType)}</span>
          </div>
          {scandal.duration && (
            <div className="flex items-center space-x-2 text-xs text-gray-400 ml-5">
              <Clock className="w-3 h-3" />
              <span>{scandal.duration}</span>
            </div>
          )}
        </div>
      </div>

      {/* Montant impliqué */}
      {scandal.amountInvolved && (
        <div className="mb-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
          <div className="text-sm text-red-300 mb-1">Montant impliqué</div>
          <div className="text-lg font-bold text-red-200">
            {formatAmount(scandal.amountInvolved, scandal.currency || 'EUR')}
          </div>
        </div>
      )}

      {/* Description */}
      <div className="mb-3">
        <p className="text-gray-300 leading-relaxed text-sm">
          {isExpanded ? scandal.description : `${scandal.description.slice(0, 120)}...`}
        </p>
        {scandal.description.length > 120 && onToggleExpand && (
          <button
            onClick={onToggleExpand}
            className="text-blue-400 hover:text-blue-300 text-xs mt-1 underline"
          >
            {isExpanded ? 'Voir moins' : 'Voir plus'}
          </button>
        )}
      </div>

      {/* Détails étendus */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {/* Autres personnes impliquées */}
          {scandal.otherPersons && scandal.otherPersons.length > 0 && (
            <div>
              <h4 className="text-white font-semibold mb-2">Autres personnes impliquées</h4>
              <div className="flex flex-wrap gap-2">
                {scandal.otherPersons.map((person, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-sm text-blue-300"
                  >
                    {person}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {scandal.tags && scandal.tags.length > 0 && (
            <div>
              <h4 className="text-white font-semibold mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {scandal.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 bg-gray-700/50 border border-gray-600/50 rounded text-xs text-gray-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Conséquences */}
      <div className="mb-4">
        <h4 className="text-white font-semibold mb-2">Conséquences</h4>
        <div className="flex flex-wrap gap-2">
          {scandal.consequences.slice(0, isExpanded ? scandal.consequences.length : 3).map((consequence, idx) => (
            <ConsequenceBadge key={idx} consequence={consequence} />
          ))}
          {!isExpanded && scandal.consequences.length > 3 && (
            <span className="px-2 py-1 bg-gray-600/50 rounded-full text-xs text-gray-400">
              +{scandal.consequences.length - 3} autres
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center space-x-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            scandal.resolved 
              ? 'bg-green-900/50 text-green-300 border border-green-500/30' 
              : 'bg-red-900/50 text-red-300 border border-red-500/30'
          }`}>
            {scandal.resolved ? 'Affaire jugée' : 'En instance'}
          </span>
        </div>

        {/* Sources */}
        {scandal.sources && scandal.sources.length > 0 && (
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-400">Sources:</span>
            <div className="flex space-x-1">
              {scandal.sources.slice(0, 2).map((source, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="p-1 bg-white/10 rounded hover:bg-white/20 transition-colors"
                  title={`Source: ${source}`}
                >
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </motion.button>
              ))}
              {scandal.sources.length > 2 && (
                <span className="text-xs text-gray-400">+{scandal.sources.length - 2}</span>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ScandalCard; 