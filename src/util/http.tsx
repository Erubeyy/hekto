export async function fetchAvailableFilters() {
  const response = await fetch('http://localhost:3000/filters');
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch filters');
  }

  return resData;
}

export async function fetchAvailableProducts() {
  const response = await fetch('http://localhost:3000/products');
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch filters');
  }

  return resData;
}
