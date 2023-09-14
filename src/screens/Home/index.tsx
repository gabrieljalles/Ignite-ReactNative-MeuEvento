import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Alert} from "react-native";
import {styles} from './styles';
import { Participant } from "../../components/Participant";
import { useState } from "react";

export default function Home(){
    const [participants, setParticipants] = useState<string[]>([]);
    const [inputName, setInputName] = useState('');

    function handleParticipantAdd(){

        if(inputName == ''){
            return Alert.alert('empty field','Você deve adicionar um nome!');
        }

        if(participants.includes(inputName)){
            setInputName('');
            return Alert.alert('Participant already added','Já existe um participante com esse nome');
        }

        setParticipants(prevState => [...prevState,inputName]);
        setInputName('');
    }

    function handleParticipantRemove(name: string){
        
        Alert.alert("Remover", `Remover o participante ${name}?`,[
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text:'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Terça, 12 de setembro de 2023
            </Text>

            <View style={styles.addForm}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                    onChangeText={setInputName}
                    value={inputName}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleParticipantAdd}>
                    <Text style={styles.textButton}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            {/*//Diferença entre scrollView e FlatList
                //Scroll carrega tudo mesmo que não visível
                //FlatList só carrega quando é visível 
            */}

            <FlatList 
                data={participants}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text style={styles.textEmpty}>
                            Não tem nínguem no seu evento. Adicione novas pessoas!
                        </Text>
                    )}
            />
            
        </View>
    )
}