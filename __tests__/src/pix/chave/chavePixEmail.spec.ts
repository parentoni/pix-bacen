import { ChavePixEmail } from "../../../../src/pix/chave/types/chavePixEmail"

describe("Email chave pix", () => {
  test("It should fail to create with invalid Email", () => {
    expect(() => new ChavePixEmail({value: "qwerty1234"})).toThrow("Given Email isn't vallid.")
  })

  test("It should be created with valid Email", () => {
    expect(new ChavePixEmail({value: "parentoni.arthur@gmail.com"}).value).toBe("parentoni.arthur@gmail.com")
    expect(new ChavePixEmail({value: "parentoni.arth ur@gmail .com "}).value).toBe("parentoni.arthur@gmail.com")
  })

})
