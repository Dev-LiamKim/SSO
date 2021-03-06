package home.login.app.login.dao;

import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import home.login.app.login.vo.userVo;

public class userDao{

    private SqlSession sqlSession;

    public void setSqlSession(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public String getId(String id) {
        return sqlSession.selectOne("login.getIdId", id);
    }

    public Boolean putUser(userVo newUser){
        if(sqlSession.insert("login.regist", newUser)>0)
            return true;
        return false;
    }

    public String getOverlapedComponent(Map<String, String> input) {
        return sqlSession.selectOne("login.getOverlapedComponent", input);
    }
}