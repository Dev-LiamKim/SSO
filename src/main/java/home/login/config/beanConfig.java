package home.login.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.apache.commons.dbcp2.BasicDataSource;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.apache.ibatis.session.SqlSessionFactory;

import home.login.config.bean.DBCP2;
import home.login.app.login.dao.userDao;


@Configuration
@ComponentScan
public class beanConfig{

    //mysql datasource
    @Bean(name = "DBCP2")
    @ConfigurationProperties(prefix = "datasource.dbcp2")
    public BasicDataSource getDataSource() {
        return new DBCP2().getDBCP2();
    }

    //mybatis config
    @Bean
    public SqlSessionFactory sqlSessionFactory() throws Exception {
        SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
        factoryBean.setDataSource(getDataSource());
        factoryBean.setMapperLocations(new ClassPathResource("sql/login.xml"));
        return factoryBean.getObject();
    }
        
    @Bean
    public SqlSessionTemplate sqlSession() throws Exception {
        return new SqlSessionTemplate(sqlSessionFactory());
    }


    @Bean(name = "userDao")
    public userDao setUserDao() throws Exception{
        userDao tempDao = new userDao();
        tempDao.setSqlSession(sqlSession());
        return tempDao;
    }
    //dao config
}
