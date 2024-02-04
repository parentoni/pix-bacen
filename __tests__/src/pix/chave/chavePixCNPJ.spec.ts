import { ChavePixCNPJ } from "../../../../src/pix/chave/types/chavePixCNPJ"

describe("CNPJ chave pix", () => {
  test("It should fail to create with invalid cnpj", () => {
    expect(() => new ChavePixCNPJ({value: "qwerty1234"})).toThrow("Given CNPJ isn't vallid.")
  })

  test("It should be created with valid cnpj", () => {
    expect(new ChavePixCNPJ({value: "11.988.524/0001-59"}).value).toBe("11988524000159")
    expect(new ChavePixCNPJ({value: "11988524000159"}).value).toBe("11988524000159")
   })

})
