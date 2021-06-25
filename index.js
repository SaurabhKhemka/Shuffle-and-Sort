const parent = document.getElementsByClassName("main");

let children = Array.prototype.slice.call(parent[0].children[0].children),
    dummyDiv,
    isSorted = true;

function shuffle() {
    dummyDiv = createDocumentFragment();
    children.forEach(() => {
        dummyDiv.appendChild(children[Math.floor(Math.random() * children.length)]);
    });
    parent[0].children[0].appendChild(dummyDiv);
    isSorted = false;
}

function sort() {
    if (!isSorted) {
        dummyDiv = createDocumentFragment();

        children.sort((a, b) => {
            return (+a.getAttribute('value')) - (+b.getAttribute('value'));
        });

        children.forEach(child => {
            dummyDiv.appendChild(child);
        });

        parent[0].children[0].appendChild(dummyDiv);
        isSorted = true;
    }
}

function createDocumentFragment() {
    return document.createDocumentFragment();
}
