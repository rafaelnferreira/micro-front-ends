package com.micro.models;

public class FrontEndApp {

    public String name;
    public String path;
    public String bundle;
    public String component;

    public FrontEndApp() {
    }

    public FrontEndApp(String name, String path, String bundle, String component) {
        this.name = name;
        this.path = path;
        this.bundle = bundle;
        this.component = component;
    }
}
