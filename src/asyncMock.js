const products = [

    // IPHONE
    { id: "iphone-7", name: "IPHONE 7", price: 85000.99, category: "iphone", img: "/iphone/ip7.jpg", stock: 10, description: "IPHONE 7 DE 64 GB EN CAJA USADO", },
    { id: "iphone-11", name: "IPHONE 11", price: 185000.00,  category: "iphone", img: "/iphone/ip11.jpg", stock: 10, description: "IPHONE 11 DE 128 GB EN CAJA SELLADO Y CON GARANTIA", },
    { id: "iphone-11-pro", name: "IPHONE 11 PRO", price: 245000.00,  category: "iphone", img: "/iphone/ip11pro.jpg", stock: 10, description: "IPHONE 11 PRO DE 128 GB EN CAJA SELLADO Y CON GARANTIA", },
    { id: "iphone-xs", name: "IPHONE XS", price: 149000.00,  category: "iphone", img: "/iphone/ipxs.jpg", stock: 10, description: "IPHONE XS DE 64 GB EN CAJA USADO", },
    { id: "iphone-12-pro-max", name: "IPHONE 12 PRO MAX", price: 295000.00,  category: "iphone", img: "/iphone/ip12promax.jpg", stock: 10, description: "IPHONE 12 PRO MAX DE 128 GB EN CAJA SELLADO Y CON GARANTIA", },
    { id: "iphone-13-pro-max", name: "IPHONE 13 PRO MAX", price: 345000.00,  category: "iphone", img: "/iphone/ip13promax.jpg", stock: 10, description: "IPHONE 13 PRO MAX DE 256 GB EN CAJA SELLADO Y CON GARANTIA", },
    { id: "iphone-14-pro-max", name: "IPHONE 14 PRO MAX", price: 495000.00,  category: "iphone", img: "/iphone/ip14promax.jpg", stock: 10, description: "IPHONE 11 PRO DE 128 GB EN CAJA SELLADO Y CON GARANTIA", },
   

    // IPAD
    { id: "ipad-9", name: "IPAD 9 GEN", price: 196499.99, category: "ipad", img: "/ipad/ipad9gen.jpg", stock: 10, description: "IPAD 9 GEN DE 128 GB EN CAJA SELLADA NUEVAS", },
    { id: "ipad-10", name: "IPAD 10 GEN", price: 296499.99, category: "ipad", img: "/ipad/ipad10.png", stock: 10, description: "IPAD 10 GEN DE 128 GB EN CAJA SELLADA NUEVAS", },
    { id: "ipad-air4", name: "IPAD AIR 4 GEN", price: 346499.99, category: "ipad", img: "/ipad/ipadair4.jpg", stock: 10, description: "IPAD AIR 4 GEN 128 GB EN CAJA SELLADA NUEVAS", },
    { id: "ipad-air5", name: "IPAD AIR 5 GEN", price: 426499.99, category: "ipad", img: "/ipad/air5.jpg", stock: 10, description: "IPAD AIR 5 GEN 128 GB EN CAJA SELLADA NUEVAS", },
    { id: "ipad-pro-11", name: "IPAD PRO 11 256GB", price: 486499.99, category: "ipad", img: "/ipad/ipadpro11.jpg", stock: 10, description: "IPAD PRO 11 DE 256 GB EN CAJA SELLADA NUEVAS", },
  

    // MACBOOKS
    { id: "airm1", name: "MACBOOK AIR M1 13.3", price: 544499.99, category: "macbooks", img: "/macbooks/airm1.png", stock: 10, description: "Macbook Air 8 de ram 256 ssd", },
    { id: "airm2", name: "MACBOOK AIR M2 ", price: 644499.99, category: "macbooks", img: "/macbooks/airm2.jpg", stock: 10, description: "Macbook Air Chip m2 8 de ram 256 ssd", },
    { id: "pro13", name: "MACBOOK PRO 13 2022", price: 744499.99, category: "macbooks", img: "/macbooks/macbookpro13.jpg", stock: 10, description: "Macbook PRO 16 pulgadas 8 de ram 256 ssd", },
    { id: "pro16", name: "MACBOOK PRO 16 2023", price: 944499.99, category: "macbooks", img: "/macbooks/macbookpro16.jpg", stock: 10, description: "Macbook PRO 16 pulgadas 8 de ram 256 ssd", },


    // APPLE WATCH
    { id: "watch-se-40mm", name: "APPLE WATCH SE GPS 40MM", price: 154499.99, category: "apple-watch", img: "/applewatch/watchse40mm.jpg", stock: 10, description: "APPLE WATCH SE GPS 40 MM ESTRUCTURA DE ALUMINIO", },
    { id: "watch-8", name: "APPLE WATCH 8 GPS 45MM", price: 234499.99, category: "apple-watch", img: "/applewatch/watch8.jpg", stock: 10, description: "APPLE WATCH 8 GPS 45 MM", },
    { id: "watch-ultra", name: "APPLE WATCH ULTRA GPS 49MM", price: 534499.99, category: "apple-watch", img: "/applewatch/watchultra.jpg", stock: 10, description: "APPLE WATCH ULTRA GPS 49 MM", },
    { id: "watch-ultra-loop", name: "APPLE WATCH ULTRA GPS CORREA LOOP 49MM", price: 634499.99, category: "apple-watch", img: "/applewatch/watchultraloop.jpg", stock: 10, description: "APPLE WATCH ULTRA CORREA LOOP SPECIAL GPS 49 MM", },

    // ANDROID
    { id: "a13", name: "Samsung Galaxy A13", price: 76499.99, category: "android", img: "/android/a13.png", stock: 10, description: "Samsung Galaxy A13 EN CAJA NUEVO 64gb", },
    { id: "edge-30ultra", name: "Motorola Edge 30 ultra", price: 176499.99, category: "android", img: "/android/edge30ultra.jpg", stock: 10, description: "Motorola Edge 30 ultra de 128gb nuevo en caja!", },
    { id: "mi-11ultra", name: "Xiaomi MI 11 ULTRA", price: 426499.99, category: "android", img: "/android/mi11ultra.jpg", stock: 10, description: "Xiaomi mi 11 ULTRA de 256 gb nuevo ", },
    { id: "note-21ultra", name: "Samsung Galaxy Note 21 ULTRA", price: 376499.99, category: "android", img: "/android/note21ultra.jpg", stock: 10, description: "Samsung Galaxy Note 21 ultra en caja", },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 100)
    })
}