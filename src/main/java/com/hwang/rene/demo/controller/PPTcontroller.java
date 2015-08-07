package com.hwang.rene.demo.controller;

import com.hwang.rene.demo.model.PPTsearchFormVO;
import com.hwang.rene.demo.model.ValuePair;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

@Controller
@RequestMapping("/ppt")
public class PPTcontroller {
    
    @RequestMapping(value="/searchForm", method=RequestMethod.GET)
    @ResponseBody
    public Object initSearchForm() {
        Map<String, Object> map = new HashMap<String, Object>();
        
        List<ValuePair> projectsList = new ArrayList<ValuePair>();
        projectsList.add(new ValuePair("A", "Project A"));
        projectsList.add(new ValuePair("B", "Project B"));
        projectsList.add(new ValuePair("C", "Project C"));
        projectsList.add(new ValuePair("D", "Project D"));
        
        map.put("projects", projectsList);
        map.put("searchForm", new PPTsearchFormVO());
        
        return map;
    }
}