import React,{Component} from 'react';
import classes from './App.module.css';
import ProductData from './Utils/ProductData';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import Topbar from './Topbar/Topbar';

class App extends Component {
  state={
    productData:ProductData,
    ImageUrl:'https://imgur.com/iOeUBV7.png',
    showTime:false,
  }
  render(){
    return (
      <div className="App">
        <Topbar/>
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview ImageUrl={this.state.ImageUrl} showTime={this.state.showTime}/>
          </div>
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
