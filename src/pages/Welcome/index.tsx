import { Container } from '../../components/Container';
import { Formulary } from '../../components/Formulary';
import './styles.css';

function Welcome() {
  return (
    <div className="main">
      <div id='welcome_container'>
        <Formulary />
      </div>
    </div>
  );
}

export { Welcome };
