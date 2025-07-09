use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint::{entrypoint, ProgramResult},
    instruction::{AccountMeta, Instruction},
    program::invoke,
    pubkey::Pubkey,
};

entrypoint!(process_instructions);

pub fn process_instructions(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let mut iter = accounts.iter();
    let data_account = next_account_info(&mut iter)?;
    let double_contract = next_account_info(&mut iter)?;

    let instruction = Instruction {
        program_id: *double_contract.key,
        accounts: vec![
            AccountMeta {
                pubkey: *data_account.key,
                is_signer: true,
                is_writable: true,
            },
        ],
        data: vec![], // Or use `instruction_data.to_vec()` if needed
    };

    invoke(&instruction, &[data_account.clone(), double_contract.clone()])?;

    Ok(())
}
