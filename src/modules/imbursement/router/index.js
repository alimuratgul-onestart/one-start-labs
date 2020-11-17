import Wrapper from "@/modules/imbursement/views/ImbursementWrapper";
import HomePage from "@/modules/imbursement/views/ImbursementHomePage";
import ImbursementAbout from "@/modules/imbursement/views/ImbursementAbout";
import ImbursementFaq from "@/modules/imbursement/views/ImbursementFaq";

const routes = [
    {
        path: '/',
        redirect: () => {
            return '/imbursement'
        }
    },
    {
        path: '/imbursement',
        name: 'ImbursementWrapper',
        component: Wrapper,
        children: [
            {
                path: '',
                name: 'ImbursementHome',
                component: HomePage
            },
            {
                path: 'about',
                name: 'ImbursementAbout',
                component: ImbursementAbout
            },
            {
                path: 'faqs',
                name: 'ImbursementFaq',
                component: ImbursementFaq
            },
            {
                path: 'contact',
                name: 'ImbursementContact',
                template: '<h1>ImbursementContact</h1>'
            },
        ]
    },
]

export default routes;
