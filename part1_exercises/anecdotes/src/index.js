import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Results = ({ result }) => <div>has {result} votes</div>

const randomAnecdote = (setSelected) => () => setSelected(Math.round(Math.random() * ((anecdotes.length - 1) - 0) + 0))

const Anecdote = ({ text, anecdote, votes }) => {
  return (
    <div>
      <h1>{text}</h1>
      {anecdote}
      <Results result={votes} />
      <br />
    </div>
  )
}

const castVote = (setPoints, points, selected) => () => {
  const copy = [...points]
  copy[selected] += 1
  setPoints(copy)
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0))

  return (
    <div>
      <Anecdote text='Anecdote of the Day' anecdote={anecdotes[selected]} votes={points[selected]} />
      <Button handleClick={castVote(setPoints, points, selected)} text='vote' />
      <Button handleClick={randomAnecdote(setSelected)} text='next anecdote' />
      <Anecdote text='Anecdote with the most votes' anecdote={anecdotes[points.indexOf(Math.max(...points))]} votes={points[points.indexOf(Math.max(...points))]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)