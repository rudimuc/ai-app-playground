import React from 'react';
import { Compass } from 'lucide-react';

export const Header: React.FC = () => (
  <div className="text-center mb-8">
    <Compass className="w-12 h-12 text-blue-500 mx-auto mb-2" />
    <h1 className="text-2xl font-bold text-gray-800">GPS Position Tracker</h1>
  </div>
);