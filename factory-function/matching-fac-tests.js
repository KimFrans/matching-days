describe("Matching Days",function(){
    it("Should get the date for the first date",function(){
        var factTest = factoryMatching()

        factTest.getDateOne("5/07/2021")
        factTest.checkDays()

        assert.equal(factTest.getDateTwo(), undefined)
    });

    it("Should get the date for the second date",function(){
        var factTest = factoryMatching()

        factTest.getDateTwo("3/06/2021")
        factTest.checkDays()

        assert.equal(factTest.getDateOne(), undefined)
    });

    it("Should get the dates for the first and second date",function(){
        var factTest = factoryMatching()

        factTest.getDateOne("2/06/2021")
        factTest.getDateTwo("4/06/2021")
        factTest.checkDays()

        assert.equal(factTest.getDateOne(), factTest.getDateTwo())
    });

    it("Date should be able to keep its state after the dates no longer match and one of the dates are changed",function(){
        var factTest = factoryMatching()

        factTest.getDateOne("1/06/2021")
        factTest.getDateTwo("8/06/2021")
        factTest.checkDays()

        assert.equal(factTest.getDateOne(), factTest.getDateTwo())

        factTest.getDateOne("3/06/2021")
        factTest.getDateTwo("8/06/2021")
        factTest.checkDays()

        assert.equal(factTest.getDateOne(), factTest.getDateTwo())
    });

})