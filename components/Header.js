import { StyleSheet, View, Image } from "react-native";

const Header = () => {
    return (
        <View style={Styles.container}>
            <View style={Styles.headerRow}>
                <Image
                  style={styles.imageStyle}
                  source={require('../assets/curved-rock-logo-black.png')}
                  />
                  <Image
                    style={styles.menu}
                  />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5
    },
    headerRow: {
        flexDirection: 'row'
    },
    imageStyle: {
        height: 100,
        width: '50%'
    },
    menu: {
        alignSelf: 'center',
        marginLeft: 150
    }
});

export default Header;

