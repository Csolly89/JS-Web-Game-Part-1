function drawImg(asset) {
    let image = document.createElement('img')
    image.src = asset
    image.style.position = 'fixed'
    image.style.left = '100px'
    image.style.bottom = '100px'
    document.body.append(image)
}


drawImg("assets/green-character.gif")
drawImg("assets/pine-tree.png")