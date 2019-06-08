const add = require('../calc');
const expect = require('chai').expect;
describe('加法函数的测试',function(){
   it('0+0=0',function(){
 	expect(add(0,0)).to.be.equal(0)	
 })		
})
