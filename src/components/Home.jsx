import React from 'react'
import styled from 'styled-components'
import Post from './Post'

const Home = () => {
  return (
    <Container>
        <div className="btn">
            <button>Add Post</button>
        </div>
        <div className='posts'>
          <Post/>
        </div>
    </Container>
  )
}

export default Home

const Container = styled.div`
    width: 70%;
    margin: 0 auto;
    padding: 2rem;
    .btn{
      position: sticky;
      top: 1rem;
        text-align: right;
        margin-bottom: 2rem;
        button{
        background-color: #4e4ef4;
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0.5rem 1rem;
        border-radius: 4px;
    }
    }
`