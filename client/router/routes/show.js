import Show from '../../components/show/Show';
import Seasons from '../../components/show/Seasons';
import Overview from '../../components/show/Overview';

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