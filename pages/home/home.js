const body = document.querySelector('body');
setTimeout(() => {

    const container = document.createElement('div');
    container.classList.add('containerLogin');

    const opacity = document.createElement('div');
    opacity.classList.add('opacity');
    container.append(opacity);


    const login = document.createElement('div');
    login.classList.add('login');
    container.append(login);

    const title = document.createElement('h4');
    title.classList.add('loginTitle');
    title.innerHTML = 'כניסה למערכת';
    login.append(title);

    const inputName = document.createElement('input');
    inputName.type = ('text');
    inputName.placeholder = ('שם משתמש');
    inputName.id = "name";
    login.append(inputName);

    const inputMail = document.createElement('input');
    inputMail.type = ('email');
    inputMail.placeholder = ('כתובת מייל');
    inputMail.id = "mail";
    login.append(inputMail);

    const passwordAndShow = document.createElement('div');
    passwordAndShow.classList.add('passAndSh')
    login.append(passwordAndShow);

    const inputPassword = document.createElement('input');
    inputPassword.type = ('password');
    inputPassword.placeholder = ('סיסמא');
    inputPassword.id = 'password';
    passwordAndShow.append(inputPassword);

    const show = document.createElement('div');
    show.innerHTML = `<i class="fas fa-eye-slash"></i>`
    show.id = 'show';
    passwordAndShow.append(show);

    show.onclick = function () {
        const pass = document.getElementById("password");
        if (pass.type === "password") {
            pass.type = "text";
        } else {
            pass.type = "password";
        }
    }


    // const remember = document.createElement('div');
    // remember.innerHTML = "זכור אותי";
    // login.append(remember);

    // const checkRemember = document.createElement('input');
    // checkRemember.type = ('checkbox');
    // remember.append(checkRemember)

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    login.append(buttons);

    const buttonlogin = document.createElement('button');
    buttonlogin.classList.add('buttonlogin');
    buttonlogin.innerHTML = 'יצירת חשבון חדש';
    buttons.append(buttonlogin);

    const enterAccount = document.createElement('button');
    enterAccount.classList.add('buttonenter');
    enterAccount.innerHTML = 'כניסה לחשבונך';
    buttons.append(enterAccount);

    let users = JSON.parse(localStorage.getItem('users')) || [];

    buttonlogin.onclick = () => {
        const name = document.getElementById("name");
        const email = document.getElementById('mail');
        const pass = document.getElementById("password");
        let exist = true;
        let object = { "name": name.value, "passWord": pass.value,"email":email.value, "basket": [] };
        for (let i = 0; i < users.length; i++) {
            if (object.name === users[i].name && object.passWord === users[i].passWord  && object.email===users[i].email) {
                exist = false;
                alert('שם משתמש קיים במערכת')
            }
        }
        if (exist) {
            users.push(object);
            localStorage.setItem('users', JSON.stringify(users));
            let index = users.length-1;
            localStorage.setItem('index', JSON.stringify(index));

            alert('הרישום התבצע בהצלחה');

            // sessionStorage.setItem('name'+ name.value,basket="")
            container.remove();
        }

    }
    enterAccount.onclick = () => {
        const name = document.getElementById("name");
        const email = document.getElementById('mail');
        const pass = document.getElementById("password");
        let object = { "name": name.value, "passWord": pass.value,"email":email.value,"basket": [] };
        let index;
        let exist = true;
        for (let i = 0; i < users.length; i++) {
            if (object.name === users[i].name && object.passWord === users[i].passWord && object.email===users[i].email) {
                index = i;
                localStorage.setItem('index', JSON.stringify(index));
                exist = false;
                container.remove();
            }
        }
        if (exist) {
            alert('אחד הנתונים שהוקשו שגוי');
        }

    }
    





    body.classList.add('hidden');

    opacity.onclick = () => {
        container.remove();
    }
    body.append(container)

}, 1500)

