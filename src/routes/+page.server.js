export const actions = {
    start: async ({ request }) => {
        const formData = await request.formData(); 

        const username = formData.get('username')
        const password = formData.get('password');

        console.log(username, password);

        return {
            user: username,
            started: true
        }
    },
    stop: async ({ request }) => {
        return {
            started: false
        }
    }
}