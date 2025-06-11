
import React, { useState, useRef, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Move } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';

interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageZoomModal = ({ isOpen, onClose, imageSrc, imageAlt }: ImageZoomModalProps) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const zoomLevels = [0.5, 0.75, 1, 1.5, 2, 3, 4];

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case ' ':
          e.preventDefault();
          resetZoom();
          break;
        case '+':
        case '=':
          zoomIn();
          break;
        case '-':
          zoomOut();
          break;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!isOpen || !containerRef.current?.contains(e.target as Node)) return;
      
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      const newZoom = Math.max(0.1, Math.min(5, zoom + delta));
      setZoom(newZoom);
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('wheel', handleWheel);
    };
  }, [isOpen, zoom, onClose]);

  const zoomIn = () => {
    const currentIndex = zoomLevels.findIndex(level => level >= zoom);
    const nextIndex = Math.min(currentIndex + 1, zoomLevels.length - 1);
    setZoom(zoomLevels[nextIndex]);
  };

  const zoomOut = () => {
    const currentIndex = zoomLevels.findIndex(level => level >= zoom);
    const prevIndex = Math.max(currentIndex - 1, 0);
    setZoom(zoomLevels[prevIndex]);
  };

  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoom <= 1) return;
    
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/95 backdrop-blur-sm" />
      <DialogContent 
        className="max-w-[95vw] max-h-[95vh] w-full h-full bg-transparent border-none p-0 focus:outline-none"
        style={{ boxShadow: 'none' }}
      >
        {/* Controls */}
        <div className="absolute top-4 left-4 z-50 flex gap-2">
          <div className="glass-strong rounded-lg p-2 flex items-center gap-2">
            <button 
              onClick={zoomOut}
              disabled={zoom <= 0.5}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ZoomOut className="w-4 h-4 text-white" />
            </button>
            
            <span className="text-white text-sm font-medium min-w-[60px] text-center">
              {Math.round(zoom * 100)}%
            </span>
            
            <button 
              onClick={zoomIn}
              disabled={zoom >= 4}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ZoomIn className="w-4 h-4 text-white" />
            </button>
            
            <button 
              onClick={resetZoom}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <RotateCcw className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-3 rounded-lg glass-strong hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Zoom Hint */}
        {zoom > 1 && (
          <div className="absolute bottom-4 left-4 z-50 glass-strong rounded-lg p-3 flex items-center gap-2">
            <Move className="w-4 h-4 text-gold-400" />
            <span className="text-white text-sm">Arraste para navegar</span>
          </div>
        )}

        {/* Keyboard Shortcuts */}
        <div className="absolute bottom-4 right-4 z-50 glass-strong rounded-lg p-3">
          <div className="text-white text-xs space-y-1">
            <div><kbd className="bg-white/20 px-1 rounded">ESC</kbd> Fechar</div>
            <div><kbd className="bg-white/20 px-1 rounded">Space</kbd> Reset</div>
            <div><kbd className="bg-white/20 px-1 rounded">+/-</kbd> Zoom</div>
          </div>
        </div>

        {/* Image Container */}
        <div 
          ref={containerRef}
          className="w-full h-full flex items-center justify-center overflow-hidden cursor-move"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
        >
          <img
            ref={imageRef}
            src={imageSrc}
            alt={imageAlt}
            className="max-w-none transition-transform duration-200 select-none"
            style={{
              transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
              imageRendering: 'crisp-edges',
              filter: 'contrast(1.05) saturate(1.1)'
            }}
            draggable={false}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageZoomModal;
