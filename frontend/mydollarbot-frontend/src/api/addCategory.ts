
export async function addCategory(category: string): Promise<Response> {
  const response = await fetch('/api/add-category', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "category": category })
  });

  const data = await response.json();
  console.log("trying to add this category", data);
  return data;
}