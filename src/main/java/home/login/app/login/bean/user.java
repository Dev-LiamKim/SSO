package home.login.app.login.bean;

import java.time.LocalDateTime;

public class user {

    private int seq;
    private String id;
    private String name;
    private LocalDateTime birthDay;
    private LocalDateTime joinDay;
    private String sex;
    
    public void setSeq(int seq){
        this.seq = seq;
    }

    public void setId(String id){
        this.id = id;
    }

    public void setName(String name){
        this.name = name;
    }

    public void setBirthDay(LocalDateTime birthDay){
        this.birthDay = birthDay;
    }

    public void setJoinDay(LocalDateTime joinDay){
        this.joinDay = joinDay;
    }

    public void setSex(String sex){
        this.sex = sex;
    }

    /*--------------getterSestter---------------*/

    public int getSeq(){
        return seq;
    }

    public String getId(){
        return id;
    }

    public String getName(){
        return name;
    }

    public LocalDateTime getBirthDay(){
        return birthDay;
    }

    public LocalDateTime getJoinDay(){
        return joinDay;
    }

    public String getSex(){
        return sex;
    }



}
