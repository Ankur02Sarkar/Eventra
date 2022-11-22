import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://i.ibb.co/xDmtDxY/login.png") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  border-radius: 25px;
  /* background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ); */
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.47);
  scale: 1.3;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 27px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.47);
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  border-radius: 27px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link2 = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  /* text-decoration: underline; */
  cursor: pointer;
`;

const Btnwrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Btnwrap>
            <Button>LOGIN</Button>
          </Btnwrap>
          <Link to="/reset">
            <Link2>DO NOT YOU REMEMBER THE PASSWORD?</Link2>
          </Link>
          <Link to="/register">
            <Link2>CREATE A NEW ACCOUNT</Link2>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
