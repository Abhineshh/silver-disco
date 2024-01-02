function toggleMenu() {
    const leftMenu = document.getElementById('leftMenu');
    const rightMenu = document.getElementById('rightMenu');
    
    leftMenu.style.display = (leftMenu.style.display === 'block') ? 'none' : 'block';
    rightMenu.style.display = (rightMenu.style.display === 'block') ? 'none' : 'block';
}
