import { useEffect, useMemo, useRef, useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function HookTesterScreen() {

    //state 
    const [memoNum, memoSetNum] = useState(0)
    const [memoNum2, memoSetNum2] = useState(0)
    /**
     * trying memo, to call only when memoNum2 changes
     */
    const calculationResult = useMemo(() => {
        console.log("Memo got re-rendered!");    
        extensiveCalculation()
    }, [memoNum2])

    let reRenderSum = useRef(0);
    console.log(`i got re-rendered ${reRenderSum.current} times!`);

    useEffect(() => {
        reRenderSum.current += 1
    })
 
    
    return(
    <View style={styles.container}>
        <Text style={styles.title}>HOOKS Demo</Text>
        <View style={{height: 1, marginVertical : 12,  backgroundColor: '#000'}} />
        <Text style={styles.title}>MEMO</Text>
        <View style={styles.memo}>
            <Button title={`count : ${memoNum}`} onPress={() => {
                memoSetNum(memoNum + 1)
            }} />

            <Button title={`trigger extensive count : ${memoNum2}`} onPress={() => {
                memoSetNum2(memoNum2 + 1)
            }} />
        </View>

    </View>
    )
}

const extensiveCalculation = () => {
    let sum = 0
    for(let i =0; i < 100000000; i++){
        sum++
    }
    return sum
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 8,
        backgroundColor: '#ddd',
        flexDirection: 'column',
    },
    title : {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    memo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 16
    }
})