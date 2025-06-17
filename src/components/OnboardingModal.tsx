/**
 * MODAL D'ONBOARDING - GUIDE D'UTILISATION
 * 
 * POPUP EXPLICATIVE qui s'affiche lors de la première visite
 * 
 * FONCTIONNALITÉS :
 * - Affichage automatique au premier chargement
 * - Stockage localStorage pour ne plus afficher
 * - Guide étape par étape des fonctionnalités
 * - Design glassmorphism cohérent
 * - Fermeture par bouton ou overlay
 * 
 * CONTENU EXPLIQUÉ :
 * - Navigation dans la timeline
 * - Système de filtrage
 * - Statistiques dynamiques
 * - Interactions avec les cartes
 * - Tags et personnes cliquables
 * 
 * DESIGN :
 * - Glassmorphism avec backdrop-filter
 * - Icônes explicatives
 * - Animations d'entrée fluides
 * - Responsive mobile/desktop
 */

import React from 'react';
import { X, Filter, BarChart3, MousePointer, Eye, Info } from 'lucide-react';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDontShowAgain = () => {
    localStorage.setItem('onboarding-seen', 'true');
    onClose();
  };

  return (
    <div className="onboarding-overlay" onClick={handleOverlayClick}>
      <div className="onboarding-modal">
        {/* Header */}
        <div className="onboarding-header">
          <div className="onboarding-title">
            <Info className="onboarding-icon" />
            <h2>Bienvenue sur Transparence Politique</h2>
          </div>
          <button className="onboarding-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="onboarding-content">
          <p className="onboarding-intro">
            Découvrez comment naviguer dans cette chronologie interactive des scandales politiques français.
          </p>

          <div className="onboarding-features">
            {/* Timeline Navigation */}
            <div className="onboarding-feature">
              <div className="feature-icon">
                <Eye size={20} />
              </div>
              <div className="feature-content">
                <h3>Navigation Timeline</h3>
                <p>Cliquez sur les cartes pour voir les détails complets de chaque scandale.</p>
              </div>
            </div>

            {/* Filtrage */}
            <div className="onboarding-feature">
              <div className="feature-icon">
                <Filter size={20} />
              </div>
              <div className="feature-content">
                <h3>Système de Filtres</h3>
                <p>Utilisez le bouton "Filtres" pour trier par personne, parti, type de scandale ou période.</p>
              </div>
            </div>

            {/* Statistiques */}
            <div className="onboarding-feature">
              <div className="feature-icon">
                <BarChart3 size={20} />
              </div>
              <div className="feature-content">
                <h3>Statistiques Dynamiques</h3>
                <p>Les statistiques se mettent à jour automatiquement selon vos filtres.</p>
              </div>
            </div>

            {/* Interactions */}
            <div className="onboarding-feature">
              <div className="feature-icon">
                <MousePointer size={20} />
              </div>
              <div className="feature-content">
                <h3>Éléments Interactifs</h3>
                <p>Les noms et éléments colorés sont cliquables pour filtrer automatiquement.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="onboarding-footer">
          <button className="onboarding-btn secondary" onClick={handleDontShowAgain}>
            Ne plus afficher
          </button>
          <button className="onboarding-btn primary" onClick={onClose}>
            Commencer l'exploration
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal; 