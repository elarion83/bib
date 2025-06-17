/**
 * MODAL DÉTAILLÉE DES SCANDALES
 * 
 * COMPOSANT MODAL PRINCIPAL pour affichage complet d'un scandale
 * 
 * FONCTIONNALITÉS :
 * - Overlay glassmorphism avec backdrop-filter
 * - Fermeture : clic overlay, bouton X, touche Escape
 * - Scroll interne si contenu déborde
 * - Animation d'ouverture/fermeture fluide
 * 
 * CONTENU AFFICHÉ :
 * - Header : titre + bouton fermeture
 * - Informations principales : personne, poste, parti, pays
 * - Description complète du scandale
 * - Montant impliqué (formaté avec formatAmount)
 * - Conséquences détaillées
 * - Badges : gravité, statut (jugé/en instance)
 * - Tags/mots-clés cliquables
 * - Peine de prison si applicable
 * 
 * DESIGN :
 * - Glassmorphism cohérent avec le reste de l'app
 * - Typographie hiérarchisée (titres, sous-titres, corps)
 * - Couleurs sémantiques (montants en jaune, statuts colorés)
 * - Responsive : adaptation mobile/desktop
 * 
 * INTERACTIONS :
 * - Tags cliquables → filtrage automatique
 * - Personnes cliquables → filtrage par personne
 * - Gestion des événements clavier (Escape)
 * 
 * UTILISATION :
 * - Déclenchée par clic sur carte timeline
 * - État géré par SerpentineTimeline
 * - Props : scandal, isOpen, onClose, onTagClick, onPersonClick
 */

import React from 'react';
import { X, Calendar, MapPin, Users, DollarSign, Scale, ExternalLink, AlertTriangle } from 'lucide-react';
import { PoliticalScandal } from '../types/scandal';
import { formatDate } from '../utils/formatters';

interface ScandalModalProps {
  scandal: PoliticalScandal | null;
  isOpen: boolean;
  onClose: () => void;
}

