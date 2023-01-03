package com.neltyler.capstone202223.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service //bean
public class AccountService {

    private final AccountRepository accountRepository;

    @Autowired
    public AccountService(AccountRepository userRepository) {
        this.accountRepository = userRepository;
    }

    public List<Account> getAccounts() {
        return accountRepository.findAll();
    }

    public void registerNewAccount(Account account){
        Optional<Account> accountOptional = accountRepository.findAccountByEmail(account.getEmail());
        if (accountOptional.isPresent()) {
            throw new IllegalStateException("Email has already been taken.");
        }
        accountRepository.save(account);
    }
    public void deleteAccount(Long accountId) {
        boolean checkExists = accountRepository.existsById(accountId);
        if (!checkExists) {
            throw new IllegalStateException("Account does not exist, check ID: " + accountId + ".");
        }
        else {
            accountRepository.deleteById(accountId);
        }
    }
    @Transactional
    public void updateAccount(Long accountId, String password) {
        Account account = accountRepository.findById(accountId).orElseThrow(() ->
                new IllegalStateException("Account does not exist, check ID: " + accountId + "."));

        if (password != null && password.length() > 0) {
            account.setPassword(password);
        }
        else {
            throw new IllegalStateException("Password does not meet the conditions, try again.");
        }
    }

}
