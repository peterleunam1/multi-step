import { Button } from "../../components";
import { MainComponentProps } from "../../interfaces";
import {
  Container,
  Header,
  Information,
  BarButton,
} from "../../styled-components";

const MainComponent = ({
  title,
  subtitle,
  back_path,
  children,
  back_off,
  onClick,
  justify,
  text_regular="Next",
  visilityButoons = true,
}: MainComponentProps) => {
  return (
    <Container>
      <Header>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </Header>
      <Information justify={justify}>{children}</Information>
      {!back_off ? (
        <>
          {visilityButoons && (
            <BarButton justify="flex-end">
              <Button type="regular" width="130px" onClick={onClick} text={text_regular} />
            </BarButton>
          )}
        </>
      ) : (
        <>
          {visilityButoons && (
            <BarButton justify="space-between">
              <Button type="outline" width="130px" path={back_path} />
              <Button type="regular" width="130px" onClick={onClick} text={text_regular}/>
            </BarButton>
          )}
        </>
      )}
    </Container>
  );
};
export default MainComponent;
