package home.login.app.login.dao;

import org.apache.ibatis.session.SqlSession;

public class LoginDao{

    private SqlSession sqlSession;

    public void setSqlSession(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public String getUser() {
        
        return sqlSession.selectOne("test.selectBlog");
    }
}