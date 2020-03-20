document.body.style.height = "10000vh";
const div = document.createElement('div');
let divHeight = 0;
let grow = true;
div.style.width = '100%';
div.style.position = 'fixed';
div.style.left = '0';
div.style.top = '0';
document.body.appendChild(div);
const changeHeight = function () {
    if (divHeight <= 0) {
        grow = true;
    }
    if (grow && divHeight <= window.innerHeight / 2) {
        divHeight += 5;
        div.style.backgroundColor = 'yellowgreen';
    } else {
        grow = false;
        divHeight -= 5;
        div.style.backgroundColor = 'red';
    }
    div.style.height = divHeight + 'px';
}

window.addEventListener('scroll', changeHeight);