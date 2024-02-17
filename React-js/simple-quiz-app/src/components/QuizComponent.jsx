// // src/components/QuizComponent.js
// import React, { useState, useEffect } from 'react';

// const QuizComponent = () =>
// {
//     const [quizData, setQuizData] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [userAnswers, setUserAnswers] = useState({});

//     useEffect(() =>
//     {
//         // Fetch quiz data when the component mounts
//         fetch('http://localhost:8080/user/random/quizzes')
//             .then(response => response.json())
//             .then(data => setQuizData(data))
//             .catch(error => console.error('Error fetching quiz data:', error));
//     }, []);

//     const handleAnswerSelect = (selectedOption) =>
//     {
//         setUserAnswers((prevAnswers) => ({
//             ...prevAnswers,
//             [currentQuestionIndex]: selectedOption,
//         }));

//         // Move to the next question or finish the quiz
//         setCurrentQuestionIndex((prevIndex) =>
//             prevIndex < quizData.length - 1 ? prevIndex + 1 : prevIndex
//         );
//     };

//     const renderQuizQuestion = () =>
//     {
//         const currentQuestion = quizData[currentQuestionIndex];

//         if (!currentQuestion)
//         {
//             return <p>No quiz data available.</p>;
//         }

//         return (
//             <div>
//                 <p className="text-lg font-semibold mb-2">
//                     {currentQuestionIndex + 1}. {currentQuestion.question}
//                 </p>
//                 <div className="flex flex-col">
//                     {currentQuestion.options.map((option) => (
//                         <label key={option._id} className="flex items-center mb-2">
//                             <input
//                                 type="radio"
//                                 name="answerOptions"
//                                 value={option.key}
//                                 onChange={() => handleAnswerSelect(option.key)}
//                                 checked={userAnswers[currentQuestionIndex] === option.key}
//                                 className="mr-2"
//                             />
//                             {option.text}
//                         </label>
//                     ))}
//                 </div>
//             </div>
//         );
//     };

//     const renderSubmitButton = () =>
//     {
//         if (currentQuestionIndex === quizData.length - 1)
//         {
//             return (
//                 <button
//                     onClick={handleSubmitQuiz}
//                     className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
//                 >
//                     Submit
//                 </button>
//             );
//         }

//         return null;
//     };

//     const handleSubmitQuiz = () =>
//     {
//         // Handle quiz submission (e.g., send userAnswers to the server)
//         console.log('User answers:', userAnswers);
//     };

//     return (
//         <div className="container mx-auto my-8">
//             <h1 className="text-3xl font-bold mb-4">Quiz App</h1>
//             {renderQuizQuestion()}
//             {renderSubmitButton()}
//         </div>
//     );
// };

// export default QuizComponent;



// src/components/QuizComponent.js
// import React, { useState, useEffect } from 'react';

// const QuizComponent = () =>
// {
//     const [quizData, setQuizData] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [userAnswers, setUserAnswers] = useState({});
//     const [timeLeft, setTimeLeft] = useState(60); // 60 seconds timer

//     useEffect(() =>
//     {
//         // Fetch quiz data when the component mounts
//         fetch('http://localhost:8080/user/random/quizzes')
//             .then(response => response.json())
//             .then(data => setQuizData(data))
//             .catch(error => console.error('Error fetching quiz data:', error));
//     }, []);

//     useEffect(() =>
//     {
//         const timer = setInterval(() =>
//         {
//             setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     const handleAnswerSelect = (selectedOption) =>
//     {
//         setUserAnswers((prevAnswers) => ({
//             ...prevAnswers,
//             [currentQuestionIndex]: selectedOption,
//         }));
//     };

//     const handleNextQuestion = () =>
//     {
//         if (currentQuestionIndex < quizData.length - 1)
//         {
//             setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//         }
//     };

//     const renderQuizQuestion = () =>
//     {
//         const currentQuestion = quizData[currentQuestionIndex];

//         if (!currentQuestion)
//         {
//             return <p>No quiz data available.</p>;
//         }

