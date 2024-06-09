
function fetchAndInsert(url, containerId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => console.error('Error fetching content:', error));
}

// Insert navbar
fetchAndInsert('src/components/navbar.html', 'navbar');

// Insert footer
fetchAndInsert('src/components/footer.html', 'footer');
fetchAndInsert('src/components/hero.html', 'hero');

