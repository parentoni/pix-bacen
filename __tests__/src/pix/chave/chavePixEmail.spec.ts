import { ChavePixEmail } from "../../../../src/pix/chave/types/chavePixEmail"

describe("Email chave pix", () => {
  test("It should fail to create with invalid Email", () => {
    expect(() => ChavePixEmail.create({value: "qwerty1234"})).toThrow("Given Email isn't vallid.")
  })

  test("It should be created with valid Email", () => {
    expect(ChavePixEmail.create({value: "parentoni.arthur@gmail.com"}).value).toBe("parentoni.arthur@gmail.com")
    expect(ChavePixEmail.create({value: "parentoni.arth ur@gmail .com "}).value).toBe("parentoni.arthur@gmail.com")
  })

})
