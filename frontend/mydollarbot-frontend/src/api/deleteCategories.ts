export async function deleteCategory(category: string): Promise<Response> {
    const response = await fetch(`/api/delete-category`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "category": category })
    });

    const data = await response.json();
    console.log(data);
    return data;    
}

