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

    @GetMapping("/login")
    public String loginForm(Model model) {
        return "login";
    }
}
