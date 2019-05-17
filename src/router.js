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
    },{
        path:'/user/mine',
        name: 'mine',
        component: ()=>
            import (/* webpackChunkName: "mine" */ './pages/user/mine')
      
    },{
        path:'/user/account',
        name: 'account',
        component: ()=>
            import (/* webpackChunkName: "account" */ './pages/user/account')
      
    },{
        path:'/searchlist',
        name: 'searchlist',
        component: ()=>
            import (/* webpackChunkName: "searchlist" */ './pages/search/searchlist')
      
    }
]
