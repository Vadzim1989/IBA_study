describe("divisionNumber", function() {

  function makeTest() {
    it('тест на null', function() {
      assert.equal(divisionNumber(2,null), 'Один из аргументов NULL')
    });
    it('один из аргументов буква', function() {
      assert.equal(divisionNumber('б',2), 'Один из агрументов БУКВА')
    })
    it('нельзя делить на ноль', () => {
      assert.equal(divisionNumber(2,0), 'Деление на ноль')
    })
  }

  makeTest()
});



