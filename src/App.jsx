import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FoundersSection from './components/FoundersSection';
import VirtualAgentShowcase from './components/VirtualAgentShowcase';
import RoiCalculator from './components/RoiCalculator';
import KnowledgeBaseTraining from './components/KnowledgeBaseTraining';
import PricingSection from './components/PricingSection';
import FloatingAgentWidget from './components/FloatingAgentWidget';
import EnquiryModal from './components/EnquiryModal';
import LegalModal from './components/LegalModal';
import Footer from './components/Footer';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalDefaultTab, setLegalDefaultTab] = useState('privacy');

  const scrollToDemo = () => {
    const el = document.getElementById('virtual-agent-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLegalModal = (tab = 'privacy') => {
    setLegalDefaultTab(tab);
    setIsLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-apple selection:bg-sky-100 selection:text-sky-900">
      
      {/* Navigation */}
      <Navbar 
        onOpenEnquiryModal={() => setIsEnquiryModalOpen(true)} 
        onOpenLegalModal={openLegalModal}
      />

      {/* Hero Section */}
      <Hero 
        onOpenEnquiryModal={() => setIsEnquiryModalOpen(true)} 
        onScrollToDemo={scrollToDemo} 
      />

      {/* Co-Founders Section (Khaylen & Ahkeel) */}
      <FoundersSection />

      {/* Virtual Agent Demo (Sales & Booking Capabilities) */}
      <VirtualAgentShowcase />

      {/* Interactive Revenue Loss Calculator */}
      <RoiCalculator onOpenEnquiryModal={() => setIsEnquiryModalOpen(true)} />

      {/* Knowledge Base Training */}
      <KnowledgeBaseTraining />

      {/* Single Flat-Fee Pricing Section (€550 setup + €149/mo) */}
      <PricingSection onOpenEnquiryModal={() => setIsEnquiryModalOpen(true)} />

      {/* Persistent Floating Virtual Agent */}
      <FloatingAgentWidget onOpenEnquiryModal={() => setIsEnquiryModalOpen(true)} />

      {/* Enquiry Lead Capture Modal */}
      <EnquiryModal 
        isOpen={isEnquiryModalOpen} 
        onClose={() => setIsEnquiryModalOpen(false)} 
      />

      {/* Privacy Policy, Terms & Same-Day Cancellation Modal */}
      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        defaultTab={legalDefaultTab}
      />

      {/* Global Soft Blue Footer */}
      <Footer 
        onOpenEnquiryModal={() => setIsEnquiryModalOpen(true)} 
        onOpenLegalModal={openLegalModal}
      />

    </div>
  );
}

