import styled from "styled-components";

const FooterContainer = styled.footer`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Footer = () => {
  return (
    <FooterContainer className="bg-yellow-600">
      <p>&copy; 2024. Todos os direitos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;
