/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,ActivityIndicator, 
} from 'react-native';
import React, { useEffect, useState } from 'react';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const apiKey=`2TSOT2k8NuqhNCO9gFx7zkNdjhgbSddv6zw11DTx`
  useEffect(() => {
    fetch( `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [asteroidId]);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <View>
      <Text style={{fontSize:'20',}}>Enter Asteroid ID</Text>
      <TextInput
      value={'1000'}
      placeholder={"numbers accepted"}
      maxLength={100}
      />
      <TouchableOpacity onPress={()=>{}}>
        <View>
          <Text>Submit</Text>
        </View>
      </TouchableOpacity></View>
      )}
    </View>
  );
};


const App= () => {
  return (
    <View>
      <Text style={{fontSize:'20',}}>Enter Asteroid ID</Text>
      <TextInput
      value={'1000'}
      placeholder={"numbers accepted"}
      maxLength={100}
      />
      <TouchableOpacity onPress={()=>{}}>
        <View>
          <Text>Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
