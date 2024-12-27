export const formatCoordinate = (value: number): string => {
  return value.toFixed(6);
};

export const formatAccuracy = (meters: number): string => {
  return meters.toFixed(1);
};

export const formatTimestamp = (timestamp: number): string => {
  return new Date(timestamp).toLocaleString();
};