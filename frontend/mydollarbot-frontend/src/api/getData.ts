export async function getData(): Promise<Response> {
  const data = await fetch('/api/dummyData')
  return data;
}

export async function getBudgetData(): Promise<Response> {
  const data = await fetch('/api/all-budget-data')
  return data;
}

export async function getCategoryData(): Promise<Response> {
  const data = await fetch('/api/all-categories')
  return data;
}
