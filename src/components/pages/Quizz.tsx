import React, { useState } from "react";

import { LinearProgress } from "@mui/joy";
import { ButtonQuizz } from "../UI/atoms/ButtonQuizz";
import { Mint } from "./Mint";
import "./styles/quizz.css";
import { QuizzType, answerStatus, quizzData } from "../../models/quizz"//"@/models/quizz";



export const Quizz = () => {
  const [numQuestion, setNumberQuestion] = useState(0);
  const [quizz, setQuizz] = useState<QuizzType>(quizzData);
  const [progress, setProgress] = useState(0);
  const [isMint, setIsMint] = useState(false);

  const onPress = (event: React.MouseEvent<HTMLButtonElement>) => {
    const valueButton = parseInt(event.currentTarget.value);
    if (quizz[numQuestion].correctAnswer === valueButton) {
      
      changeStatus(answerStatus.CORRECT, valueButton);
      setProgress(progress + 10);
      setTimeout(() => {
        let nextQuestion = numQuestion + 1;
        if (nextQuestion < quizz.length) {
          setNumberQuestion(numQuestion + 1);
        } else {
          setIsMint(true);
        }
      }, 900);
      
    } else {
      changeStatus(answerStatus.INCORRECT, valueButton);
    }
  };

  const changeStatus = (status: number, valueButton: number) => {
    setQuizz(
      quizz.map((item) => {
        if (item.id === quizz[numQuestion].id) {
          item.answersDetails[valueButton].correctStatus = status;
          return {
            ...item,
          };
        }
        return item;
      })
    );
  };
  const getColor = (item: any) => {
    if (item === 1) return { boxShadow: "inset 0 0 17px red, 0 0 17px red" };
    else if (item === 2)
      return { boxShadow: "inset 0 0 17px green, 0 0 17px green" };
  };

  return (
    <div className="quizz-container">
      {!isMint ? (
        <>
          <div className="quizz-container-progressbar">
            <LinearProgress determinate size="lg" value={progress} />
          </div>

          <div className="quizz-container-question">
            <h2>{quizz[numQuestion].question}</h2>
          </div>
          <div className="quizz-container-answer">
            <div className="quizz-container-answer-buttons">
              {quizz[numQuestion].answersDetails.map((item, index) => (
                <ButtonQuizz
                  key={index}
                  onPress={onPress}
                  position={index}
                  style={
                    item.correctStatus === 1
                      ? getColor(1)
                      : item.correctStatus === 2
                      ? getColor(2)
                      : ""
                  }
                >
                  {item.answer}
                </ButtonQuizz>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Mint />
      )}
    </div>
  );
};
