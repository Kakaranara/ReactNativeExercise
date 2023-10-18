import { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, ToastAndroid, View } from "react-native";

export default function FlexScreen() {

    const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];
    const justifyContents = [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
    ];
    const alignItemsArr = [
        'flex-start',
        'flex-end',
        'center',
        'stretch',
        'baseline',
    ];
    const wraps = ['nowrap', 'wrap', 'wrap-reverse'];
    const directions = ['inherit', 'ltr', 'rtl'];
    const [flexDirection, setFlexDirection] = useState(0)
    const [justifyContent, setJustifyContent] = useState(0);
    const [alignItems, setAlignItems] = useState(0);
    const [direction, setDirection] = useState(0);
    const [wrap, setWrap] = useState(0);

    const [square, setSquare] = useState([<Square />, <Square />, <Square />])

    useEffect(() => {
        console.log("HEY");
    }, [])

    function changeSettings(
        value,
        list,
        setter,
    ) {
        if (value === list.length - 1) {
            setter(0)
            return
        }
        setter(value + 1)
    }

    return (
        <>
            <View style={topStyles.container}>
                <View style={{
                    flexDirection : flexDirections[flexDirection],
                    justifyContent: justifyContents[justifyContent],
                    alignItems: alignItemsArr[alignItems],
                    direction: directions[direction],
                    flexWrap: wraps[wrap],
                    
                    flex: 1
                }}>
                {square.map((item) => item)}
                </View>
            </View>
            <View style={bottomStyles.container}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 12 }}>
                        <BtnComponent title={"Change Flex Direction"} subTitle={flexDirections[flexDirection]} onClick={() => {
                            changeSettings(flexDirection, flexDirections, setFlexDirection)
                        }} />
                        <BtnComponent title={"Change JUSTIFY Content"} subTitle={justifyContents[justifyContent]} onClick={() => {
                            changeSettings(justifyContent, justifyContents, setJustifyContent)
                        }} />
                        <BtnComponent title={"Change ALIGN Items"} subTitle={alignItemsArr[alignItems]} onClick={() => {
                            changeSettings(alignItems, alignItemsArr, setAlignItems)
                        }} />
                        <BtnComponent title={"Change DIRECTION"} subTitle={directions[direction]} onClick={() => {
                            changeSettings(direction, directions, setDirection)
                        }} />
                        <BtnComponent title={"Chanbge FLEX Wrap"} subTitle={wraps[wrap]} onClick={() => {
                            changeSettings(wrap, wraps, setWrap)
                        }} />
                        <BtnComponent title={"ADD Square"} subTitle={`Square size: ${square.length}`} onClick={() => {
                            // setSquare(square.push(<Square />))
                            setSquare([...square, <Square />])
                        }} />
                        <BtnComponent title={"DELETE Square"} subTitle={"PO"} onClick={() => {
                            setSquare([])
                        }} />

                    </View>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

})

const topStyles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

const bottomStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ddd"
    }
})

const Square = () => (
    <View
        style={{
            width: 50,
            height: 50,
            backgroundColor: randomHexColor(),
        }}
    />
);

const BtnComponent = ({ title, onClick: onPressed, subTitle }) => {
    return (
        <View style={{ alignItems: "stretch", width: "50%", padding: 10 }}>
            <Button title={title} onPress={() => {
                return onPressed()
            }} />
            <Text style={{ textAlign: 'center' }}>{subTitle}</Text>
            <View style={{ height: 6 }} />
        </View>
    )
}

const randomHexColor = () => {
    return '#000000'.replace(/0/g, () => {
        return Math.round(Math.random() * 16).toString(16);
    });
};