//         return (
//             <div>
//                 <p className="text-lg font-semibold mb-2">
//                     {currentQuestionIndex + 1}. {currentQuestion.question}
//                 </p>
//                 <div className="flex flex-col">
//                     {currentQuestion.options.map((option) => (
//                         <label key={option._id} className="flex items-center mb-2">
//                             <input
//                                 type="radio"
//                                 name="answerOptions"
//                                 value={option.key}
//                                 onChange={() => handleAnswerSelect(option.key)}
//                                 checked={userAnswers[currentQuestionIndex] === option.key}
//                                 className="mr-2"
//                             />
//                             {option.text}
//                         </label>
//                     ))}
//                 </div>
//             </div>
//         );
//     };

//     const renderNextQuestionButton = () =>
//     {
//         if (currentQuestionIndex < quizData.length - 1)
//         {
//             return (
//                 <button
//                     onClick={handleNextQuestion}
//                     className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
//                 >
//                     Next Question
//                 </button>
//             );
//         }

//         return null;
//     };

//     const renderSubmitButton = () =>
//     {
//         if (currentQuestionIndex === quizData.length - 1 || timeLeft === 0)
//         {
//             return (
//                 <button
//                     onClick={handleSubmitQuiz}
//                     className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
//                 >
//                     Submit
//                 </button>
//             );
//         }

//         return null;
//     };

//     const handleSubmitQuiz = () =>
//     {
//         // Handle quiz submission (e.g., send userAnswers to the server)
//         console.log('User answers:', userAnswers);
//     };

//     return (
//         <div className="container mx-auto my-8">
//             <h1 className="text-3xl font-bold mb-4">Quiz App</h1>
//             <div className="mb-4">
//                 <p>Time left: {timeLeft} seconds</p>
//             </div>
//             {renderQuizQuestion()}
//             <div className="flex space-x-4 mt-4">
//                 {renderNextQuestionButton()}
//                 {renderSubmitButton()}
//             </div>
//         </div>
//     );
// };

// export default QuizComponent;



// src/components/QuizComponent.js
import React, { useState, useEffect } from 'react';

