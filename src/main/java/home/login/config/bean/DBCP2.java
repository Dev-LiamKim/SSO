package home.login.config.bean;

import org.apache.commons.dbcp2.BasicDataSource;

public class DBCP2{
    private BasicDataSource dataSource;
    private String driverClassName;
    private String url;
    private String userName;
    private String password;

    public DBCP2() {
        dataSource = new BasicDataSource();
        dataSource.setDriverClassName(driverClassName);
        dataSource.setUrl(url);
        dataSource.setUsername(userName);
        dataSource.setPassword(password);
    }

    public BasicDataSource getDBCP2(){
        return dataSource;
    }

    // public BasicDataSource getDataSource(){
    //     BasicDataSource dataSource = new BasicDataSource();
    //     dataSource.setDriverClassName(driverClassName);
    //     dataSource.setUrl(url);
    //     dataSource.setUsername(userName);
    //     dataSource.setPassword(password);
    //     return dataSource;
    // }
}
