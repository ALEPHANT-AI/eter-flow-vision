
import React from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';

interface DeliverableModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
}

const DeliverableModal = ({ 
  isOpen, 
  onClose, 
  image,
  title
}: DeliverableModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full bg-black-900/95 border-gold-500/20 p-0 overflow-hidden">
        {/* Visually hidden accessibility elements */}
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">
          Full resolution view of {title} deliverable example
        </DialogDescription>

        {/* Header with close button */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between bg-black-900/80 backdrop-blur-sm rounded-lg px-4 py-2">
          <div className="text-white/80 text-sm font-medium">
            {title}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black-900/80 backdrop-blur-sm border border-gold-500/20 flex items-center justify-center text-white/70 hover:text-white transition-colors ml-4"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable image container */}
        <div className="w-full h-full pt-16 overflow-y-auto">
          <div className="min-h-full flex items-start justify-center p-4">
            <img
              src={image}
              alt={`${title} deliverable example`}
              className="w-full max-w-none h-auto block"
              style={{ 
                minHeight: 'auto',
                objectFit: 'none'
              }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeliverableModal;
