var app = document.getElementById("app");
var typewriter = new Typewriter(app, {
    loop: true,
    delay: 130,
    autoStart: true,
    devMode: true
    
});
typewriter.typeString("Html")
.pauseFor(1500)
.deleteAll()
.typeString("Css")
.pauseFor(1500)
.deleteAll()
.typeString("JavaScript")
.pauseFor(1500)
.start()




