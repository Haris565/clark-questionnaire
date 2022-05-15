import { useState } from 'react';
import Home from './components/Home';
import Mcqs from './components/Mcqs';
import data from './Data/questionnaire';
import { Routes, Route } from 'react-router-dom';
import Question from './components/Question';
import Submit from './components/Submit';

export default function App() {
  const [questions, setQuestions] = useState(data.questionnaire.questions);
  const [question, setQuestion] = useState(0);

  const mcqsSelectHandler = (id, index) => {
    let findedQuestion = questions.find((item) => item.identifier === id);
    // findedQuestion.choices[index].selected = true;
    findedQuestion.choices.map((item, idx) => {
      if (idx !== index) {
        return (item.selected = false);
      }
      return (item.selected = true);
    });

    let findIndex = questions.findIndex((item) => item.identifier === id);
    let newQuestions = [...questions];
    newQuestions[findIndex] = findedQuestion;
    setQuestions(newQuestions);
    console.log(newQuestions);
  };

  const nextQuestionHandler = (id) => {
    let filteredQuestion = questions.find((item) => item.identifier === id);
    if (filteredQuestion.jumps.length > 0) {
      let selectedAnswer = filteredQuestion?.choices?.filter(
        (item) => item.selected === true
      );
      if (selectedAnswer.length > 0) {
        filteredQuestion.jumps.map((item) => {
          if (item.conditions[0].value === selectedAnswer[0].value) {
            let key = item.destination.id;
            let findIndex = questions.findIndex(
              (item) => item.identifier === key
            );
            setQuestion(findIndex);
          }
        });
        return;
      }
    }

    if (question < questions.length - 1) {
      setQuestion((prev) => prev + 1);
    }
  };

  const prevQuestionHandler = () => {
    if (question === 0) {
      return;
    }
    setQuestion((prev) => prev - 1);
  };

  const textHandler = (id, text) => {
    let findedQuestion = questions.find((item) => item.identifier === id);
    findedQuestion.description = text;
  };

  return (
    <Routes>
      {question === questions.length - 1 ? (
        <Route path='/' element={<Submit />} />
      ) : (
        <Route path='/' element={<Home data={data} />} />
      )}

      {questions[question].question_type === 'multiple-choice' && (
        <Route
          path='/mcqs'
          element={
            <Mcqs
              data={questions[question]}
              number={question}
              mcqsSelectHandler={mcqsSelectHandler}
              prevQuestionHandler={prevQuestionHandler}
              nextQuestionHandler={nextQuestionHandler}
              totalLength={questions.length}
              currentQuestion={question}
            />
          }
        />
      )}
      {questions[question].question_type === 'text' && (
        <Route
          path='/mcqs'
          element={
            <Question
              data={questions[question]}
              number={question}
              prevQuestionHandler={prevQuestionHandler}
              nextQuestionHandler={nextQuestionHandler}
              totalLength={questions.length}
              currentQuestion={question}
              textHandler={textHandler}
            />
          }
        />
      )}
    </Routes>
  );
}
