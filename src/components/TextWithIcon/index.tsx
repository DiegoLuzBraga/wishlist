import * as S from "./styles";

interface Props {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

export const TextWithIcon = ({ icon, text, onClick }: Props) => {
  return (
    <S.Container onClick={onClick} isClickable={onClick !== undefined}>
      {icon} <p>{text}</p>
    </S.Container>
  );
};
