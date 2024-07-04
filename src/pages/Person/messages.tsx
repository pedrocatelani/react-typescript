import { Link } from 'react-router-dom';
import { usePersonContext } from '../../contexts/person';
import './styles.css';

export function PersonMessage() {
  const { person, setPerson } = usePersonContext();
  const checkPronoum = (gender: string) => {
    if (gender === 'male') {
      return 'Gentleman';
    } else if (gender == 'female') {
      return 'Lady';
    } else {
      return 'There';
    }
  };

  if (person) {
    return (
      <div className="message_box" id="sucess">
        <h1>Hello {checkPronoum(person.gender)}, {person.name}!</h1>
      </div>
    );
  } else {
    return (
      <div className="message_box" id="error">
        <h1>Sessão não iniciada!!!</h1>
        <p>
          Por favor, retorne a <Link to="/">pagina inicial</Link>, e efetue o login.
        </p>
      </div>
    );
  }
}
