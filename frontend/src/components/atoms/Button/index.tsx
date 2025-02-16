import styled from '@emotion/styled';

interface ContainerProps {
  color: string;
  width?: string;
  height?: string;
}

const Container = styled.button<ContainerProps>`
  margin-top: 15px;
  padding: 8px 16px;
  background-color: ${(props) => props.color};
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  min-width: 40px;
  line-height: 16px;
  font-weight: bold;
  font-size: 18px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  &:hover {
    background-color: ${(props) => props.color};
    opacity: 0.8;
  }

  &.active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  readonly label: string;
  readonly color?: string;
  readonly onClick?: () => void;
  readonly width?: string;
  readonly height?: string;
}

export const Button = ({ label, color = '#ff5722', onClick, width = '100px', height = '40px' }: Props) => {
  return (
      <Container color={color} onClick={onClick} width={width} height={height}>
        {label}
      </Container>
  );
};
