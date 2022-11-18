import React from 'react';
import styled from 'styled-components';
import {ImEarth} from "react-icons/im"
import {GiThink} from "react-icons/gi"
import {AiTwotoneLike} from "react-icons/ai"
import {SlLike} from "react-icons/sl"
import {BiRepost} from "react-icons/bi"
import {IoIosSend} from "react-icons/io"
import {FaHandHoldingHeart, FaHandsWash,FaRegCommentDots,
FaRegLightbulb,FaRegLaughBeam} 
from "react-icons/fa"
import {BsThreeDots, BsFillHeartFill,BsFillHandThumbsUpFill} from "react-icons/bs"
import { useState } from 'react';

const SinglePost = (props) => {
    const { id ,name, prof_url, position, post, img_url, gender } = props.item;
    const [ like, setLike ] = useState(false);
    const [short, setShort] = useState(false);

    return (
    <Container>
        <Header>
            <div className='profile'>
                <img src={prof_url} alt="profile" />
                <div className="details">
                    <h1 className="name">{name}<span> {gender}</span></h1>
                    <p className='position'>{position}</p>
                    <p className='time'>6d. <span><ImEarth/></span></p>
                </div>
            </div>
            <span className='dots'><BsThreeDots/></span>
        </Header>
        <Body>
            <p>{short ? post : post.substring(0, 250)}...<button className='seeBtn' 
            onClick={() => setShort(!short)}>{short ? "See Less" : "See more"}</button></p>
            <img src={img_url} alt="nature" />
        </Body>
        <Footer like={like}>
            <div className="likedPost">
                <span><FaHandHoldingHeart/></span>
                <span><BsFillHandThumbsUpFill/></span>
                <p>2</p>
            </div>
            <div className="postButtons">
                <button
                onMouseOver={() => setLike(true)}
                onClick = {() => setLike(false)}
                >Like <span><SlLike/></span></button>
                <button>Comment <span><FaRegCommentDots/></span></button>
                <button>Repost <span style={{fontSize : "1.6rem"}}><BiRepost/></span></button>
                <button>Send <span><IoIosSend/></span></button>
            </div>
            {like && <div className="likeIcons">
                <button title='Like' style={{color : "#2f47e6"}}><AiTwotoneLike/></button>
                <button title='Support' style={{color : "#bd0d97"}}><FaHandHoldingHeart/></button>
                <button title='Love' style={{color : "#e62f44"}}><BsFillHeartFill/></button>
                <button title='Celebrate' style={{color : "#219a03"}}><FaHandsWash/></button>
                <button title='InsightFul' style={{color : "#c6af3d"}}><FaRegLightbulb/></button>
                <button title='Laugh' style={{color : "#0b8ec6"}}><FaRegLaughBeam/></button>
                <button title='Curious' style={{color : "#bd0d97"}}><GiThink/></button>
            </div>}
        </Footer>
    </Container>
  )
}

export default SinglePost
const Container = styled.div`
    background-color: #fff;
    margin: 1rem 0;
    width: 40rem;
    margin: 0 auto;
    color: #000;
    border-radius: 5px;
    padding: 1rem 1rem 0.3rem 1rem;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    .profile{
        display: flex;
        align-items: center;
        gap: 0.4rem;
        img{
            width: 4rem;
            height: 4rem;
            border-radius: 50px;
            object-fit: cover;
        }
        h1{
            font-size: 1rem;
            font-weight: 500;
        }
        p{
            font-size: 0.8rem;
            color: #353535;
            font-weight: 300;
            margin: 0.2rem 0;
        }
        .time{
            display: flex;
            align-items: center;
            gap: 0.2rem;
            span{
                margin-top: 0.1rem;
            }
        }
    }
    .dots{
        font-size: 1.2rem;
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        cursor: pointer;
        :hover{
            background-color: #80808072;
        }
    }
`
const Body = styled.div`
    p{
        padding: 0.5rem 0;
        font-size: 0.9rem;
        font-weight: 400;
    }
    img{
        width: 100%;
        height: 20rem;
        object-fit: cover;
    }
    .seeBtn{
        background-color: transparent;
        cursor: pointer;
        border: none;
        color: #1c0551;
        font-size: 0.8rem;
    }
`
const Footer = styled.div`
    position: relative;
    .likedPost{
        font-size: 0.7rem;
        display: flex;
        align-items: center;
        padding: 0.5rem 0;
        border-bottom: 1px solid #1b1b1b58;
        span{
            background-color: #ae0c0c;
            width: 1.2rem;
            height: 1.2rem;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50px;
        }
        p{
            font-size: 0.9rem;
            margin-left: 0.4rem;
            color: #4b4b4bd5;
        }
    }
    .likeIcons{
        position: absolute;
        background-color: #fff;
        top: -0.8rem;
        padding: 0.3rem 0.4rem;
        box-shadow: 0px 0px 5px 0.1px grey;
        display: flex;
        border-radius: 5px;
        transition: transform 400 ms ease-in-out;
        transform: ${props => props.like ? "scale(1)" : "scale(0)"};
        button{
            padding: 0.4rem;
            background-color: transparent;
            border: none;
            cursor: pointer;
            font-size: 1.4rem;
            position: relative;
            transition: transform 300ms ease-in-out;
            animation: jump 300ms ease-in-out;
            :hover{
                transform: translateY(-10px) scale(1.8);
            }
            &:nth-child(1){
                animation-delay: 500ms;
            }
            &:nth-child(2){
                animation-delay: 700ms;
            }
            &:nth-child(3){
                animation-delay: 900ms;
            }
            &:nth-child(4){
                animation-delay: 1.1s;
            }
            &:nth-child(5){
                animation-delay: 1.3s;
            }
            &:nth-child(6){
                animation-delay: 1.5s;
            }
            &:nth-child(7){
                animation-delay: 1.7s;
            }
            &[title]:hover::after {
                content: attr(title);
                position: absolute;
                top: -1rem;
                left: 0.4rem;
                font-size: 0.3rem;
                color: #fff;
                background-color: #000;
                padding: 0.3rem;
                border-radius: 10px;
            }
        }
    }
    .postButtons{
        width: 100%;
        display: flex;
        align-items: center;
        padding-top: 0.5rem;
        button{
            height: 3.5rem;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-size: 1rem;
            flex: 1;
            padding: 1rem 0;
            border: none;
            outline: none;
            width: 100%;
            background-color: transparent;
            cursor: pointer;
            :hover{
                background-color: #80808032;
            }
            span{
                font-size: 1.3rem;
                margin-top: 0.2rem;
            }
        }
    }
`