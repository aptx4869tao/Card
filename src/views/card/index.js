const Home = () => import('./Home.vue')
const About = () => import('./About.vue')
const Goods = () => import('./Goods.vue')
export default {
    List: {
        Home,
        About,
        Goods
    }
}
