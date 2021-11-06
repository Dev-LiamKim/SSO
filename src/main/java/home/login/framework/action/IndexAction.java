package home.login.framework.action;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequestMapping("/index")
public class IndexAction extends ActionBase {

    @GetMapping("/main")
    public String MainPage() {
        return "index/main";
    }

    @GetMapping("/loginForm")
    public String loginPage(){
        return "index/login";
    }

    @GetMapping("/registForm")
    public String registerPage() {
        return "index/regist";
    }
}
