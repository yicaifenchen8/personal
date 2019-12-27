// <script type="module" 时不能省略.js
import blogs from "./config/blog.js";
import musics from "./config/music.js";
import tabs from "./config/tab.js";

var left = document.getElementById('slice-left')
var right = document.getElementById('slice-right')

//blog
for (let e of blogs) {
    // 不能这样写<div id="cs"/>
    // css style 能生效
    let div =`
        <div style="margin: 0px;padding: 16px;border-bottom: 1px dotted #ddd;display: flex;align-items: center;">
            <a class="blog" target="_blank" style="margin: 0px;padding: 0px;font-size: 16px;color: #4d4d4d;display: flex;align-items: center;" href="` + e.url + `">` + e.title + `</a>
        </div>
    `
    if (blogs.indexOf(e)<blogs.length/2)
        left.innerHTML += div
    else
        right.innerHTML += div
}

//pic
for (let i = 0; i < 8; i++) {
    var e = document.getElementById('photo-' + String.fromCharCode('a'.charCodeAt(0)+i))
    e.setAttribute("src", "image/pic_" + (i + 1) + ".jpg")

    var a = e.parentNode
    a.setAttribute("href", "image/pic_" + (i + 1) + ".jpg")
    a.setAttribute("target", "_blank")
}

//music
var music = document.getElementById('music')
for (let e of musics) {
    let div =`
        <div style="margin: 0px;padding: 16px;border-bottom: 1px dotted #ddd;display: flex;align-items: center;">
            <a class="blog" target="_blank" style="margin: 0px;padding: 0px;font-size: 16px;color: #4d4d4d;display: flex;align-items: center;" href="` + e.url + `">` + e.title + `</a>
        </div>
    `
    music.innerHTML += div
}

//tab
var tab = document.getElementById('tab')
for (let e of tabs) {
    let div =`
        <div style="margin: 0px;padding: 0px 16px;border-right: 1px dotted #ddd;display: flex;align-items: center;">
            <a class="blog" target="_blank" style="margin: 0px;padding: 0px;font-size: 16px;color: #4d4d4d;display: flex;align-items: center;" href="` + e.url + `">` + e.title + `</a>
        </div>
    `
    tab.innerHTML += div
}

