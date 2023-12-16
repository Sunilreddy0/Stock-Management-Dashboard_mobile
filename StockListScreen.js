import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';

const StockListScreen = ({ navigation }) => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get('https://cloud.iexapis.com/stable/stock/market/list/mostactive?token=sk_df5701fa307146a998ef29bfc11cea75');
        setStocks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStocks();
  }, []);

  const renderStockItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('StockDetails', { selectedStock: item })}>
      <View style={styles.stockItem}>
        <Text style={styles.symbol}>{item.symbol}</Text>
        <Text style={styles.companyName}>{item.companyName}</Text>
        <Text style={styles.price}>Price: {item.latestPrice}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stock List</Text>
      <FlatList
        data={stocks}
        renderItem={renderStockItem}
        keyExtractor={(item) => item.symbol}
      />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: windowWidth * 0.06, // Responsive font size
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#45a049'
  },
  stockItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  symbol: {
    fontWeight: 'bold',
    fontSize: windowWidth * 0.05, // Responsive font size
  },
  companyName: {
    color: 'gray',
    fontSize: windowWidth * 0.04, // Responsive font size
  },
  price: {
    marginTop: 5,
    fontSize: windowWidth * 0.04, // Responsive font size
  },
});

export default StockListScreen;