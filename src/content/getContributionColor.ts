export const getContributionColor = (value: number): string => {
  if (value < 40) return 'bg-red-400'
  if (value < 70) return 'bg-yellow-300'
  return 'bg-green-600'
}