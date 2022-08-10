import React from 'react'
import ProductData from '../Utils/ProductData'
import classes from '../ProductDetails/ProductDetails.module.css'
const ProductDetails=(props)=>{
    console.log(props.data)
    const colorOptions=props.data.colorOptions.map((item,pos)=>{
      const colorArr=[classes.ProductImage]
      if(pos==0)
      {
        colorArr.push(classes.SelectedProductImage)
      }
      return(
        <img className={colorArr.join(' ')} src={item.imageUrl} alt={item.styleName}/>
      )
    })
    const featureList=props.data.featureList.map((item,pos)=>{
      const featureArr=[classes.FeatureItem]
      if(item==="Time"){
        featureArr.push(classes.SelectedFeaturedItem)
      }
      return(
        <button className={featureArr.join(' ')}>{item}</button>
      )
    })
    return(
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>{ProductData.description}</p>
          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
            {colorOptions}
          </div>
          <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            {featureList}
          </div>
          <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
    );
}
export default ProductDetails