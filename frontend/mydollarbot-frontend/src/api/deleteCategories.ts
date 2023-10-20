export async function deleteCategory(category: string | null): Promise<Response> {
    const response = await fetch(`/api/delete-category`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "category": category })
    });

    const data = await response.json();
    return data;    
}

