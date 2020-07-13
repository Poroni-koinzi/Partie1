import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import './App.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Image from 'react-bootstrap/Image'
import logo from './images/epitech_logo.png';
import { Row, Col } from 'reactstrap';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";



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
      <header> 
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
          <Image src={logo} width="90" height="90" />
          <Image src={require('./images/logo.png')} rounded />
          </Typography>
          <Button >Accueil</Button>
          <Button >A Propos</Button>
          <Button >Contact</Button>
          <Button >Inscription</Button>
          <Button >Connexion</Button>
          <Button><SearchIcon /></Button>
          <Button ><ShoppingCartIcon /></Button>
        </Toolbar>
    </div>

    <div>
      <Row>
        <Col xs="12" sm="4" className="display">
        <Row>
                <Col xs="12" sm="2"></Col>
                <Col xs="12" sm="8">
            <Typography  style={{ fontWeight: 'bold'}}>
            <h2>Fauteuil de salon</h2>
          </Typography>
              <Typography size="small" style={{ color: '#db571a'}}>
              Salon canapé chine bonne qualité salon canapé européen classique 7 places en cuir canapé             
              </Typography>
              <br />
              <Typography size="small" style={{ fontWeight: 'bold'}}>
                1100€
              </Typography>
          <br />
          <CardActions >
            <Button size="small" color="primary" variant="h5" component="h2" style={{ background: '#db571a', color: 'white'}} >
              Ajouter au panier
            </Button>
          </CardActions>
          </Col>
          <Col xs="12" sm="2"></Col>
          </Row>
        </Col>
        <Col xs="12" sm="8">
          <div style={{position: 'relative'}}>
        <CardMedia style={{ width: 1095, height: 650 }}
              image={require('./images/fautueil.jpg')}
              title="table"
            /> 
            </div>
            <div style={{ position: 'absolute', top: 30, right: 250}}>
            <Typography style={{ fontWeight: 'bold', color: '#db571a'}}>
                <h2>Fauteuil de salon</h2>
              </Typography>
            </div>
        </Col>
      </Row>
    </div>
    
    <div>
        <Row>
          <Col xs="12" sm="6" >
            <CardMedia style={{ width: 845, height: 550 }}
              image={require('./images/v.png')}
              title="table"
            />          
          </Col>
          <Col xs="12" sm="6" style={{ paddingRight: 0, paddingLeft: 0}}>
            <Row>
            <Col xs="12" sm="8" className="display">
              <Row>
                <Col xs="12" sm="3"></Col>
                <Col xs="12" sm="6">
            <Typography  style={{ fontWeight: 'bold'}}>
            <h2>Lampe de chevet</h2>
          </Typography>
              <Typography size="small">
              Lampe de chevet en bois romantique multicolore AUBRY GASPARD.
              </Typography>
              <br />
              <Typography size="small" style={{ fontWeight: 'bold'}}>
                39€
              </Typography>
          <br />
          <CardActions >
            <Button size="small" color="primary" variant="h5" component="h2" style={{ background: '#db571a', color: 'white'}} >
              Ajouter au panier
            </Button>
          </CardActions>
          </Col>
          <Col xs="12" sm="3"></Col>
          </Row>
            </Col>
            <Col xs="12" sm="4" className="display">
            <CardMedia style={{ width: 200, height: 150 }}
              image={require('./images/lampe.jpg')}
              title="table"
            />   
            <CardMedia style={{ width: 200, height: 190, marginTop: 50 }}
              image={require('./images/lampe.jpg')}
              title="table"
            />  
            </Col>
            </Row>
          </Col>
        </Row>
    </div>
    <div>
        <Row>
          <Col xs="12" sm="6">
          <Row>
          <Col xs="12" sm="4">
            <div className="displays">
            <CardMedia style={{ width: 200, height: 190 }}
              image={require('./images/canape2.jpeg')}
              title="table"
            />   
            <CardMedia style={{ width: 200, height: 180, marginTop: 50 }}
              image={require('./images/canape1.jpeg')}
              title="table"
            />  
            </div>
            </Col>
            <Col xs="12" sm="8" className="display">
              <Row>
                <Col xs="12" sm="2"></Col>
                <Col xs="12" sm="8">
            <Typography  style={{ fontWeight: 'bold'}}>
            <h2>Strandmon Fauteuil</h2>
          </Typography>
              <Typography size="small">
              Chez IKEA, nous nous demandons toujours comment nos produits peuvent encore mieux répondre à vos besoins quotidiens liés à la vie à la maison. La réponse consiste parfois à désassembler les produits. C’est exactement ce que nous avons fait avec le fauteuil STRANDMON.
              </Typography>
              <br />
              <Typography size="small" style={{ fontWeight: 'bold'}}>
                250€
              </Typography>
          <br />
          <CardActions >
            <Button size="small" color="primary" variant="h5" component="h2" style={{ background: '#db571a', color: 'white'}} >
              Ajouter au panier
            </Button>
          </CardActions>
          </Col>
          <Col xs="12" sm="2"></Col>
          </Row>
            </Col>
           
            </Row>          
          </Col>
          <Col xs="12" sm="6" style={{ paddingRight: 0, paddingLeft: 0}}>
          <CardMedia style={{ width: 845, height: 550 }}
            image={require('./images/p.png')}
            title="table"
          />          </Col>
        </Row>
    </div>
    <div>
    <Row>
        <Col xs="8" sm="3">
        <Card  style={{ maxWidth: 415, marginLeft: 0, marginRight: 0, marginBottom: 0, background: 'silver',}}>
          <CardMedia style={{ width: 415, height: 500 }}
            image={require('./images/ordinateur.png')}
            title="table"
          />
          <Typography  style={{ textAlign: 'center', fontWeight: 'bold'}}>
            <h2>Ordinateur HP</h2>
          </Typography>
          <Row>
            <Col></Col>
            <Col>
              <Typography size="small" style={{ textAlign: 'center', textDecoration: 'line-through', color: 'red'}}>
                990€
              </Typography>
            </Col>
            <Col>
              <Typography size="small" style={{ textAlign: 'center', fontWeight: 'bold'}}>
                799€
              </Typography>
            </Col>
            <Col></Col>
          </Row>
          <CardActions style={{justifyContent: 'center', alignItems: 'center' }}>
            <Button size="small" color="primary" variant="h5" component="h2" style={{ background: '#db571a', color: 'white'}} >
              Ajouter au panier
            </Button>
          </CardActions>
        </Card>
          </Col>
        <Col xs="8" sm="3"style={{ paddingRight: 0, paddingLeft: 0}} >
        <Card  style={{ maxWidth: 415, marginLeft: 0, marginRight: 0, marginBottom: 0, background: 'white',}}>
          <CardMedia style={{ width: 415, height: 500 }}
            image={require('./images/imprimente.jpg')}
            title="table"
          />
          <Typography  style={{ textAlign: 'center', fontWeight: 'bold'}}>
            <h2>Imprimente</h2>
          </Typography>
          <Row>
            <Col></Col>
            <Col>
              <Typography size="small" style={{ textAlign: 'center', textDecoration: 'line-through', color: 'red'}}>
                680€
              </Typography>
            </Col>
            <Col>
              <Typography size="small" style={{ textAlign: 'center', fontWeight: 'bold'}}>
                550€
              </Typography>
            </Col>
            <Col></Col>
          </Row>
          <CardActions style={{justifyContent: 'center', alignItems: 'center' }}>
            <Button size="small" color="primary" variant="h5" component="h2" style={{ background: '#db571a', color: 'white' }} >
              Ajouter au panier
            </Button>
          </CardActions>
        </Card>
        </Col>
        <Col xs="8" sm="3" style={{ paddingRight: 0, paddingLeft: 0}}>
        <Card  style={{ maxWidth: 415, marginLeft: 0, marginRight: 0, marginBottom: 0, background: 'silver',}}>
          <CardMedia style={{ width: 415, height: 500 }}
            image={require('./images/imprimente3d.png')}
            title="table"
          />
          <Typography  style={{ textAlign: 'center', fontWeight: 'bold'}}>
            <h2>Imprimente 3D</h2>
          </Typography>
          <Row>
            <Col></Col>
            <Col>
              <Typography size="small" style={{ textAlign: 'center', textDecoration: 'line-through', color: 'red'}}>
                349€
              </Typography>
            </Col>
            <Col>
              <Typography size="small" style={{ textAlign: 'center', fontWeight: 'bold'}}>
                336€
              </Typography>
            </Col>
            <Col></Col>
          </Row>
          <CardActions style={{justifyContent: 'center', alignItems: 'center' }}>
            <Button size="small" color="primary" variant="h5" component="h2" style={{ background: '#db571a', color: 'white' }} >
              Ajouter au panier
            </Button>
          </CardActions>
        </Card>
        </Col>
        <Col xs="8" sm="3" style={{ paddingRight: 0, paddingLeft: 0}}>
        <Card  style={{ maxWidth: 415, marginLeft: 0, marginRight: 0, marginBottom: 0, background: 'white',}}>
          <CardMedia style={{ width: 415, height: 500 }}
            image={require('./images/Borne.jpg')}
            title="table"
          />
          <Typography  style={{ textAlign: 'center', fontWeight: 'bold'}}>
            <h2>Borne PHILIPS</h2>
          </Typography>
          <Row>
            <Col></Col>
            <Col>
              <Typography size="small" style={{ textAlign: 'center', textDecoration: 'line-through', color: 'red'}}>
                5000€
              </Typography>
            </Col>
            <Col>
              <Typography size="small" style={{ textAlign: 'center', fontWeight: 'bold'}}>
                4450€
              </Typography>
            </Col>
            <Col></Col>
          </Row>
          <CardActions style={{justifyContent: 'center', alignItems: 'center' }}>
            <Button size="small" color="primary" variant="h5" component="h2" style={{ background: '#db571a', color: 'white' }} >
              Ajouter au panier
            </Button>
          </CardActions>
        </Card>
        </Col>
    </Row>
    </div>
    <div>
      <Row>
      <Col xs="12" sm="6">
        <div style={{ position: "relative"}}>
      <Image src={require('./images/voiture.jpg')} style={{ height: 625, width: 850 }} />
      </div>
      <div style={{ position: 'absolute', top: 50, right: 50}}>
      <Typography  style={{ textAlign: 'center', fontWeight: 'bold', color: '#db571a'}}>
            <h2>Voiture de sport</h2>
          </Typography>
          <Row>
            <Col></Col>
            <Col>
              <Typography size="small" style={{ textAlign: 'center', textDecoration: 'line-through', color: 'red'}}>
                35000€
              </Typography>
            </Col>
            <Col>
              <Typography size="small" style={{ textAlign: 'center', fontWeight: 'bold'}}>
                33900€
              </Typography>
            </Col>
            <Col></Col>
          </Row>
          <CardActions style={{justifyContent: 'center', alignItems: 'center' }}>
            <Button size="small" color="primary" variant="h5" component="h2" style={{ background: '#db571a', color: 'white'}} >
              Ajouter au panier
            </Button>
          </CardActions>
      </div>
        </Col>  
    <Col xs="8" sm="3" style={{ paddingRight: 0, paddingLeft: 0}}>
        <Card  style={{ maxWidth: 415, marginLeft: 0, marginRight: 0, marginBottom: 0, background: 'white',}}>
          <CardMedia style={{ width: 415, height: 500 }}
            image={require('./images/motom.jpg')}
            title="table"
          />
          <Typography  style={{ textAlign: 'center', fontWeight: 'bold'}}>
            <h2>Moto</h2>
          </Typography>
          <Row>
            <Col></Col>
            <Col>
              <Typography size="small" style={{ textAlign: 'center', textDecoration: 'line-through', color: 'red'}}>
                9500€
              </Typography>
            </Col>
            <Col>
              <Typography size="small" style={{ textAlign: 'center', fontWeight: 'bold'}}>
                7800€
              </Typography>
            </Col>
            <Col></Col>
          </Row>
          <CardActions style={{justifyContent: 'center', alignItems: 'center' }}>
            <Button size="small" color="primary" variant="h5" component="h2" style={{ background: '#db571a', color: 'white'}} >
              Ajouter au panier
            </Button>
          </CardActions>
        </Card>
    </Col>
    <Col xs="8" sm="3" style={{ paddingRight: 0, paddingLeft: 0}}>
    <Card  style={{ maxWidth: 415, marginLeft: 0, marginRight: 0, marginBottom: 0, background: 'silver',}}>
          <CardMedia style={{ width: 415, height: 500 }}
            image={require('./images/moto.jpg')}
            title="table"
          />
          <Typography  style={{ textAlign: 'center', fontWeight: 'bold'}}>
            <h2>Moto Honda</h2>
          </Typography>
          <Row>
            <Col></Col>
            <Col>
              <Typography size="small" style={{ textAlign: 'center', textDecoration: 'line-through', color: 'red'}}>
                1050€
              </Typography>
            </Col>
            <Col>
              <Typography size="small" style={{ textAlign: 'center', fontWeight: 'bold'}}>
                9900€
              </Typography>
            </Col>
            <Col></Col>
          </Row>
          <CardActions style={{justifyContent: 'center', alignItems: 'center' }}>
            <Button size="small" color="primary" variant="h5" component="h2" style={{ background: '#db571a', color: 'white' }} >
              Ajouter au panier
            </Button>
          </CardActions>
        </Card>
    </Col>
   </Row>
    </div>
  
    <div>
      <br /> <br /> <br />
      <div class="center">
        <Image src={require('./images/logo.png')} />
      </div>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>ligne du dégradé est définie par le centre de la boîte contenant le dégradé et par un angle. Les couleurs du dégradé sont définies par différents points : le point de départ et le point d'arrivée. Entre ces deux points, on peut avoir différents points d'arrêt définissant la couleur à ce niveau.

Le point de départ utilise la couleur initiale du dégradé. Ce point est défini comme l'intersection de la ligne du dégradé et de la ligne perpendiculaire à cette droite et qui passe par le coin de la boîte situé dans le même quadrant.

De la même façon, le point d'arrivée est le point de la ligne du dégradé où la couleur finale est atteinte. Il peut également être défini comme l'intersection entre la ligne du dégradé et une ligne perpendiculaire, passant par le coin le plus proche.

Ces définitions plutôt complexes ont des conséquence plutôt intéressantes : les coins les plus proches de ces deux points (parfois appelés « coins magiques ») ont les couleurs de départ et de fin.</Col>
      </Row>
      <br /><br />
    </div>
    <div>
      <Row>
        <Col>
          <Button >Accueil</Button>
          <Button >A propos</Button>
          <Button >Contact</Button>
          <Button >Inscription</Button>
          <Button >Connexion</Button>
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
