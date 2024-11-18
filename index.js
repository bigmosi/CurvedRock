import { Navigation } from 'react-native-navigation';
import Home from './views/Home';
import About from './views/About';
import Careers from './views/Careers';

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('About', () => About);
Navigation.registerComponent('Careers', () => Careers);

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
