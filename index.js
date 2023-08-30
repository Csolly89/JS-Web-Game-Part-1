function drawImg(asset, left, bottom) {
    let image = document.createElement('img')
    image.src = asset
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom +'px'
    document.body.append(image)
}

// trying to make new function specific for even listener items

// function useItem(asset, left, bottom){
// let image = document.createElement('img')
// image.src = asset
// image.position = 'fixed'
// image.left = left + "px"
// image.bottom = bottom = "px"
// document.body.append(image)

// asset.addEventListener('dblclick', function(){
//     asset.remove()
// })




drawImg("assets/green-character.gif", 100, 100)
drawImg("assets/pine-tree.png", 450, 400) 
drawImg("assets/tree.png", 200, 350)
drawImg("assets/pillar.png", 350, 100)
drawImg("assets/well.png", 500, 725)
drawImg("assets/crate.png", 150, 200)

drawImg("assets/shield.png", 165, 185)
drawImg("assets/staff.png", 600, 100)

// useItem("assets/sword.png", 500, 105)

let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('dblclick', function(){
    sword.remove()
})
