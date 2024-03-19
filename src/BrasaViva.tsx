import React from "react";
import { FlatList, StatusBar, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Cardapio {
    id: string,
    nome: string,
    preco: string,
    ingredientes: string,
    images: any
}

const dados: Cardapio[] = [
    {
        id: "1", nome: "Espaguete", preco: "R$50",
        ingredientes: "220g de camarões com espaguete italiano, ervilhas, presunto e molho branco. Gratinado com farta camada de queijos muçarela e parmesão.", images: require('../src/assets/images/espaguete.jpg')
    },

    {
        id: "2", nome: "Picanha Black Angus ", preco: "R$100",
        ingredientes: "Picanha Black Angus (300g) Picanha da raça Angus, acompanhada de vinagrete, chimichurri, farofa amarela, mandioca cozida ze arroz biro biro.", images: require('../src/assets/images/picanha.jpeg')
    },

    {
        id: "3", nome: "Carbonara", preco: "R$90",
        ingredientes: "Carbonara de camarão com fettuccine e molho feito com gema de ovo, queijo parmesão, creme de leite fresco, pimenta do reino, bacon e finalizado com farofa crocante de panko.", images: require('../src/assets/images/carbonara.jpeg')
    },

    {
        id: "4", nome: "Camarão Fernando de Noronha", preco: "R$120",
        ingredientes: "Camarões salteados no azeite e alho, com legumes, palmito, batata recheada, tomates cereja e muçarela de búfala envolvidos em leve molho escalivada e azeite de ervas. Acompanha arroz de brócolis.", images: require('../src/assets/images/camarao.jpeg')
    },

    {
        id: "5", nome: "Paella Caldosa", preco: "R$150",
        ingredientes: "Arroz caldoso com camarão, lula, polvo, peixe e mexilhão, refogado com pimentões, ervilha, especiarias e um leve toque de açafrão. Servidos na paellera. Rico em sabor e apresentação.", images: require('../src/assets/images/paella.jpeg')
    },

    {
        id: "6", nome: "Carne de Sol do Sertão", preco: "R$90",
        ingredientes: "Arroz de leite com queijo coalho, coberto com carne de sol desfiada e refogada na manteiga da terra com cebola roxa, nata e coentro. Gratinada com queijo coalho. Acompanha macaxeira frita.", images: require('../src/assets/images/carne.jpeg')
    },

    {
        id: "7", nome: "Filé ao Molho Madeira", preco: "R$80",
        ingredientes: "400g de medalhões de filé grelhados envolvidos com bacon, grelhados, flambados com conhaque, molho madeira tradicional e champignons. Acompanha arroz branco e batata recheada.", images: require('../src/assets/images/madeira.jpeg')
    },

    {
        id: "8", nome: "Filé aos Quatro Queijos", preco: "R$75",
        ingredientes: "400g de medalhões de filé grelhados e flambados com conhaque e molho cremoso quatro queijos. Acompanha arroz à grega e batata recheada.", images: require('../src/assets/images/queijos.jpeg')
    },

    {
        id: "9", nome: "Paillard de Filé Mignon", preco: "R$120",
        ingredientes: "Finíssimo corte de filé mignon, sobre espaguete italiano, folhas de espinafre e delicioso molho Alfredo.", images: require('../src/assets/images/paillard.jpeg')
    },

    {
        id: "10", nome: "Strogonoff de Filé Mignon", preco: "R$80",
        ingredientes: "Picadinho de filé mignon com molho de strogonoff à base de conhaque, creme de leite e com cogumelos paris frescos. Salpicado com batata palha e acompanhado de arroz branco.", images: require('../src/assets/images/strogonoff.jpeg')
    },

    {
        id: "11", nome: "Brigadeiro de Colher", preco: "R$15",
        ingredientes: "Delicioso e cremoso brigadeiro servido na taça. Coberto com bolinhas crocantes.", images: require('../src/assets/images/brigadeiro.jpeg')
    },

    {
        id: "12", nome: "Brigadeiro de Colher", preco: "R$15",
        ingredientes: "Delicioso e cremoso brigadeiro servido na taça. Coberto com bolinhas crocantes.", images: require('../src/assets/images/brigadeiro.jpeg')
    },

    {
        id: "13", nome: "Petit Gateau de Chocolate", preco: "R$20",
        ingredientes: "Bolinho quente de chocolate. Acompanha sorvete de creme.", images: require('../src/assets/images/petit.jpeg')
    },

    {
        id: "14", nome: "Brigadeiro de Colher", preco: "R$15",
        ingredientes: "Delicioso e cremoso brigadeiro servido na taça. Coberto com bolinhas crocantes.", images: require('../src/assets/images/brigadeiro.jpeg')
    },

    {
        id: "15", nome: "Petit Gateau de Chocolate", preco: "R$20",
        ingredientes: "Bolinho quente de chocolate. Acompanha sorvete de creme.", images: require('../src/assets/images/petit.jpeg')
    },
];

const rendercardapio = ({ item }: { item: Cardapio }) => (
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.preco}</Text>
        <Text>{item.ingredientes}</Text>
        <Image source={item.images} />
    </TouchableOpacity>
);

function BrasaViva(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="grey" barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerText}>Brasa Viva</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={rendercardapio}
                keyExtractor={(item) => item.id}
            />

            <View style={styles.footer}>
            <TouchableOpacity>
                    <Image
                        source={require('./assets/images/casa.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/lista.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/cardapio.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>


                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/usuario.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: 'pink',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    header: {
        backgroundColor: '#ff1493',
        alignItems: 'center',
        paddingVertical: 10

    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10

    },
    footerIcon: {
        width: 30,
        height: 30
    },
    image: {
        width: -10,
        height: -10
    }
})

export default BrasaViva;