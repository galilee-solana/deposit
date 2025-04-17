import { PublicKey, Connection, SystemProgram } from "@solana/web3.js";
import { AnchorProvider, Program, Wallet } from "@coral-xyz/anchor";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { Depo } from "../../anchor/target/types/depo";
import { v4 as uuidv4 } from "uuid";
import Escrow from "./models/escrow";

// Import the IDL directly with require to avoid TypeScript issues
const idl = require("../../anchor/target/idl/depo.json");

class DepoClient {
  private program: Program<Depo>;
  private wallet: WalletContextState;

  constructor(provider: AnchorProvider, wallet: WalletContextState) {
    this.program = new Program(
      { ...idl, address: idl.address } as any, 
      provider
    );
    this.wallet = wallet;

    console.log("Escrow program ID:", this.program.programId.toBase58())
    console.log("Wallet public key:", this.wallet?.publicKey?.toBase58())
  }

  async createEscrow(name: string, description: string) {
    const uuid = uuidv4().replace(/-/g, '')
    const escrowId = Uint8Array.from(Buffer.from(uuid, 'hex'))

    const [escrowKey, _bump] = PublicKey.findProgramAddressSync(
      [Buffer.from('escrow'), escrowId],
      this.program.programId
    )

    // Escrow Name (100 bytes) - will be truncated if too long
    const nameBuffer = Buffer.alloc(100)
    nameBuffer.write(name)

    // Escrow Description (200 bytes) - will be truncated if too long
    const descriptionBuffer = Buffer.alloc(200)
    descriptionBuffer.write(description)

    try {
      if (this.wallet.publicKey) {
        await this.program.methods.createEscrow(
          Array.from(escrowId),
          nameBuffer,
          descriptionBuffer
        ).accounts({
          escrow: escrowKey,
          signer: this.wallet.publicKey!,
          systemProgram: SystemProgram.programId,
        })
        .rpc()
  
        const escrowAccount = await this.program.account.escrow.fetch(escrowKey);
        const escrow = new Escrow(escrowAccount);
        console.log("Escrow:", escrow);
        return escrow;
      } else {
        throw new Error("Wallet is not available");
      }
    } catch (error) {
      console.error("Error creating escrow:", error);
      throw error;
    }
  }
}

export default DepoClient