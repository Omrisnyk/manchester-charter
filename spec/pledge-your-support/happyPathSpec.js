/*
  global describe, beforeEach, afterEach, it, expect
*/
'use strict'

// import sinon from 'sinon'

// // use require for sinon mocking
// var browser = require('../../src/js/browser')
// var ajax = require('../../src/js/ajax')

var Model = require('../../src/js/PledgeYourSupport')

// import * as endpoints from '../../src/js/api-endpoints'

describe('Pledge Your Support', () => {
  let sut = new Model()
  beforeEach(() => {
  })
  afterEach(() => {

  })
  it('- Should populate example pledges', () => {
    // from hard coded file
    expect(sut.supporterCategories.length).toEqual(7)
  })

  describe('- Example Pledge', () => {
    beforeEach(() => {
      sut.supporterCategories[2].examplePledges[1].selectExamplePledge()
    })
    it('- Should populate pledge with example pledge', () => {
      expect(sut.pledge()).toEqual(sut.supporterCategories[2].examplePledges[1].description)
    })
  })
})
