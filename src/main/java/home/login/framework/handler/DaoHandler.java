package home.login.framework.handler;

import home.login.app.login.dao.userDao;
import java.util.Map;
import java.util.HashMap;

public class DaoHandler {

    private userDao dao;

    public DaoHandler(userDao dao){
        this.dao = dao;
    }

    public void putUser(String id, String nickName, String passWd, String sex, String email, String birthDay){
        Map<String,String> newUser = new HashMap<String, String>();
        newUser.put("id", id);
        newUser.put("nickName", nickName);
        newUser.put("birthDay", birthDay);
        newUser.put("passWd", passWd);
        newUser.put("sex", sex);
        newUser.put("email", email);
        if(isIdOverlaped(id)){
            System.out.println("Same Id already Exist");
            return;
        }

        System.out.println(dao.putUser(newUser));
    }

    public Boolean isIdOverlaped(String id){
        if(dao.getId(id) == null)
            return false;
        return true;
    }

    public Boolean isInputOverlaped(Map<String, String> input){
        if(dao.getOverlapedComponent(input) == null)
            return false;
        return true;
    }
}
