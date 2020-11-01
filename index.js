const data = [
    {"name": "item 1"},
    {"name": "item 2"},
    {
        "name": "item 3",
        "children": [
            {
                "name": "sub item 1",
                "children": [{
                    "name": "sub sub item 1",
                }]
            },
            {"name": "sub item 2"},
            {"name": "sub item 3"},
            {"name": "sub item 4"}
        ]
    },
    {"name": "item 4"}
];

function createTree(data) {
    const ul = document.createElement('ul');

    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;

        if (item.children) {
            li.appendChild(createTree(item.children));
        }

        ul.appendChild(li);
    });

    return ul;
}


document.querySelector('.container').appendChild(createTree(data));