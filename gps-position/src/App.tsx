import React from 'react';
import { useGeolocation } from './hooks/useGeolocation';
import { Header } from './components/Header';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { PositionDisplay } from './components/PositionDisplay';

function App() {
  const { position, error, loading } = useGeolocation();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto p-6">
        <Header />

        <div className="bg-white rounded-xl shadow-lg p-6">
          {loading && <LoadingSpinner />}
          {error && <ErrorMessage error={error} />}
          {position && <PositionDisplay {...position} />}
        </div>
      </div>
    </div>
  );
}

export default App;