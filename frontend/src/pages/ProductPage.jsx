import { useEffect, useState } from "react";
import useApi from "../shared/api";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] =
    useState();
    // product.images?.[0]

  const [products, setProducts] = useState([]);

  const api = useApi();

  const getProducts = async () => {
    try {
      const response = await api.get("/products");
      console.log(response.data.data);

      setProducts(response.data.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log(products);
    console.log(Array.isArray(products));
  }, [products]);

  return (
    <div className="max-w-7xl    grid md:grid-cols-3 gap-12   mx-auto p-8">
     
      {products.map((p) => {
        return (
          
            <div className="grid border border-gray-400 p-2 rounded-2xl md:grid-cols-1 gap-6">
              {/* Images */}

              <div>
                {/* <div className="border rounded-xl overflow-hidden h-[450px]">
                  <img
                    src={selectedImage}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div> */}

                <div className="grid md:grid-cols-2 place-items-center gap-4 mt-4">
                  {p.images.slice(0, 5).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt=""
                      onClick={() => setSelectedImage(image)}
                      className={`w-30 h-30 rounded-lg border cursor-pointer object-cover ${
                        selectedImage === image
                          ? "border-blue-600"
                          : "border-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Product Details */}

              <div>
                <h1 className="text-3xl font-bold">{p.title}</h1>

                <p className="text-2xl text-green-600 font-semibold mt-4">
                  ₹ {p.price.amount}
                </p>

                <p className="mt-4 text-gray-600 capitalize">
                  Category : {p.category}
                </p>

                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-2">Description</h2>

                  <p className="text-gray-700">{p.description}</p>
                </div>

                <div className="mt-8">
                  {p.stock > 0 ? (
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
                      Available
                    </button>
                  ) : (
                    <button className="bg-red-600 text-white px-6 py-3 rounded-lg">
                      Out of Stock
                    </button>
                  )}
                </div>
              </div>
            </div>
        
        );
      })}
    </div>
  );
};

export default ProductPage;
