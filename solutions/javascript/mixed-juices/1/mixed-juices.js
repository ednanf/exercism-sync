// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
      break;
    case 'Tropical Island':
      return 3;
      break;
    case 'All or Nothing':
      return 5;
      break;
    default:
      return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export const limesToCut = (wedgesNeeded, limes) => {
  // keep track outside the loop
  let wedgesCut = 0;
  let limesUsed = 0;

  while (wedgesCut < wedgesNeeded && limesUsed < limes.length) {
    const currentLime = limes[limesUsed];

    // determine wedges values based on size
    switch (currentLime) {
      case 'small':
        wedgesCut += 6;
        break;
      case 'medium':
        wedgesCut += 8;
        break;
      case 'large':
        wedgesCut += 10;
        break;
    }

    limesUsed++;
  }

  return limesUsed;
};

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export const remainingOrders = (timeLeft, orders) => {
  // use a while loop to process orders as long as she has time to START them
  while (timeLeft > 0 && orders.length > 0) {
    const currentJuice = orders.shift(); // remove the first order from the list
    
    let juiceTime = 0;
    switch (currentJuice) {
      case 'Pure Strawberry Joy':
        juiceTime = 0.5;
        break;
      case 'Energizer':
      case 'Green Garden':
        juiceTime = 1.5;
        break;
      case 'Tropical Island':
        juiceTime = 3;
        break;
      case 'All or Nothing':
        juiceTime = 5;
        break;
      default:
        juiceTime = 2.5;
    }

    timeLeft -= juiceTime;
  }

  return orders;
};
