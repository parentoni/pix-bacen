import { ChavePixEVP } from "../../../../src/pix/chave/types/chavePixEVP"

describe("EVP chave pix", () => {
  test("It should fail to create with invalid EVP", () => {
    expect(() => new ChavePixEVP({value: "qwerty1234"})).toThrow("Given EVP isn't vallid.")
  })

  test("It should be created with valid EVP", () => {
    expect(new ChavePixEVP({value: "123e4567-e89b-12d3-a456-426655440000"}).value).toBe("123e4567-e89b-12d3-a456-426655440000")
    expect(new ChavePixEVP({value: "123e 4567- e89b- 12d3-a456-42665544 0000"}).value).toBe("123e4567-e89b-12d3-a456-426655440000")
  })

})
