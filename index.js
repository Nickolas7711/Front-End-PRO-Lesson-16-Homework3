const changeImg = ()=> {
        const rand = Math.ceil(Math.random() * 9)
    document.querySelector('img').src = './styles/imagas/' + rand + '.jpg'
}
changeImg();

document.querySelector('button').addEventListener('click', changeImg);