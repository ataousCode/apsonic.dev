'use client';

import React from 'react';
import { ChatIcon, ChevronLeftIcon, RefreshIcon } from '@/components/ui/Icons';
import { colors } from '@/lib/design-tokens';
import { CHAT_CONFIG } from '@/lib/constants/chat';
import type { AIChatProps } from '@/lib/types/chat';
import { useAIChat } from '@/hooks/useAIChat';
import { cn } from '@/lib/utils';

export const AIChat: React.FC<AIChatProps> = ({ isOpen, onClose }) => {
  const {
    questions,
    inputValue,
    setInputValue,
    refreshQuestions,
    handleSend,
    handleQuestionClick,
  } = useAIChat();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-end"
      style={{
        backgroundColor: CHAT_CONFIG.colors.overlay,
        zIndex: CHAT_CONFIG.panel.zIndex,
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md h-full bg-white flex flex-col shadow-xl animate-slide-in-right"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: CHAT_CONFIG.panel.maxWidth }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-4 py-3 border-b"
          style={{ borderColor: colors.ui.border }}
        >
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
            aria-label="Close chat"
          >
            <ChevronLeftIcon className="w-5 h-5" style={{ color: colors.text.black }} />
          </button>
          <h2 className="font-medium text-base" style={{ color: colors.text.black }}>
            我的客服
          </h2>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          {/* Greeting */}
          <div className="flex items-start gap-3 mb-6">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: CHAT_CONFIG.colors.chatBubbleBg }}
            >
              <ChatIcon
                className="w-5 h-5"
                style={{ color: CHAT_CONFIG.colors.chatBubbleIcon }}
              />
            </div>
            <p className="text-base" style={{ color: colors.text.black }}>
              HI~有什么可以帮您?
            </p>
          </div>

          {/* Common Questions */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium" style={{ color: colors.text.black }}>
                常见问题
              </h3>
              <button
                onClick={refreshQuestions}
                className="flex items-center gap-1 text-xs px-2 py-1 rounded hover:bg-gray-100 transition-colors"
                style={{ color: colors.text.secondary }}
              >
                <RefreshIcon className="w-4 h-4" />
                换一批
              </button>
            </div>
            <div className="space-y-2">
              {questions.map((question) => (
                <button
                  key={question.id}
                  onClick={() => handleQuestionClick(question.text)}
                  className="w-full text-left px-4 py-2 rounded-lg border transition-colors hover:bg-gray-50"
                  style={{
                    borderColor: colors.ui.border,
                    color: colors.text.black,
                  }}
                >
                  {question.text}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input */}
        <div
          className="px-4 py-3 border-t"
          style={{ borderColor: colors.ui.border }}
        >
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="输入详细问题,为您解答!"
              className="flex-1 px-4 py-2 rounded-lg border focus:outline-none"
              style={{
                borderColor: colors.ui.border,
                color: colors.text.black,
                backgroundColor: CHAT_CONFIG.colors.inputBg,
              }}
              onFocus={(e) => {
                e.target.style.borderColor = colors.brand.green;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = colors.ui.border;
              }}
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className={cn(
                'px-6 py-2 rounded-lg font-medium transition-colors',
                !inputValue.trim() && 'opacity-50 cursor-not-allowed'
              )}
              style={{
                backgroundColor: inputValue.trim()
                  ? CHAT_CONFIG.colors.sendButtonActive
                  : CHAT_CONFIG.colors.sendButtonDisabled,
                color: '#FFFFFF',
              }}
            >
              发送
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

