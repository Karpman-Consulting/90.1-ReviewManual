document.addEventListener("DOMContentLoaded", function() {
    fetch('components/sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar-container').innerHTML = data;
    });
});
