import { CHAVE_PIX_TYPES, ChavePixUtils } from "../../../../src/pix/chave/chavePixUtils"

describe("Chave pix utils", () => {

  test("It should auto create CPF chave", () => {
    expect(ChavePixUtils.createChavePix('052.694.655-58').type).toBe(CHAVE_PIX_TYPES.CPF)
  })

  test("It should auto create CNPJ chave", () => {
    expect(ChavePixUtils.createChavePix('35.988.634/0001-89').type).toBe(CHAVE_PIX_TYPES.CNPJ)
  })

  test("It should auto create email chave", () => {
    expect(ChavePixUtils.createChavePix('parentoni.arthur@gmail.com').type).toBe(CHAVE_PIX_TYPES.EMAIL)
  })

  test("It should auto create phone chave", () => {
    expect(ChavePixUtils.createChavePix('+55 31 9 9904-9188').type).toBe(CHAVE_PIX_TYPES.PHONE)
  })
  test("It should auto create evp chave", () => {
    expect(ChavePixUtils.createChavePix("123e4567-e89b-12d3-a456-426655440000").type).toBe(CHAVE_PIX_TYPES.EVP)
  })

  test("It should fail on invalid keys", () => {
    expect(() => ChavePixUtils.createChavePix("qwert1369").type).toThrow("Chave pix is invalid")
   })
})
