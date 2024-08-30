// Initialize the filters object
const filters = {
    path: ['ECB', 'PRM'],
    version: ['2016', '2019', '2022'],
    model: ['B', 'P'],
    checkType: ['All'],
    component: ['All'],
    bemTool: ['All'],
};

document.addEventListener("DOMContentLoaded", function() {
    // Load sidebar
    fetch('../components/sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar-container').innerHTML = data;
    });

    // Load header
    fetch('../components/header-checks.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        populateComponents();
        $('.selectpicker').selectpicker();
        attachEventListeners();
        populateLinks();

    });

    // Load footer
    fetch('../components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    });
});

function attachEventListeners() {
    document.getElementById("ecbPath").addEventListener('change', function(event) {
        const checked = event.target.checked;
        const value = event.target.value;

        if (checked) {
            filters.path.push(value);
        }
        else {
            filters.path = filters.path.filter((v) => v !== value);
        }
        filterContent();
    });

    document.getElementById("prmPath").addEventListener('change', function(event) {
        const checked = event.target.checked;
        const value = event.target.value;

        if (checked) {
            filters.path.push(value);
        }
        else {
            filters.path = filters.path.filter((v) => v !== value);
        }
        filterContent();
    });

    document.getElementById("v2016").addEventListener('change', function(event) {
        const checked = event.target.checked;
        const value = event.target.value;

        if (checked) {
            filters.version.push(value);
        }
        else {
            filters.version = filters.version.filter((v) => v !== value);
        }
        filterContent();
    });

    document.getElementById("v2019").addEventListener('change', function(event) {
        const checked = event.target.checked;
        const value = event.target.value;

        if (checked) {
            filters.version.push(value);
        }
        else {
            filters.version = filters.version.filter((v) => v !== value);
        }
        filterContent();
    });

    document.getElementById("v2022").addEventListener('change', function(event) {
        const checked = event.target.checked;
        const value = event.target.value;

        if (checked) {
            filters.version.push(value);
        }
        else {
            filters.version = filters.version.filter((v) => v !== value);
        }
        filterContent();
    });

    document.getElementById("bModel").addEventListener('change', function(event) {
        const checked = event.target.checked;
        const value = event.target.value;

        if (checked) {
            filters.model.push(value);
        }
        else {
            filters.model = filters.model.filter((v) => v !== value);
        }
        filterContent();
    });

    document.getElementById("pModel").addEventListener('change', function(event) {
        const checked = event.target.checked;
        const value = event.target.value;

        if (checked) {
            filters.model.push(value);
        }
        else {
            filters.model = filters.model.filter((v) => v !== value);
        }
        filterContent();
    });

    document.getElementById("check-type").addEventListener('change', function(event) {
        const previousFilter = filters.checkType;
        const selectOptions = Array.from(event.target.options);
        const allOption = selectOptions.find(option => option.value === "All");
        var selectedValues = Array.from(event.target.selectedOptions).map(option => option.value);

        if (previousFilter.includes("All") && allOption.selected) {
            // Deselect "All" when another option is selected individually
            allOption.selected = false;
            $('.selectpicker').selectpicker('refresh');
            selectedValues = selectedValues.filter(option => option !== "All");
        }
        else if (previousFilter.includes("All") && !allOption.selected) {
            // Keep "All" selected even if someone tries to deselect it
            allOption.selected = true;
            $('.selectpicker').selectpicker('refresh');
            selectedValues = ["All"];
        }
        else if (!previousFilter.includes("All") && allOption.selected) {
            // Deselect all other options if "All" is selected
            selectOptions.forEach(option => {
                if (option.value !== "All") {
                    option.selected = false;
                }
            });
            $('.selectpicker').selectpicker('refresh');
            selectedValues = ["All"];
        }

        // Update the filter with the current selection, excluding "All"
        filters.checkType = selectedValues.filter(option => option !== "All" || selectedValues.length === 1);
        filterContent();
    });


    document.querySelector('#component-type').addEventListener('change', function (event) {
        const previousFilter = filters.component;
        const selectOptions = Array.from(event.target.options);
        const allOption = selectOptions.find(option => option.value === "All");
        var selectedValues = Array.from(event.target.selectedOptions).map(option => option.value);

        if (previousFilter.includes("All") && allOption.selected) {
            // Deselect "All" when another option is selected individually
            allOption.selected = false;
            $('.selectpicker').selectpicker('refresh');
            selectedValues = selectedValues.filter(option => option !== "All");
        }
        else if (previousFilter.includes("All") && !allOption.selected) {
            // Keep "All" selected even if someone tries to deselect it
            allOption.selected = true;
            $('.selectpicker').selectpicker('refresh');
            selectedValues = ["All"];
        }
        else if (!previousFilter.includes("All") && allOption.selected) {
            // Deselect all other options if "All" is selected
            selectOptions.forEach(option => {
                if (option.value !== "All") {
                    option.selected = false;
                }
            });
            $('.selectpicker').selectpicker('refresh');
            selectedValues = ["All"];
        }

        // Update the filter with the current selection, excluding "All"
        filters.component = selectedValues.filter(option => option !== "All" || selectedValues.length === 1);
        filterContent();
    });

    document.querySelector('#bem-tool').addEventListener('change', function (event) {
        const previousFilter = filters.bemTool;
        const selectOptions = Array.from(event.target.options);
        const allOption = selectOptions.find(option => option.value === "All");
        var selectedValues = Array.from(event.target.selectedOptions).map(option => option.value);

        if (previousFilter.includes("All") && allOption.selected) {
            // Deselect "All" when another option is selected individually
            allOption.selected = false;
            $('.selectpicker').selectpicker('refresh');
            selectedValues = selectedValues.filter(option => option !== "All");
        }
        else if (previousFilter.includes("All") && !allOption.selected) {
            // Keep "All" selected even if someone tries to deselect it
            allOption.selected = true;
            $('.selectpicker').selectpicker('refresh');
            selectedValues = ["All"];
        }
        else if (!previousFilter.includes("All") && allOption.selected) {
            // Deselect all other options if "All" is selected
            selectOptions.forEach(option => {
                if (option.value !== "All") {
                    option.selected = false;
                }
            });
            $('.selectpicker').selectpicker('refresh');
            selectedValues = ["All"];
        }

        // Update the filter with the current selection, excluding "All"
        filters.bemTool = selectedValues.filter(option => option !== "All" || selectedValues.length === 1);
        filterContent();
    });

}

function populateLinks() {
    const filterLinks = document.getElementById('filter-links');

    filterLinks.innerHTML = '';

    const cards = document.querySelectorAll('#page-content .card');

    cards.forEach(card => {
        const cardId = card.id.toUpperCase();
        const link = document.createElement('a');
        link.textContent = cardId;
        link.href = `#${card.id}`;
        filterLinks.appendChild(link);
    });
}

function populateComponents() {
    const componentSelect = document.getElementById('component-type');
    componentTypes.forEach(function(component, i) {
        const option = document.createElement('option');
        option.value = component;
        option.textContent = labels[i];
        componentSelect.appendChild(option);
    });
}