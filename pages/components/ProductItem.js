import { Thumbnail, ResourceList, TextStyle, Stack } from "@shopify/polaris";
import { ImageMajor } from '@shopify/polaris-icons';
  
import React from "react";

function ProductItem({product}) {
    const image = product.images[0] ? product.images[0]?.originalSrc : ImageMajor;
    const media = <Thumbnail source={image} />;
    const price = <TextStyle variation="strong">{product.variants[0].price}</TextStyle>;
    return (
        <>
        <ResourceList.Item
            media={media}
            id={product.id}
            accessibilityLabel={`View details for ${product.title}`}
        >
            <Stack>
                <Stack.Item fill>
                    <h3><TextStyle variation="strong">{product.title}</TextStyle></h3>
                </Stack.Item>
                <Stack.Item>${price}</Stack.Item>
            </Stack>
            
        </ResourceList.Item>
        </>
    );
}

export default ProductItem;