class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        let newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        if (this.products.length === 0) {
            newProduct.id = 1;
        } else {
            newProduct.id = this.products.length + 1;
        }

        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        return this.products.find(product => product.id === id);
    }
}

let pm = new ProductManager();

pm.addProduct("BMW", "M330 / Año= 2020 / Color = Gris plata / Km = 42320km", "$12.000.000,00", "", "B002", "1");
pm.addProduct("Cadilac", "CT5 / Año= 2022 / Color = Negro / Km = 12045km", "$18.000.000,00", "", "C001", "2");
pm.addProduct("Dodge", "Charger / Año= 2014 / Color = Blanco / Km = 87320km", "$10.000.000,00", "", "D023", "3");
pm.addProduct("GMC", "Sierra / Año= 2023 / Color = Azul / Km = 23371km", "$24.000.000,00", "", "G005", "4");

console.log("Todos los productos:", pm.getProducts());

const productIdToFind = 4; 

const foundProduct = pm.getProductById(productIdToFind);

if (foundProduct) {
    console.log("Producto encontrado por ID:", foundProduct);
} else {
    console.log("Producto no encontrado por ID:", productIdToFind);
}
