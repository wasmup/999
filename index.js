function Inc(digit) {
    let v = Number(digit.innerText) + 1;
    if (v >= 10) v = 0;
    digit.innerText = v;
}
function Dec(digit) {
    let v = Number(digit.innerText) - 1;
    if (v < 0) v = 9;
    digit.innerText = v;
}
document.getElementById("up3").addEventListener('click', () => Inc(document.getElementById("digit3")));
document.getElementById("dn3").addEventListener('click', () => Dec(document.getElementById("digit3")));

document.getElementById("up2").addEventListener('click', () => Inc(document.getElementById("digit2")));
document.getElementById("dn2").addEventListener('click', () => Dec(document.getElementById("digit2")));

document.getElementById("up1").addEventListener('click', () => Inc(document.getElementById("digit1")));
document.getElementById("dn1").addEventListener('click', () => Dec(document.getElementById("digit1")));

function Count(dir) {
    let step = document.getElementById("stepNumber").value;
    let d3 = document.getElementById("digit3");
    let d2 = document.getElementById("digit2");
    let d1 = document.getElementById("digit1");
    let n = Number(d3.innerText) * 100 + Number(d2.innerText) * 10 + Number(d1.innerText);
    if (dir == "up") n += Number(step); else n -= Number(step);
    n += 1000;
    n %= 1000;
    n += 1000;
    let s = n.toString();
    d3.innerText = s.charAt(1);
    d2.innerText = s.charAt(2);
    d1.innerText = s.charAt(3);
}
document.getElementById("up0").addEventListener('click', () => Count("up"));
document.getElementById("dn0").addEventListener('click', () => Count("down"));
