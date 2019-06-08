
const getDate = require('../../date')
const expect = require('chai').expect;

describe('获得今天的日期',function(){
   it('2019-6-5',function(){
	expect(getDate()).to.be.equal('2019-06-06')	

  })	
})
