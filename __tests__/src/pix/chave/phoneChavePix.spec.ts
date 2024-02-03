import { ChavePixPhone } from "../../../../src/pix/chave/types/chavePixPhone";

describe("Phone number chave pix", () => {
  test("It should fail to create with invalid phone", () => {
    expect(() => ChavePixPhone.create({value: "qwerty"})).toThrow("Chave pix of type phone is invalid")
  })

  test("It should be created with valid phone", () => {
    expect(ChavePixPhone.create({value: "+5531999049188"}).value).toBe("+5531999049188")
   })

  test("It should strip all non numeric values", () => {
    expect(ChavePixPhone.create({value: "+a5b5+3 1 999049188"}).value).toBe("+5531999049188")
  })
})
