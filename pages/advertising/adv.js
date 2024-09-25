const body = document.querySelector('body')

const picture = document.getElementById('picture');

const addpic = document.getElementById('addpic');


let i = 0;
    addpic.onclick = () =>{
        i++;
        const inputPic = document.createElement('input');
        picture.append(inputPic);
        inputPic.classList.add('adv')
        inputPic.type = "file";
        if (i==3) {
            addpic.remove();
            alert('מוגבל ל4 תמונות למוצר')
            
        }
    }


// const send = document.getElementById('send');
// send.onclick= () =>{
//     thank = document.createElement('div');
//     thank.innerHTML
// }