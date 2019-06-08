const expect = require('chai').expect;
describe('异步测试',function(){
 it('测试应该在4000ms执行',function(done){
    var flag = true;
    var fn = function(){
    	flag = false;
	expect(flag).to.be.not.ok;
	done() 
    }	
    setTimeout(fn,1500);
    console.log('测试正在进行')	
  })	
})
