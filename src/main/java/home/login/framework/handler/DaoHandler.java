package home.login.framework.handler;

import home.login.app.login.dao.userDao;

public class DaoHandler {

    private userDao dao;

    public DaoHandler(userDao dao){
        this.dao = dao;
    }

}
