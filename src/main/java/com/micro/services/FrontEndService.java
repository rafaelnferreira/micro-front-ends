package com.micro.services;

import com.micro.models.FrontEndApp;

import javax.inject.Singleton;
import java.util.List;

import static java.util.Arrays.asList;

@Singleton
public class FrontEndService {

    public List<FrontEndApp> findApps() {

        FrontEndApp[] apps = new FrontEndApp[]{
                new FrontEndApp("Check-in app", "/app1", "/apps/app1/app.js", "app-1"),
                new FrontEndApp("TODO list app", "/app2", "/apps/app2/app.js", "app-2"),
        };

        return asList(apps);

    }

}
