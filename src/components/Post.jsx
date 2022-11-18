import React from 'react'
import styled from 'styled-components';
import SinglePost from './SinglePost';

const Post = () => {
    let data = [
        {
            id : 1,
            name : "Michel Joe",
            gender : "(He / Him)",
            prof_url : "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
            position :"Full stack software developer",
            post : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta maxime quam itaque, 
            sint corporis quod eaque optio, 
            aut illo esse nihil voluptatum temporibus, tempore culpa expedita 
            maiores aperiam omnis sit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta maxime quam itaque, 
            sint corporis quod eaque optio, 
            aut illo esse nihil voluptatum temporibus, tempore culpa expedita Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta maxime quam itaque, 
            sint corporis quod eaque optio, 
            aut illo esse nihil voluptatum temporibus, tempore culpa expedita `,
            img_url : "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
        },
        {
            id : 2,
            name : "Sarah Belter",
            gender : "(She / Her)",
            prof_url : "https://static.vecteezy.com/system/resources/previews/000/992/768/large_2x/passport-of-beautiful-woman-in-white-shirt-photo.jpg",
            position :"Web developer & Designer",
            post : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta maxime quam itaque, 
            sint corporis quod eaque optio, 
            aut illo esse nihil voluptatum temporibus, tempore culpa expedita Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta maxime quam itaque, 
            sint corporis quod eaque optio, 
            aut illo esse nihil voluptatum temporibus, tempore culpa expedita Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta maxime quam itaque, 
            sint corporis quod eaque optio, 
            aut illo esse nihil voluptatum temporibus, tempore culpa expedita 
            maiores aperiam omnis sit.`,
            img_url : "https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2016/Graduation-photo-tips/Media/Graduation-photos-2-girlfriends.jpg"
        },
    ]
  return (
    <Container>
        {data.map((item, i) => (
            <SinglePost item={item} key={i}/>
        ))}
    </Container>
  )
}

export default Post;

const Container = styled.div`
      display: flex;
      flex-direction: column;
      gap :0.5rem;
`