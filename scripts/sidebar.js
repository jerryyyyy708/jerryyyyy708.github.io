document.addEventListener("DOMContentLoaded", function() {
    const SQLPromise = initSqlJs({
        locateFile: file => `https://sql.js.org/dist/sql-wasm.wasm`
    });

    fetch('/projects.db').then(response => {
        return response.arrayBuffer();
    }).then(data => {
        var elements = [
            { type: 'div', class: 'topcategory', text: 'Chang Chi-Jui' },
            { type: 'div', class: 'item', text: 'Home', href: 'index.html' },
            { type: 'div', class: 'item', text: 'CV', href: '/pages/cv.html' },
            { type: 'div', class: 'category', text: 'Projects' },
        ];

        const Uints = new Uint8Array(data);
        return SQLPromise.then(SQL => {
            const db = new SQL.Database(Uints);
            const contents = db.exec("SELECT * FROM projects")[0];
            for(let i in contents.values) {
                let title = contents.values[i][1];
                let page = '/pages/'+contents.values[i][5];
                elements.push({ type: 'div', class: 'item', text: title, href: page});
            }
            return elements; // Pass elements to the next .then() chain
        });
    }).then(elements => {
        const leftRow = document.getElementById("leftrow");
        const fragment = document.createDocumentFragment(); // Create a Document Fragment

        var static_elements = [
            { type: 'div', class: 'category', text: 'Music' },
            { type: 'div', class: 'item', text: 'Music List', href: '/pages/music.html' },
            { type: 'div', class: 'item', text: 'YouTube', href: 'https://www.youtube.com/channel/UC__4JYA_nYu45UikAlfb1lg' },
            { type: 'div', class: 'category', text: 'Links' },
            { type: 'div', class: 'item', text: 'LinkedIn', href: 'https://www.linkedin.com/in/jerryyyyy708/' },
            { type: 'div', class: 'item', text: 'GitHub', href: 'https://github.com/jerryyyyy708' },
            { type: 'div', class: 'item', text: 'Medium', href: 'https://medium.com/@Jerryyyyy' },
            //{ type: 'div', class: 'category', text: 'Others' },
            //{ type: 'div', class: 'item', text: '開發日誌', href: 'log.html' }
        ];
        elements.push(...static_elements);
        for (const element of elements) {
            const div = document.createElement(element.type);
            div.className = element.class;
    
            if (element.href) {
                const a = document.createElement('a');
                a.className = 'text-secondary';
                a.href = element.href;
                a.textContent = element.text;
                div.appendChild(a);
            } else {
                div.textContent = element.text;
            }
    
            fragment.appendChild(div); // Append elements to the Document Fragment
        }

        leftRow.appendChild(fragment); // Append the Document Fragment to the DOM
    });
});
