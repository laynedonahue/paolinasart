import React from "react";
import  Grid  from "@material-ui/core";


const products = [
    {id: 1, name: 'CrowPainting', description: 'a painting of a crow', price:'$20'},
    {id: 2, name: 'CatPainting', description: 'a painting of a cat', price:'$30'}
]

const Products = () => {
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
}

export default Products;