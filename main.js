const PROJECTS_PATH = "projects";

const converter = new showdown.Converter({
    tables: true,
    parseImgDimensions: true
});

function test() {
    var converter = new showdown.Converter();
    var dest = document.getElementById("dest");
    let fetch_res = fetch("src.md");
    fetch_res.then(res => res.text()).then(text => {
        dest.innerHTML = converter.makeHtml(text);
    }).catch(error => console.error(error));
}
async function onload() {
    await serve_html();
}
async function fetch_entry_summary(path) {
    
}
async function fetch_full_entry(path) {
    let raw_md = await fetch(PROJECTS_PATH +'/' + path+'/' + "content.md");
    let html = converter.makeHtml(await raw_md.text());
    return html;
}
async function fetch_project_page(path) {

}
async function fetch_main_page(path) {

}
async function serve_html() {
    const path = window.location.search.substring(1);
    const main = document.getElementById("main");
    let html = await fetch_full_entry(path);
    main.innerHTML = html;
}
window.addEventListener('load',onload);