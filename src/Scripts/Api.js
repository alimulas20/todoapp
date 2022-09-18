const BASE_ENDPOINT = 'https://631b84cffae3df4dcf00df25.mockapi.io/todos/'


export const todoServerAPI = {

    getData: async () => {
        const data = await fetch(BASE_ENDPOINT)
        return data.json();
    },

    postTask: async (body) => {
        let response = await fetch(BASE_ENDPOINT, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
        return response
    },

    deleteTask: async (id) => {
        let response = await fetch(BASE_ENDPOINT + id, {
            method: 'DELETE',
        })
        return response
    },

    putTask: async (id, body) => {
        await fetch(BASE_ENDPOINT + id, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
    }


}

export const postTask = async (  content = '',isCompleted = false) => {
    const body = { isCompleted: isCompleted, content: content }
    return await todoServerAPI.postTask(body)
}

export const putTask = async (id, isCompleted, content) => {
    const body = { id: id, isCompleted: isCompleted,content: content }
    return await todoServerAPI.putTask(id, body)
}