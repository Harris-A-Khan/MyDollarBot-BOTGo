export async function getDummyData(): Promise<Response> {
  const data = await fetch('/api/dummyData')
  return data;
}

export async function getAllBudgetData(userId: string): Promise<Response> {
  const response = await fetch(`/api/all-budget-data?user_id=${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();
  return data;
}

export async function getAllCategories(): Promise<Response> {
  const response = await fetch(`/api/all-categories`);

  const data = await response.json();
  return data;
}
