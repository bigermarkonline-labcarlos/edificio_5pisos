/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useState} from 'react';

export default function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({prompt: message}),
      });

      const data = await res.json();
      if (data.response) {
        setResponse(data.response);
      } else {
        setResponse('Error: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      setResponse('Request failed: ' + err);
    } finally {
      setLoading(false);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
          AI Studio React Template
        </h1>

        {/* Chat Interface */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md">
          {response && (
            <div className="mb-4 p-4 bg-indigo-50 rounded-lg">
              <p className="text-indigo-800">{response}</p>
            </div>
          )}

          {/* Input Area */}
          <div className="mt-4 flex gap-2">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message for AI..."
              className="flex-1 rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              className="bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center text-sm text-gray-500">
          <p>Powered by Google Gemini AI</p>
          <p className="mt-2">Get your API key at <a href="https://aistudio.google.com/app/apikey" className="underline text-indigo-600 hover:text-indigo-500">aistudio.google.com</a></p>
        </div>
      </div>
    </div>
  );
}
