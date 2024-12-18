
let contatos = [
    { nome: "João", email: "joao@email.com", assunto: "Dúvida", mensagem: "Como faço para me inscrever?" },
    { nome: "Maria", email: "maria@email.com", assunto: "Suporte Técnico", mensagem: "Estou com problemas no login." },
    { nome: "Ana", email: "ana@email.com", assunto: "Sugestão", mensagem: "Gostaria de sugerir melhorias no site." },
    { nome: "Carlos", email: "carlos@email.com", assunto: "Dúvida", mensagem: "Quais os horários disponíveis para atendimento?" },
    { nome: "Beatriz", email: "beatriz@email.com", assunto: "Suporte Técnico", mensagem: "Minha senha não está funcionando." },
    { nome: "Ricardo", email: "ricardo@email.com", assunto: "Sugestão", mensagem: "Poderiam adicionar mais opções de pagamento." },
    { nome: "Fernanda", email: "fernanda@email.com", assunto: "Dúvida", mensagem: "Quais são os requisitos para o cadastro?" },
    { nome: "Luiz", email: "luiz@email.com", assunto: "Sugestão", mensagem: "O site poderia ter uma versão noturna." },
    { nome: "Gabriela", email: "gabriela@email.com", assunto: "Suporte Técnico", mensagem: "Não consigo acessar minha conta." },
    { nome: "Thiago", email: "thiago@email.com", assunto: "Dúvida", mensagem: "O que acontece se esquecer a senha?" },
    { nome: "Renata", email: "renata@email.com", assunto: "Sugestão", mensagem: "Seria bom receber notificações por SMS." },
    { nome: "Rafael", email: "rafael@email.com", assunto: "Suporte Técnico", mensagem: "Erro ao fazer upload de documentos." },
    { nome: "Juliana", email: "juliana@email.com", assunto: "Dúvida", mensagem: "Onde encontro mais informações sobre o serviço?" },
    { nome: "Diego", email: "diego@email.com", assunto: "Sugestão", mensagem: "Adicionar mais tutoriais seria útil." },
    { nome: "Paula", email: "paula@email.com", assunto: "Suporte Técnico", mensagem: "Recebo mensagens de erro ao tentar logar." },
    { nome: "Felipe", email: "felipe@email.com", assunto: "Dúvida", mensagem: "O suporte funciona nos fins de semana?" },
    { nome: "Amanda", email: "amanda@email.com", assunto: "Sugestão", mensagem: "Poderiam adicionar um chat ao vivo no site." },
    { nome: "Marcos", email: "marcos@email.com", assunto: "Dúvida", mensagem: "Quais métodos de pagamento são aceitos?" },
    { nome: "Bruna", email: "bruna@email.com", assunto: "Sugestão", mensagem: "O site deveria ter mais idiomas disponíveis." },
    { nome: "Leonardo", email: "leonardo@email.com", assunto: "Suporte Técnico", mensagem: "O sistema está muito lento." },
    { nome: "Larissa", email: "larissa@email.com", assunto: "Dúvida", mensagem: "Como redefinir minha senha?" },
    { nome: "Guilherme", email: "guilherme@email.com", assunto: "Sugestão", mensagem: "Seria interessante um aplicativo para celular." },
    { nome: "Patrícia", email: "patricia@email.com", assunto: "Dúvida", mensagem: "Como altero meus dados cadastrais?" },
    { nome: "Caio", email: "caio@email.com", assunto: "Suporte Técnico", mensagem: "O site não carrega em dispositivos móveis." },
    { nome: "Camila", email: "camila@email.com", assunto: "Sugestão", mensagem: "Adicionar um guia para novos usuários." },
    { nome: "Lucas", email: "lucas@email.com", assunto: "Dúvida", mensagem: "Quais são os benefícios de fazer o cadastro?" },
    { nome: "Isabela", email: "isabela@email.com", assunto: "Sugestão", mensagem: "Poderiam oferecer descontos para assinantes antigos." },
    { nome: "Pedro", email: "pedro@email.com", assunto: "Suporte Técnico", mensagem: "Não recebo emails de confirmação." },
    { nome: "Mariana", email: "mariana@email.com", assunto: "Dúvida", mensagem: "Como recupero um cadastro antigo?" },
    { nome: "Vitor", email: "vitor@email.com", assunto: "Sugestão", mensagem: "Adicionar mais opções de contato seria útil." },
    { nome: "Carolina", email: "carolina@email.com", assunto: "Suporte Técnico", mensagem: "Erro ao salvar alterações no perfil." },
    { nome: "Sofia", email: "sofia@email.com", assunto: "Dúvida", mensagem: "Como verifico o status do meu pedido?" },
    { nome: "Rodrigo", email: "rodrigo@email.com", assunto: "Sugestão", mensagem: "Mais transparência no processo de cadastro seria bom." },
    { nome: "Natália", email: "natalia@email.com", assunto: "Dúvida", mensagem: "Onde encontro informações de privacidade?" },
    { nome: "André", email: "andre@email.com", assunto: "Suporte Técnico", mensagem: "Recebo mensagens duplicadas no sistema." },
    { nome: "Letícia", email: "leticia@email.com", assunto: "Sugestão", mensagem: "Seria ótimo integrar com redes sociais." },
    { nome: "Eduardo", email: "eduardo@email.com", assunto: "Dúvida", mensagem: "Quais navegadores são compatíveis?" },
    { nome: "Marta", email: "marta@email.com", assunto: "Sugestão", mensagem: "Adicionar temas personalizados no site." },
    { nome: "Daniel", email: "daniel@email.com", assunto: "Suporte Técnico", mensagem: "Recebo notificações incorretas." },
    { nome: "Yasmin", email: "yasmin@email.com", assunto: "Dúvida", mensagem: "Como posso cancelar minha conta?" },
    { nome: "José", email: "jose@email.com", assunto: "Sugestão", mensagem: "Mais opções de FAQ seriam úteis." },
    { nome: "Helena", email: "helena@email.com", assunto: "Dúvida", mensagem: "O site tem algum suporte 24 horas?" },
    { nome: "César", email: "cesar@email.com", assunto: "Suporte Técnico", mensagem: "Erro ao carregar a página inicial." },
    { nome: "Luana", email: "luana@email.com", assunto: "Sugestão", mensagem: "Adicionar suporte por WhatsApp seria ótimo." },
    { nome: "Vinícius", email: "vinicius@email.com", assunto: "Dúvida", mensagem: "Posso acessar minha conta em outro país?" },
    { nome: "Ana Clara", email: "ana.clara@email.com", assunto: "Sugestão", mensagem: "Poderiam oferecer tutoriais em vídeo." },
    { nome: "Henrique", email: "henrique@email.com", assunto: "Suporte Técnico", mensagem: "A senha não é reconhecida ao logar." },
    { nome: "Érica", email: "erica@email.com", assunto: "Dúvida", mensagem: "Como faço para alterar meu endereço?" }
  ];
  

function filtraMensagensPeloAssuntoSuporteTecnico(){
        const assuntoSuporteTecnico = contatos.filter(contato => contato.assunto === "Suporte Técnico");

        assuntoSuporteTecnico.forEach(contato => {
            console.log(`Nome: ${contato.nome}, Mensagem: ${contato.mensagem}`);
        })
        
        const numeroDeMensagens = assuntoSuporteTecnico.length;

        console.log(`O numero de mensagens com o assunto suporte tecnico é de ${numeroDeMensagens}`);
};
filtraMensagensPeloAssuntoSuporteTecnico();