import Show from './Show';
import Seasons from './Seasons';
import Overview from './Overview';

const showRoutes = [
    { 
        path: '/show/:id',
        component: Show,
        children: [{
            path: '',
            redirect: 'overview'
        },{
            path: 'overview',
            component: Overview
        },{
            path: 'episodes',
            component: Seasons
        }]
    }
]

export default showRoutes;