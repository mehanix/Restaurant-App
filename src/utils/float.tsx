export const specialRound = (toBeRounded: number): number => {
  const whole = Math.floor(toBeRounded)
  const decimal = toBeRounded - whole
  // I want to be able to round around 0.5 as well
  const roundWith = Math.round(2 * decimal) * 0.5
  return whole + roundWith
}