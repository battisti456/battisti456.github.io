const PROJECTS_PATH = "projects"

const converter = new showdown.Converter()

function test() {
    var converter = new showdown.Converter();
    var dest = document.getElementById("dest");
    let fetch_res = fetch("src.md");
    fetch_res.then(res => res.text()).then(text => {
        dest.innerHTML = converter.makeHtml(text);
    }).catch(error => console.error(error));
}
function onload() {
    serve_html();
}
function fetch_full_entry(path) {
    let html = "";
    fetch(PROJECTS_PATH +'\\' + path+'\\' + "content.md").then(
        res => res.text()
    ).then(
        text => {
            html = converter.makeHtml(text);
        }
    )
    return html;
}
function serve_html() {
    const path = window.location.search;
    const main = document.getElementById("main");
    main.innerHTML = fetch_full_entry(path);
    console.log(path)
}
window.onload = onload;
