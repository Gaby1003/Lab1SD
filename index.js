const express = require('express')
const app = express()
const path = require('path')
const readLastLines = require('read-last-lines');
const exec = require('child_process').exec;

app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
let instance1
let instance2

setInterval(() => {
    readLastLines.read("log.txt", 4).then((lines) => {
    let info = lines.split(/\r?\n/)
    console.log(info)
    for (let i = 0; i < info.length; i++) {
        console.log(info[0])
        if(info[i] === 'instancia1'){
            if(info[i + 1] === 'hola mundo'){
                this.instance1 = true
            }else{
                this.instance1 = false
            }
        } else if(info[i] === 'instancia2'){
            if(info[i + 1] === 'hola mundo'){
                this.instance2 = true
            }else{
                this.instance2 = false
            }
        }
    }
    })
}, 2000)

app.get('/', (req, res) => {
    res.render('index.html', {
        instance1: this.instance1,
        instance2: this.instance2
    })
})

app.get('/restart1', (req, res) => {
    console.log('xd1')
    restart1()
    res.redirect('/')
})

app.get('/restart2', (req, res) => {
    console.log('xd2')
    restart2()
    res.redirect('/')
})

function restart1(){
    exec('sh restart_instancia1.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }    
    })
}

function restart2(){
    exec('sh restart_instancia2.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }    
    })
}

let curlScript = exec('sh curl_script.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
});


app.listen(4000, () => console.log('App run on port 4000!'))
