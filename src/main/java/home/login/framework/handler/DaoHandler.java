package home.login.framework.handler;

import java.util.Map;
import java.util.HashMap;
import java.util.Collections;

import home.login.app.login.dao.userDao;
import home.login.app.login.vo.userVo;

public class DaoHandler {

    private userDao dao;

    public DaoHandler(userDao dao){
        this.dao = dao;
    }

    public void putUser(userVo newUser){
        if(isIdOverlaped(newUser.getId())){
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

    public Boolean isInputOverlaped(String inputName, String inputValue){
        if(dao.getOverlapedComponent(Collections.singletonMap(inputName, inputValue)) == null)
            return false;
        return true;
    }
}
