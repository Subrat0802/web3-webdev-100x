use solana_program::{
    account_info::{AccountInfo, next_account_info},
    entrypoint:: ProgramResult, entrypoint,
    pubkey::Pubkey,
    msg
};


entrypoint!(counter_contract);

pub fn counter_program(
    program_id: &Pubkey,
    accounts: &[AccountInfo],  //this account need to owned by program id or contract 
    instruction_data: &[u8]
) -> ProgramResult {
    let acc = next_account_info(&mut accounts.iter())?;
    acc.data += 1;
    Ok(())
}