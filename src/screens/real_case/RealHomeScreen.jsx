import { FlatList, ToastAndroid, View } from "react-native";
import CenterLoading from "../../components/CenterLoading";
import { useEffect, useState } from "react";
import axios from "axios";
import { performRequest } from "../../lib/redux/service/networkProvider";
import { delay } from "../../util";
import _ from "lodash"
import PostCard from "../../components/real_case/PostCard";
import { useNavigation } from "@react-navigation/native";

export default function RealHomeScreen() {

    const [jsonData, setJsonData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()

    async function fetchTest() {
        setIsLoading(true)
        
        const remoteData = await performRequest("posts")
        const userIdSet = new Set()
        const filteredData = remoteData.filter((post) => {
            if (!userIdSet.has(post.userId)) {
                userIdSet.add(post.userId)
                return true
            }
            return false
        })
        setJsonData(filteredData)

        setIsLoading(false)
    }

    useEffect(() => {
        fetchTest()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            {isLoading && <CenterLoading />}
            <FlatList
                data={jsonData}
                renderItem={({ item }) => (
                    <PostCard
                        title={item.title}
                        body={item.body}
                        name={item.userId}
                        onPressed={() => {
                            navigation.navigate('PostDetail', { userId: item.userId })
                        }} />
                )}
            />
        </View>
    )
}