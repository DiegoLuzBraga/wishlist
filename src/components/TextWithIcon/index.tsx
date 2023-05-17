import * as S from "./styles";

interface Props {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

export const TextWithIcon = ({ icon, text, onClick }: Props) => {
  return (
    <S.Container onClick={onClick}>
      {icon} <p>{text}</p>
    </S.Container>
  );
};
