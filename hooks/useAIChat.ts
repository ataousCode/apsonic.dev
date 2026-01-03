// AI Chat business logic hook
import { useState } from 'react';
import { COMMON_QUESTIONS } from '@/lib/data/chat';
import { CHAT_CONFIG } from '@/lib/constants/chat';
import { sendChatMessage } from '@/lib/api/chat';
import type { CommonQuestion } from '@/lib/types/chat';

export const useAIChat = () => {
  const [questions, setQuestions] = useState<CommonQuestion[]>(
    COMMON_QUESTIONS.slice(0, CHAT_CONFIG.questionsPerPage)
  );
  const [inputValue, setInputValue] = useState('');

  const refreshQuestions = () => {
    const shuffled = [...COMMON_QUESTIONS].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, CHAT_CONFIG.questionsPerPage));
  };

  const sendMessage = async (message: string) => {
    try {
      await sendChatMessage(message);
      return true;
    } catch (error) {
      console.error('Failed to send message:', error);
      return false;
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return false;
    const success = await sendMessage(inputValue.trim());
    if (success) {
      setInputValue('');
    }
    return success;
  };

  const handleQuestionClick = async (question: string) => {
    return await sendMessage(question);
  };

  return {
    questions,
    inputValue,
    setInputValue,
    refreshQuestions,
    handleSend,
    handleQuestionClick,
  };
};

