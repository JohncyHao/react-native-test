import BottomSheet from '@gorhom/bottom-sheet';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
const {height} = Dimensions.get('window');
// 地圖與主要頁面
const MainScreen = () => {
  const [selectedOption, setSelectedOption] = useState('Go To');
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Sakura Saku',
      address: '335 Thong Lo 17 Alley',
      hours: '5pm-12am',
    },
    {
      id: 2,
      name: 'Ministry of Craft',
      address: '335 Thong Lo 17 Alley',
      hours: '5pm-12am',
    },
  ]);
  const [selectedButton, setSelectedButton] = useState('Monthly'); // 預設選中 Monthly

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    // 更新下方資料內容
    if (option === 'Go To') {
      setData([
        {
          id: 1,
          name: 'Sakura Saku',
          address: '335 Thong Lo 17 Alley',
          hours: '5pm-12am',
        },
      ]);
    } else if (option === 'Booking') {
      setData([
        {
          id: 2,
          name: 'Ministry of Craft',
          address: '335 Thong Lo 17 Alley',
          hours: '5pm-12am',
        },
      ]);
    } else {
      setData([]);
    }
  };

  const handleTopButtonSelect = (button: any) => {
    setSelectedButton(button);
    console.log(`Selected Top Button: ${button}`);
  };
  return (
    <View style={styles.container}>
      {/* 地圖區域 */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 13.745,
          longitude: 100.501,
          latitudeDelta: 0.01,
          longitudeDelta: 0.0,
        }}
      />

      <GestureHandlerRootView style={styles.container}>
        {/* 下方 Bottom Sheet */}
        <BottomSheet snapPoints={[height * 0.5, height * 0.9]} index={0}>
          {/* 搜尋欄與頂部按鈕 */}
          <View style={styles.topContainer}>
            {/* 搜尋欄 */}
            <TextInput
              style={styles.searchBar}
              placeholder="Where are you going?"
              placeholderTextColor="#999"
            />

            {/* 三個按鈕 */}
            <View style={styles.topButtons}>
              {['Monthly', 'Group', 'Schedule'].map(button => (
                <TouchableOpacity
                  key={button}
                  style={[
                    styles.topButton,
                    selectedButton === button && styles.selectedTopButton,
                  ]}
                  onPress={() => handleTopButtonSelect(button)}>
                  <Text style={styles.topButtonText}>{button}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* 選項按鈕 */}
          <View style={styles.optionContainer}>
            {['Go To', 'Booking', 'Parking Near Me'].map(option => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.optionButton,
                  selectedOption === option && styles.selectedButton,
                ]}
                onPress={() => handleOptionSelect(option)}>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* 下方的卡片集合 */}
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            horizontal
            renderItem={({item}) => (
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardText}>{item.address}</Text>
                <Text style={styles.cardText}>Opening hours: {item.hours}</Text>
              </View>
            )}
          />
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  searchBar: {
    flex: 1,
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  topButtons: {
    flexDirection: 'row',
  },
  topButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  selectedTopButton: {
    backgroundColor: '#6c63ff',
  },
  topButtonText: {
    fontSize: 12,
    color: '#fff',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  optionButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
  },
  selectedButton: {
    backgroundColor: '#6c63ff',
  },
  optionText: {
    color: '#000',
  },
  card: {
    width: 200,
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardText: {
    marginTop: 5,
    fontSize: 14,
  },
  map: {
    flex: 1,
  },
});

export default MainScreen;
