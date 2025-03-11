const getProducts = async function () {
    try {
        const response = await fetch('http://localhost:3000/api/product'); 
        const result = await response.json(); 

        return result; 
    } catch (error) {
        console.error("Error fetching products:", error);
        return null;
    }
}

export default getProducts