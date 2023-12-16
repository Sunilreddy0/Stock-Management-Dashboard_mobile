import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';

const StockDetailsScreen = ({ route }) => {
  const selectedStock = route.params.selectedStock;
  const [stockPrices, setStockPrices] = useState([]);

  useEffect(() => {
    const fetchStockPrices = async () => {
      try {
        const response = await axios.get(`https://cloud.iexapis.com/stable/stock/${selectedStock.symbol}/chart/1m?token=sk_df5701fa307146a998ef29bfc11cea75`);
        setStockPrices(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStockPrices();
  }, [selectedStock]);

  const renderLineChart = () => {
    if (stockPrices.length > 0) {
      const filteredLabels = stockPrices
        .map((priceData, index) => (index % 5 === 0 ? priceData.date : ''))
        .filter(label => label !== '');

      const data = {
        labels: filteredLabels,
        datasets: [{
          data: stockPrices.map((priceData) => priceData.close),
        }],
      };

      return (
        <LineChart
          data={data}
          width={Dimensions.get('window').width * 0.9} // Responsive chart width
          height={200}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            propsForDots: {
              r: '4',
              strokeWidth: '2',
              stroke: '#007AFF',
            },
            labelRotation: 45,
            formatXLabel: label => label.substring(0, 7),
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.info}>Symbol: {selectedStock.symbol}</Text>
      <Text style={styles.info}>Name: {selectedStock.companyName}</Text>
      <Text style={styles.chartTitle}>Historical Prices:</Text>
      {renderLineChart()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  info: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').width * 0.05, // Responsive font size
  },
  chartTitle: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StockDetailsScreen;