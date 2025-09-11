function userIsLoggedin() {
    const urlParams = new URLSearchParams(window.location.search);
    let isloggedin = urlParams.get('loggedin')
    if (!isloggedin || isloggedin != "true") {
        return false
    }
    return true
}

function toggleLogin() {
    const urlParams = new URLSearchParams(window.location.search);
    let isloggedin = urlParams.get('loggedin')
    if (!isloggedin || isloggedin == "false" || isloggedin == "null") {
        urlParams.set('loggedin', true);
    }
    else {
        urlParams.set('loggedin', false);
    }
    window.location.search = urlParams;
}

function loginbutton() {
    const urlParams = new URLSearchParams(window.location.search);
    let isloggedin = urlParams.get('loggedin')

    if (isloggedin == "true") {
        return `<button class="account_box" loggedin=true onClick="toggleLogin()">
        <div class="avatar_icon"></div>
        <span>Test User</span>
        </button>`
    }
    return `<button class="account_box" loggedin=false onClick="toggleLogin()">
    <div class="login_icon"></div>
    <span>Login</span></button>`


}