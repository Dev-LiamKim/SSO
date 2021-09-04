package home.login.framework.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import home.login.framework.handler.DaoHandler;
import home.login.app.login.dao.LoginDao;

public class ActionBase {

    private DaoHandler daoHandler;
    
    @Autowired
    @Qualifier("LoginDao")
    public void setDaoHandler(LoginDao Dao){
        daoHandler = new DaoHandler(Dao);
    }

    

}
