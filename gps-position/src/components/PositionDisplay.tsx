import React from 'react';
import { MapPin, Navigation2 } from 'lucide-react';
import type { Position } from '../types/position';
import { PositionCard } from './PositionCard';
import { formatTimestamp } from '../utils/formatters';

interface PositionDisplayProps extends Position {}

export const PositionDisplay: React.FC<PositionDisplayProps> = ({
  latitude,
  longitude,
  accuracy,
  timestamp
}) => (
  <div className="space-y-4">
    <div className="flex items-center space-x-2 text-xl font-semibold">
      <MapPin className="w-6 h-6 text-blue-500" />
      <span>Current Position</span>
    </div>
    
    <div className="grid grid-cols-2 gap-4">
      <PositionCard label="Latitude" value={latitude} />
      <PositionCard label="Longitude" value={longitude} />
    </div>

    <PositionCard 
      label="Accuracy" 
      value={accuracy} 
      unit=" meters"
      icon={<Navigation2 className="w-6 h-6 text-blue-500" />}
    />

    <div className="text-sm text-gray-500">
      Last updated: {formatTimestamp(timestamp)}
    </div>
  </div>
);