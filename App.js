var BM = {
    "links" :[
        {
            "title" : "Git",
            "href"  : "https://github.com/ajay-kiran-chennoju"
        },
        {
            "title" : "Google",
            "href"  : "https://google.com"
        }
    ]
};


var elements = [];

for(var index in BM.links){
    var link = BM.links[index];
    const child = React.createElement(
        "div",
        {},
        React.createElement(
            "a",
            {
                id:"link",
                href: link.href,
                key: index,
            },
            link.title
        )
    );
    elements.push(child);
}

console.log(elements);

const parent = React.createElement("div",{id:"heading"},elements);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);