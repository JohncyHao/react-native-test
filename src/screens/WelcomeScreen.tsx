import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Dimensions,
} from 'react-native';

// 獲取螢幕寬高
const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }: any) => {
    const handleGetStarted = () => {
        navigation.replace('LoginScreen'); // 導航到 LoginScreen
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Image
                source={require('../assets/corner.png')}
                style={styles.cornerImage}
            />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/HovRNOBG.png')} // 替換為 logo 圖片路徑
                    style={styles.logo}
                />
            </View>

            <View style={styles.centercontainer}>
                <Image
                    source={require('../assets/start_amico.png')} // 替換為插圖圖片路徑
                    style={styles.illustration}
                />
                <Text style={styles.title}>
                    Explore Your Nearby{'\n'}Parking Places
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: height * 0.05, // 距螢幕上下各 5% 的空間
    },
    centercontainer: {
        alignItems: 'center',
    },
    cornerImage: {
        position: 'absolute',
        right: 0,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: height * 0.05, // 距離螢幕上方 5%
    },
    logo: {
        // width: width * 0.5, // 寬度為螢幕寬度的 15%
        //aspectRatio: 1, // 自動根據圖片的原始寬高比縮放
        resizeMode: 'contain',
    },
    illustration: {
        //aspectRatio: 1, // 自動根據圖片的原始寬高比縮放
        resizeMode: 'contain', // 確保圖片完整顯示
    },
    title: {
        fontSize: width * 0.05, // 字體大小為螢幕寬度的 5%
        fontWeight: '600',
        textAlign: 'center',
        color: '#000000',
        marginHorizontal: width * 0.1, // 左右留白為螢幕寬度的 10%
    },
    button: {
        backgroundColor: '#6B5EFC',
        borderRadius: width * 0.02, // 按鈕圓角為螢幕寬度的 %
        paddingVertical: height * 0.015, // 按鈕內部上下內距為螢幕高度的 2%
        paddingHorizontal: width * 0.3, // 按鈕內部左右內距為螢幕寬度的 20%
        alignSelf: 'center',
        marginBottom: height * 0.05, // 距離螢幕底部 5%
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: width * 0.04, // 按鈕文字大小為螢幕寬度的 4%
        fontWeight: 'bold',
    },
});

export default WelcomeScreen;
