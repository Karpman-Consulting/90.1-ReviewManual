// Function to filter sections within cards based on selected filters
function filterContent() {

    const cards = document.querySelectorAll('#page-content .card');
    const anchorTags = document.querySelectorAll('#filter-links a');

    cards.forEach((card, index) => {
        const checkType = card.getAttribute('data-check-type')?.split(',').map(item => item.trim()) || [];
        const component = card.getAttribute('data-component')?.split(',').map(item => item.trim()) || [];
        const modelType = card.getAttribute('data-model')?.split(',').map(item => item.trim()) || [];

        const matchesCheckType = filters.checkType[0] === 'All' || checkType.some(type => filters.checkType.includes(type));
        const matchesComponent = filters.component[0] === 'All' || component.some(comp => filters.component.includes(comp));
        const matchesModelType = filters.model[0] === 'All' || modelType.some(model => filters.model.includes(model));

        const anchorTag = anchorTags[index];

        if (!matchesCheckType || !matchesComponent || !matchesModelType) {
            card.style.display = 'none';
            anchorTag.classList.add('disabled');
            return; // Skip further filtering if the card is hidden
        } else {
            card.style.display = '';
            anchorTag.classList.remove('disabled'); // Remove the disabled class if the card is shown
        }

        // Now, filter individual sections within the card
        const sections = card.querySelectorAll('div[data-version], div[data-path]');

        sections.forEach((section) => {
            const version = section.getAttribute('data-version')?.split(',').map(item => item.trim()) || [];
            const path = section.getAttribute('data-path')?.split(',').map(item => item.trim()) || [];

            // Check if the section matches the filters
            // Treat empty filters arrays as if all options are selected (show everything)
            const matchesPath = path.some(p => filters.path.includes(p));
            const matchesVersion = version.some(v => filters.version.includes(v));

            // Show or hide the section based on match
            if (!matchesPath || !matchesVersion) {
                section.style.display = 'none';
            } else {
                section.style.display = '';
            }
        });
    });
}
