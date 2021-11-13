package home.login.framework.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import home.login.framework.handler.DaoHandler;
import home.login.app.login.dao.userDao;

public class ActionBase {

    protected DaoHandler daoHandler = null;
    
    @Autowired
    @Qualifier("userDao")
    public void setDaoHandler(userDao Dao){
        daoHandler = new DaoHandler(Dao);
    }
    // public boolean putUser(){
        
    // }
}
