let token = 'a0b7f16319843d34b7bff78cc8994af9719942d50456817b';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://cocktail-flask.herokuapp.com/api/cocktails`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    create: async(data: any = {}) => {
        const response = await fetch(`https://cocktail-flask.herokuapp.com/api/cocktails`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
	},
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`http://127.0.0.1:5000/api/cocktails/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },
    delete: async(id:string) => {
    const response = await fetch(`https://cocktail-flask.herokuapp.com/api/cocktails/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `Bearer ${token}`
        }
    })
    }
}
