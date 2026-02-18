import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const PageTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  color: #004d40;
  text-align: center;
  margin-bottom: 2rem;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const BlogCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  color: #00897b;
  margin-bottom: 0.5rem;
`;

const BlogMeta = styled.div`
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const BlogExcerpt = styled.p`
  color: #666;
  line-height: 1.6;
`;

const ReadMoreLink = styled.a`
  color: #00897b;
  text-decoration: none;
  font-weight: 500;
  margin-top: 1rem;
  display: inline-block;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Blog = () => {
  const blogPosts = [
    {
      title: 'Essential Vaccinations for Your Newborn',
      date: 'March 15, 2025',
      excerpt: 'A comprehensive guide to the vaccination schedule recommended for newborns in their first year of life.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80'
    },
    {
      title: 'Nutrition Tips for Toddlers',
      date: 'March 10, 2025',
      excerpt: 'Learn about the best nutritional practices to support your toddler\'s rapid growth and development.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80'
    },
    {
      title: 'Understanding Developmental Milestones',
      date: 'March 5, 2025',
      excerpt: 'Track your child\'s development with this guide to important milestones from birth to age 5.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&q=80'
    }
  ];

  return (
    <BlogContainer>
      <PageTitle>Blog</PageTitle>
      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogCard key={index}>
            <BlogImage src={post.image} alt={post.title} />
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogMeta>{post.date}</BlogMeta>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <ReadMoreLink href="#">Read More →</ReadMoreLink>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog;
