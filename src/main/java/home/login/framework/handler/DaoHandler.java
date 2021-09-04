package home.login.framework.handler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import home.login.app.login.dao.LoginDao;

public class DaoHandler {

    private LoginDao dao;

    public DaoHandler(LoginDao dao){
        this.dao = dao;
    }

    

}
