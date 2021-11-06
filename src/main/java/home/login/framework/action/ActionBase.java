package home.login.framework.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import home.login.framework.handler.DaoHandler;
import home.login.app.login.dao.userDao;

public class ActionBase {

    private DaoHandler daoHandler;
    
    @Autowired
    @Qualifier("LoginDao")
    public void setDaoHandler(userDao Dao){
        this.daoHandler = new DaoHandler(Dao);
    }
}
