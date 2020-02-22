'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PricesSchema extends Schema {
  up () {
    this.create('prices', (table) => {
      table.increments()
      table.string('operadora').notNullable()
      table.string('plano').notNullable()
      table.string('regiao').notNullable()
      table.string('00a18').notNullable()
      table.string('19a23').notNullable()
      table.string('24a28').notNullable()
      table.string('29a33').notNullable()
      table.string('34a38').notNullable()
      table.string('39a43').notNullable()
      table.string('44a48').notNullable()
      table.string('49a53').notNullable()
      table.string('54a58').notNullable()
      table.string('59a63').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('prices')
  }
}

module.exports = PricesSchema
