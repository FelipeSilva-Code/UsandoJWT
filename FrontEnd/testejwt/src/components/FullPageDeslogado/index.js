import React from "react";
import Footer from "../Footer";
import Header from "../HeaderDeslogado";
import { Container } from "../FullPageLogado/style";

export default function FullPageDeslogado(props) {
  return (
    <>
      <Header />
      <Container>{props.children}</Container>
      <Footer />
    </>
  );
}
