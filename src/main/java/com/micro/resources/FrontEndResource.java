package com.micro.resources;

import com.micro.models.FrontEndApp;
import com.micro.services.FrontEndService;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/api/v1/front-end-apps")
public class FrontEndResource {

    @Inject
    FrontEndService service;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<FrontEndApp> apps() {
        return service.findApps();
    }
}