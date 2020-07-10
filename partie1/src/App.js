import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import './App.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Image from 'react-bootstrap/Image'
import logo from './images/epitech_logo.png';
import { Container, Row, Col } from 'reactstrap';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header > 
      <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />  
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </header>
      <body className="App-body">
        <div class="corps">
        <div className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <img src={logo} width="90" height="90" />
          <Image src={require('./images/logo.png')} rounded />

          </Typography>
          <Button >Login</Button>
          <Button >Login</Button>
          <Button >Login</Button>
          <Button >Inscription</Button>
          <Button >Login</Button>
          <Button><SearchIcon /></Button>
          <Button ><ShoppingCartIcon /></Button>
        </Toolbar>
    </div>
    
    <div>
      <Container fluid="md">
        <Row>
          <Col xs="4">
          <Image src={require('./images/2.png')} />
          </Col>
          <Col xs="4">
          <Image src="https://facebook.github.io/react-360/img/logo.svg"  />
          </Col>
          <Col xs="4">
          <Image src={require('./images/1.jpeg')} fluid />
          </Col>
        </Row>
      </Container>
    </div>
    <Row>
    <Col> <Image src={require('./images/3.jpeg')} fluid /></Col>
    <Col> <Image src={require('./images/3.jpeg')} fluid /></Col>
  </Row>
    <Row>
        <Col xs="6" sm="4"><Image src={require('./images/2.png')} fluid /></Col>
        <Col xs="6" sm="4"><Image src={require('./images/2.png')} fluid /></Col>
        <Col xs="6" sm="4"><Image src={require('./images/2.png')} fluid /></Col>
      </Row>
            <p>fhdsdkdfbhsdksbjsknksjnkdja ligne du dégradé est définie par le centre de la boîte contenant le dégradé et par un angle. Les couleurs du dégradé sont définies par différents points : le point de départ et le point d'arrivée. Entre ces deux points, on peut avoir différents points d'arrêt définissant la couleur à ce niveau.

Le point de départ utilise la couleur initiale du dégradé. Ce point est défini comme l'intersection de la ligne du dégradé et de la ligne perpendiculaire à cette droite et qui passe par le coin de la boîte situé dans le même quadrant.

De la même façon, le point d'arrivée est le point de la ligne du dégradé où la couleur finale est atteinte. Il peut également être défini comme l'intersection entre la ligne du dégradé et une ligne perpendiculaire, passant par le coin le plus proche.

Ces définitions plutôt complexes ont des conséquence plutôt intéressantes : les coins les plus proches de ces deux points (parfois appelés « coins magiques ») ont les couleurs de départ et de fin.</p>
    <div>
      <div class="center">
        <Image src={require('./images/logo.png')} />
      </div>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>ligne du dégradé est définie par le centre de la boîte contenant le dégradé et par un angle. Les couleurs du dégradé sont définies par différents points : le point de départ et le point d'arrivée. Entre ces deux points, on peut avoir différents points d'arrêt définissant la couleur à ce niveau.

Le point de départ utilise la couleur initiale du dégradé. Ce point est défini comme l'intersection de la ligne du dégradé et de la ligne perpendiculaire à cette droite et qui passe par le coin de la boîte situé dans le même quadrant.

De la même façon, le point d'arrivée est le point de la ligne du dégradé où la couleur finale est atteinte. Il peut également être défini comme l'intersection entre la ligne du dégradé et une ligne perpendiculaire, passant par le coin le plus proche.

Ces définitions plutôt complexes ont des conséquence plutôt intéressantes : les coins les plus proches de ces deux points (parfois appelés « coins magiques ») ont les couleurs de départ et de fin.</Col>
      </Row>
      <br />
    </div>
    <div>
      <Row>
        <Col>
          <Button >Login</Button>
          <Button >Login</Button>
          <Button >Login</Button>
          <Button >Inscription</Button>
          <Button >Login</Button>
        </Col>
        <Col>
        <Row>
          <Col></Col>
          <Col>
        <a href="#"><Image src={require('./images/fbk.png')} width="30" height="30" /></a>  
        </Col>
        <Col>
        <a href="#"><Image src={require('./images/twitter.png')} width="30" height="30" /></a>
        </Col>
        <Col>
        <a href="#"><Image src={require('./images/youtube.png')} width="30" height="30" /></a>  
        </Col>
        <Col></Col>
        </Row>
        </Col>
        <Col>
        <h3>Copyright © Alen Styling</h3>
        </Col>
        </Row>
        <br/>
    </div>
        </div>
      </body>
    </div>
  );
}

export default App;
