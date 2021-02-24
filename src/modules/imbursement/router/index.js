import Wrapper from "@/modules/imbursement/views/ImbursementWrapper";
import CookiePolicies from "@/modules/imbursement/views/CookiePolicies";
import PrivacyPolicy from "@/modules/imbursement/views/PrivacyPolicy";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Wrapper,
    },
    {
        path: '/privacy-policies',
        name: 'PrivacyPolicies',
        component: PrivacyPolicy,
    },
    {
        path: '/cookie-policies',
        name: 'CookiePolicies',
        component: CookiePolicies,
    },
]

export default routes;
