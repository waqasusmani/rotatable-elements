var mainElem = document.getElementById('main-elem')
var rotator = document.getElementById('rotator')

rotationDegree = 0
startX = 0
startY = 0
rotationStartDirection = null

rotationDegreePerHeightPixels = 360 / screen.availHeight

document.addEventListener('mouseup', mouseUp)

function mouseDown(e) {
    document.addEventListener('mousemove', mouseMove)
    startX = e.clientX
    startY = e.clientY
}

function mouseUp() {
    document.removeEventListener('mousemove', mouseMove)
}

function mouseMove(e) {

    // right side:
    // x+ y+
    // x- y+
    // x- y-
    // x+ y-
    
    // left side:
    // x- y+
    // x+ y+
    // x+ y-
    // x- y-


    // Breakpoints: 90, 180, 270, 360
    
    if (rotationDegree == 0) {
        if (e.clientX > startX) {
            rotationDegree += e.clientY-startY           
        }
        if (e.clientX < startX) {
            rotationDegree -= e.clientY - startY           
        }
    }

    if (rotationDegree > 0 && rotationDegree < 90) {
        if (e.clientX > startX || e.clientY > startY) {
            rotationDegree += Math.max(e.clientX - startX, e.clientY - startY) 
        }
        if (e.clientX < startX || e.clientY < startY) {
            rotationDegree += Math.min(e.clientX - startX, e.clientY - startY)
        }
    }

    if (rotationDegree < 0 && rotationDegree > -90) {
        if (e.clientX < startX || e.clientY > startY) {
            rotationDegree -= Math.max(-(e.clientX-startX), e.clientY - startY)
        }
        if (e.clientX > startX || e.clientY < startY) {
            rotationDegree += Math.max(e.clientX-startX, -(e.clientY - startY))
        } 
    }

    if (rotationDegree >= 90 && rotationDegree < 180) {
        if (e.clientX < startX || e.clientY > startY) {
            rotationDegree += Math.max(-(e.clientX - startX), e.clientY - startY) 
        }
        if (e.clientX > startX || e.clientY < startY) {
            rotationDegree -= Math.max(e.clientX - startX, -(e.clientY - startY)) 
        }
    }

    if (rotationDegree <=-90 && rotationDegree > -180) {
        if (e.clientX > startX || e.clientY < startY) {
            rotationDegree -= Math.max(e.clientX - startX, -(e.clientY - startY))
        }
        if (e.clientX < startX || e.clientY < startY) {
            rotationDegree -= Math.min(e.clientX - startX, e.clientY - startY)
        }
    }

    if (rotationDegree >=180 && rotationDegree < 270) {
        if (e.clientX < startX || e.clientY < startY) {
            rotationDegree += Math.max(-(e.clientX - startX), -(e.clientY - startY))
        }
        if (e.clientX > startX || e.clientY > startY) {
            rotationDegree -= Math.max(e.clientX - startX, e.clientY - startY)
        }
    }

    if (rotationDegree <=-180 && rotationDegree > -270) {
        if (e.clientX > startX || e.clientY < startY) {
            rotationDegree -= Math.max(e.clientX - startX, -(e.clientY - startY))
        }
        if (e.clientX < startX || e.clientY > startY) {
            rotationDegree += Math.max(-(e.clientX - startX), e.clientY - startY)
        }
    }

    if (rotationDegree >=270 && rotationDegree < 360) {
        if (e.clientX > startX || e.clientY < startY) {
            rotationDegree += Math.max(e.clientX - startX, -(e.clientY - startY))
        }
        if (e.clientX < startX || e.clientY > startY) {
            rotationDegree -= Math.max(-(e.clientX - startX), e.clientY - startY)
        }
    }

    if (rotationDegree <=-270 && rotationDegree > -360) {
        if (e.clientX < startX || e.clientY < startY) {
            rotationDegree -= Math.max(-(e.clientX - startX), -(e.clientY - startY))
        }
        if (e.clientX > startX || e.clientY > startY) {
            rotationDegree += Math.max(e.clientX - startX, e.clientY - startY)
        }
    }

    if (rotationDegree >= 360 || rotationDegree <= -360) {
        rotationDegree = 0
    }

    mainElem.style.rotate = rotationDegree + 'deg'
    startX = e.clientX
    startY = e.clientY
    console.log(rotationDegree)

    document.getElementById('coordinates').innerHTML = `${startX} ${startY}`

}
