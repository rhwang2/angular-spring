package com.hwang.rene.demo.model;

public class ValuePair {
    private String key = "";
    private String value = "";
    
    public ValuePair() {
        super();
    }
    
    public ValuePair(String key, String value) {
        this.key = key;
        this.value = value;
    }
    
    public void setKey(String key) {
        this.key = key;
    }
    
    public String getKey() {
        return this.key;
    }
    
    public void setValue(String value) {
        this.value = value;
    }
    
    public String getValue() {
        return this.value;
    }
}