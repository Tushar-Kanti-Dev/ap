import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComment></LoadComment>
    </div>
  );
}
function Counter(){
  const [count, setCount]= useState(0);
  const handleIncrease = ()=>setCount(count + 1);
  const handleDecrease =()=> setCount(count - 1)
  console.log(count)
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function LoadComment(){
  const [comments, setComment]= useState([]);
  useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data => setComment(data))
  })
  return(
    <div>
      <h1>Load Comment</h1>
      <h3>Total-Comment: {comments.length}</h3>
      {
        comments.map(comment=> <Comment id={comment.id} email={comment.email} name={comment.name} body={comment.body}></Comment>)
      }
    </div>
  )
}
function Comment(props){
  return (
    <div  className='comment-section'>
      <h2>Id: {props.id}</h2>
      <h2>Name: {props.name}</h2>
      <h2>Email: {props.email}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}

export default App;
