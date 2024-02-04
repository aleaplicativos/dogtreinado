"use strict";
class Animation {
    constructor(svgContainer, animType = 'svg', autoplay = true, loop = true) {
        this.anim = lottie.loadAnimation({
            wrapper: svgContainer,
            animType: animType,
            autoplay: autoplay,
            loop: loop
        });
        this.changeAnim('https://gist.githubusercontent.com/kiriss91/3353eb3b49369d70d64e7b4d3c7a28b2/raw/a72061d8bb9a83ef6f39d5b6263cce8433b26c72/dog%2520sitting.json');
    }
    changeAnim(path) {
        this.anim.destroy();
        this.anim = lottie.loadAnimation({
            wrapper: this.anim.wrapper,
            animType: this.anim.animType,
            autoplay: this.anim.autoplay,
            loop: this.anim.loop,
            path: path
        });
    }
}
const svgContainer = document.getElementById('svgContainer');
const anim = new Animation(svgContainer);
document.getElementById("sit").addEventListener("click", () => {
    anim.changeAnim('https://gist.githubusercontent.com/kiriss91/3353eb3b49369d70d64e7b4d3c7a28b2/raw/a72061d8bb9a83ef6f39d5b6263cce8433b26c72/dog%2520sitting.json');
});
document.getElementById("sleep").addEventListener("click", () => {
    anim.changeAnim('https://gist.githubusercontent.com/kiriss91/cc5146709faffd219763494059d08e81/raw/ac26a3e40f2f11df30ef58f1cb38392db07e7ae3/dog_sleeping.json');
});
document.getElementById("strech").addEventListener("click", () => {
    anim.changeAnim('https://gist.githubusercontent.com/kiriss91/915afd4587564cbda4815a712b5447e0/raw/f6dbd75f8181425fb3a925e07e3a9db085944bd3/dog%2520strech.json');
});
document.getElementById("bone").addEventListener("click", () => {
    anim.changeAnim('https://gist.githubusercontent.com/kiriss91/32763efa749e3b53a9b9ac2b0eb249bc/raw/4dfb88cc726f30236e3f327b0c38c6422fdd3f9e/dog_bone.json');
});
document.getElementById("jump").addEventListener("click", () => {
    anim.changeAnim('https://gist.githubusercontent.com/kiriss91/047abcb52793451835ad4908ac3c0f50/raw/b047b828d5dcc99516427bc6c76491ea5df11a16/dog-jump.json');
});
document.getElementById("walk").addEventListener("click", () => {
    anim.changeAnim('https://gist.githubusercontent.com/kiriss91/e28a49c05ffc9d3192cba823d6c0b63b/raw/9f67c94e0c7e7672e07d439d64f53a237f281e50/dog%2520walk.json');
});
const buttons = document.querySelectorAll(".but");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(b => {
            b.style.backgroundColor = "white";
            b.style.color = "black";
        });
        button.style.backgroundColor = "black";
        button.style.color = "white";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const sitButton = document.getElementById("sit");
    sitButton.style.backgroundColor = "black";
    sitButton.style.color = "white";
});
document.addEventListener("DOMContentLoaded", function () {
    const sitButton = document.getElementById("sit");
    sitButton.classList.add('active');
});