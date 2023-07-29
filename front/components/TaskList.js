import { View, Text, Touchable, TouchableOpacity, StyleSheet  } from "react-native";


export default function Task({

    id,
    title,
    shared_with_id,
    completed,
 //   clearTodo,
 //   toggleTodo,
}){
    return
    (
     
        <View>
            <Text style={styles.text}>{title}</Text>
        </View>
     
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    contentContainerStyle:{
      padding:25,
    },
    text: {
      fontWeight:"800",
      fontSize: 28,
      marginBottom:15,
      color:'red',
    }
  });