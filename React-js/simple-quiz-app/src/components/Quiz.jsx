// src/components/Quiz.js
import React, { useState } from 'react';

const Quiz = ({ quizData }) =>
{
    const [userAnswers, setUserAnswers] = useState({});
    const [results, setResults] = useState([]);

    const handleAnswerSelect = (questionId, selectedOption) =>
    {
        setUserAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: selectedOption,
        }));
    };

    const evaluateQuiz = async () =>
    {
        try
        {
            const response = await fetch('http://localhost:8080/evaluate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userAnswers: Object.keys(userAnswers).map(id => ({
                        id,
                        userAnswer: userAnswers[id],
                    })),
                }),
            });

            if (response.ok)
            {
                const results = await response.json();
                setResults(results);
            } else
            {
                console.error('Failed to evaluate answers:', response.status, response.statusText);
            }
        } catch (error)
        {
            console.error('Error during evaluation:', error.message);
        }
    };

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Quiz App</h1>
            {quizData.map((question, index) => (
                <div key={question._id} className="mb-6">
                    <p className="text-lg font-semibold mb-2">{index + 1}. {question.question}</p>
                    <div className="flex flex-col">
                        {question.options.map(option => (
                            <label key={option._id} className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    name={`question_${index}`}
                                    value={option.key}
                                    onChange={() => handleAnswerSelect(question._id, option.key)}
                                    checked={userAnswers[question._id] === option.key}
                                    className="mr-2"
                                />
                                {option.text}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
            <button
                onClick={evaluateQuiz}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
                Submit
            </button>
            <div className="mt-4">
                {results.map(result => (
                    <div key={result.id} className="mb-2">
                        <p>{result.id} - {result.isCorrect ? 'Correct' : 'Incorrect'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
