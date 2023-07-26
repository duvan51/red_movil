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
     <TouchableOpacity>
        <View>
            <Text style={styles.text}>{title}</Text>
        </View>
     </TouchableOpacity>
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
    title: {
      fontWeight:"800",
      fontSize: 28,
      marginBottom:15,
    }
  });