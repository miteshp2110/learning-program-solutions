package com.cognizant.loan.controller;

import com.cognizant.loan.model.LoanAccount;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/loans")
public class LoanController {
    @GetMapping("/{number}")
    public LoanAccount getLoan(@PathVariable String number) {
        return new LoanAccount("H00987987972342", "car", 400000, 3258, 18);
    }
}
