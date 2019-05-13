import App from './App.vue'

export default [
    {
        path: '/',
        component: App
        // children: [
        //     {
        //         path: '/home',
        //         name: 'home',
        //         component: Home     
        //     },{
        //         path: '/docs',
        //         name: 'docs',
        //         component: () => 
        //             import ( /* webpackChunkName: "docs" */ './views/alldocs')
        //     }
        // ]
    }, {
        path: '/diseaselist',
        name: 'diseaselist',
        component: () =>
           import ( /* webpackChunkName: "diseaselist" */ './pages/diseaselist')
    },
    {
        path: '/diseasedetail',
        name: 'diseasedetail',
        component: () =>
           import ( /* webpackChunkName: "diseasedetail" */ './pages/diseasedetail')
    }
]
