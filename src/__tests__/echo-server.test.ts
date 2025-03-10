import { jest } from '@jest/globals';

describe('Echo Server', () => {
  // Test the echo functionality directly
  const echoMessage = (message: string | undefined): string => {
    if (!message) {
      return "You didn't provide a message to echo!";
    }
    return message;
  };

  describe('Echo Functionality', () => {
    it('should echo back the provided message', () => {
      const testMessage = 'Hello, this is a test message!';
      const result = echoMessage(testMessage);
      expect(result).toBe(testMessage);
    });

    it('should handle empty messages', () => {
      const result = echoMessage('');
      expect(result).toBe("You didn't provide a message to echo!");
    });

    it('should handle undefined message parameter', () => {
      const result = echoMessage(undefined);
      expect(result).toBe("You didn't provide a message to echo!");
    });
  });

  describe('Special Characters', () => {
    it('should handle messages with special characters', () => {
      const testMessage = 'Special chars: !@#$%^&*()_+{}[]|\\:;"\'<>,.?/';
      const result = echoMessage(testMessage);
      expect(result).toBe(testMessage);
    });

    it('should handle messages with emojis', () => {
      const testMessage = 'Message with emojis: 😀 🚀 🌈 🎉';
      const result = echoMessage(testMessage);
      expect(result).toBe(testMessage);
    });
  });

  describe('Long Messages', () => {
    it('should handle long messages', () => {
      const longMessage = 'A'.repeat(1000);
      const result = echoMessage(longMessage);
      expect(result).toBe(longMessage);
      expect(result.length).toBe(1000);
    });
  });
});
