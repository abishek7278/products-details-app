import React,{Component} from 'react';
import classes from './App.module.css';
import ProductData from './Utils/ProductData';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import Topbar from './Topbar/Topbar';

class App extends Component {
  state={
    productData:ProductData,
    ImagePos:0,
    currentSelectedFeature:0,
  }
  onFeatureItemClick=(pos)=>{
    this.setState({currentSelectedFeature:pos})
  }
  onColorOptionClick=(pos)=>{
    this.setState({Imagepos:pos})
    
  }
  render(){
    return (
      <div className="App">
        <Topbar/>
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview  ImageUrl={this.state.productData.colorOptions[this.state.ImagePos].imageUrl} currentSelectedFeature={this.state.currentSelectedFeature}/>
          </div>
          <div className={classes.ProductData}>
            <ProductDetails currentSelectedFeature={this.state.currentSelectedFeature} onFeatureItemClick={this.onFeatureItemClick} currentImage={this.state.ImagePos} onColorOptionClick={this.onColorOptionClick} data={this.state.productData}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
