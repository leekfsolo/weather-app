import React, { FC, ReactNode } from "react";
import { Container } from "react-bootstrap";
import Loading from "../../components/loading";

interface Props {
  children: ReactNode;
  isOpen: boolean;
}

const MainLayout: FC<Props> = (props: Props) => {
  const { children, isOpen } = props;

  return (
    <Container className="h-100 min-vh-100 m-0" fluid>
      <Loading isOpen={isOpen} />
      {children}
    </Container>
  );
};

export default MainLayout;
