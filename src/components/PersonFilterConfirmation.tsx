import React from 'react';
import { X, User, Filter } from 'lucide-react';

interface PersonFilterConfirmationProps {
  isOpen: boolean;
  personName: string;
  onConfirm: (includeOtherPersons: boolean) => void;
  onCancel: () => void;
}

const PersonFilterConfirmation: React.FC<PersonFilterConfirmationProps> = ({
  isOpen,
  personName,
  onConfirm,
  onCancel
}) => {
  const [includeOtherPersons, setIncludeOtherPersons] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) setIncludeOtherPersons(false);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <div 
      className="person-filter-backdrop"
      onClick={handleBackdropClick}
    >
      <div className="person-filter-modal">
        <div className="person-filter-header">
          <div className="person-filter-icon">
            <User size={24} />
          </div>
          <h3 className="person-filter-title">Filtrer par personne</h3>
          <button className="person-filter-close" onClick={onCancel}>
            <X size={20} />
          </button>
        </div>
        
        <div className="person-filter-body">
          <p className="person-filter-message">
            Voulez-vous filtrer les scandales pour afficher uniquement ceux impliquant :
          </p>
          <div className="person-filter-name">
            <strong>{personName}</strong>
          </div>
          <label className="person-filter-checkbox-label">
            <input
              type="checkbox"
              checked={includeOtherPersons}
              onChange={e => setIncludeOtherPersons(e.target.checked)}
            />
            Inclure aussi les implications indirectes (otherPersons)
          </label>
          <p className="person-filter-info">
            <Filter size={16} />
            Cela appliquera un filtre sur la timeline
          </p>
        </div>
        
        <div className="person-filter-actions">
          <button 
            className="person-filter-btn person-filter-cancel"
            onClick={onCancel}
          >
            Annuler
          </button>
          <button 
            className="person-filter-btn person-filter-confirm"
            onClick={() => onConfirm(includeOtherPersons)}
          >
            Appliquer le filtre
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonFilterConfirmation; 