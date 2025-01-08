//Crie um array com pelo menos 10 itens, crie uma estrutura for que percorre o array imprimindo todos os seus elementos.

const jogadoresFlamengo = [
    "Santos",       // Goleiro
    "Matheus Cunha", // Goleiro
    "Hugo Souza",   // Goleiro
    "Rodrigo Caio", // Zagueiro
    "Léo Pereira",  // Zagueiro
    "Fabrício Bruno", // Zagueiro
    "David Luiz",   // Zagueiro
    "Pablo",        // Zagueiro
    "Ayrton Lucas", // Lateral esquerdo
    "Filipe Luís",  // Lateral esquerdo
    "Varela",       // Lateral direito
    "Matheuzinho",  // Lateral direito
    "Gerson",       // Meio-campista
    "Thiago Maia",  // Meio-campista
    "Victor Hugo",  // Meio-campista
    "Everton Ribeiro", // Meio-campista
    "Arrascaeta",   // Meio-campista
    "Arturo Vidal", // Meio-campista
    "Pulgar",       // Meio-campista
    "Gabigol",      // Atacante
    "Pedro",        // Atacante
    "Bruno Henrique", // Atacante
    "Everton Cebolinha", // Atacante
    "Marinho",      // Atacante
    "Luiz Araújo"   // Atacante
];

function nomeDosjogadores(){
    for( i = 0; i < jogadoresFlamengo.length;i++ ){
        console.log(jogadoresFlamengo[i]);
    }
}

nomeDosjogadores();