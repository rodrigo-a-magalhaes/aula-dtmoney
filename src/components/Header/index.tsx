
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <div>
      <Container>
        <Content>
          <img src={logoImg} alt="dt money" />
          <button type="button" onClick={onOpenNewTransactionModal}>
            Nova transação
          </button>
        </Content>
      </Container>
    </div>
  )
}
