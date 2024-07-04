import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Game } from '../../components/TicTacToe/Game';

function Home() {
  return (
    <div>
      <Header />
      <Container>
        <Game />
      </Container>
    </div>
  );
}

export { Home };
