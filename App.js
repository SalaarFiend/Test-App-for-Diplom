import React, { Component,useEffect } from "react";
import { StyleSheet, Text, ImageBackground, View, Pressable } from "react-native";
import WifiManager from "react-native-wifi-reborn";



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0, flag_pres: ''};
    }


    onPress = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
    onPressableOut = () =>{
        this.setState({
            flag_pres: this.state.flag_pres = ''
        });
    }
    onPressSides = (props) =>{

        this.setState({
            count: this.state.count + 1
        });
        switch (props) {
            case 'Left' :
                this.setState({
                    flag_pres: this.state.flag_pres = 'L'
                });
                break;
            case 'Right' :
                this.setState({
                    flag_pres: this.state.flag_pres = 'R'
                });
                break;
            case 'Top' :
                this.setState({
                    flag_pres: this.state.flag_pres = 'T'
                });
                break;
            case 'Bottom' :
                this.setState({
                    flag_pres: this.state.flag_pres = 'B'
                });
                break;
            case 'Rotate_Left' :
                this.setState({
                    flag_pres: this.state.flag_pres = 'Q'
                });
                break;
            case 'Rotate_Right' :
                this.setState({
                    flag_pres: this.state.flag_pres = 'E'
                });
                break;
            default:
                this.setState({
                    flag_pres: this.state.flag_pres = ''
                });
                break;
        }
    }


    render() {
        const {count} = this.state;
        const {flag_pres} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.countContainer}>
                    <Text>Count: {count}</Text>

                    <Text> Code is : {flag_pres} </Text>
                </View>
                <View style={styles.topButtons}>

                    <Pressable
                        style={styles.wrapperCustom}
                        onPressIn ={() => this.onPressSides('Rotate_Left')}
                        onPressOut={this.onPressableOut}
                    >
                        <Text>This is Rotate Left button!</Text>
                    </Pressable>

                    <Pressable
                        style={styles.wrapperCustom}
                        onPressIn ={() => this.onPressSides('Top')}
                        onPressOut={this.onPressableOut}
                    >
                        <Text>This is Top button!</Text>
                    </Pressable>

                    <Pressable
                        style={styles.wrapperCustom}
                        onPressIn ={() => this.onPressSides('Rotate_Right')}
                        onPressOut={this.onPressableOut}
                    >
                        <Text>This is Rotate Right button!</Text>
                    </Pressable>


                </View>

                <View style={styles.centerButtons}>
                    <Pressable
                        style={styles.wrapperCustom}
                        onPressIn ={() => this.onPressSides('Left')}
                        onPressOut={this.onPressableOut}
                    >
                        <Text>This is Left button!</Text>
                    </Pressable>

                    <Pressable
                               style={styles.wrapperCustom}
                               onPressIn ={() => this.onPressSides('Right')}
                               onPressOut={this.onPressableOut}
                    >
                        <Text>This is Right button!</Text>
                    </Pressable>



                </View>
                <View style = {styles.bottomButtons}>

                    <Pressable
                        style={styles.wrapperCustom}
                        onPressIn ={() => this.onPressSides('Bottom')}
                        onPressOut={this.onPressableOut}
                    >
                        <Text>This is bottom button!</Text>
                    </Pressable>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 6,
        backgroundColor: "#afeeee"
    },
    countContainer: {
        alignItems: "center",
        padding: 10,
        color: "white",
        fontSize: 20,
    },
    topButtons:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    centerButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    bottomButtons: {
        alignItems:"center",
        width: 350,
        height: 90,
    },
    textInButtons: {
        textAlign: "center",
        marginTop: 30,

    },
    wrapperCustom: {
    borderRadius: 5,
    padding: 6,
        backgroundColor: '#87cefa',
        width: 100,
        height: 80
    },
    rotateRight: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});

export default App;
