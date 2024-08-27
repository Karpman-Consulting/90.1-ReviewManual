document.addEventListener("DOMContentLoaded", function() {
    // Load sidebar
    fetch('../components/sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar-container').innerHTML = data;
    });

    // Load header
    fetch('../components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        $('.selectpicker').selectpicker();
    });

    // Load footer
    fetch('../components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    });
});
