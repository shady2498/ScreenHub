import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Movies from '../views/movies.vue'
import Anime from '../views/anime.vue'
import News from '../views/news.vue'
import Watchlist from '../views/watchlist.vue'
import TVSeries from '../views/tvseries.vue'
import naruto from '../views/naruto.vue'
import sevendeadlysins from '../views/sevendeadlysins.vue'
import tokyoghoul from '../views/tokyoghoul.vue'
import blackclover from '../views/blackclover.vue'
import beyblade from '../views/beyblade.vue'
import demonslayer from '../views/demonslayer.vue'
import haikyu from '../views/haikyu.vue'
import hunterxhunter from '../views/hunterxhunter.vue'
import krukonobasket from '../views/krukonobasket.vue'
import onepiece from '../views/onepiece.vue'
import geminiman from '../views/geminiman.vue'
import survivethenight from '../views/survivethenight.vue'
import shazam from '../views/shazam.vue'
import scoob from '../views/scoob.vue'
import flyingcars from '../views/flyingcars.vue'
import darkphoenix from '../views/darkphoenix.vue'
import captianmarvel from '../views/captianmarvel.vue'
import altia from '../views/altia.vue'
import fbi from '../views/fbi.vue'
import blackout from '../views/blackout.vue'
import lostinspace from '../views/lostinspace.vue'
import thehookupplan from '../views/thehookupplan.vue'
import theinnocentman from '../views/theinnocentman.vue'
import therookie from '../views/therookie.vue'
import thestrangehero from '../views/thestrangehero.vue'
import tidelands from '../views/tidelands.vue'
import titans from '../views/titans.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'
import alladin from '../views/alladin'
import edgeofextinction from '../views/edgeofextinction'
import extraction from '../views/extraction'
import godzilla from '../views/godzilla'
import proximity from '../views/proximity'
import rambothelastblood from '../views/rambothelastblood'
import redsnow from '../views/redsnow'
import thevastofnight from '../views/thevastofnight'
import unionbridge from '../views/unionbridge'
import ipman4 from '../views/ipman4'
import attackontitan from '../views/attackontitan'
import deathnote from '../views/deathnote'
import dragonballz from '../views/dragonballz'
import fullmetal from '../views/fullmetal'
import jojo from '../views/jojo'
import myheroacademia from '../views/myheroacademia'
import nightflyers from '../views/nightflyers'
import dirtyjohn from '../views/dirtyjohn'
import legacies from '../views/legacies'
import cobrakai from '../views/cobrakai'
import trust from '../views/trust'
import waco from '../views/waco'
import thebrilliantfriend from '../views/thebrilliantfriend'
import tomclancyjackryan from '../views/tomclancyjackryan'
import condor from '../views/condor'
import blacklightning from '../views/blacklightning'
import newamsterdam from '../views/newamsterdam'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/anime',
    name: 'Anime',
    component: Anime
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/watchlist',
    name: 'Watchlist',
    component: Watchlist
  },
  {
    path: '/tvseries',
    name: 'TV Series',
    component: TVSeries
  },
  {
    path: '/tokyoghoul',
    name: 'tokyo Ghoul',
    component: tokyoghoul
  },
  {
    path: '/naruto',
    name: 'naruto',
    component: naruto
  },
  {
    path: '/blackclover',
    name: 'blackclover',
    component: blackclover
  },
  {
    path: '/beyblade',
    name: 'beyblade',
    component: beyblade
  },
  {
    path: '/demonslayer',
    name: 'demonslayer',
    component: demonslayer
  },
  {
    path: '/haikyu',
    name: 'haikyu',
    component: haikyu
  },
  {
    path: '/hunterxhunter',
    name: 'hunterxhunter',
    component: hunterxhunter
  },
  {
    path: '/krukonobasket',
    name: 'krukonobasket',
    component: krukonobasket
  },
  {
    path: '/onepiece',
    name: 'onepiece',
    component: onepiece
  },
  {
    path: '/sevendeadlysins',
    name: 'sevendeadlysins',
    component: sevendeadlysins
  },
  {
    path: '/altia',
    name: 'altia',
    component: altia
  },
  {
    path: '/blackout',
    name: 'blackout',
    component: blackout
  },
  {
    path: '/captianmarvel',
    name: 'captianmarvel',
    component: captianmarvel
  },
  {
    path: '/darkphoenix',
    name: 'darkphoenix',
    component: darkphoenix
  },
  {
    path: '/flyingcars',
    name: 'flyingcars',
    component: flyingcars
  },
  {
    path: '/scoob',
    name: 'scoob',
    component: scoob
  },
  {
    path: '/shazam',
    name: 'shazam',
    component: shazam
  },
  {
    path: '/survivethenight',
    name: 'survivethenight',
    component: survivethenight
  },
  {
    path: '/gemniman',
    name: 'geminiman',
    component: geminiman
  },
  {
    path: '/fbi',
    name: 'fbi',
    component: fbi
  },
  {
    path: '/lostinspace',
    name: 'lostinspace',
    component: lostinspace
  },
  {
    path: '/thehookupplan',
    name: 'thehookupplan',
    component: thehookupplan
  },
  {
    path: '/theinnocentman',
    name: 'theinnocentman',
    component: theinnocentman
  },
  {
    path: '/therookie',
    name: 'therookie',
    component: therookie
  },
  {
    path: '/thestrangehero',
    name: 'thestrangehero',
    component: thestrangehero
  },
  {
    path: '/tidelands',
    name: 'tidelands',
    component: tidelands
  },
  {
    path: '/titans',
    name: 'titans',
    component: titans
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/attackontitan',
    name: 'attackontitan',
    component: attackontitan
  },
  {
    path: '/deathnote',
    name: 'deathnote',
    component: deathnote
  },
  {
    path: '/dragonballz',
    name: 'dragonballz',
    component: dragonballz
  },
  {
    path: '/fullmetal',
    name: 'fullmetal',
    component: fullmetal
  },
  {
    path: '/jojo',
    name: 'jojo',
    component: jojo
  },
  {
    path: '/myheroacademia',
    name: 'myheroacademia',
    component: myheroacademia
  },
  {
    path: '/blacklightning',
    name: 'blacklightning',
    component: blacklightning
  },
  {
    path: '/condor',
    name: 'condor',
    component: condor
  },
  {
    path: '/proximity',
    name: 'proximity',
    component: proximity
  },
  {
    path: '/tomclancyjackryan',
    name: 'tomclancyjackryan',
    component: tomclancyjackryan
  },
  {
    path: '/thebrilliantfriend',
    name: 'thebrilliantfriend',
    component: thebrilliantfriend
  },
  {
    path: '/waco',
    name: 'waco',
    component: waco
  },
  {
    path: '/trust',
    name: 'trust',
    component: trust
  },
  {
    path: '/cobrakai',
    name: 'cobrakai',
    component: cobrakai
  },
  {
    path: '/legacies',
    name: 'legacies',
    component: legacies
  },
  {
    path: '/newamsterdam',
    name: 'newamsterdam',
    component: newamsterdam
  },
  {
    path: '/dirtyjohn',
    name: 'dirtyjohn',
    component: dirtyjohn
  },
  {
    path: '/nightflyers',
    name: 'nightflyers',
    component: nightflyers
  },
  {
    path: '/ipman4',
    name: 'ipman4',
    component: ipman4
  },
  {
    path: '/unionbridge',
    name: 'unionbridge',
    component: unionbridge
  },
  {
    path: '/thevastofnight',
    name: 'thevastofnight',
    component: thevastofnight
  },
  {
    path: '/redsnow',
    name: 'redsnow',
    component: redsnow
  },
  {
    path: '/rambothelastblood',
    name: 'rambothelastblood',
    component: rambothelastblood
  },
  {
    path: '/godzilla',
    name: 'godzilla',
    component: godzilla
  },
  {
    path: '/extraction',
    name: 'extraction',
    component: extraction
  },
  {
    path: '/edgeofextinction',
    name: 'edgeofextinction',
    component: edgeofextinction
  },
  {
    path: '/alladin',
    name: 'alladin',
    component: alladin
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