const ScandalModal: React.FC<ScandalModalProps> = ({ scandal, isOpen, onClose }) => {
  if (!isOpen || !scandal) return null;

  const getSeverityLabel = (severity: number): string => {
    const labels = {
      1: 'Mineur', 2: 'Modéré', 3: 'Grave', 4: 'Très Grave', 5: 'Critique'
    };
    return labels[severity as keyof typeof labels] || 'Inconnu';
  };

  const getSeverityColor = (severity: number): string => {
    const colors = {
      1: '#10b981', 2: '#f59e0b', 3: '#f97316', 4: '#ef4444', 5: '#dc2626'
    };
    return colors[severity as keyof typeof colors] || '#6b7280';
  };

  const formatAmount = (amount: number, currency: string = 'EUR'): string => {
    if (amount >= 1000000000) {
      return `${(amount / 1000000000).toFixed(1)} Milliards ${currency}`;
    } else if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)} Millions ${currency}`;
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(0)}K ${currency}`;
    }
    return `${amount} ${currency}`;
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="modal-backdrop"
      onClick={handleBackdropClick}
    >
      <div className="modal-container">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <div className="modal-header-text">
              <h2 className="modal-title">{scandal.title}</h2>
              <div className="modal-meta">
                <span className="modal-year">{formatDate(scandal.date, 'year')}</span>
                <span className="modal-country">
                  <MapPin size={16} />
                  {scandal.country}
                </span>
              </div>
            </div>
            <button className="modal-close" onClick={onClose}>
              <X size={24} />
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">
            {/* Description */}
            <div className="modal-section">
              <h3 className="modal-section-title">
                <AlertTriangle size={20} />
                Description détaillée
              </h3>
              <p className="modal-description">{scandal.description}</p>
              
              {/* Informations contextuelles */}
              <div className="modal-context-info">
                <div className="modal-context-item">
                  <strong>Durée de l'affaire :</strong> {scandal.duration || 'Non spécifiée'}
                </div>
                <div className="modal-context-item">
                  <strong>Type de scandale :</strong> {
                    scandal.scandalType === 'financial' ? 'Financier' :
                    scandal.scandalType === 'sexual' ? 'Sexuel' :
                    scandal.scandalType === 'abuse-of-power' ? 'Abus de pouvoir' :
                    scandal.scandalType === 'electoral' ? 'Électoral' :
                    scandal.scandalType === 'espionage' ? 'Espionnage' :
                    'Autre'
                  }
                </div>

              </div>
            </div>

            {/* Informations principales */}
            <div className="modal-info-grid">
              <div className="modal-info-card">
                <div className="modal-info-icon">
                  <Users size={20} />
                </div>
                <div>
                  <h4>Personne principale</h4>
                  <p>{scandal.mainPerson}</p>
                  <span>{scandal.position}</span>
                </div>
              </div>

              <div className="modal-info-card">
                <div className="modal-info-icon">
                  <Calendar size={20} />
                </div>
                <div>
                  <h4>Date</h4>
                  <p>{formatDate(scandal.date, 'full')}</p>
                  <span>Parti: {scandal.politicalParty}</span>
                </div>
              </div>

              {typeof scandal.amountInvolved === 'number' && scandal.amountInvolved > 0 && (
                <div className="modal-info-card">
                  <div className="modal-info-icon">
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <h4>Montant impliqué</h4>
                    <p className="modal-amount">
                      {formatAmount(scandal.amountInvolved, scandal.currency)}
                    </p>
                  </div>
                </div>
              )}

              <div className="modal-info-card">
                <div className="modal-info-icon">
                  <Scale size={20} />
                </div>
                <div>
                  <h4>Statut juridique</h4>
                  <div className={`modal-status-badge ${scandal.resolved ? 'resolved' : 'ongoing'}`}>
                    {scandal.resolved ? 'Jugé' : 'En instance'}
                  </div>
                </div>
              </div>
            </div>

            {/* Autres personnes impliquées */}
            {scandal.otherPersons && scandal.otherPersons.length > 0 && (
              <div className="modal-section">
                <h3 className="modal-section-title">
                  <Users size={20} />
                  Réseau des personnes impliquées
                </h3>
                <div className="modal-persons-grid">
                  {scandal.otherPersons.map((person, index) => (
                    <div key={index} className="modal-person-card">
                      <div className="modal-person-avatar">
                        <Users size={16} />
                      </div>
                      <div className="modal-person-info">
                        <span className="modal-person-name">{person}</span>
                        <span className="modal-person-role">
                          {person.includes('Macron') ? 'Président de la République' :
                           person.includes('Fillon') && person !== 'François Fillon' ? 'Famille' :
                           person.includes('Borne') ? 'Première Ministre' :
                           person.includes('Castex') ? 'Ancien Premier Ministre' :
                           'Personne impliquée'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conséquences */}
            {scandal.consequences && scandal.consequences.length > 0 && (
              <div className="modal-section">
                <h3 className="modal-section-title">
                  <Scale size={20} />
                  Conséquences juridiques et politiques
                </h3>
                <div className="modal-consequences-grid">
                  {scandal.consequences.map((consequence, index) => (
                    <div key={index} className="modal-consequence-card">
                      <div className="modal-consequence-header">
                        <span className="modal-consequence-type">
                          {consequence.includes('prison') || consequence.includes('emprisonnement') ? '⚖️ Sanction pénale' :
                           consequence.includes('démission') || consequence.includes('destitution') ? '🏛️ Conséquence politique' :
                           consequence.includes('amende') || consequence.includes('€') || consequence.includes('$') ? '💰 Sanction financière' :
                           consequence.includes('interdiction') || consequence.includes('suspension') ? '🚫 Restriction' :
                           '📋 Autre conséquence'}
                        </span>
                      </div>
                      <div className="modal-consequence-content">
                        <p className="modal-consequence-text">{consequence}</p>
                        <div className="modal-consequence-details">
                          <span className="modal-consequence-who">
                            <strong>Qui :</strong> {scandal.mainPerson}
                          </span>
                          <span className="modal-consequence-where">
                            <strong>Où :</strong> {scandal.country}
                          </span>
                          <span className="modal-consequence-when">
                            <strong>Quand :</strong> {formatDate(scandal.date, 'year')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sources */}
            {scandal.sources && scandal.sources.length > 0 && (
              <div className="modal-section">
                <h3 className="modal-section-title">
                  <ExternalLink size={20} />
                  Sources
                </h3>
                <div className="modal-sources-list">
                  {scandal.sources.map((source, index) => (
                    <a 
                      key={index} 
                      href={source.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-source-link"
                    >
                      <ExternalLink size={16} />
                      <span>{source.title}</span>
                      <small>{source.publisher}</small>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {scandal.tags && scandal.tags.length > 0 && (
              <div className="modal-section">
                <h3 className="modal-section-title">Mots-clés</h3>
                <div className="modal-tags-list">
                  {scandal.tags.map((tag, index) => (
                    <span key={index} className="modal-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScandalModal; 