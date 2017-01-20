///<reference path="src/Product.ts"/>

module App {
    var p = new Product("Book", "code book", 56.6)
    document.getElementById("app").innerHTML = `
    <div>
        <ul>
            <li>${p.name} - ${p.description} - $${p.value}</li>
        </ul>
    </div>
    `
}
