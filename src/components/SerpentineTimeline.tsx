import React, { useState, useEffect } from 'react';
import { PoliticalScandal } from '../types/scandal';
import { formatDate } from '../utils/formatters';
import ScandalModal from './ScandalModal';
import PersonFilterConfirmation from './PersonFilterConfirmation';
import OnboardingModal from './OnboardingModal';
import '../styles/serpentine-timeline.css';
import '../styles/modal.css';
import '../styles/person-filter.css';

interface SerpentineTimelineProps {
  title: string;
  subtitle: string;
  scandals: PoliticalScandal[];
  onTagClick?: (tag: string) => void;
  onPersonClick?: (person: string, includeOtherPersons: boolean) => void;
}

const SerpentineTimeline: React.FC<SerpentineTimelineProps> = ({
  title,
  subtitle,
  scandals,
  onTagClick,
  onPersonClick
}) => {
  const [selectedScandal, setSelectedScandal] = useState<PoliticalScandal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPersonFilterOpen, setIsPersonFilterOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<string>('');
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('onboarding-seen');
    if (!hasSeenOnboarding) {
      setShowOnboarding(true);
    }
  }, []);

  const handleCloseOnboarding = () => {
    setShowOnboarding(false);
  };

  const handleScandalClick = (scandal: PoliticalScandal) => {
    setSelectedScandal(scandal);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedScandal(null);
  };

  const handlePersonClick = (person: string) => {
    setSelectedPerson(person);
    setIsPersonFilterOpen(true);
  };

  const handlePersonFilterConfirm = (includeOther: boolean) => {
    onPersonClick?.(selectedPerson, includeOther);
    setIsPersonFilterOpen(false);
    setSelectedPerson('');
  };

  const handlePersonFilterCancel = () => {
    setIsPersonFilterOpen(false);
    setSelectedPerson('');
  };
  
  // Créer le SVG de la ligne serpentine - CENTRALE et VISIBLE
  const createSerpentinePath = (itemCount: number) => {
    const height = itemCount * 120 + 100;
    const centerX = 50; // Centre à 50% du viewBox
    const amplitude = 25; // Amplitude des courbes (25% vers chaque côté)
    
    let path = `M ${centerX} 60`; // Point de départ
    
    for (let i = 0; i < itemCount - 1; i++) {
      const currentY = 60 + (i * 120);
      const nextY = currentY + 120;
      const midY = currentY + 60;
      
      // Alternance des courbes
      if (i % 2 === 0) {
        // Courbe vers la droite puis retour au centre
        path += ` Q ${centerX + amplitude} ${midY} ${centerX} ${nextY}`;
      } else {
        // Courbe vers la gauche puis retour au centre  
        path += ` Q ${centerX - amplitude} ${midY} ${centerX} ${nextY}`;
      }
    }
    
    return { path, height };
  };

  const { path: serpentinePath, height: svgHeight } = createSerpentinePath(scandals.length);

  const getSeverityClass = (severity: number): string => {
    return `severity-${severity}`;
  };

  const getSeverityLabel = (severity: number): string => {
    const labels = {
      1: 'Mineur', 2: 'Modéré', 3: 'Grave', 4: 'Très Grave', 5: 'Critique'
    };
    return labels[severity as keyof typeof labels] || 'Inconnu';
  };

  const formatAmount = (amount: number, currency: string = 'EUR'): string => {
    if (amount >= 1000000000) {
      return `${(amount / 1000000000).toFixed(1)}Md ${currency}`;
    } else if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M ${currency}`;
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(0)}K ${currency}`;
    }
    return `${amount} ${currency}`;
  };

  const TimelineItem: React.FC<{
    scandal: PoliticalScandal;
    index: number;
    onScandalClick: (scandal: PoliticalScandal) => void;
    onPersonClick: (person: string) => void;
    onTagClick?: (tag: string) => void;
  }> = ({ scandal, index, onScandalClick, onPersonClick, onTagClick }) => {
    const itemRef = React.useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -20px 0px',
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5]
        }
      );

      const currentRef = itemRef.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, []);

    return (
      <div
        className={`timeline-item timeline-fadein${isVisible ? ' visible' : ''}`}
        ref={itemRef}
        onClick={() => onScandalClick(scandal)}
        title={`Cliquez pour voir les détails de ${scandal.title}`}
      >
        <div className="timeline-content">
          <div className="timeline-date">{formatDate(scandal.date, 'full')}</div>
          <div className="timeline-title">{scandal.title}</div>
          <div className="timeline-person">
            <span
              className="person-clickable"
              onClick={e => {
                e.stopPropagation();
                onPersonClick(scandal.mainPerson);
              }}
            >
              {scandal.mainPerson}
            </span> - {scandal.position}
          </div>
          <div className="timeline-details">{scandal.politicalParty} | {scandal.country}</div>
          {typeof scandal.amountInvolved === 'number' && scandal.amountInvolved > 0 && (
            <div className="timeline-amount">
              {formatAmount(scandal.amountInvolved, scandal.currency)}
            </div>
          )}
          {scandal.tags && scandal.tags.length > 0 && (
            <div className="timeline-tags">
              {scandal.tags.slice(0, 3).map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="timeline-tag"
                  onClick={e => {
                    e.stopPropagation();
                    onTagClick?.(tag);
                  }}
                >
                  {tag}
                </span>
              ))}
              {scandal.tags.length > 3 && (
                <span className="timeline-tag-more">+{scandal.tags.length - 3}</span>
              )}
            </div>
          )}
          <div className="timeline-badges">
            {scandal.consequences && scandal.consequences.length > 0 && (
              <span className="consequence-badge">
                {scandal.consequences[0]}
              </span>
            )}
            <span className={`status-badge ${scandal.resolved ? 'resolved' : 'ongoing'}`}>{scandal.resolved ? 'Jugé' : 'En instance'}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="serpentine-timeline-content">
      {/* Timeline Container */}
      <div className="timeline-container">
        {/* Ligne serpentine SVG */}
        <svg 
          className="serpentine-line" 
          height={svgHeight} 
          viewBox={`0 0 100 ${svgHeight}`}
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%' }}
        >
          <defs>
            <linearGradient id="frenchFlagRepeating" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#0055A4" />
              <stop offset="16.66%" stopColor="#0055A4" />
              <stop offset="33.33%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="66.66%" stopColor="#EF4135" />
              <stop offset="83.33%" stopColor="#EF4135" />
              <stop offset="100%" stopColor="#0055A4" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values={`0,0; 0,${svgHeight * 2}; 0,0`}
                dur="15s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
          <path
            d={serpentinePath}
            stroke="url(#frenchFlagRepeating)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.9"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
          />
        </svg>

        {/* Éléments de la timeline */}
        {scandals.map((scandal, index) => (
          <TimelineItem
            key={`${scandal.title}-${index}`}
            scandal={scandal}
            index={index}
            onScandalClick={handleScandalClick}
            onPersonClick={handlePersonClick}
            onTagClick={onTagClick}
          />
        ))}
      </div>

      {/* Modal pour les détails du scandale */}
      <ScandalModal 
        scandal={selectedScandal}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Modal pour la confirmation de la personne */}
      <PersonFilterConfirmation 
        isOpen={isPersonFilterOpen}
        personName={selectedPerson}
        onConfirm={handlePersonFilterConfirm}
        onCancel={handlePersonFilterCancel}
      />

      {/* Modal d'onboarding */}
      <OnboardingModal
        isOpen={showOnboarding}
        onClose={handleCloseOnboarding}
      />
    </div>
  );
};

export default SerpentineTimeline; 