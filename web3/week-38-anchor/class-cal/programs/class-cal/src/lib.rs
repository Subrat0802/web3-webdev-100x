use anchor_lang::prelude::*;

declare_id!("9PcxXBTYumvKotoKypf1pKLBmK4Q8ip47C69fRYXzzwW");

#[program]
pub mod class_cal {
    use super::*;

    pub fn init() {

    }

    pub fn add(num: u32) {

    }
    
    pub fn double(){

    }
}

#[account]
struct DataShape {
    pub num: u32
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = signer, space = 8 + 4)]
    pub account: Account<'info, DataShape>,
    pub system_program: Program<'info, System>,
    #[account(mut)]
    pub signer: Signer<'info>
}

