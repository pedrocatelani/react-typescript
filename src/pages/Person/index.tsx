import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { PersonMessage } from './messages';

function PersonPage() {
  return (
    <div>
      <Header />
      <Container>{PersonMessage()}</Container>
    </div>
  );
}

export { PersonPage };
