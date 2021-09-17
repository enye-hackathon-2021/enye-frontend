import React from 'react'
import styled from 'styled-components'
import CommentIcon from '@mui/icons-material/Comment';

const questions = [
    {
        question: 'I got an injury to my head while I was playing football, any solution to reduce the pain>',
        answer: 'Buy Topiramate and use two doses in the morning and night, if you are not relieved within two days, please see the nearest doctor.',
        number: 10
    },

    {
        question: 'What can I use on to cure my sore throat?',
        answer: 'You should drink a cup of hot water, morning and night.',
        number: 12
    },

    {
        question: 'I got an injury to my head while I was playing football, any solution to reduce the pain>',
        answer: 'Buy Topiramate and use two doses in the morning and night, if you are not relieved within two days, please see the nearest doctor.',
        number: 18
    },

    {
        question: 'What is the best home made solution to stomach ache?',
        answer: 'Put a tea spoon of salt inside hald full cup of warm water and drink it, cheers.',
        number: 15
    },

    {
        question: 'What are symptoms of covid-19',
        answer: 'intense headache, dry couch, sore throat are all symptoms of covid-19',
        number: 8
    },
    
    {
        question: 'Please recommend an effective stress reliever drug for me',
        answer: 'Natrol stree relief, Geneca stress relief, Natures ford stree defense are all effective for releiving you of stress',
        number: 2
    }
]

const Response = () => {
    return (
        <div>
            <Lodge className="lodge pr-8">
                <div className = 'text-black font-bold text-2xl mb-5'>
                    Responses
                </div>

                <div>
                   {questions.map((question, i) => (
                        <div key = 'i' className = 'mb-3 bg-green-400 py-2 px-2 rounded'>
                            <div className = 'font-semibold'>
                            Q: {question.question}
                            </div>
                            <div className = 'font-semibold'>
                                <small>
                                A:    {question.answer}
                                </small>
                            </div>

                            <div className = 'mt-4 flex justify-between'>
                                <p className = 'answers px-3 py-2 font-normal'>
                                    <CommentIcon fontSize = "small" className = 'mr-1' />
                                        {question.number} answers
                                </p>
                                <button className = 'view' className = 'bg-green-600 px-3 py-2 rounded'>View all</button>
                            </div>
                        </div>
                    ))}
                </div>
            </Lodge>
        </div>
    )
}

const Lodge = styled.section`
    width: 100%;
    overflow-y: scroll;

    .answers {
        border: 1px solid rgba(255, 255, 255, .5);
        background: #fff;
        color: black;
    }

    .view {
        /* background: green; */
        border: 1px solid black;
    }
`;
export default Response