(function () {
    'use strict';

    describe('Test underscore.js functions', function () {
      it('Variable "names" should have length 3', function () {
      	names.should.have.length(3);
      });
      it('underscore\'s "first" function should not equal "moe"', function () {
      	(last).should.not.equal('moe');
      });
      it('underscore\'s "last" function should return an array', function () {
      	expect(last).to.be.a('array');
      });
      it('Variable "first" should return an array', function () {
      	expect(last).to.be.a('array');
      });
      it('Variable "godzilla" should not exist', function () {
        	expect(godzilla).to.not.exist;
      });
      it('Variable "random" should be a number', function () {
        	expect(random).to.be.a('number');
      });
    });
    describe('Test a constructor', function () {
    	it('should take a motto that is a string', function () {
    		var sonic = new Runner({motto: 'gotta go fast'});
    		(sonic.motto).should.be.an('String');
    	});
    	it('should go fast', function () {
    		var tails = new Runner();
    		tails.run();
    		expect(tails.speed).to.equal('fast');
    	});
    	it('should have a default health of 100', function () {
    		var knuckles = new Runner({health: 100});
    		expect(knuckles.health).to.equal(100);
    	})
    });
})();
