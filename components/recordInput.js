import * as React from'react';
import { connect } from 'react-redux'; //{connect} connects a React component with Redux store
import { View, Text, Button, TextInput, StyleSheet, FlatList } from 'react-native';
import { input_v, add_v, clear_input} from '../redux/actions'

/* Action saved as a props "add_value" */
const mapDispatchToProps = ({input_v,add_v,clear_input})
/* State saved here as props "values" to use in here */
const mapStateToProps = (state) =>{
    return{
        values: state.inputAndStore.strings,
        textInput: state.inputAndStore.text
    }
}

/* const renderValue = ({value}) =><Value  */

const recordInput = ({input_v, clear_input, add_v, values, textInput}) =>{
    const handleTextChanged = (text) =>{
        input_v(text)
    }
    const submitHandler=()=>{
        if (textInput !== ""){
            add_v(textInput)
            console.log({values})
        }
        clear_input();
    }
    const keyExtractor = (item, index) => index.toString();

    const renderItem = ({item,index})=>{
        return (
            <View style={styles.flatlist}>
                <Text style={styles.text}>{item}</Text>
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <TextInput style={styles.textip} name='input' placeholder="Enter Value Here!"onChangeText={(e)=>handleTextChanged(e)} value={textInput}/>
            <Button style={styles.bnt} type="submit" title="Add Values To FlatList" color="#00cc00" onPress={submitHandler}/>
            <FlatList  style={styles.valueList} data={values} renderItem={renderItem} keyExtractor={keyExtractor}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 25,
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    textip:{
        fontSize: 20,
        fontWeight: 'bold',
        height: 35,
        border: "solid 1px #00cc00",
        borderRadius: 5,
        margin: 15,
        textAlign: 'center',
    },
    btn:{
        height: 50,
        padding: 30,
        borderRadius: 10,
        paddingBottom: 10,
        fontSize: 20,
    },
    flatlist:{
        borderBottomWidth:1,
        padding:10,
        margin: 5,
        borderRadius: 5,
        textAlign: 'center',
        backgroundColor: '#fff',
        margin: 0,
    },
    valueList:{
        margin: 10,
    },
    text:{
        fontSize: 20,
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(recordInput);