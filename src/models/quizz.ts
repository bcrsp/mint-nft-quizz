type AnswerType = {
  answer: string;
  correctStatus: number;
};

export enum answerStatus {
  NO_ANSWERED = 0,
  INCORRECT = 1,
  CORRECT = 2,
}

export type QuizzType = {
  id: number;
  question: string;
  answersDetails: AnswerType[];
  correctAnswer: number;
}[];


export const quizzData: QuizzType = [
  {
    id: 1,
    question: "What is a blockchain?",
    answersDetails: [
      {
        answer: "A) A type of cryptocurrency.",
        correctStatus: 0,
      },
      {
        answer: "B) A decentralized and secure database.",
        correctStatus: 0,
      },
      {
        answer: "C) A cloud storage system.",
        correctStatus: 0,
      },
      {
        answer: "D) A security technology for online banking.",
        correctStatus: 0,
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "What is the main advantage of using blockchain technology?",
    answersDetails: [
      {
        answer: "A) Decentralization",
        correctStatus: 0,
      },
      {
        answer: "B) Scalability",
        correctStatus: 0,
      },
      {
        answer: "C) Privacy",
        correctStatus: 0,
      },
      {
        answer: "D) Efficiency",
        correctStatus: 0,
      },
    ],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: "What is a smart contract in the context of blockchain?",
    answersDetails: [
      {
        answer:
          "A) A computer program that executes automatically when predefined conditions are met.",
        correctStatus: 0,
      },
      {
        answer: "B) A secure way to store cryptocurrency.",
        correctStatus: 0,
      },
      {
        answer: "C) A method of consensus in the network.",
        correctStatus: 0,
      },
      {
        answer: "D) A tool for tracking transactions.",
        correctStatus: 0,
      },
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question:
      "What is the process of adding new blocks to the blockchain called?",
    answersDetails: [
      {
        answer: "A) Verification",
        correctStatus: 0,
      },
      {
        answer: "B) Mining",
        correctStatus: 0,
      },
      {
        answer: "C) Synchronization",
        correctStatus: 0,
      },
      {
        answer: "D) Encryption",
        correctStatus: 0,
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    question:
      "What is the purpose of the proof-of-work consensus algorithm in blockchain technology?",
    answersDetails: [
      {
        answer: "A) To secure the network from potential attacks.",
        correctStatus: 0,
      },
      {
        answer: "B) To increase the speed of transactions.",
        correctStatus: 0,
      },
      {
        answer: "C) To ensure privacy of transactions.",
        correctStatus: 0,
      },
      {
        answer: "D) To reduce the cost of transactions.",
        correctStatus: 0,
      },
    ],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: "What is a decentralized application (dApp)?",
    answersDetails: [
      {
        answer: "A) A software application running on a centralized server.",
        correctStatus: 0,
      },
      {
        answer: "B) A web application that uses blockchain technology.",
        correctStatus: 0,
      },
      {
        answer: "C) An application that runs on a peer-to-peer network.",
        correctStatus: 0,
      },
      {
        answer: "D) An application that uses cryptography for security.",
        correctStatus: 0,
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "What is a hash in the context of blockchain technology?",
    answersDetails: [
      {
        answer: "A) A unique identifier for a block in a blockchain.",
        correctStatus: 0,
      },
      {
        answer:
          "B) A digital signature for verifying the authenticity of a transaction.",
        correctStatus: 0,
      },
      {
        answer: "C) An encryption algorithm for protecting data privacy.",
        correctStatus: 0,
      },
      {
        answer: "D) A method for verifying the identity of a user.",
        correctStatus: 0,
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: "What is a node in the context of blockchain technology?",
    answersDetails: [
      {
        answer: "A) A type of digital signature.",
        correctStatus: 0,
      },
      {
        answer:
          "B) A computer that is connected to a blockchain network and participates in the validation and dissemination of transactions.",
        correctStatus: 0,
      },
      {
        answer: "C) A unit of cryptocurrency.",
        correctStatus: 0,
      },
      {
        answer: "D) A type of encryption used to secure data on a blockchain.",
        correctStatus: 0,
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    question:
      "What is the name of the programming language used to write smart contracts on the Ethereum platform?",
    answersDetails: [
      {
        answer: "A) JavaScript",
        correctStatus: 0,
      },
      {
        answer: "B) Python",
        correctStatus: 0,
      },
      {
        answer: "C) Solidity",
        correctStatus: 0,
      },
      {
        answer: "D) Ruby",
        correctStatus: 0,
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 10,
    question: "What is the primary purpose of Ethereum?",
    answersDetails: [
      {
        answer: "A) To serve as a digital currency.",
        correctStatus: 0,
      },
      {
        answer: "B) To provide a platform for decentralized applications.",
        correctStatus: 0,
      },
      {
        answer: "C) To process large amounts of data.",
        correctStatus: 0,
      },
      {
        answer: "D) To securely store personal data.",
        correctStatus: 0,
      },
    ],
    correctAnswer: 1,
  },
];