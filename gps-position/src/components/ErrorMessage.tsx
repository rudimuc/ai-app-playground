import React from 'react';
import { AlertCircle } from 'lucide-react';
import type { GeolocationError } from '../types/position';

interface ErrorMessageProps {
  error: GeolocationError;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  <div className="flex items-center space-x-3 text-red-500 bg-red-50 p-4 rounded-lg">
    <AlertCircle className="w-6 h-6" />
    <p>{error.message}</p>
  </div>
);