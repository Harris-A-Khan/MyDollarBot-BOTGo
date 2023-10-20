export async function updateCategoryBudget(user_id: string, category: string, new_budget: string): Promise<Response> {
    const response = await fetch('/api/update-category-budget', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "user_id": user_id,
        "category": category,
        "new_budget": new_budget
      })
    });
  
    const data = await response.json();
    console.log("Trying to update category budget", data);
    return data;
  }
  