import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';
import Home from './views/Home';
import About from './views/About';
import Careers from './views/Careers';
import Contact from './views/Contact';
import Trail from './views/Trail';
import TrailDetail from './views/TrailDetail';
import Store from './views/Store';
import BootShop from './views/BootShop';
import Boot from './views/Boot';

Navigation.registerComponent('Boot',
    () => gestureHandlerRootHOC(Boot),
    () => Boot);
Navigation.registerComponent('BootShop',
    () => gestureHandlerRootHOC(BootShop),
    () => BootShop);
Navigation.registerComponent('Store',
    () => gestureHandlerRootHOC(Store),
    () => Store);
Navigation.registerComponent('TrailDetail',
    () => gestureHandlerRootHOC(TrailDetail),
    () => TrailDetail);
Navigation.registerComponent('Trial',
    () => gestureHandlerRootHOC(Trail),
    () => Trail);

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('About',
    () => gestureHandlerRootHOC(About),
    () => About);
Navigation.registerComponent('Careers',
    () => gestureHandlerRootHOC(Careers),
    () => Careers);
Navigation.registerComponent('Contact',
    () => gestureHandlerRootHOC(Contact),
    () => Contact);

Navigation.setDefaultOptions({
    topBar: {
        visible: false
    },
    statusBar: {
        backgroundColor: '#000000',
        style: 'light'
    }
});

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
        root: {
            stack: {
                id: 'carved',
                children: [
                    {
                        component: {
                            name: 'Home'
                        }
                    }
                ]
            }
        }
    });
});
