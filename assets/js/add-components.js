document.addEventListener("DOMContentLoaded", function() {
    let basePath = '';
    const currentPath = window.location.pathname;
    const depth = currentPath.split('/').length - 2; // Adjust based on your directory structure

    for (let i = 0; i < depth; i++) {
        basePath += '../';
    }

    // Load sidebar
    fetch(basePath + 'components/sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar-container').innerHTML = data;
    });

    // Load header
    fetch(basePath + 'components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });

    // Load footer
    fetch(basePath + 'components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });
});
