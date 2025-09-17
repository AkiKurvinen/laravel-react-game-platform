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
async getUserInfo() {
    const resp = await fetch(`/api/userinfo`);
    const contentType = resp.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
        return await resp.json();
    } else {
        // Handle error or unauthenticated case
        return null;
    }
    }
}