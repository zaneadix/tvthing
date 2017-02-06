
import Authenticate from '../../components/auth/Authenticate';

const authRoutes = [{ 
    path: '/sign-up',
    name: 'sign-up',
    component: Authenticate
},{
    path: '/sign-in',
    name: 'sign-in',
    component: Authenticate
}];

export default authRoutes;