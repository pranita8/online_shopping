import './App.css';
import Login from './component/Login';
import Slider from './component/Slider';
import Signup from './component/Signup';
function App() {

  // creating array of images
    const images = [
      { url: "https://www.compareraja.in/blog/wp-content/uploads/2014/01/flipkart-book-offers-1440x564_c.jpg"},
      { url: "https://i.pinimg.com/originals/b8/ce/12/b8ce12af4e594bcb26b8f55b0377dad4.jpg" },
      { url: "https://images.indianexpress.com/2020/11/Untitled-design-93.jpg"},
      { url: "https://www.lookinggoodfurniture.com/wp-content/uploads/2018/06/sofa-offer-banner.jpg" },
      { url: "https://cdn.grabon.in/gograbon/images/web-images/uploads/1593767938443/groceries-offers.jpg"},
    ] 

  return (
    <div className="App">
      {/* <div className="containerStyles">
        <Slider images={images} />
    </div> */}
    <Login/>
    </div>
  );
}

export default App;
