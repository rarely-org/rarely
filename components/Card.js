import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";
import colors from "../config/colors";

function Card({ text, images, products, categories, navigation }) {
  // console.log('Card:images', images)
  // console.log('Card:text', text)
  return (
    <View style={styles.card}>
      {images && images.length > 0 && (
        <Image style={styles.image} source={{ uri: images[0] }} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={10}>
          {text}
        </Text>
      </View>
      <View style={styles.condition}>
        <Text style={styles.conditionChip}>SMA</Text>
        <Text style={styles.countryChip}>🇩🇪</Text>
      </View>
      <View style={styles.productCategorySection}>
        {products && products.map((product) => (
          <View style={styles.productCategoryRow}>
            <Text style={styles.chevron}><MaterialCommunityIcons name="chevron-right" size={15} /></Text>
            <TouchableOpacity onPress={() => navigation.navigate('Product', product)}>
              <Text style={styles.product}>{product.name}</Text>
            </TouchableOpacity>
            <Text style={styles.chevron}><MaterialCommunityIcons name="chevron-right" size={15} /></Text>
            <TouchableOpacity onPress={() => navigation.navigate('Category', product.categories)}>
              <Text style={styles.category}>{product.categories.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
        {categories && categories.map((category) => (
          <View style={styles.productCategoryRow}>
            <Text style={styles.chevron}><MaterialCommunityIcons name="chevron-right" size={15} /></Text>
            <TouchableOpacity onPress={() => navigation.navigate('Category', category)}>
              <Text style={styles.category}>{category.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    backgroundColor: colors.white,
    margin: 15,
    marginBottom: 0,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
  },
  textContainer: {
    padding: 15,
  },
  productCategorySection: {
    padding: 0,
    paddingBottom: 10,
    backgroundColor: '#eee',
  },
  productCategoryRow: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },
  chevron: {
    fontSize: 15,
    paddingTop: 2,
    backgroundColor: '#eee',
    color: '#888'
  },
  product: {
    fontSize: 15,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#eee',
    fontWeight: 'bold',
  },
  category: {
    flex: 1,
    fontSize: 15,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#eee',
  },
  condition: {
    padding: 15,
    paddingTop: 0,
    // backgroundColor: '#eee',
    textAlign: 'right',
    flexDirection: 'row',
    alignItems: 'flex-start',
    position: 'relative',
  },
  conditionChip: {
    position: 'relative',
    backgroundColor: '#eee',
    color: '#555',
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 14,
    borderRadius: 8,
    borderColor: '#eee',
    borderWidth: 1,
    overflow: "hidden",
  },
  countryChip: {
    position: 'relative',
    backgroundColor: '#eee',
    color: '#555',
    padding: 2,
    paddingLeft: 8,
    paddingRight: 8,
    marginLeft: 10,
    fontSize: 14,
    borderRadius: 8,
    borderColor: '#eee',
    borderWidth: 1,
    overflow: "hidden",
  }
});

export default Card;
