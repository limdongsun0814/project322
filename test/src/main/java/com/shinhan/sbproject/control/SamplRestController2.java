package com.shinhan.sbproject.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.shinhan.sbproject.repository.testRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class SamplRestController2 {
	@Autowired
	testRepository testepo;
	
	@GetMapping("/sample2")
	public void sample2(Model model) {
		model.addAttribute("greeting","하이~");
		//return "sample2";
	}
	
	
}
