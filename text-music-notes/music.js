setInterval(renderNote, 3000)

function renderNote() {
    document.body.innerText = generateNote()
    document.body.classList.add("lg-txt")
    setTimeout(() => {
        document.body.classList.remove('lg-txt')
    }, 1000)
}

function generateNote() {
    var num = getRandomIntInclusive(3, 5)
    var chr = getMusicChr()
    var note = chr + num
    return note
}


function getMusicChr() {
    var chr = String.fromCharCode(getRandomIntInclusive(65, 71))
    return chr
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

