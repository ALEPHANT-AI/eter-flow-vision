
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

        {/* Compact header with close button */}
        <div className="absolute top-2 left-2 right-2 z-20 flex items-center justify-between bg-black-900/80 backdrop-blur-sm rounded-lg px-3 py-2">
          <div className="text-white/80 text-xs font-medium">
            {title}
          </div>
          <button
            onClick={onClose}
            className="w-6 h-6 rounded-full bg-black-900/80 backdrop-blur-sm border border-gold-500/20 flex items-center justify-center text-white/70 hover:text-white transition-colors ml-2"
          >
            <X className="w-3 h-3" />
          </button>
        </div>

        {/* Full-width scrollable image container */}
        <div className="w-full h-full pt-10 overflow-y-auto">
          <img
            src={image}
            alt={`${title} deliverable example`}
            className="w-full h-auto block"
            style={{ 
              maxWidth: 'none',
              objectFit: 'none'
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeliverableModal;
