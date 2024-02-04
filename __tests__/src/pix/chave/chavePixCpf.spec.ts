import { ChavePixCPF } from "../../../../src/pix/chave/types/chavePixCpf";

describe("CPF chave pix", () => {
  test("It should fail to create with invalid cpf", () => {
    expect(() => ChavePixCPF.create({value: "qwerty1234"})).toThrow("Given cpf isn't vallid.")
  })

  test("It should be created with valid cpf", () => {
    expect(ChavePixCPF.create({value: "05269465558"}).value).toBe("05269465558")
    expect(ChavePixCPF.create({value: "052.694.655-58"}).value).toBe("05269465558")
   })

})
