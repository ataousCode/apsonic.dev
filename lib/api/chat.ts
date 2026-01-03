// Chat API - expects POST /api/chat and GET /api/chat/history
import type { ChatMessage, ChatResponse } from '@/lib/types/chat';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';
const CHAT_ENDPOINT = `${API_BASE_URL}/chat`;

export const sendChatMessage = async (message: string): Promise<ChatResponse> => {
  try {
    const response = await fetch(CHAT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send message: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error sending chat message:', error);
    throw error;
  }
};

export const getChatHistory = async (): Promise<ChatMessage[]> => {
  try {
    const response = await fetch(`${CHAT_ENDPOINT}/history`);
    if (!response.ok) {
      throw new Error(`Failed to fetch chat history: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching chat history:', error);
    return [];
  }
};

