import React from "react";
import { FlatList, StatusBar, Image, StyleSheet, Text, TouchableOpacity, View, ImageBackground, ScrollView } from "react-native";

interface Cardapio {
    id: string,
    nome: string,
    preco: string,
    ingredientes: string,
    images: any
}

const dados: Cardapio[] = [
    {
        id: "1", nome: "𝐄𝐒𝐏𝐀𝐆𝐔𝐄𝐓𝐄", preco: "𝗥$𝟱𝟬",
        ingredientes: "220g de camarões com espaguete italiano, ervilhas, presunto e molho branco. Gratinado com farta camada de queijos muçarela e parmesão.", images: require('../src/assets/images/espaguete.jpg')
    },

    {
        id: "2", nome: "𝐏𝐈𝐂𝐀𝐍𝐇𝐀 𝐁𝐋𝐀𝐂𝐊 𝐀𝐍𝐆𝐔𝐒 ", preco: "𝗥$𝟭𝟬𝟬",
        ingredientes: "Picanha Black Angus (300g) Picanha da raça Angus, acompanhada de vinagrete, chimichurri, farofa amarela, mandioca cozida ze arroz biro biro.", images: require('../src/assets/images/picanha.jpeg')
    },

    {
        id: "3", nome: "𝐂𝐀𝐑𝐁𝐎𝐍𝐀𝐑𝐀", preco: "𝗥$𝟵𝟬",
        ingredientes: "Carbonara de camarão com fettuccine e molho feito com gema de ovo, queijo parmesão, creme de leite fresco, pimenta do reino, bacon e finalizado com farofa crocante de panko.", images: require('../src/assets/images/carbonara.jpeg')
    },

    {
        id: "4", nome: "𝐂𝐀𝐌𝐀𝐑Ã𝐎 𝐅𝐄𝐑𝐍𝐀𝐍𝐃𝐎 𝐃𝐄 𝐍𝐎𝐑𝐎𝐍𝐇𝐀", preco: "𝗥$𝟭𝟮𝟬",
        ingredientes: "Camarões salteados no azeite e alho, com legumes, palmito, batata recheada, tomates cereja e muçarela de búfala envolvidos em leve molho escalivada e azeite de ervas. Acompanha arroz de brócolis.", images: require('../src/assets/images/camarao.jpeg')
    },

    {
        id: "5", nome: "𝐏𝐀𝐄𝐋𝐋𝐀 𝐂𝐀𝐋𝐃𝐎𝐒𝐀", preco: "𝗥$𝟭𝟱𝟬",
        ingredientes: "Arroz caldoso com camarão, lula, polvo, peixe e mexilhão, refogado com pimentões, ervilha, especiarias e um leve toque de açafrão. Servidos na paellera. Rico em sabor e apresentação.", images: require('../src/assets/images/paella.jpeg')
    },

    {
        id: "6", nome: "𝐂𝐀𝐑𝐍𝐄 𝐃𝐄 𝐒𝐎𝐋 𝐃𝐎 𝐒𝐄𝐑𝐓Ã𝐎", preco: "𝗥$𝟵𝟬",
        ingredientes: "Arroz de leite com queijo coalho, coberto com carne de sol desfiada e refogada na manteiga da terra com cebola roxa, nata e coentro. Gratinada com queijo coalho. Acompanha macaxeira frita.", images: require('../src/assets/images/carne.jpeg')
    },

    {
        id: "7", nome: "𝐅𝐈𝐋É 𝐀𝐎 𝐌𝐎𝐋𝐇𝐎 𝐌𝐀𝐃𝐄𝐈𝐑𝐀", preco: "𝗥$𝟴𝟬",
        ingredientes: "400g de medalhões de filé grelhados envolvidos com bacon, grelhados, flambados com conhaque, molho madeira tradicional e champignons. Acompanha arroz branco e batata recheada.", images: require('../src/assets/images/madeira.jpeg')
    },

    {
        id: "8", nome: "𝐅𝐈𝐋É 𝐀𝐎𝐒 𝐐𝐔𝐀𝐓𝐑𝐎 𝐐𝐔𝐄𝐈𝐉𝐎𝐒", preco: "𝗥$𝟳𝟱",
        ingredientes: "400g de medalhões de filé grelhados e flambados com conhaque e molho cremoso quatro queijos. Acompanha arroz à grega e batata recheada.", images: require('../src/assets/images/queijos.jpeg')
    },

    {
        id: "9", nome: "𝐏𝐀𝐈𝐋𝐋𝐀𝐑𝐃 𝐃𝐄 𝐅𝐈𝐋𝐄 𝐌𝐈𝐆𝐍𝐎𝐍", preco: "𝗥$𝟭𝟮𝟬",
        ingredientes: "Finíssimo corte de filé mignon, sobre espaguete italiano, folhas de espinafre e delicioso molho Alfredo.", images: require('../src/assets/images/paillard.jpeg')
    },

    {
        id: "10", nome: "𝐒𝐓𝐑𝐎𝐆𝐎𝐍𝐎𝐅𝐅 𝐃𝐄 𝐅𝐈𝐋𝐄 𝐌𝐈𝐆𝐍𝐎𝐍", preco: "𝗥$𝟴𝟬",
        ingredientes: "Picadinho de filé mignon com molho de strogonoff à base de conhaque, creme de leite e com cogumelos paris frescos. Salpicado com batata palha e acompanhado de arroz branco.", images: require('../src/assets/images/strogonoff.jpeg')
    },

    
];

