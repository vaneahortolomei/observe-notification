import './style.css'

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(register => {
        console.log(register);
    }).catch(e => {
        console.log(e);
    });
}
