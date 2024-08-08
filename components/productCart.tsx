import {FlatList, StyleSheet, Text, View} from "react-native";
import {CartProduct} from "@/components/CartProduct";
import {useEffect, useState} from "react";
import {useAppSelector} from "@/store/hooks/hook";
import {useGetAllProductsQuery} from "@/store/productSlice/productSlice";
import axios from "axios";


export const ProductCart = ({cate}: any) => {
    const {data, error, isLoading, isSuccess} = useGetAllProductsQuery('')
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0); // track the current page
    const [loadingMore, setLoadingMore] = useState(false); // track loading state for additional pages
    const authToken = useAppSelector(state => state.authToken);
    if (cate !== undefined) {
        console.log('hello')
    }
    useEffect(() => {
        if (data) {
            setProducts(data.data.items);
        }
    }, [data]);
    const loadMoreProducts = async () => {
        if (loadingMore) return;

        setLoadingMore(true);
        const response = await axios.get(`https://globus-nukus.uz/api/products?limit=20&offset=${(page + 1) * 20}`);
        if (response.data.data && response.data.data.items) {
            setProducts((prevProducts): any => [...prevProducts, ...response.data.data.items]);
            setPage(prevPage => prevPage + 1);
        }
        setLoadingMore(false);
    };

    return (
        <View style={styles.productForm}>
            <FlatList
                data={products}
                numColumns={2}
                renderItem={({item}: any) => (
                    <CartProduct
                        token={authToken.access}
                        id={item.id}
                        images={item.images}
                        name={item.name}
                        price={item.price}
                        amount={item.amount}
                    />
                )}
                onEndReached={loadMoreProducts}
                onEndReachedThreshold={0.5}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    productForm: {
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 35,
        marginTop: 20
    },
})