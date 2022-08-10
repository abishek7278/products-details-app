import React from 'react'
import classes from '../ProductDetails/ProductDetails.module.css'
const ProductDetails=(props)=>{
    const colorOptions=props.data.colorOptions.map((item,pos)=>{
      const colorArr=[classes.ProductImage]
      if(pos===props.currentImage)
      {
        colorArr.push(classes.SelectedProductImage)
      }
      return(
        <img key={pos} className={colorArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=>props.onColorOptionClick(pos)}/>
      );
    })
    const featureList=props.data.featureList.map((item,pos)=>{
      const featureArr=[classes.FeatureItem]
      if(pos===props.currentSelectedFeature){
        featureArr.push(classes.SelectedFeaturedItem)
      }
      else
      {
        featureArr.push(classes.SelectedFeaturedItem)
      }
      return(
        <button onClick={props.onFeatureItemClick(pos)} key={pos} className={featureArr.join(' ')}>{item}</button>
      )
    })
    return(
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{props.data.title}</h1>
          <p className={classes.ProductDescription}>{props.data.description}</p>
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