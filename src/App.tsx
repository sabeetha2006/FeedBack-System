import { useState } from 'react';
import { MessageSquare, BarChart3 } from 'lucide-react';
import { FeedbackForm } from './components/FeedbackForm';
import { AdminDashboard } from './components/AdminDashboard';

function App() {
  const [activeView, setActiveView] = useState<'form' | 'dashboard'>('form');

  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">FeedbackHub</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveView('form')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeView === 'form'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Feedback Form
                </span>
              </button>
              <button
                onClick={() => setActiveView('dashboard')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeView === 'dashboard'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Dashboard
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activeView === 'form' ? <FeedbackForm /> : <AdminDashboard />}
    </div>
  );
}

export default App;
