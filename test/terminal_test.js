import chai, { expect, should } from 'chai'
import Terminal from '../src/client/Terminal'
import { product_data as pricingInfo } from '../src/product_data'

should()

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

    const terminalTwo = new Terminal(pricingInfo)
    terminalTwo.scan('A')
    terminalTwo.scan('B')
    terminalTwo.scan('C')
    terminalTwo.scan('D')
    expect(terminalTwo.total()).to.equal(15.40)
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
  }) 
}) 

