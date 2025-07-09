use solana_program::{
    account_info::{AccountInfo, next_account_info},
    entrypoint::ProgramResult,
    entrypoint,
    program::invoke_signed,
    pubkey::Pubkey,
    system_instruction::create_account,
};

entrypoint!(process_instruction);

fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    //create a new pda onchain
    //pda userAcc, systemProg

    let iter = &mut accounts.iter();
    let pda = next_account_info(iter)?;
    let user_acc = next_account_info(iter)?;
    let system_program = next_account_info(iter)?;

    let seeds = &[user_acc.key.as_ref(), b"user"];

    let ix = create_account(
         user_acc.key,
         pda.key, 
         1000000000, 
         8, 
         program_id
    );

    invoke_signed(&ix, accounts, &[seeds])?;
    Ok(())
}
