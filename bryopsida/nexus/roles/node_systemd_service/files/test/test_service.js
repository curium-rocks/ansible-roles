const interval = setInterval(()=>{
    console.log(`(${new Date().getTime()}) - tick, node version = ${process.version}`);
}, 1000);

process.on('SIGINT', () => {
    console.log('sig int received');
    clearInterval(interval);
});