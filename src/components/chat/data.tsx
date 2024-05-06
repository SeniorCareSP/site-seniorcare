import { ChatProps, UserProps } from './types';

export const users: UserProps[] = [
  {
    name: 'Steve E.',
    username: '@steveEberger',
    avatar: '/static/images/avatar/2.jpg',
    online: true,
  },
  {
    name: 'Katherine Moss',
    username: '@kathy',
    avatar: '/static/images/avatar/3.jpg',
    online: false,
  },
  {
    name: 'Phoenix Baker',
    username: '@phoenix',
    avatar: '/static/images/avatar/1.jpg',
    online: true,
  },
  {
    name: 'Eleanor Pena',
    username: '@eleanor',
    avatar: '/static/images/avatar/4.jpg',
    online: false,
  },
  {
    name: 'Kenny Peterson',
    username: '@kenny',
    avatar: '/static/images/avatar/5.jpg',
    online: true,
  },
  {
    name: 'Al Sanders',
    username: '@al',
    avatar: '/static/images/avatar/6.jpg',
    online: true,
  },
  {
    name: 'Melissa Van Der Berg',
    username: '@melissa',
    avatar: '/static/images/avatar/7.jpg',
    online: false,
  },
];

export const chats: ChatProps[] = [
  {
    id: '1',
    sender: users[0],
    messages: [
      {
        id: '1',
        content: 'Oi Olivia, gostaria de fazer um orçamento com você. Que dias você está dísponivel?',
        timestamp: 'Wednesday 9:00am',
        sender: users[0],
      },
      {
        id: '2',
        content: 'Bom dia, estou disponivel de segunda a sexta :D',
        timestamp: 'Wednesday 9:10am',
        sender: 'You',
      },
      {
        id: '3',
        timestamp: 'Wednesday 11:30am',
        sender: users[0],
        content: 'Que ótimo!! Preciso de alguém para cuidar do meu pai as terças e quintas',
      },
      {
        id: '4',
        timestamp: 'Wednesday 2:00pm',
        sender: 'You',
        content: 'Perfeito! Séria ótimo se você pudesse me mandar um documentos com os dados dele.',
      },
      {
        id: '5',
        timestamp: 'Wednesday 4:30pm',
        sender: users[0],
        content: 'Okay, irei te passar as informações e  horáios que preciso.',
      },
      {
        id: '6',
        content:
          "Assim que terminar te envio tudo certinho ;)",
        timestamp: 'Thursday 10:16am',
        sender: users[0],
      },
      {
        id: '7',
        content:
          "Está aqui, caso tenha alguma dúvida pode me avisar.",
        timestamp: 'Thursday 11:40am',
        sender: users[0],
      },
      {
        id: '3',
        timestamp: 'Thursday 11:40am',
        sender: users[0],
        content: 'Tech requirements.pdf',
        attachment: {
          fileName: 'Tech requirements.pdf',
          type: 'pdf',
          size: '1.2 MB',
        },
      },
      {
        id: '8',
        timestamp: 'Thursday 11:41am',
        sender: 'You',
        content: "Obrigada, vou dar uma olhada e já ja falo contigo.",
      },
      {
        id: '9',
        timestamp: 'Thursday 11:44am',
        sender: users[0],
        content: "Sem problemas.",
      },
      {
        id: '10',
        timestamp: 'Today 2:20pm',
        sender: users[0],
        content: 'Então, tudo de acordo?',
      },
      {
        id: '11',
        timestamp: 'Just now',
        sender: 'You',
        content: "Sim! desculpe a demora estava cuidando de outro cliente essa semana",
      },
    ],
  },
  {
    id: '2',
    sender: users[1],
    messages: [
      {
        id: '1',
        content: 'Oie Olivia, tudo bem?.',
        timestamp: 'Wednesday 9:00am',
        sender: users[1],
      },
      {
        id: '2',
        content:
          'Oii, tudo bem?',
        timestamp: 'Wednesday 9:05am',
        sender: 'You',
      },
      {
        id: '3',
        content: 'Então gostaria de saber se você está livre aos finais de semana',
        timestamp: 'Wednesday 9:30am',
        sender: users[1],
      },
      {
        id: '4',
        content: 'Estou só aos sábado ',
        timestamp: 'Wednesday 9:35am',
        sender: 'You',
      },
      {
        id: '5',
        content: 'Séria possível negociar alguns domingos?',
        timestamp: 'Wednesday 10:00am',
        sender: users[1],
      },
      {
        id: '6',
        content: 'Make sure to take lots of pictures!',
        timestamp: 'Wednesday 10:05am',
        sender: 'You',
      },
    ],
  },
  {
    id: '3',
    sender: users[2],
    messages: [
      {
        id: '1',
        content: 'Hey!',
        timestamp: '5 mins ago',
        sender: users[2],
        unread: true,
      },
    ],
  },
  {
    id: '4',
    sender: users[3],
    messages: [
      {
        id: '1',
        content:
          'Hey Olivia, I was thinking about doing some home improvement work.',
        timestamp: 'Wednesday 9:00am',
        sender: users[3],
      },
      {
        id: '2',
        content:
          'That sounds interesting! What kind of improvements are you considering?',
        timestamp: 'Wednesday 9:05am',
        sender: 'You',
      },
      {
        id: '3',
        content: 'I am planning to repaint the walls and replace the old furniture.',
        timestamp: 'Wednesday 9:15am',
        sender: users[3],
      },
      {
        id: '4',
        content:
          'That will definitely give your house a fresh look. Do you need help with anything?',
        timestamp: 'Wednesday 9:20am',
        sender: 'You',
      },
      {
        id: '5',
        content:
          'I might need some help with picking the right paint colors. Can we discuss this over the weekend?',
        timestamp: 'Wednesday 9:30am',
        sender: users[3],
      },
    ],
  },

  {
    id: '5',
    sender: users[4],
    messages: [
      {
        id: '1',
        content: 'Sup',
        timestamp: '5 mins ago',
        sender: users[4],
        unread: true,
      },
    ],
  },
  {
    id: '6',
    sender: users[5],
    messages: [
      {
        id: '1',
        content: 'Heyo',
        timestamp: '5 mins ago',
        sender: 'You',
        unread: true,
      },
    ],
  },

  {
    id: '7',
    sender: users[6],
    messages: [
      {
        id: '1',
        content:
          "Hey Olivia, I've finished with the requirements doc! I made some notes in the gdoc as well for Phoenix to look over.",
        timestamp: '5 mins ago',
        sender: users[6],
        unread: true,
      },
    ],
  },
];