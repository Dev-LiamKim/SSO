package home.login.framework.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import home.login.app.login.dao.LoginDao;

@Controller
@RequestMapping("/index")
public class IndexAction extends ActionBase {

    @GetMapping("/main")
    public String MainPage(Model model) {
        return "index/main";
    }

    @GetMapping("/loginForm")
    public String loginPage(Model model){
        return "index/login";
    }

    @GetMapping("/registForm")
    public String registerPage(Model model) {
        return "index/regist";
    }
}
