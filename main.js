function test() {
    var converter = new showdown.Converter();
    var dest = document.getElementById("dest");
    let fetch_res = fetch("src.md");
    fetch_res.then(res => res.text()).then(text => {
        dest.innerHTML = converter.makeHtml(text);
    }).catch(error => console.error(error));
}
window.onload = test;