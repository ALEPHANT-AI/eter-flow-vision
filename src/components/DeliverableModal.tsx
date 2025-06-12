
import React from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';

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
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full bg-black-900/95 border-gold-500/20 p-0">
        {/* Header */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
          <div className="text-white/80 text-sm font-medium">
            {title}
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black-900/80 backdrop-blur-sm border border-gold-500/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Image Container */}
        <div className="w-full h-full pt-16 pb-4 px-4">
          <ScrollArea className="w-full h-full">
            <div className="w-full">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeliverableModal;
