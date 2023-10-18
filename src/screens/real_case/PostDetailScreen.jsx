import { View, StyleSheet, Text, FlatList } from "react-native";
import IconText from "../../components/real_case/IconText";
import { useEffect, useState } from "react";
import { performRequest } from "../../lib/networkProvider";
import CenterLoading from "../../components/CenterLoading";
import PostCard from "../../components/real_case/PostCard";



export default function PostDetailScreen({ route, navigation }) {
    const { userId } = route.params;

    const [userData, setUserData] = useState()
    const [post, setPost] = useState()
    const [isLoading, setIsLoading] = useState(false)

    async function fetchData() {
        setIsLoading(true)
        const remoteUserData = await performRequest(`users/${userId}`)
        const remotePostData = await performRequest(`users/${userId}/posts`)

        setUserData(remoteUserData)
        setPost(remotePostData)

        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <View style={styles.container}>
            {isLoading && <CenterLoading />}
            {userData && <>
                <Text style={{ marginBottom: 4, fontWeight: 'bold', fontSize: 24 }}>{userData.name}</Text>
                <Text style={{ marginBottom: 12 }}>{userData.email}</Text>
                <IconText text={userData.company.name} />
                <IconText text={userData.website} />
            </>}

            <Text style={{ fontSize: 18, marginVertical:12 }}>All post</Text>
            <FlatList

                data={post}
                renderItem={({ item }) => (
                    <PostCard
                        body={item.body}
                        name={item.userId}
                        title={item.title}
                        clickable={false}
                    />
                )}
            />

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        padding: 12,
        flex: 1
    },
    demo: {
    },
    box: {
    }
})