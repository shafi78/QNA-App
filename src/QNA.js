import { StyleSheet, Text, View , TouchableOpacity , FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import {firebase} from '../firebase/FirebaseConfig'

const QNA = ({route}) => {

    const [Question,set_Question,] = useState([]);

    const {Question_category} = route.params 

    useEffect(() => {
        getQuestions()
    },[])

    const getQuestions = async () => {

        const db = firebase.firestore();
        const questionsRef = db.collection('AddData');
        const snapshot = await questionsRef.where('Question_category', '==',Question_category).get();

        if (snapshot.empty)
        {
            console.log('No Matching documents ')
            return ;
        }

        const allQuestions = snapshot.docs.map(doc => doc.data());
        set_Question(allQuestions)
       
    };

   

  return (
    <View style={styles.container}>
        <FlatList
        
        data = {Question}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({item,index}) => (
            <View style={styles.questionContainer}>
                <Text style={styles.question} >
                {item.Question} ?
                </Text>
                
                <Text style={styles.answer}>
                  Ans :  {item.Answer}.
                </Text>

            </View>
        )}
        />

        
    </View>
  )
}

export default QNA

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    },

    questionContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 5 ,
        padding: 20,
        elevation: 10,
        width: 390,
    },

    question: {
        fontSize: 20,
        fontWeight: '600',
        color: 'red',
        marginVertical: 10,
    },

    answer: {
      fontSize: 15,
      fontWeight: '500',
      color: 'black',
    },

    
})