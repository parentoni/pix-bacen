import { ChavePix } from "./chavePix"
import { ChavePixCNPJ } from "./types/chavePixCNPJ"
import { ChavePixCPF } from "./types/chavePixCPF"
import { ChavePixEVP } from "./types/chavePixEVP"
import { ChavePixEmail } from "./types/chavePixEmail"
import { ChavePixPhone } from "./types/chavePixPhone"

// All possible types. 
export enum CHAVE_PIX_TYPES {
  CPF = "CPF",
  CNPJ = "CNPJ",
  EMAIL = "EMAIL",
  EVP = "EVP",
  PHONE = "PHONE" // DO NOT CHANGE. PHONE MUST BE LAST ONE TO VERIFY. cnpj and telephones contains 14 numbers, verification logic will give false posivites to phones
}

//Define type pix types mapper
export type PIX_TYPES_MAPPER_TYPE = Record<CHAVE_PIX_TYPES, ChavePix>

export const PIX_TYPES_MAPPER = {
    [CHAVE_PIX_TYPES.CPF]: ChavePixCPF,
    [CHAVE_PIX_TYPES.CNPJ]: ChavePixCNPJ,
    [CHAVE_PIX_TYPES.PHONE]: ChavePixPhone,
    [CHAVE_PIX_TYPES.EMAIL]: ChavePixEmail,
    [CHAVE_PIX_TYPES.EVP]: ChavePixEVP
}

/**
 * 
 * @class ChavePixUtils
 * @classdesc Defines a series of utils funtions that help the handling of pix chaves.
 *
 * @author Arthur Parentoni Guimaraes <parentoni.arthur@gmail.com>
 */
export class ChavePixUtils {
 
  /**
   * @param {string} value 
   * @returns {PIX_TYPES} 
   *
   * Create a pix chave without the need to pass a type
   */
  public static createChavePix (value:string): ChavePix {

    let createdChave: ChavePix | null = null
    //Iterate through all possible types
    for (const type of Object.keys(CHAVE_PIX_TYPES)) {
      try {
        // Acess mapper with selected type, and try to create a chave pix
        createdChave = new PIX_TYPES_MAPPER[type as keyof typeof PIX_TYPES_MAPPER]({value: value})
      } catch {
        //Pass to next type
      }
    }

    //No chave pix created
    if (createdChave === null) {
      throw new Error("Chave pix is invalid")
    }

    return createdChave
  }
}