interface Acompanhamentos {
    id: string,
    nome: string,
    preco: string,
    images: any
}
const dados1: Acompanhamentos[] = [
{
    id:"1", nome: "Á𝐠𝐮𝐚", preco: "𝗥$𝟮,𝟱𝟬", images: require('./assets/images/aguasemgas1.png')

},
{
    id:"2", nome: "Á𝐠𝐮𝐚 𝐜𝐨𝐦 𝐠á𝐬", preco: "𝗥$𝟯,𝟬𝟬", images: require('./assets/images/aguagas.png')

},
{
    id:"3", nome: "𝐂𝐨𝐜𝐚 𝐋𝐚𝐭𝐚", preco: "𝗥$𝟱,𝟬𝟬", images: require('./assets/images/coca.png')

},
{
    id:"4", nome: "𝐂𝐨𝐜𝐚 𝟐𝐋", preco: "𝗥$𝟭𝟭,𝟬𝟬", images: require('./assets/images/coca2.png')

},
{
    id:"5", nome: "𝐆𝐮𝐚𝐫𝐚𝐧á 𝐋𝐚𝐭𝐚", preco: "𝗥$𝟯,𝟱𝟬", images: require('./assets/images/guarana1.png')

},
{
    id:"6", nome: "𝐆𝐮𝐚𝐫𝐚𝐧á 𝟐𝐋", preco: "𝗥$𝟴,𝟬𝟬", images: require('./assets/images/guara.png')

}
]
interface Sobremesas {
    id: string,
    nome: string,
    preco: string,
    ingredientes: string,
    images: any
}
const dados2: Sobremesas[] = [
    {
        id:"1", nome: "𝐁𝐑𝐈𝐆𝐀𝐃𝐄𝐈𝐑𝐎 𝐃𝐄 𝐂𝐎𝐋𝐇𝐄𝐑", preco: "𝗥$𝟭𝟱", ingredientes: 
        "Delicioso e cremoso brigadeiro servido na taça. Coberto com bolinhas crocantes.", images: require ('../src/assets/images/brigadeiro.jpeg')
    },

    {
        id: "2", nome: "𝐏𝐄𝐓𝐈𝐓 𝐆𝐀𝐓𝐄𝐀𝐔 𝐃𝐄 𝐂𝐇𝐎𝐂𝐎𝐋𝐀𝐓𝐄", preco: "𝗥$𝟮𝟬",
        ingredientes: "Bolinho quente de chocolate. Acompanha sorvete de creme.", images: require('../src/assets/images/petit.jpeg')
    },
    {
        id: "3", nome: "𝐁𝐫𝐨𝐰𝐧𝐢𝐞 𝐝𝐞 𝐂𝐡𝐨𝐜𝐨𝐥𝐚𝐭𝐞 𝐈𝐧𝐝𝐢𝐯𝐢𝐝𝐮𝐚𝐥", preco: "𝗥$𝟮𝟬",
        ingredientes: "Bolinho quente de chocolate. Acompanha sorvete de creme.", images: require('../src/assets/images/petit.jpeg')
    }
]

