// AI Chat component constants
export const CHAT_CONFIG = {
  // Layout
  panel: {
    maxWidth: '400px',
    zIndex: 100,
  },
  
  // Colors
  colors: {
    overlay: 'rgba(0, 0, 0, 0.5)',
    chatBubbleBg: '#E3F2FD',
    chatBubbleIcon: '#2196F3',
    inputBg: '#F9FAFB',
    sendButtonActive: '#374151',
    sendButtonDisabled: '#9CA3AF',
  },
  
  // Display
  questionsPerPage: 4,
} as const;

