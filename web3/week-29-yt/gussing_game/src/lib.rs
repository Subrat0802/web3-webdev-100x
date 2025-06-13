#![allow(dead_code, unused_variables)]
pub mod database;

pub mod auth_utils;

pub fn authenticate(cred: auth_utils::models::Credentials) {
    if let database::Status::Connected = database::connect_to_db() {}
}

