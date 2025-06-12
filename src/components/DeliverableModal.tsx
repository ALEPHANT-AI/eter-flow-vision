
import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from './ui/dialog';

interface DeliverableModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

const DeliverableModal = ({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onPrevious, 
  onNext 
}: DeliverableModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full bg-black-900/95 border-gold-500/20 p-0">
        {/* Header */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
          <div className="text-white/80 text-sm">
            {currentIndex + 1} of {images.length}
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black-900/80 backdrop-blur-sm border border-gold-500/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black-900/80 backdrop-blur-sm border border-gold-500/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black-900/80 backdrop-blur-sm border border-gold-500/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image */}
        <div className="w-full h-full flex items-center justify-center p-16">
          <img
            src={images[currentIndex]}
            alt={`Deliverable example ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeliverableModal;