const rendercardapio = ({ item }: { item: Cardapio }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.Texto1}>{item.nome}</Text>
        <Text style={styles.Texto2}>{item.preco}</Text>
        <Text style={styles.Texto3}>{item.ingredientes}</Text>
        <Image source={item.images} style={styles.images}  />
    </TouchableOpacity>
);

const renderacompanhamentos = ({ item }: { item: Acompanhamentos }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.Texto1}>{item.nome}</Text>
        <Text style={styles.Texto2}>{item.preco}</Text>
        <Image source={item.images} style={styles.images1}  />
    </TouchableOpacity>
);

const rendersobremesas = ({ item }: { item: Sobremesas }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.Texto1}>{item.nome}</Text>
        <Text style={styles.Texto2}>{item.preco}</Text>
        <Text style={styles.Texto3}>{item.ingredientes}</Text>
        <Image source={item.images} style={styles.images2}  />
    </TouchableOpacity>
);
 

function BrasaViva(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./assets/images/image.jpg')} resizeMode="cover" 
            style={styles.imagebackground}>
            <StatusBar backgroundColor="grey" barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerText}>𝔹ℝ𝔸𝕊𝔸 🔥 𝕍𝕀𝕍𝔸 </Text>
                <Text style={styles.text}>ᴏ ᴍᴇʟʜᴏʀ ʀᴇꜱᴛᴀᴜʀᴀɴᴛᴇ ᴅᴀ ꜱᴜᴀ ʀᴇɢɪãᴏ!</Text>
            </View>
            

            <ScrollView>
            <Text style={styles.Texto4}>𝐂𝐀𝐑𝐃𝐀𝐏𝐈𝐎</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={rendercardapio}
                keyExtractor={(item) => item.id}
            />
            <Text style={styles.Texto6}>𝐒𝐎𝐁𝐑𝐄𝐌𝐄𝐒𝐀𝐒</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dados2}
                renderItem={rendersobremesas}
                keyExtractor={(item) => item.id}
            />
            <Text style={styles.Texto5}>𝐁𝐄𝐁𝐈𝐃𝐀𝐒</Text>
            <FlatList
                horizontal={true}
                data={dados1}
                renderItem={renderacompanhamentos}
                keyExtractor={(item) => item.id}
            />
            </ScrollView>
            </ImageBackground>
            <View style={styles.footer}>
            <TouchableOpacity>
                    <Image
                        source={require('./assets/images/casabranca.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/listaa.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/pedir-comida.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>


                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/user.png')}
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
        backgroundColor: '#af162a',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:15,
        borderColor: 'red',
        borderWidth: 3,
    },
    header: {
        backgroundColor: '#800000',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 107,
        

    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        },
    footerIcon: {
        width: 30,
        height: 30,
        
        
    },
    images: {
        width: 320,
        height: 170
    },
    text: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#C0C0C0'
    },
    imagebackground: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
        alignItems: 'center'
    }, 
    Texto1: {
        fontSize: 22,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        borderBottomLeftRadius: -200,
        color: 'white'
    },
    Texto2: {
        fontSize: 20,
        color: 'white'
    },
    Texto3:{
        fontSize: 13,
        color: 'white'
    },

    Texto4: {
        backgroundColor: '#af162a',
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:15,
        borderColor: 'red',
        borderWidth: 3,
        fontSize: 20,
        color: 'white',
        paddingHorizontal: 120
        
        
        
    }, 
    images1: {
        width: 100,
        height: 170
    },
    Texto5: {
        backgroundColor: 'black',
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:15,
        borderWidth: 3,
        fontSize: 30,
        color: 'white',
        paddingHorizontal: 110
        
    },
    images2: {
        width: 200,
        height: 200
    },
    Texto6: {
        backgroundColor: 'black',
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:15,
        borderWidth: 3,
        fontSize: 30,
        color: 'white',
        paddingHorizontal: 70
    }
    
})

export default BrasaViva;