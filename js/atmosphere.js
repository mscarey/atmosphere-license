const isNotChecked = function (target) {
    return !target.checked
}

// include dash in version number only if at least one optional
// provision checkbox is checked

const toggleDash = function () {
    dash = Array.from(document.getElementsByClassName("any-options"))
    dash.forEach(function (element) {
        element.hidden = provisionCheckboxes.every(isNotChecked)
    })
}

// insert or remove text from introduction and license when
// optional provision checkbox is toggled.

const toggleProvisions = function (target) {
    clauses = Array.from(document.getElementsByClassName(target.name))
    clauses.forEach(function (element) {
        element.hidden = isNotChecked(target)
    });
    toggleDash()
};


const toggleProvisionsOnClick = function (e) {
    toggleProvisions(e.target)
}

let provisionCheckboxes = Array.from(document
    .getElementById('provision-toggle')
    .getElementsByTagName("input"));
provisionCheckboxes.forEach(function (element) {
    element.addEventListener('click', toggleProvisionsOnClick)
});
provisionCheckboxes.forEach(toggleProvisions);