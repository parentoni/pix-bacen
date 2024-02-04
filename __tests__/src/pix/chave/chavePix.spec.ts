import { ChavePix, ChavePixProps} from "../../../../src/pix/chave/chavePix"
describe("General pix valiations", () => {
  test("It should fail with missing data", () => {
    expect(() => ChavePix.validate(undefined as unknown as ChavePixProps)).toThrow("The chave pix cannot be undefined")
    expect(() => ChavePix.validate({value: undefined} as unknown as ChavePixProps)).toThrow("The chave pix cannot be undefined")
  })

  test("It should fail with non-String data", () => {
    expect(() => ChavePix.validate({value: 1} as unknown as ChavePixProps)).toThrow("The chave pix cannot be a non-string")
  })

  test("It should fail with string too large or too short", () => {
    expect(() => ChavePix.validate({value: ""})).toThrow("The chave pix must be between 1 and 77 chars")
    expect(() => ChavePix.validate({value: "eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."})).toThrow("The chave pix must be between 1 and 77 chars")
  })

})