const QuizComponent = () =>
{
    const [quizData, setQuizData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [results, setResults] = useState();
    const [timeLeft, setTimeLeft] = useState(60); // 60 seconds timer

    useEffect(() =>
    {
        // Fetch quiz data when the component mounts
        fetch('http://localhost:8080/user/random/quizzes')
            .then(response => response.json())
            .then(data => setQuizData(data))
            .catch(error => console.error('Error fetching quiz data:', error));
    }, []);

    useEffect(() =>
    {
        const timer = setInterval(() =>
        {
            setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleAnswerSelect = (selectedOption) =>
    {
        setUserAnswers((prevAnswers) => ({
            ...prevAnswers,
            [currentQuestionIndex]: selectedOption,
        }));
    };

    const handlePrevQuestion = () =>
    {
        if (currentQuestionIndex > 0)
        {
            setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNextQuestion = () =>
    {
        if (currentQuestionIndex < quizData.length - 1)
        {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
    };

    const renderQuizQuestion = () =>
    {
        const currentQuestion = quizData[currentQuestionIndex];

        if (!currentQuestion)
        {
            return <p>No quiz data available.</p>;
        }

        return (
            <div>
                <p className="text-lg font-semibold mb-2">
                    {currentQuestionIndex + 1}. {currentQuestion.question}
                </p>
                <div className="flex flex-col">
                    {currentQuestion.options.map((option) => (
                        <label key={option._id} className="flex items-center mb-2">
                            <input
                                type="radio"
                                name="answerOptions"
                                value={option.key}
                                onChange={() => handleAnswerSelect(option.key)}
                                checked={userAnswers[currentQuestionIndex] === option.key}
                                className="mr-2"
                            />
                            {option.text}
                        </label>
                    ))}
                </div>
            </div>
        );
    };

    // const renderPrevQuestionButton = () =>
    // {
    //     if (currentQuestionIndex > 0 && timeLeft > 0)
    //     {
    //         return (
    //             <>

    //                 <button
    //                     onClick={handlePrevQuestion}
    //                     className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
    //                 >
    //                     Previous Question
    //                 </button>
    //             </>
    //         );
    //     }

    //     return null;
    // };


    // const renderNextQuestionButton = () =>
    // {
    //     if (currentQuestionIndex < quizData.length - 1 && timeLeft > 0)
    //     {
    //         return (
    //             <>
    //                 <button
    //                     onClick={handleNextQuestion}
    //                     className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
    //                 >
    //                     Next Question
    //                 </button>
    //             </>
    //         );
    //     }

    //     return null;
    // };

    // const renderNextQuestionButton = () =>
    // {
    //     if (currentQuestionIndex > 0 && currentQuestionIndex < quizData.length - 1 && timeLeft > 0)
    //     {
    //         return (
    //             <>
    //                 <button
    //                     onClick={handlePrevQuestion}
    //                     className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
    //                 >
    //                     Previous Question
    //                 </button>
    //                 <button
    //                     onClick={handleNextQuestion}
    //                     className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
    //                 >
    //                     Next Question
    //                 </button>
    //             </>
    //         );
    //     } else if (currentQuestionIndex === 0 && timeLeft > 0)
    //     {
    //         // If it's the first question, only show the "Next Question" button
    //         return (
    //             <button
    //                 onClick={handleNextQuestion}
    //                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
    //             >
    //                 Next Question
    //             </button>
    //         );
    //     }

    //     return null;
    // };


    const renderNextQuestionButton = () =>
    {
        return (
            <>
                {currentQuestionIndex !== 0 && (
                    <button
                        onClick={handlePrevQuestion}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Previous Question
                    </button>
                )}

                {currentQuestionIndex !== quizData.length - 1 && (
                    <button
                        onClick={handleNextQuestion}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Next Question
                    </button>
                )}
            </>
        );
    };




    const handleSubmitQuiz = async () =>
    {
        // Create an array of objects containing question IDs and user answers
        const submittedAnswers = Object.entries(userAnswers).map(([questionId, userAnswer]) => ({
            id: quizData[parseInt(questionId)]._id,
            userAnswer,
        }));

        // Handle quiz submission (e.g., send submittedAnswers to the server)
        console.log('Submitted answers:', submittedAnswers);

        try
        {
            const response = await fetch('http://localhost:8080/user/evaluate/quizzes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "userAnswers": submittedAnswers }),
            });

            if (response.ok)
            {
                const results = await response.json();
                setResults(results);
                // console.log(results);
            } else
            {
                console.error('Failed to evaluate answers:', response.status, response.statusText);
            }
        } catch (error)
        {
            console.error('Error during evaluation:', error.message);
        }

    };


    useEffect(() =>
    {
        // Automatically submit the quiz when time expires
        if (timeLeft === 0)
        {
            handleSubmitQuiz();
        }
    }, [timeLeft]);


    const renderSubmitButton = () =>
    {
        if (currentQuestionIndex === quizData.length - 1 && timeLeft > 0)
        {
            return (
                <button
                    onClick={handleSubmitQuiz}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Submit
                </button>
            );
        }

        return null;
    };



    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Quiz App</h1>
            <div className="mb-4">
                <p>Time left: {timeLeft} seconds</p>
            </div>
            {renderQuizQuestion()}
            <div className="flex space-x-4 mt-4">
                {/* {renderPrevQuestionButton()} */}
                {renderNextQuestionButton()}
                {renderSubmitButton()}
                <div className="mt-4">
                    {results?.score && <p>
                        {
                            results.score > 3 ? `Congrats 🎉 Your score is ${results.score}/${quizData.length}` : `Your score is ${results.score}/${quizData.length}. Keep trying!`
                        }
                    </p>}
                </div>
            </div>
        </div>
    );
};

export default QuizComponent;
