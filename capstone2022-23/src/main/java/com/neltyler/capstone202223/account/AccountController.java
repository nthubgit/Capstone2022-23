package com.neltyler.capstone202223.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "api/users")
public class AccountController {

    private final AccountService accountService;

    //controller
    @Autowired
    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping
    public List<Account> getAccounts() {
    return accountService.getAccounts();
    }

    @PostMapping
    public void registerNewAccount(@RequestBody Account account) {
        accountService.registerNewAccount(account);
    }
    @DeleteMapping (path = "{accountId}")
    public void deleteAccount(@PathVariable("accountId") Long accountId) {
        accountService.deleteAccount(accountId);
    }
    @PutMapping (path = "{accountId}")
    public void updateAccount(
            @PathVariable("accountId") Long accountId,
            @RequestParam(required = false) String password)
    {
        accountService.updateAccount(accountId, password);
    }


}