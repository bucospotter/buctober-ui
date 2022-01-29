import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

export default function About() {
  return (
    <Layout>
      <Wrapper>
        <h1 className="about-heading">Hello people from about page</h1>
        <p className="text">
          this is some test text
        </p>
      </Wrapper>
    </Layout>
  )}

const Wrapper = styled.section`
  color: red;
  h1 {
    color: yellowgreen;
  }
  .text {
    text-transform: uppercase;
  }
`
