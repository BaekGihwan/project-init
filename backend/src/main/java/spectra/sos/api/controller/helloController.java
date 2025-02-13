package spectra.sos.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class helloController {

    @GetMapping("/api/hello")
    public String hello() {
        return "api 연결 테스트";
    }
}
