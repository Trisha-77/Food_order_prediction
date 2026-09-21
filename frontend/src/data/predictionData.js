export const formOptions = {
  location: ['Downtown', 'Uptown', 'Suburbs', 'City Center'],
  timeOfDay: ['Morning', 'Afternoon', 'Evening', 'Night'],
  previousOrder: ['Pizza', 'Burger', 'Salad', 'Biryani', 'Pasta', 'Sandwich'],
  preferredCuisine: ['Italian', 'Indian', 'Chinese', 'American'],
  orderFrequency: ['Low', 'Medium', 'High'],
};

export const foodEmojis = {
  Pizza: '🍕',
  Burger: '🍔',
  Salad: '🥗',
  Biryani: '🍛',
  Pasta: '🍝',
  Sandwich: '🥪',
};

// Static frontend representations of the project's 5,000-record synthetic dataset.
export const foodOrders = [
  { food: 'Biryani', orders: 1252 }, { food: 'Salad', orders: 1244 },
  { food: 'Pizza', orders: 643 }, { food: 'Pasta', orders: 617 },
  { food: 'Burger', orders: 628 }, { food: 'Sandwich', orders: 616 },
];

export const timeOrders = [
  { time: 'Morning', orders: 1247 }, { time: 'Afternoon', orders: 1260 },
  { time: 'Evening', orders: 1253 }, { time: 'Night', orders: 1240 },
];

export const cuisineOrders = [
  { cuisine: 'Italian', Pizza: 643, Pasta: 617, Biryani: 0, Salad: 0, Burger: 0, Sandwich: 0 },
  { cuisine: 'Indian', Pizza: 0, Pasta: 0, Biryani: 1252, Salad: 0, Burger: 0, Sandwich: 0 },
  { cuisine: 'Chinese', Pizza: 0, Pasta: 0, Biryani: 0, Salad: 1244, Burger: 0, Sandwich: 0 },
  { cuisine: 'American', Pizza: 0, Pasta: 0, Biryani: 0, Salad: 0, Burger: 628, Sandwich: 616 },
];

export const locationOrders = [
  { location: 'Downtown', orders: 1264 }, { location: 'Uptown', orders: 1229 },
  { location: 'Suburbs', orders: 1241 }, { location: 'City Center', orders: 1266 },
];

export const pieColors = ['#f97316', '#eab308', '#22c55e', '#ef4444', '#8b5cf6', '#0ea5e9'];
