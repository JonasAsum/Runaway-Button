const evilButton = document.getElementById('evil-button')
const OFFSET = 100

evilButton.addEventListener("click", () => {
    window.alert('Nice Try Bitch')
    window.close()
})

document.addEventListener("mousemove", (e) => {
const x = e.pageX
const y = e.pageY
const buttonBox = evilButton.getBoundingClientRect()
const horizontaldistance = distancefromcenter(buttonBox.x , x , buttonBox.width)
const verticaldistance = distancefromcenter(buttonBox.y , y , buttonBox.height)

const verticalOffset = buttonBox.height / 2 + OFFSET
const horizontalOffset = buttonBox.width / 2 + OFFSET

if (Math.abs(horizontaldistance) <= horizontalOffset && Math.abs(verticaldistance) <= verticalOffset)
{
    setButtonPosition(
        buttonBox.x + horizontalOffset / horizontaldistance * 10,
        buttonBox.y + verticalOffset / verticaldistance * 10
    )
}
})


function setButtonPosition (horizontol, vertical) {
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = evilButton.getBoundingClientRect()

    if(distancefromcenter(horizontol , windowBox.left , buttonBox.width) < 0) {
        horizontol = windowBox.right - buttonBox.width - OFFSET
    
    }

    if(distancefromcenter(horizontol , windowBox.right , buttonBox.width) > 0) {
        horizontol = windowBox.left + OFFSET
    }


    if(distancefromcenter(vertical , windowBox.top, buttonBox.height) < 0) {
        vertical = windowBox.bottom - buttonBox.height - OFFSET
    
    }
    if(distancefromcenter(vertical , windowBox.bottom, buttonBox.height) > 0) {
        vertical = windowBox.top + OFFSET
    
    }

    evilButton.style.top = `${vertical}px`
    evilButton.style.left = `${horizontol}px`
    

}


function distancefromcenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize /2
}

