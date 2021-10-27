// import npm
import React from 'react';

// Import des composants
import Amount from '../Amount';
import Currencies from '../Currencies';
import ConvertedAmount from '../ConvertedAmount';

// == Import
import './styles.scss';

// Import des données
import currenciesList from '../../data/currencies';

class Converter extends React.Component {
  constructor(props) {
  // ICi, on appelle le constructeur de React.Component
  // en lui transmettant nos props
  // Permet d'initialiser le mécanisme de props
    super(props);

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      open: true,
    };

    // pour garder le contexte : on fixe le contexte pour this
    // on force le this de la méthode toggle avec le this du composant
    // la méthode toggle se rappelera du de son contexte
    // même si elle est utilisée ailleurs...
    this.toggle = this.toggle.bind(this); 
  }

  // on déclare une méthode toggle
  toggle() {
  // console.log('faut toggler');
  // on met à jour le state 
    this.setState({open: false});
  }

  // == Composant
  render() {
    const { open } = this.state;
    return (
      <div className="converter">
        <Amount amount={1} />
        <button onClick={this.toggle}>toggle</button>
        {
      /* les vues conditionnelles :
      Pour afficher une partie de l'interface de manière conditionnelle
      On s'appuie sur la manière dont JS évalue une expression
      En effet:
      - true && une autre expression sera évaluée (et donc aura la valeur de une autre expression)
      - false && autre expression sera toujours évalué comme false
      De plus rendre un booléen dans notre JSX ne 'rend' rien du tout
      */
    }
        {open && <Currencies currencies={currenciesList} />}    <ConvertedAmount amount={1.08} currency="Blabla" />
      </div>
    );
  }
}

// == Export
export default Converter;
