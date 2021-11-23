package home.login.app.login.vo;


public class userVo {

    private String id;
    private String nickName;
    private String passWd;
    private String sex;
    private String email;
    private String birthDay;
    

    public userVo(String id, String nickName, String passWd, String sex, String email, String birthDay){
        setId(id);
        setNickName(nickName);
        setPassWd(passWd);
        setSex(sex);
        setEmail(email);
        setBirthDay(birthDay);

    }

    public void setId(String id) {
        this.id = id;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }
    
    public void setSex(String sex) {
        this.sex = sex;
    }
    
    public void setPassWd(String passWd){
        this.passWd = passWd;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public void setBirthDay(String birthDay) {
        this.birthDay = birthDay;
    }


    

    /*--------------getterSestter---------------*/


    public String getId() {
        return id;
    }

    public String getNickName() {
        return nickName;
    }

    public String getSex(){
        return sex;
    }

    public String getPassWd(){
        return passWd;
    }

    public String getEmail(){
        return email;
    }

    public String getBirthDay() {
        return birthDay;
    }


}
