import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      padding: 24,
    },
    eventName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ffffff',
      marginTop: 24, 
    },
    eventDate: {
      color: '#6b6b6b',
      fontSize: 16
    },
    addForm:{
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        width: '100%',
        marginTop: 24,
        marginBottom: 24
    },
    input:{
        flex:1,
        color: '#ffffff',
        borderRadius: 5,
        height: 56,
        backgroundColor: '#1f1e25',
        padding: 8,
        fontSize:24

    },
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#31cf67',
        height: 56,
        width: 56,
        borderRadius: 5,
    },
    textButton: {
        color: '#fff',
        fontSize: 24
    },
    participants:{
      marginTop: 24
    },
    textEmpty:{
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    }

    
})