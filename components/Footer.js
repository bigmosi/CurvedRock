import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

const Footer = () => {
    const [emailText, setEmailText] = useState('Enter email address');

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.updates}>EMAIL UPDATES</Text>
                <Text style={styles.offers}>
                    Exclusive sales, special offers, and more.
                </Text>
                <TextInput 
                 style={styles.footerInput}
                 onChangeText={text => setEmailText(text)}
                 value={emailText}
                 />
                 <TouchableOpacity style={styles.footerButton}>
                    <Text style={styles.footerButtonText}>SIGN UP</Text>
                 </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style={styles.support}>CUSTOMER SUPPORT</Text>
                <Text style={styles.supportOperations}>CONTACT US</Text>
                <Text style={styles.supportOperations}>ORDER TRACKER</Text>
                <Text style={styles.supportOperations}>RETURN & REFUNDS</Text>
                <Text style={styles.supportOperations}>SIZING STORE LOCATOR</Text>
                <Text style={styles.supportOperations}>SITE MAP</Text>

            </View>
            <View style={styles.container}>
                <Text style={styles.support}>COMPANY INFO</Text>
                <Text style={styles.supportOperations}>ABOUT</Text>
                <Text style={styles.supportOperations}>CAREERS</Text>
                <Text style={styles.supportOperations}>PRIVACY & TERMS</Text>
                <Text style={styles.supportOperations}>FOLLOW US</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#686868',
        height: 190,
        paddingLeft: 50,
        paddingTop: 30,
        marginTop: 12
    },
    updates: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 15,
        color: '#000000',
        paddingBottom: 5
    },
    offers: {
        fontFamily: 'OpenSans-Italic',
        fontSize: 12,
        color: '#000000',
        paddingBottom: 10
    },
    footerButtonText: {
        borderWidth: 1,
        width: 175,
        height: 40,
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        fontFamily: 'OpenSans-Light'
    },
    footerButton: {
        width: '40%',
        backgroundColor: '#000000',
        marginTop: 10,
        borderRadius: 5
    },
    footerButton: {
        fontSize: 20,
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    support: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        marginBottom: 10
    },
    supportOperations: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 12,
        color: '#FFFFFF',
        paddingBottom: 3
    }
});

export default Footer;