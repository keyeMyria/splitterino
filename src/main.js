/*  global nw:false */

async function main() {
    nw.Window.open('../index.html', {
        title: 'Splitterino',
    }, handleMainWindow);
}
main();

function handleMainWindow(window) {

}
