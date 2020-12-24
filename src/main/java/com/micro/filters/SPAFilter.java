package com.micro.filters;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebFilter(urlPatterns = "/*")
public class SPAFilter extends HttpFilter {

    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) servletRequest;
        HttpServletResponse httpResponse = (HttpServletResponse) servletResponse;

        chain.doFilter(httpRequest, httpResponse);

        if (httpResponse.getStatus() == HttpServletResponse.SC_NOT_FOUND) {
            httpResponse.setStatus(HttpServletResponse.SC_OK);
            httpRequest.getRequestDispatcher("/").forward(httpRequest, httpResponse);
        }
    }
}
