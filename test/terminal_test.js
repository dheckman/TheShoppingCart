import chai, { expect, should } from 'chai'
import Terminal from '../src/client/Terminal'
import { product_data as pricingInfo } from '../src/product_data'

should()
chai.use(require('chai-like'));
chai.use(require('chai-things'));

describe('Terminal', () => {
  it('total() should be zero if product in not in list', () => {
    const terminal = new Terminal(pricingInfo)
    terminal.scan(1)
    terminal.scan('F')
    expect(terminal.total()).to.equal(0)
  })

  it('total() should calculate total correctly without volume prices', () => {
    const terminal = new Terminal(pricingInfo)
    terminal.scan('A')
    terminal.scan('A')
    terminal.scan('C')
    expect(terminal.total()).to.equal(5.25)
  })

  it('total() should calculate total correctly with volume prices', () => {
    const terminal = new Terminal(pricingInfo)
    terminal.scan('A')
    terminal.scan('B')
    terminal.scan('C')
    terminal.scan('D')
    terminal.scan('A')
    terminal.scan('B')
    terminal.scan('A')
    terminal.scan('A')
    expect(terminal.total()).to.equal(32.40)

    const terminalTwo = new Terminal(pricingInfo)
    terminalTwo.scan('C')
    terminalTwo.scan('C')
    terminalTwo.scan('C')
    terminalTwo.scan('C')
    terminalTwo.scan('C')
    terminalTwo.scan('C')
    terminalTwo.scan('C')
    expect(terminalTwo.total()).to.equal(7.25)

    const terminalThree = new Terminal(pricingInfo)
    terminalThree.scan('A')
    terminalThree.scan('B')
    terminalThree.scan('C')
    terminalThree.scan('D')
    expect(terminalThree.total()).to.equal(15.40)
  })
})
