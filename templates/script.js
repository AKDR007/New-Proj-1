function toggleDarkMode() {
    var body = document.body;
    var modeIcon = document.getElementById('mode-icon');
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeIcon.src = 'night-mode.png'; // Replace with the path to your moon icon
        modeIcon.alt = 'Dark Mode';
        body.style.backgroundImage = "url('plain-black-background.jpg')"; // Change background to dark mode image
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeIcon.src = 'night-mode.png'; // Replace with the path to your sun icon
        modeIcon.alt = 'Light Mode';
        body.style.backgroundImage = "url('block.jpg')"; // Change background to light mode image
    }
}
