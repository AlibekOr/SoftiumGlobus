import {FlatList, Text, View} from "react-native";
import {CartProduct} from "@/components/CartProduct";


export const ProductCart = ({allProducts}: any) => {

    return (
        <FlatList data={allProducts.items} numColumns={2} renderItem={
            ({item}) => (
                <CartProduct id={item.id} images={item.image} name={item.name} price={item.price}/>
            )
        }/>

    )
}