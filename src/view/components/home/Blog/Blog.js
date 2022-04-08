import React from 'react';
import './Blog.css';
import styled from 'styled-components';
import { Description } from '../HeroSection/HeroSection';
import { Line, SubTitle, Title } from '../Service/Service';

const Blog = () => {
    return (
        <Container>

            <Heading>
                <SubTitle><Line /> Blog</SubTitle>
                <Title>Latest News</Title>
            </Heading>

            <BlogWraper>

                <BlogItem  className='blog'>
                    <BlogThumbnail>
                        <img id='blog-thumb1' src="/img/blog-1.png" alt="blog-thumbnail" />
                    </BlogThumbnail>

                    <BlogInfo className="blog-info" id='blog-info-1'>

                        <BlogMeta>
                            <p>By Admin</p>
                            <p>31 April,2020</p>
                        </BlogMeta>
                        <BlogTitle>10 Place that You Can Find</BlogTitle>
                        <BlogDescription>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</BlogDescription>
                        <ReadMore>Read More...</ReadMore>

                    </BlogInfo>
                </BlogItem>

                <BlogItem  className='blog'>
                    <BlogThumbnail>
                        <img src="/img/blog-2.png" alt="blog-thumbnail" />
                    </BlogThumbnail>

                    <BlogInfo className="blog-info">

                        <BlogMeta>
                            <p>By Admin</p>
                            <p>31 April,2020</p>
                        </BlogMeta>
                        <BlogTitle>How To Get People To Like</BlogTitle>
                        <BlogDescription>It is a long established fact that a reader will be distracted by the</BlogDescription>
                        <ReadMore>Read More...</ReadMore>

                    </BlogInfo>
                </BlogItem>

                <BlogItem className='blog'>
                    <BlogThumbnail>
                        <img src="/img/blog-3.png" alt="blog-thumbnail" />
                    </BlogThumbnail>

                    <BlogInfo id='last-bloginfo' className="blog-info">

                        <BlogMeta>
                            <p>By Admin</p>
                            <p>31 April,2020</p>
                        </BlogMeta>
                        <BlogTitle>How To Get People To Like</BlogTitle>
                        <BlogDescription>It is a long established fact that a reader will be distracted by the</BlogDescription>
                        <ReadMore>Read More...</ReadMore>

                    </BlogInfo>
                </BlogItem>

            </BlogWraper>
        </Container>
    );
};

export default Blog;





const Container = styled.section`
padding: 6rem 10rem 4rem;

@media (max-width: 1200px){
    padding: 6rem 5rem;
}
@media (max-width: 900px){
    padding: 4rem 4rem;
}
@media (max-width: 800px){
    padding: 4rem 4rem;
}
@media (max-width: 700px){
    padding: 6rem 1rem 2rem;
}
`;

const Heading = styled.div`

`;


const BlogWraper = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
padding-top: 2rem;
gap: 30px;

@media (max-width: 1200px){
    grid-template-columns: repeat(1,1fr);
}

`;
const BlogItem = styled.article`

&:nth-child(1){
    grid-row: 1 / span 2;
    position: relative;

    @media (max-width: 1200px){
        grid-row: 1 / span 1;
    }
    
}
&:nth-child(2){
    display: flex;

    @media (max-width: 700px){
            flex-direction: column;
    }
}
&:nth-child(3){
    display: flex;

    @media (max-width: 700px){
        flex-direction: column;
}
}
`;
const BlogThumbnail = styled.div`

img{
    width: 100%;
}
`;
const BlogInfo = styled.div`



`;
const BlogMeta = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
font-size: 16px;
color: var(--font-description);
`;
const BlogTitle = styled.h3`
font-size: 25px;
color: var(--font-title);
font-weight: 600;
padding: 1rem 0rem;
`;
const BlogDescription = styled(Description)`
padding: 0rem;
margin: 0rem;
width: 100%;
padding-bottom: 1rem;
`;
const ReadMore = styled.div`
color: var(--button-background);
font-size: 16px;
font-weight: 500;
cursor: pointer;
`;