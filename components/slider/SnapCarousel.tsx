import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Platform,

} from 'react-native';

const ENTRIES1: any = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
];
const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = (props: any) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [entries, setEntries] = useState([]);
    const carouselRef = useRef<any>(null);

    const goForward = () => {
        carouselRef.current.snapToNext();
    };

    useEffect(() => {
        setEntries(ENTRIES1);
    }, []);
    const pagination = (
        <Pagination
            dotsLength={entries.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.pagination}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: 'red',
            }}
            inactiveDotStyle={{
                backgroundColor: 'rgba(141,138,138,0.85)'
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
        />
    );
    const renderItem = ({item, index}: any, parallaxProps: any) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{uri: item.illustration}}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 65}
                data={entries}
                renderItem={renderItem}
                hasParallaxImages={true}
                autoplay={true}
                onSnapToItem={(index) => setActiveSlide(index)}
                loop={true}
            />
            {pagination}
        </View>
    );
};

export default MyCarousel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        marginBottom: 20,
    },
    item: {
        width: screenWidth - 60,
        height: screenWidth - 200,
        marginBottom: 13
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    title: {},
    pagination: {
        backgroundColor: 'transparent',
        width: 100,
        position: 'absolute',
        right: '38%',
        bottom: '-17%',
        alignContent: 'center',
    }
});
