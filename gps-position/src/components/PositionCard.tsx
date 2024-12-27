import React from 'react';
import type { Position } from '../types/position';
import { formatCoordinate } from '../utils/formatters';

interface PositionCardProps {
  label: string;
  value: number;
  unit?: string;
  icon?: React.ReactNode;
}

export const PositionCard: React.FC<PositionCardProps> = ({ 
  label, 
  value, 
  unit = '°',
  icon 
}) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="text-lg font-medium">
          {formatCoordinate(value)}{unit}
        </div>
      </div>
      {icon}
    </div>
  </div>
);