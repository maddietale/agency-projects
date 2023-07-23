import React from "react";
// COMPONENTS
import Header from "../components/Header";
import Slider from "../components/Slider";
import PopularProducts from "../components/PopularProducts";
import Sale from "../components/Sale";
import PopularGlasses from "../components/PopularGlasses";
import PopularWatches from "../components/PopularWatches";
import PopularBags from "../components/PopularBags";
import BlogPosts from "../components/BlogPosts";
import Footer from "../components/Footer";
// STYLE
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <Slider />
      <PopularProducts />
      <Sale />
      <PopularGlasses />
      <PopularWatches />
      <PopularBags />
      <BlogPosts />
      <Footer />
    </Container>
  );
};

export default Home;
