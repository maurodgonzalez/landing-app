import React from 'react';
import logo from './logo.svg';
import landingDesign from './assets/landing-design.jpg';
import mesada from './assets/mesada.jpg';
import mesada2 from './assets/mesada2.jpg';
import mesaalgarrobo from './assets/mesaalgarrobo.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Spinner,
    Button,
    Navbar,
    Nav,
    NavItem,
    Carousel,
    Jumbotron
} from 'react-bootstrap';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'principal'
        };
    }

    mostrarPrincipal() {
        console.log('Mostrar Principal')
        this.setState({page: 'principal'})
    }

    mostrarTrabajos() {
        console.log('Mostrar Trabajos')
        this.setState({page: 'trabajos'})
    }

    render() {
        return (
            <div className="App">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>Carpinteria Gonzalez</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Button variant="link" onClick={() => this.mostrarPrincipal()}>Principal</Button>
                            <Button variant="link" onClick={() => this.mostrarTrabajos()}>Trabajos</Button>
                            <Button variant="link">Nosotros</Button>
                            <Button variant="link">Contacto</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
                {this.state.page === 'principal' &&               
                <div className="App-header d-flex flex-column flex-lg-row">
                    <div>
                        <p>Bienvenidos a Carpinteria Gonzalez</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley
                            of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions
                            of
                            Lorem Ipsum.</p>
                    </div>
                    <div>
                        <p>Imagen de carpinteria</p>
                        <img src={landingDesign} className="App-logo" alt="logo"/>
                    </div>

                </div>
                }
                {this.state.page === 'trabajos' &&
                <div className="App-header d-flex flex-column flex-lg-row">
                    <div>
                        <Jumbotron>
                            <h1>Hello, world!</h1>
                            <p>
                                This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
                            </p>
                            <p>
                                <Button variant="primary">Learn more</Button>
                            </p>
                        </Jumbotron>

                        <Carousel>
                                <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={mesada}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={mesada2}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img 
                                className="d-block w-100"
                                src={mesaalgarrobo}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    </div>    
                </div>
                }
            </div>
        );
    }
}

export default App;
