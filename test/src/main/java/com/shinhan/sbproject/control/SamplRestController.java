package com.shinhan.sbproject.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shinhan.sbproject.VO.testVO;
import com.shinhan.sbproject.repository.testRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class SamplRestController {
	@Autowired
	testRepository testepo;
	
	@GetMapping("/sample1")
	public String f1() {
		return testepo.findAll().toString();
	}
	
	
}
