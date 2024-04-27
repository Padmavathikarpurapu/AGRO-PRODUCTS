import fruits from '../Pictures_for_project/fruits.jpeg'; // Assuming image1's file extension is .jpg
import image2 from '../Pictures_for_project/image2.jpeg'; // Assuming logo's file extension is .jpeg
import dairyproducts from '../Pictures_for_project/dairyproducts.jpeg'; // Assuming logo's file extension is .jpeg

const products = [
    {
        name: 'Fruits',
        image: fruits, // Use imported image variable
    },
    {

        name: 'Vegetables',
        image: image2, // Use imported image variable

    },
    {

        name: 'dairyproducts',
        image: dairyproducts, // Use imported image variable

    },
    // Add more products as needed
];

export default products;