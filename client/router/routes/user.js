import UserProfile from '../../components/user/UserProfile';
import Account     from '../../components/user/Account';

const userRoutes = [{ 
    path: '/user-profile/:username',
    name: 'user-profile',
    component: UserProfile
},{
    path: '/account',
    name: 'account',
    component: Account,
    meta: { requireAuth: true }
}]

export default userRoutes;