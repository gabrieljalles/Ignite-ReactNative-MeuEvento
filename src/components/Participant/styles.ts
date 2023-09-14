import { StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 5,
        flexDirection: 'row',
        marginBottom: 8,
        alignItems: 'center',
    },
    name : {
        color: '#fff',
        flex: 1,
        fontSize: 16,
        backgroundColor: '#1f1e25',
        height: 48,
        borderRadius: 5,
        padding: 12,
        
    },
    textButton: {
        color: '#fff',
        fontSize: 24,
    },
    removeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E23C44',
        height: 48,
        width: 56,
        borderRadius: 5,
    }
})