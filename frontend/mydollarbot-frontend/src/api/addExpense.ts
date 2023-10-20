export async function addRecord(user_id: string, date: string, category: string, amount: string): Promise<Response> {
    const response = await fetch('/api/add-record', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "user_id": user_id,
        "date": date,
        "category": category,
        "amount": amount
      })
    });
  
    const data = await response.json();
    return data;
  }
  