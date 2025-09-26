const form_login_handler = async (formElem) => {
    const username_txt = formElem.getChildByID('login_username');
    const login_password = formElem.getChildByID('login_password');
    try {
        if (username_txt.value == '' || login_password.value == '') {
            throw new Error("Username and password are required");
        };

        const res = await loginUser(username_txt.value, login_password.value);
        if (!res) {
            throw new Error("Login failed - no response");
        }

        if (res.message) {
            throw new Error(res.message);
        }

        // Only remove login form if login succeeds
        formElem.removeListener('click');
        formElem.setVisible(false);

        return res

    } catch (err) {
        const login_err = formElem.getChildByID('login_err');
        login_err.innerText = err.message;
        document.getElementById('login_err').innerText = err.message;
        console.error("Login error:", err);
    }
}

const form_join_handler = async (formElem) => {
    const join_username = formElem.getChildByID('join_username');
    const join_email = formElem.getChildByID('join_email');
    const join_password = formElem.getChildByID('join_password');
    const join_repeatpassword = formElem.getChildByID('join_repeatpassword');
    try {
        if (join_username.value == '' || join_email.value == '' || join_password.value == '' || join_repeatpassword.value == '') {
            throw new Error("All fields are required");
        }
        if (join_password.value != join_repeatpassword.value) {
            throw new Error("Passwords do not match");
        }
        const res = await createAccount(join_username.value, join_email.value, join_password.value);
        if (!res) {
            throw new Error("Register failed");
        }
        if (!res.id) {
            throw new Error(res.username || res.email || res.password || res.message);
        }

        // Registration success, now login  
        const loginres = await loginUser(join_username.value, join_password.value);
        if (!loginres) {
            throw new Error("Login after register failed");
        }
        const userinfo = await autoLogin();
        formElem.removeListener('click');
        formElem.setVisible(false);
        return userinfo

    } catch (err) {
        const join_err = formElem.getChildByID('join_err');
        join_err.innerText = err.message;
        document.getElementById('join_err').innerText = err.message;
        console.error("Register error:", err);
    }
}

const form_skip_handler = async (formElem) => {
    formElem.removeListener('click');
    formElem.setVisible(false);
    const guest_user = { username: '[guest]', id: 0 };
    return guest_user
}

const autoLogin = async () => {
    const instance = new gameApi("button-clicker");
    const userinfo = (await instance.getUserInfo());
    return userinfo;
}

const loginUser = async (username_txt, login_password) => {
    const instance = new gameApi("button-clicker");
    const userinfo = await instance.login({ username: username_txt, password: login_password });
    return userinfo;
}

const createAccount = async (username_txt, email_txt, login_password) => {
    const instance = new gameApi("button-clicker");
    const userinfo = (await instance.register({ username: username_txt, email: email_txt, password: login_password }));
    return userinfo;
}

const logoutUser = async () => {
    const instance = new gameApi("button-clicker");
    const reponse = (await instance.logout());
    return reponse;
}

function loginbutton(loggedin) {
    if (loggedin) {
        return `<button id="login_btn" onClick="logoutUser()">Logout</button>`
    }
    return `<a href="../login">Login</a>`

}