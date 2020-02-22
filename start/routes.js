'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


/*

Na dúvida entre tendências (e também porque quero facilitar acesso para quem 
  não é falante de lingua portuguesa...) Então, peço desculpas, ainda para uma
  primeira versão há essa "mistura" de variáveis/controladores/models etc tanto 
  inglês quanto em português, mas aqui para o backend não há muita "engenharia".


*/

Route.resource("planos","PriceController").apiOnly();