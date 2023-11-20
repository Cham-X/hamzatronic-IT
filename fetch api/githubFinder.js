class Github{
    constructor() {
        this.client_id = "755214ee50b7edd9fd60";
        this.client_secret = "56a730f5c15dbc2c961dadff66c6251344abf01c"
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}

