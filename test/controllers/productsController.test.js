import add from '../../src/controllers/productsController'

test('adicionar dois numeros', function () {
    expect(add.sum(1,2)).toBe(3)
})