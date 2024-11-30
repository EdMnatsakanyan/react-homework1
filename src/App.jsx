import { useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([
    { id: 1, title: "Wireless Headphones", price: 49.99, category: "Electronics", photo: "https://via.placeholder.com/150" },
    { id: 2, title: "Yoga Mat", price: 19.99, category: "Fitness", photo: "https://via.placeholder.com/150" },
    { id: 3, title: "Desk Lamp", price: 29.99, category: "Home Decor", photo: "https://via.placeholder.com/150" },
    { id: 4, title: "Running Shoes", price: 59.99, category: "Footwear", photo: "https://via.placeholder.com/150" },
    { id: 5, title: "Bluetooth Speaker", price: 39.99, category: "Electronics", photo: "https://via.placeholder.com/150" },
    { id: 6, title: "Cooking Utensil Set", price: 24.99, category: "Kitchen", photo: "https://via.placeholder.com/150" },
    { id: 7, title: "Notebook", price: 4.99, category: "Stationery", photo: "https://via.placeholder.com/150" },
    { id: 8, title: "Gaming Mouse", price: 34.99, category: "Gaming", photo: "https://via.placeholder.com/150" },
    { id: 9, title: "Sunglasses", price: 14.99, category: "Accessories", photo: "https://via.placeholder.com/150" },
    { id: 10, title: "Portable Charger", price: 25.99, category: "Electronics", photo: "https://via.placeholder.com/150" },
  ]);

  const [basket, setBasket] = useState([]);

  const moveToCart=product=>{
    const found=basket.find(item=>item.id===product.id)
    if(found){
      found.count++
      setBasket([...basket])
    }else{
      setBasket([...basket,{...product,count:1}])
    }
  }

  const quantityApp=product=>{
    const found=basket.find(item=>item.id==product.id)
    found.count++
    setBasket([...basket])
  }

  const quantityDown=product=>{
    const found=basket.find(item=>item.id==product.id)
    found.count--
    if(found.count<=0){
      removeBtn(product)
    }else{
      setBasket([...basket])
    }
  }

  const removeBtn=product=>{
    setBasket([...basket.filter(item=>item.id!==product.id)])
  }

  return (
    <>
      <header className="bg-purple-900 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Online Shop</h1>
      </header>

      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold text-purple-800 mb-4">Our Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src={product.photo}
                alt={product.title}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-purple-900">{product.title}</h3>
              <p className="text-purple-700 mb-2">{product.category}</p>
              <p className="text-xl font-bold text-purple-900 mb-4">{product.price} USD</p>
              <button onClick={()=>moveToCart(product)} className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200">
                Add to Basket
              </button>
            </div>
          ))}
        </div>

        {/* Basket Section */}
        <h2 className="text-2xl font-semibold text-purple-800 mt-10 mb-4">Shopping Basket</h2>

        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full text-left">
            <thead className="bg-purple-900 text-white">
              <tr>
                <th className="p-3">Title</th>
                <th className="p-3">Price</th>
                <th className="p-3">Count</th>
                <th className="p-3">Subtotal</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {basket.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">{item.price} USD</td>
                  <td className="p-3">{item.count}</td>
                  <td className="p-3">{(item.count * item.price).toFixed(2)} USD</td>
                  <td className="p-3">
                    <button onClick={()=>quantityApp(item)} className="px-4 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                      +
                    </button>

                    <button onClick={()=>quantityDown(item)} className="px-4 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                      -
                    </button>

                    <button onClick={()=>removeBtn(item)} className="px-4 py-1 bg-red-600 text-white rounded-md hover:bg-red-700">
                      Remove
                    </button> 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
