import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <Header />
      <Section>
        <Outlet />
      </Section>
      <Footer />
    </>
  );
};

export default Layout;

const Section = styled.div`
  margin-top: 100px;
`;
