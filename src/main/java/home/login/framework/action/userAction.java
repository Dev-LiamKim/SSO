package home.login.framework.action;


import java.util.Map;
import java.util.Collections;
import java.util.HashMap;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/user")
public class userAction extends ActionBase {

    @GetMapping("/login")
    public Map<Integer, Object> test(){
        Map<Integer, Object> members = new HashMap<>();

        for (int i = 1; i <= 20; i++) {
            Map<String, Object> member = new HashMap<>();
            member.put("idx", i);
            member.put("nickname", i + "길동");
            member.put("height", i + 20);
            member.put("weight", i + 30);
            members.put(i, member);
        }

        return members;
    }

    @PostMapping("/regist")
    public Map<String, String> regist(@RequestParam(value = "id")String id
                ,@RequestParam(value = "nickName")String nickName
                ,@RequestParam(value = "passWd")String passWd
                ,@RequestParam(value = "sex")String sex
                ,@RequestParam(value = "email")String email
                ,@RequestParam(value = "birthDay")String birthDay) {
        Map<String, String> map = new HashMap<String, String>();
        daoHandler.putUser(id, nickName, passWd, sex, email, birthDay);
        return map;
    }

    @PostMapping("/idOverlapCheck")
    public String overlapCheck(@RequestParam(value = "id")String id){
        return daoHandler.isIdOverlaped(id).toString();
    }

    @PostMapping("/inputOverlapCheck")
    public String overlapCheck(@RequestParam(value = "inputName") String inputName,
            @RequestParam(value = "inputValue") String inputValue) {
        return  "" + inputName + ":" + daoHandler.isInputOverlaped(inputName, inputValue);
    }
}
