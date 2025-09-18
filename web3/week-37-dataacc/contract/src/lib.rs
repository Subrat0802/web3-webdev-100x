//zero
use solana_program::{account_info::{next_account_info, AccountInfo}, 
entrypoint::ProgramResult, entrypoint, program::invoke_signed, pubkey::Pubkey, 
system_instruction::create_account};

entrypoint!(process_instruction);

fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8] 
) -> ProgramResult {
    //create a new pda onchain
    //pda, userAcc, systemProgram
    let iter = &mut accounts.iter();
    let pda = next_account_info(iter)?;
    let user_acc = next_account_info(iter)?;
    let system_program = next_account_info(iter)?;

    let seeds = &[user_acc.key.as_ref(), b"user"];

    let (pda_public_key, bumps) = Pubkey::find_program_address(seeds, program_id);

    let ix= create_account(
        user_acc.key, 
        pda.key, 
        1000000000, 
        8, 
        program_id
    );


    invoke_signed(&ix, accounts, &[&[seeds, &[bumps]]])


}


//first


// use solana_program::{
//     account_info::{next_account_info, AccountInfo},
//     entrypoint,       
//     entrypoint::ProgramResult,
//     program::invoke_signed,
//     pubkey::Pubkey,
//     system_instruction,
//     sysvar::{rent::Rent, Sysvar},
// };


// entrypoint!(process_instruction);

// fn process_instruction(
//     program_id: &Pubkey,
//     accounts: &[AccountInfo],
//     _instruction_data: &[u8],
// ) -> ProgramResult {
//     let account_iter = &mut accounts.iter();

//     // PDA account to create
//     let pda_account = next_account_info(account_iter)?;
//     // User paying for the creation
//     let user_account = next_account_info(account_iter)?;
//     // System program
//     let system_program = next_account_info(account_iter)?;

//     // Derive PDA with bump
//     let (pda, bump) = Pubkey::find_program_address(&[user_account.key.as_ref(), b"user"], program_id);

//     // Ensure the passed PDA matches
//     if pda != *pda_account.key {
//         return Err(solana_program::program_error::ProgramError::InvalidSeeds);
//     }

//     // Calculate required lamports
//     let space: usize = 8; // adjust depending on your struct
//     let rent_lamports = Rent::get()?.minimum_balance(space);

//     // Build create_account instruction
//     let ix = system_instruction::create_account(
//         user_account.key,   // payer (must sign)
//         pda_account.key,    // new account (PDA)
//         rent_lamports,
//         space as u64,
//         program_id,
//     );

//     // Seeds used for signing by PDA
//     let seeds: &[&[u8]] = &[
//         user_account.key.as_ref(),
//         b"user",
//         &[bump],
//     ];

//     // Invoke with signer seeds
//     invoke_signed(
//         &ix,
//         &[user_account.clone(), pda_account.clone(), system_program.clone()],
//         &[seeds],
//     )
// }





// second 

/* 
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    program::invoke_signed,
    pubkey::Pubkey,
    system_instruction,
    sysvar::{rent::Rent, Sysvar},
};

entrypoint!(process_instruction);

fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    let iter = &mut accounts.iter();

    // Accounts
    let pda_account = next_account_info(iter)?;   // PDA to be created
    let user_account = next_account_info(iter)?;  // payer
    let system_program = next_account_info(iter)?; // sys_program

    // Derive PDA with bump
    let (pda_pubkey, bump) =
        Pubkey::find_program_address(&[user_account.key.as_ref(), b"user"], program_id);

    // Safety check
    if *pda_account.key != pda_pubkey {
        return Err(solana_program::program_error::ProgramError::InvalidSeeds);
    }

    // Calculate rent-exempt minimum for space
    let space: usize = 8; // adjust depending on what data you store
    let lamports = Rent::get()?.minimum_balance(space);

    // Create account instruction
    let ix = system_instruction::create_account(
        user_account.key, // payer
        pda_account.key,  // new PDA
        lamports,
        space as u64,
        program_id,
    );

    // PDA seeds (must match find_program_address)
    let signer_seeds: &[&[u8]] = &[
        user_account.key.as_ref(),
        b"user",
        &[bump],
    ];

    // Call CPI with invoke_signed
    invoke_signed(
        &ix,
        &[user_account.clone(), pda_account.clone(), system_program.clone()],
        &[signer_seeds],
    )
}

*/