package com.shinhan.sbproject.control;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shinhan.sbproject.VO.testVO;
import com.shinhan.sbproject.repository.testRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin 
public class SamplRestController {
	@Autowired
	testRepository testepo;
	
	@GetMapping(value =  "/sample1",produces=MediaType.APPLICATION_JSON_VALUE )
	public List<testVO> f1() {
		List<testVO> test = new ArrayList<testVO>();
		testepo.findAll().forEach(t->{
			test.add(t);
		});
		
		return test;
	}
	
	
	
}
