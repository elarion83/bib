import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ChevronDown } from 'lucide-react';
import { FilterPanelProps } from '../types/scandal';
import { translateScandalType, getSeverityLabel } from '../utils/formatters';

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  availableCountries,
  availableParties,
  onFiltersChange,
  isOpen,
  onToggle
}) => {
  const handleCountryToggle = (country: string) => {
    const currentCountries = filters.country || [];
    const newCountries = currentCountries.includes(country)
      ? currentCountries.filter(c => c !== country)
      : [...currentCountries, country];
    
    onFiltersChange({ ...filters, country: newCountries });
  };

  const handleScandalTypeToggle = (type: string) => {
    const currentTypes = filters.scandalType || [];
    const newTypes = currentTypes.includes(type)
      ? currentTypes.filter(t => t !== type)
      : [...currentTypes, type];
    
    onFiltersChange({ ...filters, scandalType: newTypes });
  };

  const handlePartyToggle = (party: string) => {
    const currentParties = filters.politicalParty || [];
    const newParties = currentParties.includes(party)
      ? currentParties.filter(p => p !== party)
      : [...currentParties, party];
    
    onFiltersChange({ ...filters, politicalParty: newParties });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      country: [],
      scandalType: [],
      politicalParty: []
    });
  };

  const scandalTypes = ['corruption', 'financial', 'sexual', 'abuse-of-power', 'espionage', 'electoral', 'other'];

  const hasActiveFilters = (filters.country?.length || 0) + 
                          (filters.scandalType?.length || 0) + 
                          (filters.politicalParty?.length || 0) > 0;

  return (
    <>
      {/* Bouton de filtre */}
      <div className="fixed top-4 right-4 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggle}
          className="
            flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 
            rounded-full px-4 py-2 text-white hover:bg-white/20 transition-all duration-300
          "
        >
          <Filter className="w-5 h-5" />
          <span className="font-medium">Filtres</span>
          {hasActiveFilters && (
            <span className="bg-red-500 text-white rounded-full text-xs px-2 py-0.5 ml-1">
              {(filters.country?.length || 0) + 
               (filters.scandalType?.length || 0) + 
               (filters.politicalParty?.length || 0)}
            </span>
          )}
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </motion.button>
      </div>

      {/* Panel de filtres */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={onToggle}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
              className="
                fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-lg 
                border-l border-white/10 shadow-2xl z-50 overflow-y-auto
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <h3 className="text-xl font-bold text-white">Filtres</h3>
                <div className="flex items-center space-x-2">
                  {hasActiveFilters && (
                    <button
                      onClick={clearAllFilters}
                      className="text-red-400 hover:text-red-300 text-sm underline"
                    >
                      Tout effacer
                    </button>
                  )}
                  <button
                    onClick={onToggle}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-6">
                {/* Filtre par pays */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Pays</h4>
                  <div className="space-y-2">
                    {availableCountries.map(country => (
                      <label key={country} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.country?.includes(country) || false}
                          onChange={() => handleCountryToggle(country)}
                          className="w-4 h-4 text-blue-500 rounded focus:ring-blue-400"
                        />
                        <span className="text-gray-300 hover:text-white transition-colors">
                          {country}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filtre par type de scandale */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Type de scandale</h4>
                  <div className="space-y-2">
                    {scandalTypes.map(type => (
                      <label key={type} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.scandalType?.includes(type) || false}
                          onChange={() => handleScandalTypeToggle(type)}
                          className="w-4 h-4 text-blue-500 rounded focus:ring-blue-400"
                        />
                        <span className="text-gray-300 hover:text-white transition-colors">
                          {translateScandalType(type)}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filtre par parti politique */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Parti politique</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {availableParties.map(party => (
                      <label key={party} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.politicalParty?.includes(party) || false}
                          onChange={() => handlePartyToggle(party)}
                          className="w-4 h-4 text-blue-500 rounded focus:ring-blue-400"
                        />
                        <span className="text-gray-300 hover:text-white transition-colors text-sm">
                          {party}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>


              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FilterPanel; 