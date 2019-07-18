import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Image } from 'react-native'

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    edges: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        minWidth: 50,
    },
    nameAddress: {
        flexDirection: 'column',
        flex: 8,
    },
    addressText: {
        color: 'grey',
    },
    button: {
        borderWidth: 1,
        borderColor: '#0066CC',
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#fff',
    },
    buttonText: {
        color: '#0066CC',
        fontSize: 12,
    },
    info: {
        marginHorizontal: 40,
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4
    }
})

export default class RestaurantRow extends Component {

    state = {
        showInfo: false
    }

    infoPressed = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        const {
            place,
            index
        } = this.props

        console.log("place", place)

        return (
            <View key={place.name} style={[
                { backgroundColor: index % 2 === 0 ? 'white' : '#F5F5F5' }
            ]}>
                <View style={styles.row}>
                    <View style={styles.edges}>
                        <Text>
                            {index + 1}
                        </Text>
                    </View>
                    <View style={styles.nameAddress}>
                        <Text>{place.name}</Text>
                        <Text style={{ color: 'grey' }}>{place.address}</Text>
                    </View>
                    <View style={styles.edges}>
                        <TouchableOpacity
                            onPress={this.infoPressed}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Info</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    this.state.showInfo &&
                    <View style={styles.info}>
                        <Text>
                            Restaurant Info
                        </Text>
                        <Image 
                            source={{ 
                                uri: `http://localhost:3000/images/${place.image}`
                            }}
                            style={{
                                flex: 1,
                                height: 100,
                            }} 
                            resizeMode = "contain"
                        />
                    </View>
                }
            </View>
        )
    }
}