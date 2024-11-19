import { Navigation } from 'react-native-navigation';
import Home from './views/Home';
import About from './views/About';
import Careers from './views/Careers';
import Contact from './views/Contact';

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('About', () => About);
Navigation.registerComponent('Careers', () => Careers);
Navigation.registerComponent('Contact', () => Contact);

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
