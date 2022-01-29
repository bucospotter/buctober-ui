import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/button"

export default function Home() {
  return(
  <Layout>
    <ExampleButton>click me</ExampleButton>
    <h1 style={{ color: "green", textTransform: "capitalize"}}>Hello people!</h1>
  </Layout>
  )}
