// Chat component types
export interface CommonQuestion {
  id: string;
  text: string;
}

export interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

// Backend integration types (for future API)
export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export interface ChatResponse {
  message: string;
  suggestions?: string[];
}

