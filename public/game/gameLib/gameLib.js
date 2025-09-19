class gameApi {

    constructor(gameName) {
        this.gameName = gameName;
    }

    async updateLeaderboard(metric) {
        const resp = await fetch(`/api/leaderboard/${this.gameName}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "metric": metric,
            }),
        });

        return resp.ok ? true : (await resp.json()).message;
    }

    async saveGamestate(data) {
        const dataString = JSON.stringify(data);
        const resp = await fetch(`/api/gamestate/${this.gameName}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "data": dataString,
            }),
        });

        return resp.ok ? true : (await resp.json()).message;
    }

    async getGamestate() {
        const resp = await fetch(`/api/gamestate/${this.gameName}`);
        const respJson = await resp.json();
        return JSON.parse(respJson.length > 0 ? respJson[0].data : null);
    }

    async getCsrfToken() {
        return fetch('/api/csrf-token')
            .then(resp => resp.ok ? resp.json() : null)
            .catch(() => null);
    }

    async getUserInfo() {
        return fetch(`/api/userinfo`)
            .then(resp => resp.ok ? resp.json() : null)
            .catch(() => null);
    }

    async login(data, setError) {
        const csrf = await this.getCsrfToken();
        const csrfToken = csrf && csrf.csrf_token ? csrf.csrf_token : null;
        console.log("CSRF Token:", csrfToken);
        return fetch("/api/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                ...(csrfToken ? { 'X-CSRF-TOKEN': csrfToken } : {})
            },
            body: JSON.stringify({
                username: data.username,
                password: data.password,
            }),
        })
            .then(async resp => {
                const respJson = await resp.json();
                if (respJson && respJson.message && respJson.user) {
                    console.log("resp ", respJson.message, respJson.user);
                    return respJson.user;
                }
                else if (respJson && respJson.message) {
                    return respJson
                }
                return null;
            })
            .catch(() => null);
    }

    async register(data, setError) {
        const csrf = await this.getCsrfToken();
        const csrfToken = csrf && csrf.csrf_token ? csrf.csrf_token : null;
        return fetch("/api/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                ...(csrfToken ? { 'X-CSRF-TOKEN': csrfToken } : {})
            },
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                password: data.password,
            }),
        })
            .then(async resp => {
                const respJson = await resp.json();
                if (respJson && respJson.message && respJson.user) {
                    console.log("resp ", respJson.message, respJson.user);
                    return respJson.user;
                }
                else if (respJson) {
                    return respJson
                }
                return null;
            })
            .catch(() => null);
    }
}