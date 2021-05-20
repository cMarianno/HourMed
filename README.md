## 1. Apresentação

Hourmed é um aplicativo responsável por organizar, agendar e notificar e ajudar os cuidadores a acompanhar a rotina de medicamentos.
Os responsáveis podem obter informações.

O objetivo principal desse projeto é auxiliar na gestão dos medicamentos e controle de vencimaneto de receitas médicas. 

Nossa equipe é composto por 5 pessoas, cada um possui skills específicas, mas todos trabalharam para ajudar em cada fase do projeto.

## 2. Equipe

• Caio Mariano | Dev | https://github.com/cMarianno - (Perfil raiz)
• Danielle Moreira | PO | https://github.com/daniellymoreiira
• Isis Cristina | https://github.com/isiscfernandes
• Laura Xavier | https://github.com/lauraxavierr
• Thiago Davi | Dev | https://github.com/ThiagoDavi-AnDev

## 3. Atores

• Usuário
• Opcional: Responsável pelo usuário (caso seja idoso).
• Opcional: Idoso

## 4. Requisitos Funcionais

# 4.1. Registrar usuário (CRUD completo);

# 4.2. Alertar usuário
O sistema deve alertar se o registro do usuário foi completado com
sucesso ou se houve alguma divergência nos dados inseridos. Caso
tenha sido completado, o sistema irá gerar um número de identificação do
usuário.

# 4.3. Registrar responsável (CRUD completo);
Opção de realizar o cadastro do idoso, inserir seus medicamentos e
horários relacionados com ele.

# 4.4. Alertar responsável
O sistema deve alertar se o registro do responsável foi completado com
sucesso ou se houve alguma divergência nos dados inseridos. Caso
tenha sido completado, o sistema irá direcioná-lo para a página de
visualização do planejamento, já se houver alguma divergência retornará
para a página de registro, demonstrando em vermelho o campo que não
foi preenchido corretamente.

# 4.5. Inclusão de medicamento;
O sistema deve conter uma tela onde o usuário principal ou responsável
preencha os campos remédio, horário a utilizar, quantidade de cápsulas
para tomar.

# 4.6. Inclusão vencimento da receita;
Data prevista para estoque de remédio e gestão de medicamento para
efetuar a compra ANTES de acabar o estoque.

# 4.7. Inclusão de tarefa;
Realizou ou não a tarefa registrada;

# 4.8. Remoção de medicamento;

# 4.9. Indicação de calendário do sistema;
Acompanhamento diário de atividades a realizar.

# 4.10. Consulta de histórico do sistema;
Controle de remédios tomados no horário ou não.

# 4.11. Notificação para o idoso perguntando de forma amigável se o
remédio foi tomado ou não.

# 4.12 Notificação para responsável alertando se o remédio foi tomado ou
não. Caso não tenha sido, lembrete para o idoso.

# 4.13. Notificação para o usuário alertando se a receita está prestes a
vencer.

## 5. Requisitos Não Funcionais

# 5.1. Para o registro de um novo usuário é necessário obrigatoriamente
preencher os campos e-mail, senha, Idade, sexo, peso, altura e ano de
nascimento.

# 5.2. Para o registro de um novo responsável é necessário
obrigatoriamente preencher os campos e-mail, senha e código do usuário que
deseja acompanhar.

# 5.3. Um mesmo e-mail não poderá ser utilizado para registro por usuários
diferentes.

# 5.4. O número de identificação do usuário deverá ser único, ou seja, cada
usuário possui seu próprio código sendo eles diferentes para cada um.

# 5.5. O lembrete de medicação deve alertar 5 minutos antes lembrando
que está quase no horário de tomar a medicação. O próximo lembrete deve ser
no horário programado para alerta.

# 5.6. Para o sistema Responsável-idoso, a informação de que o
medicamento foi tomado ou não, deve ser informada imediatamente para o
responsável após a opção selecionado pelo idoso.

# 5.7. A página de Consulta de histórico deve conter um gráfico indicando
se os horários cadastrados condizem com os horários de inserção do
medicamento.

# 5.8. O lembrete sobre vencimento da receita deve ser 7 dias antes do
vencimento, alertando a cada 2 dois dias.

# 5.9. O sistema terá uma interface simples de forma que o usuário entenda
com facilidade o que deve ser feito.

# 5.10. As tarefas identificadas no calendário terão as cores semelhantes
do remédio que deve ser tomado.

## 6. PROJETO E TECNOLOGIA ENVOLVIDA

## Frontend/web
  • Javascript
  • React Native
  • CSS

## Backend
  • Nodejs

  
## Repositório de dados
  • MongoDB
  
## Testes
  •

O projeto foi desenvolvido no Expo Go, ferramenta utilizada no desenvolvimento mobile com React Native que permite o fácil acesso às API's nativas do dispositivo sem precisar instalar qualquer dependência ou alterar código nativo. Na parte de armazenamento e sincronização dos dados foi usado a aplicação MongoDB,  software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++.

## RESULTADOS

## INSTALAÇÃO

## REFERÊNCIAS
