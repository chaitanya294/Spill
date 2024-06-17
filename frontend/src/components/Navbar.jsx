import React from 'react'
import Icon from './Icon.jsx';
const Navbar = ({changeBlog}) => {
    function handleNewCategory(e) {
        changeBlog(e.target.id);
    }
  return (
    <div className = "flex flex-row">
          <button onClick = {handleNewCategory} id = "All" className = "p-2 m-1 mt-[20px] ml-[20px] text-zinc-500 hover:text-violet-600">All</button>
          <button onClick = {handleNewCategory} id = "Love" className = "p-2 m-1 mt-[20px] ml-[20px] text-zinc-500 hover:text-violet-600">Love</button>
          <button onClick = {handleNewCategory} id = "Friendship" className = "p-2 m-1 mt-[20px] ml-[20px] text-zinc-500 hover:text-violet-600">Friendship</button>
          <button onClick = {handleNewCategory} id = "Regrets" className = "p-2 m-1 mt-[20px] ml-[20px] text-zinc-500 hover:text-violet-600">Regrets</button>
          <button onClick = {handleNewCategory} id = "Secrets" className = "p-2 m-1 mt-[20px] ml-[20px] text-zinc-500 hover:text-violet-600">Secrets</button>
          <button onClick = {handleNewCategory} id = "Achievements" className = "p-2 m-1 mt-[20px] ml-[20px] text-zinc-500 hover:text-violet-600">Achievements</button>
          <button onClick = {handleNewCategory} id = "Anecdots" className = "p-2 m-1 mt-[20px] ml-[20px] text-zinc-500 hover:text-violet-600">Anecdotes</button>
          <button onClick = {handleNewCategory} id = "Career" className = "p-2 m-1 mt-[20px] ml-[20px] text-zinc-500 hover:text-violet-600">Career</button>
          <button onClick = {handleNewCategory} id = "Politics" className = "p-2 m-1 mt-[20px] ml-[20px] text-zinc-500 hover:text-violet-600">Politics</button>
          <button onClick = {handleNewCategory} id = "Education" className = "p-2 m-1 mt-[20px] ml-[20px] text-zinc-500 hover:text-violet-600">Education</button>
          <button onClick = {handleNewCategory} id = "Random Musing" className = "p-2 m-1 mt-[20px] ml-[20px] text-zinc-500 hover:text-violet-600">Random Musing</button>
          <Icon />
    </div>
  )
}

export default Navbar
