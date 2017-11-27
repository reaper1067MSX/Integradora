import './css/site.css';
import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import * as RoutesModule from './routes';
import styled from 'styled-components';
let routes = RoutesModule.routes;

const ContenedorApp = styled.div`
    max-width: 100%;    
    font-family: Verdana, Geneva, sans-serif;
`;

const ContenedorCuerpoApp = styled.div`        
    margin-top: 40px;           
`;

function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    ReactDOM.render(
        <ContenedorApp>
            <ContenedorCuerpoApp>
                <AppContainer>
                    <BrowserRouter children={ routes } />
                </AppContainer>
            </ContenedorCuerpoApp>
        </ContenedorApp>,
        document.getElementById('react-app')
    );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./routes', () => {
        routes = require<typeof RoutesModule>('./routes').routes;
        renderApp();
    });
}
