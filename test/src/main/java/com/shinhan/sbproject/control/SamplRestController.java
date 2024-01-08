package com.shinhan.sbproject.control;

import java.util.ArrayList;
import java.util.List;

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
		String output = "";
		List<testVO> test = new ArrayList<testVO>();
		testepo.findAll().forEach(t->{
			test.add(t);
		});
		output+="<table>";
		output+="<thead>";
		output+="<tr>";
		output+="<th> 번호";
		output+="</th>";
		output+="<th> 내용";
		output+="</th>";
		output+="</tr>";
		output+="</thead>";
		for(testVO t: test) {
			output+="<tr>";
			output+="<td>";
			output+=t.getSeqno();
			output+="</td>";
			output+="<td>";
			output+=t.getContent();
			output+="</td>";
			output+="</tr>";
		}
		output+="</table>";
		log.info(output);
		return output;
	}
	
	
	
}
