import UserProfile from '../../components/user/UserProfile';
import Account from '../../components/user/Account';

const userRoutes = [{ 
    path: '/user-profile/:username',
    component: UserProfile
},{
    path: '/account',
    component: Account
}]

export default userRoutes;