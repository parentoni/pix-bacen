import { ChavePixCPF } from "../../../../src/pix/chave/types/chavePixCPF";

describe("CPF chave pix", () => {
  test("It should fail to create with invalid cpf", () => {
    expect(() => new ChavePixCPF({value: "qwerty1234"})).toThrow("Given cpf isn't vallid.")
  })

  test("It should be created with valid cpf", () => {
    expect(new ChavePixCPF({value: "05269465558"}).value).toBe("05269465558")
    expect(new ChavePixCPF({value: "052.694.655-58"}).value).toBe("05269465558")
   })

})
